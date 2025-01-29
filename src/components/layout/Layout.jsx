import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from '../web/Sidebar';
import Header from '../web/Navbar';

export default function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar/>
      <div style={{ flex: 1 }}>
        <Header/>
        <main style={{ padding: '1rem' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
