const assert = require('assert');
const Math = require('../index.js');

//测试分组
describe('assert断言', () => {
	//测试用例
	it('1 加 1等于2', () => {
		assert.equal(Math.add(1,1), 2);
	})

    // it('true是一个真值', () => {
    //     assert.ok(true);
    // })
    //
    // it('具有相同可枚举属性，并且值相等的对象相等', () => {
    //     assert.deepEqual({name:'jj'}, {name:'jj'});
    // })
    // it('不具有相同属性的对象相等', () => {
    //     assert.deepEqual({name:'jj'}, {Name:'jj'});
    // })
    //
    // it('null 不是错误', () => {
    //     assert.ifError(null);
    // })
    // it('error 是错误', () => {
    //     assert.ifError('error');
    // })
    // it('new Error', () => {
    //     assert.ifError(new Error('抛出错误'));
    // })

})