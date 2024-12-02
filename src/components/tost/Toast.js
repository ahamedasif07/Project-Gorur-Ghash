import React from "react";
import Swal from "sweetalert2";

const Toast = () => {
  const showToast = () => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
  };

  return (
    <div>
      <button
        onClick={showToast}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Show Toast
      </button>
    </div>
  );
};

export default Toast;
