const chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

// const Math = require('../index')
import Math from '../index.js';

let foo = false;

describe('chai.js', () => {
    // beforeEach(() => {
    //     foo = true;
    //     console.log('\t 我是外层beforeEach')
    // })

    it('chai.should(): 1 加 1等于2', () => {
        Math.add(1, 1).should.be.equal(2);
    })

    it('chai.expect: 1 加 1等于2', () => {
        expect(Math.add(1, 1)).to.equal(2);
    })

    // it('beforeEach', () => {
    //     expect(foo).to.be.true;
    // })
    //
    // describe('嵌套describe', () => {
    //
    //     beforeEach(() => {
    //         console.log('\t 我是内层beforeEach');
    //     })
    //
    //     it('嵌套beforeEach', () => {
    //         expect(foo).to.be.true;
    //     })
    //
    // })


    // it.skip('对象不相等', () => {
    //     expect({a: 1}).to.not.equal({a: 1});
    // })
    //
    // it.skip('deep', () => {
    //     expect({a: 1}).to.deep.equal({a: 1});
    // })

    // mocha限制测试用例异步测试
    // it('异步测试', (done) => {
    //     setTimeout(() => {
    //         expect(1 + 1).to.equal(2);
    //         done();
    //     }, 3000)
    // })

    // it('Promise', function() {
    //     // return Promise.resolve('resolve promise');
    //     return Promise.reject('rejected promise');
    // });


})
