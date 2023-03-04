// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import Header from '@/common/Header/Header';
import Banner from '@/common/Header/Home/Main Banner/Banner';

export default function Home() {
  const testing = 'asdgn';

  return (
    <>
      <div className="h-screen">
        <Header />
        <Banner />
      </div>
    </>
  );
}
