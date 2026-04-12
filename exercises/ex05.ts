// Create a function that receives an object (create an interface) that represents a room with the properties size, type, viewToSea, hasAC, price.
// The function need to return a message with the configuration of the room that is in the param.
// If the room doesn't provide price, you need to define a default value in the param of the function.

const getRoomConfiguration = () => {
  // Code here
};

//Tests
const room1: Room = {
  size: "Small",
  type: "Economy",
  viewToSea: false,
  hasAC: false,
};
console.log(getRoomConfiguration(room1));

// Expected:
// Room Configuration:
//     - Size: Small
//     - Type: Economy
//     - View to Sea: No
//     - Has AC: No
//     - Price: CAD 100

const room2: Room = {
  size: "Medium",
  type: "Suite",
  viewToSea: true,
  hasAC: true,
  price: 300,
};
console.log(getRoomConfiguration(room2));

//Expected
// Room Configuration:
//     - Size: Medium
//     - Type: Suite
//     - View to Sea: Yes
//     - Has AC: Yes
//     - Price: CAD 300

const room3: Room = {
  size: "Large",
  type: "Deluxe",
  viewToSea: true,
  hasAC: true,
  price: 500,
};
console.log(getRoomConfiguration(room3));

//Expected
// Room Configuration:
//     - Size: Large
//     - Type: Deluxe
//     - View to Sea: Yes
//     - Has AC: Yes
//     - Price: 500

export default getRoomConfiguration;
