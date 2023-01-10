/**
 * Method to handle the 
 * @param {string} id 
 * @param {function} setUser 
 * @param {array} userDatas 
 */
const viewComponent = (id, setUser, userDatas) => {
    const user = userDatas?.find((users) => {
        if (users?.id === id) {
            return user;
        }
        return users;
    });
    setUser(user);
}
export {viewComponent};