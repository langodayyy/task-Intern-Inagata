import { Link, useLocation } from "react-router-dom";

export default function SidebarItem({ label, icon, href }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link to={href} className="relative block">
      <div className="flex items-center xl:h-12 md:h-[50px] pl-[25px] w-full">
        {isActive && (
          <div className="absolute left-0 top-0 h-full w-[5px] bg-[#2D60FF] hover:bg-[#2D60FF] rounded-r" />
        )}
        <div className="flex xl:gap-[26px] md:gap-5 items-center">
          <div  className={`  text-[16px] transition-colors  ${
              isActive ? "text-[#2D60FF] " : "text-[#B1B1B1]"
            }`}>{icon}</div>
          <span
            className={` font-medium text-[16px] transition-colors  ${
              isActive ? "text-[#2D60FF]" : "text-[#B1B1B1]"
            }`}
          >
            {label}
          </span>
        </div>
      </div>
    </Link>
  );
}
