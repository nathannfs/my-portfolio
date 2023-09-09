import { SectionTitle } from '../sectionTitle/SectionTitle';
import { Skill } from '../Skill/Skill';

import Image from 'next/image';

import './experience.scss';

export function Experience() {
  return (
    <div className='experience'>
      <SectionTitle text='Experience' />

      <p>
        I am a WEB development student, currently I only have experience from
        personal projects.
      </p>

      <div className='experience-time'>
        <Skill image='/react.png' measure={1} years='1 year' />
        <Skill image='/ts.png' measure={61} years='6 mont.' />
        <Skill image='/node.png' measure={1} years='1 year' />
        <Skill image='/js.png' measure={16} years='1 year and half' />
      </div>
    </div>
  );
}
