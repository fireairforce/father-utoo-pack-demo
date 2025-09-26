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
    "@utoo/pack": "link:../utoo/packages/pack"
  }
},
```

Turbopack resolver now can't resolve dependencies whick link by symlink, update the local resolve function:

```rs
#[turbo_tasks::function]
pub async fn get_utoopack_dependency_package(
    project_path: FileSystemPath,
    dependency: RcStr,
) -> Result<Vc<RcStr>> {
    let user_local_path = format!("/Users/zoomdong/utoo/node_modules/{dependency}").into();
    Ok(Vc::cell(user_local_path))
}
```

### Package Manager

If you use pnpm as package manager, you need to set `.npmrc` to hoist `@utoo/pack`(which will help `@utoo/pack` can resolve it):

```bash
public-hoist-pattern[]=@utoo/pack
```

If your `@utoo/pack` version is after `0.0.1-alpha.52`, you will not need to hoist it.