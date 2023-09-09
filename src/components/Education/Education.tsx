import './education.scss';

interface EducationProps {
  degree: string;
  state: string;
}

export function Education(props: EducationProps) {
  return (
    <div className='educational-info'>
      <span>
        🎓 {props.degree}
        <br />
        <small>{props.state}</small>
      </span>
    </div>
  );
}
