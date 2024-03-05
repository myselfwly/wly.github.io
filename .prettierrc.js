module.exports = {
	/**制表符宽度 */
	tabWidth: 2,
	/**使用制表符 */
	useTabs: true,
	/**句末分号 */
	semi: true,
	/**使双引号 */
	singleQuote: false,
	/**
	 * 对象属性追加引号
	 * "as-needed"  需要加时加
	 * "consistent" 有则都加，无则都不加
	 * "preserve"   输入有就有无就无
	 * */
	quoteProps: "preserve",
	/**在JSX中使用双引号 */
	jsxSingleQuote: false,
	/**
	 * 在多行逗号分隔的句法结构中，尽可能打印尾部逗号。
	 * "all"    尽可能在后面加逗号（包括函数参数和调用）。
	 * "es5"    在ES5（对象、数组等）中有效的地方加逗号。在TypeScript和Flow中的类型参数中尾随逗号。
	 * "none"   没有尾随逗号。
	 */
	trailingComma: "all",
	/**对象两侧加空格 */
	bracketSpacing: true,
	/**标签闭合符号 ">" 存在 Arrtribute 就换行*/
	bracketSameLine: true,
	/**箭头函数不省略括号 */
	arrowParens: "always",
};
