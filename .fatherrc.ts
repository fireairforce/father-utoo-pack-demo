import { defineConfig } from 'father';
import path from 'path';

export default defineConfig({
    umd: {
        bundler: 'utoopack',
        generateUnminified: true,
        extractCSS: false,
        externals: {
            react: {
                root: 'React',
                commonjs: 'react',
                commonjs2: 'react',
            },
            'react-dom': {
                root: 'ReactDOM',
                commonjs: 'react-dom',
                commonjs2: 'react-dom',
            },
            'antd': {
                root: 'antd',
                commonjs: 'antd',
                commonjs2: 'antd',
            }
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