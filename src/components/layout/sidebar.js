import {
  Squares2X2Icon,
  UserGroupIcon,
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  BriefcaseIcon,
  NoSymbolIcon,
} from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  const nav = [
    {
      label: "Home",
      link: "/",
      icon: <Squares2X2Icon className="h-6 w-6" />,
    },
    {
      label: "Properties",
      link: "/properties",
      icon: <BuildingOffice2Icon className="h-6 w-6" />,
    },
    {
      label: "Customers",
      link: "/customers",
      icon: <UserGroupIcon className="h-6 w-6" />,
    },
    {
      label: "Revenues",
      link: "/revenues",
      icon: <ChartBarIcon className="h-6 w-6" />,
    },
    {
      label: "Reservations",
      link: "/reservations",
      icon: <BriefcaseIcon className="h-6 w-6" />,
    },
    {
      label: "Blacklist",
      link: "/blacklist",
      icon: <NoSymbolIcon className="h-6 w-6" />,
    },
    {
      label: "Settings",
      link: "/settings",
      icon: <Cog6ToothIcon className="h-6 w-6" />,
    },
  ];

  return (
    <div className="w-[250px] bg-[#111111] fixed top-0 left-0 bottom-0 flex flex-col">
      <div className="text-[26px] leading-7 text-white py-10 px-5">LocCar</div>
      <div className="flex-1 w-full flex flex-col gap-2">
        {nav.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={`w-full flex items-center gap-3 px-5 py-3 cursor-pointer hover:text-white animation ${
              location?.pathname === item.link
                ? "text-white bold"
                : "text-white/70"
            }`}
          >
            {item.icon}
            <div className="text-base">{item.label}</div>
          </Link>
        ))}
      </div>
      <div className="py-5">
        <div className="w-full flex items-center cursor-pointer text-white/70 hover:text-white gap-3 px-5 py-3">
          <ArrowLeftStartOnRectangleIcon className="h-6 w-6" />
          <div className="text-base">Logout</div>
        </div>
      </div>
    </div>
  );
};
