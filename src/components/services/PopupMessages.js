// npm package
import Swal from "sweetalert2";

/**
 * Method to handle Popup messages.
 * @param {string} title 
 */
const PopupMessage = (title) => {
    Swal.fire({
        position: 'top-end',
        title: title,
        timer: 1500,
        confirmButtonColor: '#3085d6'
    })
}
export {PopupMessage};