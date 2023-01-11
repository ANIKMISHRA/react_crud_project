// npm package
import Swal from "sweetalert2";

/**
 * Method to handle Popup messages.
 * @param {string} title 
 */
const popupMessages = (title) => {
    Swal.fire({
        position: 'top-right',
        title: title,
        timer: 1500,
        confirmButtonColor: '#3085d6'
    })
}
export {popupMessages};