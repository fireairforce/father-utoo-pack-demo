#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🧪 UMD 产物浏览器测试工具');
console.log('================================');

// 启动测试服务器
const serverScript = path.join(__dirname, 'test', 'start-server.js');
const server = spawn('node', [serverScript], {
    stdio: 'inherit',
    cwd: __dirname
});

server.on('error', (err) => {
    console.error('❌ 启动服务器失败:', err.message);
    process.exit(1);
});

server.on('close', (code) => {
    console.log(`\n📊 测试服务器退出，退出码: ${code}`);
    process.exit(code);
}); 