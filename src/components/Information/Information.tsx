import { Education } from '../Education/Education';
import { Languages } from '../Languages/Languages';
import { SectionTitle } from '../sectionTitle/SectionTitle';
import './information.scss';

export function Info() {
  return (
    <div className='infos'>
      <SectionTitle text='Languages' />

      <Languages symbol='🇺🇸' language='EN' level='Basic' />

      <Languages symbol='🇧🇷' language='PT-BR' level='Native Speaker' />

      <div className='infos'>
        <SectionTitle text='Education' />

        <Education
          degree='Software Engineer - Unicesumar EAD'
          state='Bacharelors Dregree - PURSUING'
        />

        <Education
          degree='Computer Engineer - UNIVESP'
          state='Bacharelors Dregree - PURSUING'
        />
      </div>
    </div>
  );
}
