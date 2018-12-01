let nub1 = 0;
// console.log(nub1 + b);
// export {nub1}
// export {b}
let obj = {
    a: 1,
    b: 2
};
let nub2 = 2;
let nub3 = 3;

export default nub1;
export {obj};
export {nub2,nub3};


/*
    CMD 推崇依赖就近，AMD 推崇依赖前置

    一个文件就是一个模块
    模块作用域: 在这个模块中声明的数据，只能在当前模块使用，如果其他模块想用，就的导出

    ES6的模块化的基本规则或特点， 欢迎补充：

　　　　1：每一个模块只加载一次， 每一个JS只执行一次， 如果下次再去加载同目录下同文件，直接从内存中读取。 一个模块就是一个单例，或者说就是一个对象；

　　　　2：每一个模块内声明的变量都是局部变量， 不会污染全局作用域；

　　　　3：模块内部的变量或者函数可以通过export导出；

　　　　4：一个模块可以导入别的模块

       5: 一个模块只能有一个default 

    import -- > export
        export {}
        export default
    require -->  exports
        exports = {}
        exports.key = val

*/