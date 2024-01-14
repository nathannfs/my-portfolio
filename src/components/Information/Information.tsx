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
          degree='Industrial Mechatronics'
          local='Fatec - Sertãozinho'
          level='Technologist Dregree'
          state='COMPLETED'/>
        <Education
          degree='information of Tecnology'
          local='UNIVESP EAD'
          level='Bachelor Dregree'
          state='PURSUING'
        />
      </div>
    </div>
  );
}
