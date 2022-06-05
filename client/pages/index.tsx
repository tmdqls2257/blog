import type { NextPage } from 'next';
import { RecoilRoot } from 'recoil';
import Blog from './blog';

const Home: NextPage = () => {
  return (
    <RecoilRoot>
      <Blog />
    </RecoilRoot>
  );
};

export default Home;
