import { SectionTitle } from '../sectionTitle/SectionTitle';
import './information.scss';

export function Info() {
  return (
    <div className='infos'>
      <SectionTitle text='Languages' />

      <div className='languages-info'>
        <span>🇺🇸 EN - Basic</span>

        <span>🇧🇷 PT-BR - Native Speaker</span>
      </div>

      <div className='educational-info'>
        <SectionTitle text='Education' />
        <span></span>

        <span>
          Software Engineer - Unicesumar EAD
          <br />
          <small>Bacharelors Dregree</small>
        </span>
        <br />
        <br />
        <span>
          Computer Engineer - UNIVESP
          <br />
          <small>Bacharelors Dregree</small>
        </span>
      </div>
    </div>
  );
}
