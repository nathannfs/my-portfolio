import { SectionTitle } from '../sectionTitle/SectionTitle';

import './experience.scss';

export function Experience() {
  return (
    <div className='experience'>
      <SectionTitle text='Experience' />

      <p>
        I am a WEB development student, currently I only have experience from
        personal projects.
      </p>

      <div className='experience-time'></div>
    </div>
  );
}
