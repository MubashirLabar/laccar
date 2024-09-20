import { useState, useEffect } from "react";
import {
  ChevronDownIcon,
  UserIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setOpenMenu(false);
    });
  }, []);

  return (
    <div className="w-full bg-[#212121] sticky top-0 right-0 z-[99] flex items-center justify-end border-solid border-b-[1px] border-gray-50/20 py-3 px-8">
      <div className="w-full max-w-fit flex flex-col relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpenMenu(true);
          }}
          className="text-white flex items-center gap-2 relative"
        >
          <div
            className="bgImage !h-10 !w-10 rounded-full"
            style={{ backgroundImage: `url(/images/dp.svg)` }}
          />
          <div className="text-lg font-medium">ewq</div>
          <ChevronDownIcon className="h-4 w-4" />
        </button>
        {openMenu && (
          <div className="bg-[#111111] rounded-[12px] w-full min-w-[180px] flex flex-col gap-2 absolute top-12 right-0 py-3 px-2">
            <Link
              to={"#"}
              className="w-full flex items-center gap-2 text-white/70 py-2 px-3 rounded-md animation hover:bg-gray-100/10"
            >
              <UserIcon className="h-6 w-6" />
              <div className="text-base font-medium">Profile</div>
            </Link>
            <button className="w-full flex items-center gap-2 text-white/70 py-2 px-3 rounded-md animation hover:bg-gray-100/10">
              <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
              <div className="text-base font-medium">Logout</div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
