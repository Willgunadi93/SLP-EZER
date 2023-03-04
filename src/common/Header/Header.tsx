import React from 'react';
import logo from '../../../assets/logo/slpezer-logo-trans.png';

export default function Header() {
  console.log('inside header');
  return (
    <div className="bg-slate-100 flex justify-between px-200 items-center">
      <img
        className="flex-initial mx-20 my-1"
        src={logo.src}
        height={100}
        width={100}></img>
      {/* <div className="flex-initial px-20 py-5">SLP-EZer</div> */}
      <div className="font-bold flex-initial px-20 py-1">About</div>
    </div>
  );
}
