import { defineConfig } from 'father';
import path from 'path';

export default defineConfig({
    umd: {
        bundler: 'utoo-pack',
        generateUnminified: true,
    },
    define: {
        'process.env.BIGFISH_LIB_PUBLISH_VERSION': "process.env.BIGFISH_LIB_PUBLISH_VERSION"
    },
    alias: {
        '@': path.resolve(__dirname, './src'),
        'hello-a': path.resolve(__dirname, './src/a.tsx'),
        'hello-foo': path.resolve(__dirname, './src/foo.ts'),
        '@@': '/Users/zoomdong/zuling-test/.dumi/tmp'
    },
})