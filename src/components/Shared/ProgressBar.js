import { useState } from "react";

const ProgressBar = () => {
  const [price, setPrice] = useState(50); // Default value

  return (
    <div className="relative w-full flex items-center">
      {/* Progress Bar */}
      <div className="relative w-full mx-2">
        <input
          type="range"
          min="10"
          max="100"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-[230px] h-2 mt-3 ml-4 bg-gray-300 rounded-lg appearance-none outline-none"
          style={{
            background: `linear-gradient(to right, #A0A0A0 ${
              ((price - 10) / 90) * 100
            }%, #E0E0E0 ${((price - 10) / 90) * 100}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
