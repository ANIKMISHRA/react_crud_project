/**
 * Method to handle the form's input field validations.
 * @param {object} users
 * @returns object
 */
const validation = (users) => {
  const errors = {};
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!users.name) {
    errors.name = "Name is required!";
  }
  if (!users.username) {
    errors.username = "Username is required!";
  }
  if (!users.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(users.email)) {
    errors.email = "This is not a valid email!";
  }
  if (!users.phone) {
    errors.phone = "Phone is required!";
  }
  if (!users.website) {
    errors.website = "Website is required!";
  }
  return errors;
};
export { validation };
