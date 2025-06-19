import { Link, useLocation } from "react-router-dom";

export default function SidebarItem({ label, icon, href }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link to={href} className="relative block">
      <div className="flex items-center h-[60px] pl-[25px] w-full">
        {isActive && (
          <div className="absolute left-0 top-0 h-full w-[5px] bg-[#2D60FF] rounded-r" />
        )}
        <div className="flex gap-[26px] items-center">
          <div  className={`font-inter text-[16px] transition-colors ${
              isActive ? "text-[#2D60FF]" : "text-[#B1B1B1]"
            }`}>{icon}</div>
          <span
            className={`font-inter text-[16px] transition-colors ${
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
