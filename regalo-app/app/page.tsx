import Header from '@/components/header';
import { MyServices } from '../pages/myservices';
import { Metadata } from 'next';
import { Contact } from '../pages/contact';
import { About } from '../pages/about';

export const metadata: Metadata = {
  title: 'Regalo Assessoria',
};

export default function Home() {
  return (
    <>
      <Header />
      <MyServices />
      <About />
      <Contact />
    </>
  );
}
