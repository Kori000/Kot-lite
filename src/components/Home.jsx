import React from 'react';
import useKot from '../context/useKot';
import { ice } from '../assets/image';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
const Home = () => {
  const { t, i18n } = useTranslation();
  const { number, setNumber, goToSecond } = useKot();
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col text-[#fff] text-2xl gap-4 pb-40'>
      <p>Get Start!</p>
    </div>
  );
};

export default Home;
