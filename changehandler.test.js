let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {
  // Set up a test below...
test('amountDue', function(){
  let cream = new ChangeHandler(94)
  expect(cream.amountDue ).toEqual(94)
})
test ('cashtendered', function(){
  let moolah = new ChangeHandler(7)
  expect(moolah.cashTendered ).toEqual(0)
})
//Insert Penny
test ('insertcoin', function(){
  let nola = new ChangeHandler(100)
  nola.insertCoin('penny')
  nola.insertCoin('penny')
  expect(nola.cashTendered).toEqual(2)
})
//Insert Quarter
test ('get quarters', function(){
  let nola = new ChangeHandler(10)
  nola.insertCoin('quarter')
  expect(nola.cashTendered).toEqual(25)
})
//Insert Nickel
test ('get nickels', function(){
  let nola = new ChangeHandler(10)
  nola.insertCoin('nickel')
  expect(nola.cashTendered).toEqual(5)
})
//Insert Dimes
test ('get dime', function(){
  let nola = new ChangeHandler(10)
  nola.insertCoin('dime')
  expect(nola.cashTendered).toEqual(10)
})
test('If Cash Tendered is more', function(){
//Arrange (setup)
let handler = new ChangeHandler(15)
//Act
handler.insertCoin('quarter')
//Assert
expect(handler.isPaymentSufficient()).toEqual(true)
})
test('If Cash Tendered is less', function(){
  //Arrange (setup)
  let handler = new ChangeHandler(15)
  //Act
  handler.insertCoin('dime')
  //Assert
  expect(handler.isPaymentSufficient()).toEqual(false)
  })
test('If change given is 32', function(){
    //Arrange (setup)
    let handler = new ChangeHandler(0)
    //Act -set it up so the method can work
    handler.cashTendered = 32
    //Assert
    expect(handler.giveChange()).toEqual({
        'quarters': 1,
        'dimes': 0,
        'nickels': 1,
        'pennies': 2
        })
    })
});