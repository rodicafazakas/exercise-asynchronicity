const createId = (name) => {
  if (name === "Luis") {
    return "I'm sick of you!";
  } else {
    const id = `${name}123@-@`;
    return id;
  }
}

/*const getUserId = (name, callback) => {
  setTimeout (() => {
    const generateUserId = createId(name);
    callback(generateUserId);
  }, 2000);
};

const gettingUserId = getUserId("Victor", (generateUserId) => {
	console.log(generateUserId);
});*/


// Implementation con promises
const getUserId = (username) => {
  return new Promise ( (resolve, reject) => {
  setTimeout( () => {
    const id = 13;
    if (username === "Luis") {
      reject("I'm sick with you");
    }
    resolve(id);
  }, 2000)
  });
};


getUserId("Victor").then( (id) => {
	document.querySelector(".id").querySelector(".data").innerHTML = id;
})

/*
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
*/





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
  document.querySelector(".dni").querySelector(".data").innerHTML = generateUserDataId.dni;
	console.log(generateUserDataId);
})
console.log("GLU-GLU-GLU");



const getFinesByDNI = () => {};


export default {
	getUserId,
	getUserDataById,
  getFinesByDNI,
}
