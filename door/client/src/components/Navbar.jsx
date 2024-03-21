import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { useStateContext } from '../context';
import { CustomButton } from './';
import { logo, menu, search } from '../assets';
import { navlinks } from '../constants';

// auth0
import { useAuth0 } from "@auth0/auth0-react";




const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  // auth0 function
 
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
  

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] white-glassmorphism3 rounded-[100px]">
        <input type="text" placeholder="Search " className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />
        
        <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] border-[1px] flex justify-center items-center cursor-pointer">
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain"/>
        </div>
      </div>

      <div className="sm:flex hidden flex-row justify-end gap-6 ">
        <CustomButton 
          btnType="button"
          title={address ? 'connected' : 'Connet Wallet'}
          styles={address ? 'bg-[#20c474]  border-[1px]  rounded-[25px] ' : 'bg-[#8c6dfd] border-[1px]  rounded-[25px]'}
          handleClick={() => {
            if(address) navigate('create-campaign')
            else connect()
          }}
        />
       
       
       

        
    {isAuthenticated ? (
      
          <div className="font-epilogue font-semibold text-[16px] leading-[26px] text-white w-[90px] h-[50px] rounded-[25px] bg-[#20c474]  border-[1px]  flex justify-center items-center cursor-pointer">
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>

           {/* users details */}
            <div  className="font-epilogue font-semibold text-[16px] leading-[18px] text-white w-[120px] h-[52px] rounded-[25px] bg-[#20c474]  border-[1px] flex justify-center items-center cursor-pointer p-3">
           <div className="h-35 "> <img src={user.picture} className="rounded-full" alt={user.name }/> </div> 
           <div className='p-1'> <h2 >{user.name}</h2></div>
           {/* <p>{user.email}</p> */}
           </div>
       </button>
          </div>
        ):(
          <div className="font-epilogue font-semibold text-[16px] leading-[26px] text-white w-[120px] h-[52px] rounded-[25px]  bg-[#8c6dfd]  border-[1px]  flex justify-center items-center cursor-pointer p-3">
          <button onClick={() => loginWithRedirect()}>Log In</button>
          </div>
          )
    }
    </div>
      

      {/* Small screen navigation */}
        <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[80px] h-[60px] rounded-[10px]  flex justify-center items-center cursor-pointer">
            <img src={logo} alt="user" className="w-[75px] h-[65px] object-contain" />
          </div>

          <img 
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />

          <div className={`absolute top-[60px] right-0 left-0 white-glassmorphism z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
            <ul className="mb-4">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex p-4 ${isActive === link.name && 'white-glassmorphism4'}`}
                  onClick={() => {
                    setIsActive(link.name);
                    setToggleDrawer(false);
                    navigate(link.link);
                  }}
                >
                  <img 
                    src={link.imgUrl}
                    alt={link.name}
                    className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                  />
                  <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex mx-4">
            <CustomButton 
              btnType="button"
              title={address ? 'Create a Post' : 'Connect Wallet'}
              styles={address ? '  bg-[#20c474]  border-[1px] rounded-[25px] mr-[6px]' : ' flex bg-[#8c6dfd]  border-[1px] rounded-[25px] mr[6px] '}
              handleClick={() => {
                if(address) navigate('create-campaign')
                else connect();
              }}

              
            />

{isAuthenticated ? (
      
      <div className="flex justify-between mr-[6px] font-epilogue font-semibold text-[16px] leading-[26px] text-white w-[90px] h-[50px] rounded-[25px] bg-[#20c474]  border-[1px]  flex justify-center items-center cursor-pointer">
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>

       {/* users details */}
        <div  className="flex justify-between  mr-[6px]  font-epilogue font-semibold text-[16px] leading-[18px] text-white w-[120px] h-[52px] rounded-[25px] bg-[#20c474] border-[1px] flex justify-center items-center cursor-pointer p-3">
       <div className="h-35 "> <img src={user.picture} className="rounded-full" alt={user.name }/> </div>
       <div className='p-1'> <h2 >{user.name}</h2></div>
       {/* <p>{user.email}</p> */}
       </div>
   </button>
      </div>
    ):(
      <div className="flex justify-between  mr-[6px]  font-epilogue font-semibold text-[16px] leading-[26px] text-white w-[120px] h-[52px] rounded-[25px]  bg-[#8c6dfd] border-[1px]  flex justify-center items-center cursor-pointer p-3">
      <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
      )
}


            
            </div>
            </div>

          
        </div>
    </div>
  )
}

export default Navbar