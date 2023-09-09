import { Header } from '@/components/Header/Header';

import '../styles/home.scss';
import { Experience } from '@/components/Experience/Experience';

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />

      <div className='infos'>
        <h3>Languages</h3>

        <div className='languages-info'>
          <span>EN - Basic</span>

          <span>PT-BR - Native Speaker</span>
        </div>

        <h3>Education</h3>

        <div className='educational-info'>
          <span></span>

          <span>Software Engineer Bacharelors Dregree - Unicesumar EAD</span>

          <span>
            Computer Engineer Bacharelors Dregree - UNIVESP - Universidade
            Virtual do Estado de São Paulo
          </span>
        </div>
      </div>

      <div className='buttons'>
        <div className='social'></div>

        <button>Contact Me</button>
      </div>
    </main>
  );
}
