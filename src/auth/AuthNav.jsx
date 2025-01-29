// AuthNav.js
import React from 'react';
import { ButtonSolid } from '../components/common/base/buttons/Button';

export default function AuthNav({ text, buttonText }) {
  const Logo = '/images/Assured-BID-Logo.svg';

  const navStyle = 'flex justify-between';
  const navSpanStyle = 'flex items-center gap-3';

  return (
    <div className='px-[30px] py-[20px] md:px-[50px] lg:px-[70px] border-b'>
      <nav className={navStyle}>
        <img src={Logo} alt="Assured Bid Logo" />
        <span className={navSpanStyle}>
          <p className='text-p-black text-[14px] font-medium'>{text}</p>
          <ButtonSolid title={buttonText} text={buttonText}></ButtonSolid>
        </span>
      </nav>
    </div>
  );
}
