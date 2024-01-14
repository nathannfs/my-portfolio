import { SectionTitle } from '../sectionTitle/SectionTitle';
import { Skill } from '../Skill/Skill';

import Image from 'next/image';

import './experience.scss';

export function Experience() {
  return (
    <div className='experience'>
      <SectionTitle text='Experience' />

      <p>
      Currently I only have experience with personal projects and I would like to expand my knowledge with an opportunity, and consequently help the company in what I am and develop in the area as a developer.
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
