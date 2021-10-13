const createId = (name) => {
  if (name === "Luis") {
    return "I'm sick of you!";
  } else {
    return `${name}123@-@`;
  }
}

const getUserId = (name, callback) => {
  setTimeout (() => {
    const generateUserId = createId(name);
    callback(generateUserId);
  }, 2000);
};

const  gettingUserId = getUserId("Victor", (generateUserId) => {
	console.log(generateUserId);
});

console.log*("HA-HA-HA-HA");

const getUserDataById = () => {};

const getFinesByDNI = () => {};



