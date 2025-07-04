import { defineConfig } from 'father';
import path from 'path';

export default defineConfig({
    umd: {
        bundler: 'utoo-pack',
        generateUnminified: true,
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
        }
    },
    define: {
        'process.env.FATHER_PUBLISH_VERSION': "0.0.1"
    },
    alias: {
        '@': path.resolve(__dirname, './src'),
        'hello-a': path.resolve(__dirname, './src/a.tsx'),
        'hello-foo': path.resolve(__dirname, './src/foo.ts'),
    },
})