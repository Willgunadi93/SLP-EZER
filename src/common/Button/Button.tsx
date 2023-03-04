import React from 'react';
import Link from 'next/link';

export default function Button({ label }: { label: string }) {
  return (
    <div className="font-bold bg-slate-100 px-10 py-3 rounded-md">
      <Link href="/">{label}</Link>
    </div>
  );
}
