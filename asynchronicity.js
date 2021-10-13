const createId = (name) => {
  if (name === "Luis") {
    return "I'm sick of you!";
  } else {
    return `${name}123@-@`;
  }
}

/*const getUserId = (name, callback) => {
  setTimeout (() => {
    const generateUserId = createId(name);
    callback(generateUserId);
  }, 2000);
};

const  gettingUserId = getUserId("Victor", (generateUserId) => {
	console.log(generateUserId);
});

console.log*("HA-HA-HA-HA");
*/
// Implementation con promises
const getUserId = (name) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout( () => {
			const generateUserId = createId(name);
			resolve(generateUserId);
		}, 2000)
	})
	return promise;
};

getUserId("Victor").then( (generateUserId) => {
	console.log(generateUserId);
})
console.log("HA-HA-HA-HA");



////////////////////////////////////////

const createDataId = (userId) => {
  if (userId === 100) {
    return "Luis, don't cheat on me!";
  } else {
    const dataId = {
      dni: "Y542834X",
      age: 25,
    };
    return dataId;
  }
};

const getUserDataById = (userId) => {
  const promise = new Promise ((resolve, reject) => {
		setTimeout( () => {
			const generateUserDataId = createDataId(userId);
			resolve(generateUserDataId);
		}, 2000)
	})
	return promise;
};

getUserDataById(200).then( (generateUserDataId) => {
	console.log(generateUserDataId);
})
console.log("GLU-GLU-GLU");

const getFinesByDNI = () => {};



