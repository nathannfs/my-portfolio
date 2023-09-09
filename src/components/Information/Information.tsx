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
          degree='Software Engineer'
          local='Unicesumar EAD'
          level='Bachelor Dregree'
          state='PURSUING'
        />
        <Education
          degree='Computer Engineer'
          local='UNIVESP'
          level='Bachelor Dregree'
          state='PURSUING'
        />
      </div>
    </div>
  );
}
