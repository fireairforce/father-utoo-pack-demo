#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3000;
const ROOT_DIR = path.resolve(__dirname, '..');

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
    '.svg': 'image/svg+xml',
};

function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return mimeTypes[ext] || 'application/octet-stream';
}

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    
    let filePath = path.join(ROOT_DIR, req.url === '/' ? 'test/browser-test.html' : req.url);
    
    // 安全检查：防止目录遍历攻击
    const normalizedPath = path.normalize(filePath);
    if (!normalizedPath.startsWith(ROOT_DIR)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Forbidden');
        return;
    }

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
            return;
        }

        const mimeType = getMimeType(filePath);
        
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            res.writeHead(200, { 
                'Content-Type': mimeType,
                // 允许跨域，方便开发测试
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            });
            res.end(data);
        });
    });
});

server.listen(PORT, () => {
    console.log(`🚀 测试服务器启动成功！`);
    console.log(`📋 访问地址: http://localhost:${PORT}`);
    console.log(`📁 根目录: ${ROOT_DIR}`);
    console.log(`📄 测试页面: http://localhost:${PORT}/test/browser-test.html`);
    console.log(`💾 UMD文件: http://localhost:${PORT}/dist/umd/utoo-pack-father.js`);
    console.log('');
    console.log('🔍 测试说明:');
    console.log('  1. 检查UMD文件是否能够正确加载');
    console.log('  2. 验证全局变量是否正确导出');
    console.log('  3. 测试React相关功能是否可用');
    console.log('  4. 查看控制台输出信息');
    console.log('');
    
    // 尝试自动打开浏览器
    const testUrl = `http://localhost:${PORT}/test/browser-test.html`;
    console.log('🌐 尝试自动打开浏览器...');
    
    const openCommand = process.platform === 'win32' ? 'start' : 
                       process.platform === 'darwin' ? 'open' : 'xdg-open';
                       
    exec(`${openCommand} ${testUrl}`, (error) => {
        if (error) {
            console.log('❌ 无法自动打开浏览器，请手动访问上述地址');
        } else {
            console.log('✅ 浏览器已自动打开');
        }
    });
});

// 优雅关闭
process.on('SIGINT', () => {
    console.log('\n👋 服务器正在关闭...');
    server.close(() => {
        console.log('✅ 服务器已关闭');
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    console.log('\n👋 服务器正在关闭...');
    server.close(() => {
        console.log('✅ 服务器已关闭');
        process.exit(0);
    });
}); 