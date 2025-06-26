## father-utoo-pack-demo

When test `utoo-pack` under local, use pnpm link to your local file:

```json
"pnpm": {
  "overrides": {
    "@utoo/pack": "link:../mako/packages/pack"
  }
},
```

Turbopack resolver now can't resolve dependencies whick link by symlink, update the local resolve function:

```rs
#[turbo_tasks::function]
pub async fn get_pack_package(context_directory: Vc<FileSystemPath>) -> Result<Vc<FileSystemPath>> {
    let result = resolve(
        context_directory,
        Value::new(ReferenceType::CommonJs(CommonJsReferenceSubType::Undefined)),
        Request::parse(Value::new(Pattern::Constant(
            "@utoo/pack/package.json".into(),
        ))),
        node_cjs_resolve_options(context_directory.root()),
    );
    let first_source = result.first_source().await?;
    if let Some(source) = &*first_source {
        return Ok(source.ident().path().parent());
    }

    // For Debug
    let real_fs = context_directory.fs();
    let local_utoo_pack_path = real_fs.root().join("/your/own/utoo/pack/path".into());

    return Ok(local_utoo_pack_path);
}
```