import getUserDataById from "./asynchronicity";

describe("Given a getUserId function", ()=>{
  describe("when it receives an username 'marta'", ()=> {
    it("it should return 13", ()=> {
      const username = "Marta";
      const expectedId = 13;

      const promiseId = getUserId(username);

      expect(promiseId).resolves.toBe(expectedId);
    })
  })
})
