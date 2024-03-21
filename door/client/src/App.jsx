import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, Post, Home, Profile , Payment, Userdata, Transactions} from './pages';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 gradient-bg-payment  min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<Post/>} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/userdata" element={<Userdata />} />
          <Route path="/transactions" element={<Transactions/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App