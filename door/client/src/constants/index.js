import { createCampaign, dashboard, logout, payment, profile, withdraw, } from '../assets';

export const navlinks = [
 
  {
    name: 'Home',
    imgUrl: dashboard,
    link: '/payment',
  },
  {
    name: 'Dashboard',
    imgUrl: createCampaign,
    link: '/',
  },
  {
    name: 'All Post',
    imgUrl: payment,
    link: '/post',
    
  },
  {
    name: 'Transaction',
    imgUrl: withdraw,
    link: '/transactions',
    
    
  },
  {
    name: 'Support',
    imgUrl: profile,
    link: '/profile',
   

  },
  {
    name: 'Your Post',
    imgUrl: logout,
    link: '/userdata',
   
    
  },
];
