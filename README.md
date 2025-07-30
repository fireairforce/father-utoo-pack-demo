## father-utoo-pack-demo

### Usage

```bash
pnpm i
pnpm run build
```

### Test

Run:

```bash
node test-umd.js
```

### Debug Local

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
pub async fn get_utoopack_path(project_path: FileSystemPath) -> Result<Vc<FileSystemPath>> {
    let result = resolve(
        project_path.clone(),
        ReferenceType::CommonJs(CommonJsReferenceSubType::Undefined),
        Request::parse(Pattern::Constant(rcstr!("@utoo/pack/package.json"))),
        node_cjs_resolve_options(project_path.root().owned().await?),
    );
    let first_source = result.first_source().await?;
    if let Some(source) = &*first_source {
        return Ok(source.ident().path().await?.parent().cell());
    }

    // For Debug
    let real_fs = project_path.fs();
    let local_utoo_pack_path = real_fs
        .root()
        .await?
        .clone()
        .join("/Users/zoomdong/mako/packages/pack")
        .map_err(|_| anyhow::anyhow!("Failed to join path"))?;

    Ok(local_utoo_pack_path.cell())
}

#[turbo_tasks::function]
pub async fn get_utoopack_dependency_package(
    project_path: FileSystemPath,
    dependency: RcStr,
) -> Result<Vc<RcStr>> {
    let user_local_path = format!("/Users/zoomdong/mako/node_modules/{dependency}").into();
    Ok(Vc::cell(user_local_path))
}
```

### Package Manager

If you use pnpm as package manager, you need to set `.npmrc` to hoist `@utoo/pack`(which will help `@utoo/pack` can resolve it):

```bash
public-hoist-pattern[]=@utoo/pack
```
