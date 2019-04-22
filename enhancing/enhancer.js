module.exports = {
  succeed,
  fail,
  repair,
  get,
};


//if items durability is 100 return the item else set durability to 100 and then return the item
function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}



describe('repair test', () => {
   // This is a describe block. You can nest them to group your tests 
   it('returns durabilty to 100', () => {
   // Arrange
  const item = {
    durability: 99,
   }
  // Act, Assert
  expect((enhancer.repair(item)).durability).toBe(100); // .toBe() looks for strict equality!
  });
});


function get(item) {
  return { ...item };
}

