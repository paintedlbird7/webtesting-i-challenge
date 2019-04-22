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

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}

