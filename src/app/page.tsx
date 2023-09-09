import { Header } from '@/components/Header/Header';
import { Experience } from '@/components/Experience/Experience';
import { Info } from '@/components/Information/Information';

import '../styles/home.scss';
import { EmailIcon } from '@/components/icons/email-icon';
import { SocialBtns } from '@/components/SocialBtns/SocialBtns';

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <Info />

      <div className='buttons'>
        <SocialBtns />

        <a className='btn-primary' href='mailto:nathann.santoss2@gmail.com'>
          Contact Me
          <EmailIcon />
        </a>
      </div>
    </main>
  );
}
