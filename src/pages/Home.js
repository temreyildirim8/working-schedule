import React, { useEffect, useState } from 'react';

import Header from '../components/Header/Header';
import Notice from '../components/Notice/Notice';
import WorkTime from '../components/WorkTime/WorkTime';
import ShiftList from '../components/Shifts/ShiftList';

import cardData from '../store/Data';

const Home = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(cardData);
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardData]);

  return (
    <div className="home-container">
      <Header />
      <Notice />
      <WorkTime />
      <ShiftList data={data} />
    </div>
  )
}

export default Home;
