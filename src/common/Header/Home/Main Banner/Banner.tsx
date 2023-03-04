import React from 'react';
import Button from '@/common/Button/Button';

export default function Banner() {
  return (
    <div className="flex flex-col items-center">
      <div className="py-10 text-8xl font-bold text-slate-800">SLP EZER</div>
      <div className="text-slate-800">Let us help you write your report</div>
      <div className="py-10 transition ease-in-out duration-300 hover:scale-105 hover:cursor-pointer">
        <Button label="Get Started" />
      </div>
    </div>
  );
}
