const enhancer = require('./enhancer.js');
// test away!


module.exports = {
    success,
    fail,
    repair,
    get,
  };

// describe('enhancer.js', () => {
//     test('run the tests', () => {
//         expect(true).toBe(true)
//     })
// })

// if items durability is 100 return the item 
// else set durability to 100
// and then return the item
  describe('repair test', () => {
    // This is a describe block. You can nest them to group your tests 
    it('returns durabilty to 100', () => {
    // Arrange
   const item = {
     name: 'repair',
     durability: 99,
 
    }
   // Act, Assert
   expect((enhancer.repair(item)).durability).toBe(100); // .toBe() looks for strict equality!
   });
 });


 