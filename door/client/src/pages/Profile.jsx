import React, { useState } from 'react'



import axios from 'axios';



const Profile = () => {
  

   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      try {
        const response = await axios.post('https://formspree.io/f/mknaanbq', {
          name,
          email,
          message,
        });
  
        if (response.status === 200) {
          setIsSubmitted(true);
        } else {
          setIsSubmitted(false);
        }
      } catch (error) {
        setIsSubmitted(false);
        console.error(error);
      }
  
      setIsSubmitting(false);
    };
  
  
    
  

  return (

    <div className=" white-glassmorphism flex justify-center items-centerflex-col rounded-[10px] sm:p-10 p-4">
     <div className="container ">
      <div className="company-info  text-3xl sm:text-5xl text-white  py-1 ">
      <h1 className="text-3xl sm:text-5xl text-white  py-1 "> Door </h1>
      <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 "> Support</h1>
        
        <br />
        <p>info@Door.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="contact-form  text-white">
        <h2>Contact Us</h2>
        {isSubmitted ? (
          <div className="success-message ">
            Thank you for contacting us!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group text-white">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[2px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
              />
             
            </div>
            <div className="form-group text-white ">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[2px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
              />
            </div>
            <div className="form-group  text-white ">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[2px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>


    </div>
  )
}

export default Profile