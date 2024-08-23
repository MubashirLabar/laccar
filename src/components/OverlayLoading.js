import React from "react";
import SpinLoader from "./SpinLoader";

const OverlayLoading = ({ className }) => {
  return (
    <div className="fixed inset-0 z-[99999999] bg-white/80 flex flex-col items-center justify-center gap-y-4 backdrop-blur-[0px] margins">
      <SpinLoader className={className} />
    </div>
  );
};

export default OverlayLoading;
