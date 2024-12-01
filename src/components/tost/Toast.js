// components/Toast.js
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000} // Toast will disappear after 3 seconds
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      className="text-sm"
    />
  );
};

// Utility function to show toast
export const showToast = (type, message) => {
  const toastConfig = {
    success: () =>
      toast.success(message, { className: "bg-green-500 text-white" }),
    error: () => toast.error(message, { className: "bg-red-500 text-white" }),
    info: () => toast.info(message, { className: "bg-blue-500 text-white" }),
    warning: () =>
      toast.warn(message, { className: "bg-yellow-500 text-black" }),
  };

  toastConfig[type]?.();
};

export default Toast;
