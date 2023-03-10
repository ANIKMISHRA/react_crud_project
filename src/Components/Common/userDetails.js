/**
 * Method to handle the common ability where we need to get specific user details.
 * @param {string} id
 * @param {function} setUser
 * @param {array} userDatas
 */
const userDetails = (id, setUser, userDatas ) => {
  const user = userDatas?.find((users) => {
    if (users?.id === id) {
      return user;
    }
    return users;
  });
  setUser(user);
};
export { userDetails };
