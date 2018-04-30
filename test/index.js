let { add } = require('../index.js');
let assert = require('assert');

//测试分组
describe('加法函数测试', () => {
	//测试用例
	it('1 加 1 应等于2', () => {
		assert.equal(add(1,1), 2);
	})
})