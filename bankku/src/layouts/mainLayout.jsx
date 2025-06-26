// src/layouts/MainLayout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

const MainLayout = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/';

  return (
    <div
      className={`flex overflow-y-auto scrollbar-hide ${
        isDashboard ? 'bg-white md:bg-[#F5F7FA]' : 'bg-[#F5F7FA]'
      }`}
    >
      {/* Sidebar untuk md ke atas */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Content utama */}
      <div className="flex-1">
        <Navbar />
        <main className="xl:px-10 xl:py-6 md:px-[25px] md:py-5 xl:ml-[250px] xl:mt-[100px] md:ml-[230px] md:mt-[80px] mt-[139px] px-[25px] py-[22px] min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
