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
  return { ...item };
}
expect((repair(item)).durability).toBe(100);



function get(item) {
  return { ...item };
}

