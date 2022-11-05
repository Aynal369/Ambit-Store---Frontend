import { useState } from "react";

const useTools = () => {
  const [isClick, setIsClick] = useState(false);

  const buttonRefresh = () => {
    setIsClick(true);
    setTimeout(function () {
      setIsClick(false);
    }, 5000);
  };

  return {
    isClick,
    setIsClick,
    buttonRefresh,
  };
};

export default useTools;
