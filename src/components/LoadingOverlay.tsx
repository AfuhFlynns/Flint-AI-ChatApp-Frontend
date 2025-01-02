import React from "react";
import { CustomLoader2 } from "./CustomLoaders";

const LoadingOverlay: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full h-full gap-2 dark:bg-neutral-dark-grey-dark bg-neutral-light-grey-dark">
      <CustomLoader2 />
      <span className="modal-text">Loading...</span>
    </div>
  );
};

export default LoadingOverlay;