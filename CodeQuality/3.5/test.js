
//Этот тест плох тем, что внутри одного it заключены 3 теста. если первый и второй провалятся, то все последующие
//за ними тесты даже не запустятся
/*describe("pow", function(){
    let x = 5;

    it(`Возводит число ${x} степень n`, function(){
        let x = 5;

        let res = x;
        assert.equal(pow(x, 1), res);

        res *= x;
        assert.equal(pow(x, 2), res);

        res *= x;
        assert.equal(pow(x, 3), res);
    })
})*/

//Улучшенный вариант

describe("pow", function(){
    let x = 5;

    it(`Возводит число ${x} степень 1`, function(){
        let x = 5;

        let res = x ** 1;
        assert.equal(pow(x, 1), res);
    })

    it(`Возводит число ${x} степень 2`, function(){
        let x = 5;

        let res = x ** 2;
        assert.equal(pow(x, 2), res);
    })

    it(`Возводит число ${x} степень 3`, function(){
        let x = 5;

        let res = x ** 3;
        assert.equal(pow(x, 3), res);
    })

})