const should = require('should');
const Math = require('../index.js');
should.extend('应该', Object.prototype); // should 别名

['是', '个', '并且'].forEach((name) => { // 属性别名
    should.Assertion.addChain(name);
});
// 方法别名
should.Assertion.alias('equal', '等于');
should.Assertion.alias('Number', '数字');

describe('should.js断言库', () => {
    it('1 加 1 应等于2', () => {
        Math.add(1, 1).should.be.equal(2).and.be.a.Number();
    })
    it('1 加 1 等于2', () => {
        Math.add(1, 1).应该.等于(2).并且.是.个.数字();
    })
    // it('[1,2,3] 存在 [3]', () => {
    //     [1,2,3].should.containDeep([3]);
    // })
    // it('equal 全等', () => {
    //     (10).should.equal(10);
    // })
    // it('exist 存在', () => {
    //     should.exist("");
    // })
    // it('ok 真值测试', () => {
    //     (false).should.ok();
    // })
})