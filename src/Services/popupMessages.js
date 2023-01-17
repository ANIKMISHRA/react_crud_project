// npm package
import Swal from "sweetalert2";

/**
 * Method to handle Popup messages.
 * @param {string} title
 */
const popupMessages = (title) => {
  Swal.fire({
    title: title,
    timer: 2500,
    confirmButtonColor: "#102770",
  });
};
export { popupMessages };
