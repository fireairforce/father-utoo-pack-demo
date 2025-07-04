#!/usr/bin/env node

const path = require('path');
const { performance } = require('perf_hooks');

console.log('🧪 CommonJS 模块验证工具');
console.log('================================');

/**
 * 测试 UMD 模块的 CommonJS 兼容性
 */
async function testCjsModule() {
    const umdPath = path.resolve(__dirname, 'dist/umd/utoo-pack-father.js');
    
    console.log(`📦 测试文件: ${umdPath}`);
    console.log('');

    // 测试 1: 基本模块加载
    console.log('🔍 测试 1: 基本模块加载');
    console.log('------------------------');
    
    try {
        const startTime = performance.now();
        
        // 使用 require 加载 UMD 模块
        const umdModule = require(umdPath);
        
        const loadTime = performance.now() - startTime;
        
        console.log('✅ 模块加载成功');
        console.log(`⏱️  加载时间: ${loadTime.toFixed(2)}ms`);
        console.log('📋 模块类型:', typeof umdModule);
        console.log('');
        
        return umdModule;
    } catch (error) {
        console.error('❌ 模块加载失败:', error.message);
        console.error('📍 错误堆栈:', error.stack);
        process.exit(1);
    }
}

/**
 * 测试模块导出内容
 */
function testModuleExports(umdModule) {
    console.log('🔍 测试 2: 模块导出内容');
    console.log('------------------------');
    
    try {
        // 检查模块是否为对象
        if (typeof umdModule !== 'object' || umdModule === null) {
            console.warn('⚠️  模块不是对象类型，类型为:', typeof umdModule);
            return;
        }
        
        // 列出所有导出的属性
        const exports = Object.keys(umdModule);
        console.log('📤 导出的属性:', exports);
        
        if (exports.length === 0) {
            console.warn('⚠️  模块没有导出任何属性');
            return;
        }
        
        // 检查特定的导出
        const expectedExports = ['a', 'b'];
        
        for (const exportName of expectedExports) {
            if (umdModule.hasOwnProperty(exportName)) {
                console.log(`✅ 找到导出 "${exportName}":`, umdModule[exportName], `(${typeof umdModule[exportName]})`);
            } else {
                console.log(`❌ 缺少预期导出 "${exportName}"`);
            }
        }
        
        // 显示所有属性的详细信息
        console.log('');
        console.log('📋 详细导出信息:');
        for (const key of exports) {
            const value = umdModule[key];
            const type = typeof value;
            console.log(`  ${key}: ${value} (${type})`);
        }
        
        console.log('');
        return true;
    } catch (error) {
        console.error('❌ 测试导出内容失败:', error.message);
        return false;
    }
}

/**
 * 测试模块功能
 */
function testModuleFunctionality(umdModule) {
    console.log('🔍 测试 3: 模块功能测试');
    console.log('------------------------');
    
    try {
        // 测试基本属性访问
        if (umdModule && typeof umdModule === 'object') {
            console.log('✅ 模块对象访问正常');
            
            // 测试属性读取
            const testProps = ['a', 'b'];
            let successCount = 0;
            
            for (const prop of testProps) {
                try {
                    const value = umdModule[prop];
                    console.log(`✅ 属性 "${prop}" 读取成功:`, value);
                    successCount++;
                } catch (error) {
                    console.log(`❌ 属性 "${prop}" 读取失败:`, error.message);
                }
            }
            
            console.log(`📊 成功率: ${successCount}/${testProps.length} (${(successCount/testProps.length*100).toFixed(1)}%)`);
        }
        
        console.log('');
        return true;
    } catch (error) {
        console.error('❌ 功能测试失败:', error.message);
        return false;
    }
}

/**
 * 测试模块缓存
 */
function testModuleCache() {
    console.log('🔍 测试 4: 模块缓存测试');
    console.log('------------------------');
    
    try {
        const umdPath = path.resolve(__dirname, 'dist/umd/utoo-pack-father.js');
        
        // 第一次加载
        const module1 = require(umdPath);
        
        // 第二次加载 (应该从缓存中获取)
        const module2 = require(umdPath);
        
        if (module1 === module2) {
            console.log('✅ 模块缓存工作正常 (两次加载返回同一实例)');
        } else {
            console.log('⚠️  模块缓存异常 (两次加载返回不同实例)');
        }
        
        // 检查缓存中的模块
        const moduleId = require.resolve(umdPath);
        if (require.cache[moduleId]) {
            console.log('✅ 模块已正确缓存');
            console.log('📍 缓存键:', moduleId);
        } else {
            console.log('❌ 模块未找到缓存');
        }
        
        console.log('');
        return true;
    } catch (error) {
        console.error('❌ 缓存测试失败:', error.message);
        return false;
    }
}

/**
 * 性能基准测试
 */
function performanceBenchmark() {
    console.log('🔍 测试 5: 性能基准测试');
    console.log('------------------------');
    
    try {
        const umdPath = path.resolve(__dirname, 'dist/umd/utoo-pack-father.js');
        
        // 清理缓存以进行准确的性能测试
        delete require.cache[require.resolve(umdPath)];
        
        const iterations = 100;
        const times = [];
        
        console.log(`🏃 进行 ${iterations} 次加载测试...`);
        
        for (let i = 0; i < iterations; i++) {
            // 清理缓存
            delete require.cache[require.resolve(umdPath)];
            
            const startTime = performance.now();
            require(umdPath);
            const endTime = performance.now();
            
            times.push(endTime - startTime);
        }
        
        // 计算统计信息
        const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
        const minTime = Math.min(...times);
        const maxTime = Math.max(...times);
        
        console.log('📊 性能统计:');
        console.log(`  平均加载时间: ${avgTime.toFixed(2)}ms`);
        console.log(`  最快加载时间: ${minTime.toFixed(2)}ms`);
        console.log(`  最慢加载时间: ${maxTime.toFixed(2)}ms`);
        
        console.log('');
        return true;
    } catch (error) {
        console.error('❌ 性能测试失败:', error.message);
        return false;
    }
}

/**
 * 主测试函数
 */
async function runTests() {
    console.log('🚀 开始 CommonJS 兼容性测试...\n');
    
    const results = {
        loading: false,
        exports: false,
        functionality: false,
        cache: false,
        performance: false
    };
    
    try {
        // 测试模块加载
        const umdModule = await testCjsModule();
        results.loading = true;
        
        // 测试导出内容
        results.exports = testModuleExports(umdModule);
        
        // 测试模块功能
        results.functionality = testModuleFunctionality(umdModule);
        
        // 测试模块缓存
        results.cache = testModuleCache();
        
        // 性能基准测试
        results.performance = performanceBenchmark();
        
    } catch (error) {
        console.error('❌ 测试过程中出现未捕获的错误:', error.message);
    }
    
    // 输出测试总结
    console.log('📋 测试总结');
    console.log('================================');
    
    const testNames = {
        loading: '模块加载',
        exports: '导出内容',
        functionality: '模块功能',
        cache: '模块缓存',
        performance: '性能基准'
    };
    
    let passedTests = 0;
    const totalTests = Object.keys(results).length;
    
    for (const [test, passed] of Object.entries(results)) {
        const status = passed ? '✅ 通过' : '❌ 失败';
        console.log(`  ${testNames[test]}: ${status}`);
        if (passed) passedTests++;
    }
    
    console.log('');
    console.log(`🎯 总体结果: ${passedTests}/${totalTests} 项测试通过 (${(passedTests/totalTests*100).toFixed(1)}%)`);
    
    if (passedTests === totalTests) {
        console.log('🎉 所有测试通过！UMD 模块的 CommonJS 兼容性良好。');
        process.exit(0);
    } else {
        console.log('⚠️  部分测试失败，请检查 UMD 模块的 CommonJS 兼容性。');
        process.exit(1);
    }
}

// 异常处理
process.on('uncaughtException', (error) => {
    console.error('💥 未捕获的异常:', error.message);
    console.error('📍 错误堆栈:', error.stack);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('💥 未处理的 Promise 拒绝:', reason);
    process.exit(1);
});

// 运行测试
if (require.main === module) {
    runTests();
}

module.exports = { runTests }; 