const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    test('run the tests', () => {
        expect(true).toBe(true)
    })
})

// if items durability is 100 return the item 
// else set durability to 100
// and then return the item
function repair(item) {
    if (item.durability !== 100) {
      return { ...item, durability: 100 };
    } else {
      null;
    }
  }