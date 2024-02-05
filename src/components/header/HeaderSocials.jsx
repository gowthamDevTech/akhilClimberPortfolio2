import React from 'react';
// import { BsLinkedin } from 'react-icons/bs';
// import { FaGithub } from 'react-icons/fa';
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";



const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {/* <a href="https://www.linkedin.com/in/rasif-tagizada/" target="_blank" rel="noreferrer" ><BsLinkedin /></a> */}
      <a href="https://www.instagram.com/akhil_mangu_/" target="_blank" rel="noreferrer" ><AiOutlineInstagram /></a>
      <a href="https://www.facebook.com/akhil.singh.90281943/" target="_blank" rel="noreferrer" ><AiOutlineFacebook /></a>
      <a href="https://www.youtube.com/@mangu8000" target="_blank" rel="noreferrer" ><AiOutlineYoutube /></a>
      {/* <a href="https://github.com/Rasif-Taghizada" target="_blank" rel="noreferrer" ><FaGithub /></a> */}
    </div>
  )
}

export default HeaderSocials