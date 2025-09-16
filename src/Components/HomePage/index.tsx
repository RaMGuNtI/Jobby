import { useNavigate } from 'react-router-dom';
import { HomePageBox } from './styledComp';
import type { ReactNode } from 'react';

const HomePage = ():ReactNode => {
  const navigate = useNavigate();
  return (
    <HomePageBox>
      <h1>Find the Job That Fits Your Life</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        quibusdam cumque possimus, necessitatibus quas quam recusandae provident
        autem hic? Ratione optio
      </p>
      <button onClick={() => navigate('/jobs')}>Find Jobs</button>
    </HomePageBox>
  );
};

export default HomePage;
