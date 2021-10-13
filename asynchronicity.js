const createId = (name) => {
  if (name === "Luis") {
    return "I'm sick of you!";
  } else {
    const id = `${name}123@-@`;
    return id;
  }
}

/*
const getUserId = (name, callback) => {
  setTimeout (() => {
    const generateUserId = createId(name);
    callback(generateUserId);
  }, 2000);
};

const gettingUserId = getUserId("Victor", (generateUserId) => {
	console.log(generateUserId);
});*/



//using promises

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



const getUserDataById = (userId) => {

};





const getFinesByDNI = () => {};



