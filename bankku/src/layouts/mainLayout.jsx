// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

const MainLayout = () => {
  return (
    <div className="flex bg-[#F5F7FA]">
      <Sidebar />
      <div className="flex-1">
        {/* <Navbar /> */}
        <Navbar></Navbar>
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
