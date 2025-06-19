// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Loans from './pages/loans';
// import Products from './pages/Products';
// import Settings from './pages/Settings';
import MainLayout from './layouts/mainLayout';
import Transactions from './pages/transactions';
import Accounts from './pages/accounts';
import Investments from './pages/investments';
import CreditCard from './pages/creditCards';
import Services from './pages/services';
import MyPrevilege from './pages/myPrevileges';
import Settings from './pages/settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Semua halaman akan menggunakan MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="investments" element={<Investments />} />
          <Route path="creditCards" element={<CreditCard />} />
          <Route path="loans" element={<Loans />} />
          <Route path="services" element={<Services />} />
          <Route path="myPrevileges" element={<MyPrevilege />} />
          <Route path="settings" element={<Settings />} />

          {/* <Route path="settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
