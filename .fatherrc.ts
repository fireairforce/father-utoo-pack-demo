import { defineConfig } from 'father';
import path from 'path';

export default defineConfig({
    umd: {
        bundler: 'utoopack',
        generateUnminified: true,
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
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