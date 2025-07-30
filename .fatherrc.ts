import { defineConfig } from 'father';
import path from 'path';

export default defineConfig({
    umd: {
        bundler: 'utoopack',
        generateUnminified: true,
        externals: {
            react: {
                root: 'React',
                commonjs: 'react',
            },
            'react-dom': {
                root: 'ReactDOM',
                commonjs: 'react-dom',
            },
        },
        alias: {
            '@': path.resolve(__dirname, './src'),
            'hello-a': path.resolve(__dirname, './src/a.ts'),
        },
    },
    define: {
        'process.env.FATHER_PUBLISH_VERSION': "0.0.1"
    },
})