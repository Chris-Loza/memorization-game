import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notifications = () => {
  return (
    <div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          closeOnClick
          pauseOnFocusLoss={false}
          draggable
          limit={2}
        />
    </div>
  )
}

export default Notifications