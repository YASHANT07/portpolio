import React from 'react';
import ProfilePic from "./Assect/profile.png"

const Profile = () => {
  const myStyle = {
    backgroundImage:
        "url('https://i.pinimg.com/originals/3c/24/46/3c24462450c2a902bf7e18f3d9aada81.jpg')",
    height: "40vh",
    fontSize: "50px",
};
  return (

    <div className='cover-container' id="home" style={myStyle}>
      <img width={"14%"} src={ProfilePic} alt='profile' />
      <p className='font-bold text-slate-300'>Yashant Thakur</p>
    </div>

  );
};

export default Profile;
