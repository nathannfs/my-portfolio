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

      <div>
        <SectionTitle text='Education' />

        <div className='educational-info'>
          <span>🎓</span>
          <span>
            Software Engineer - Unicesumar EAD - Bacharelors Dregree - PURSUING
          </span>

          <br />
          <span>🎓</span>
          <span>
            Computer Engineer - UNIVESP - Bacharelors Dregree - PURSUING
          </span>
        </div>
      </div>
    </div>
  );
}
