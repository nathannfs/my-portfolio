import './education.scss';

interface EducationProps {
  degree: string;
  local: string;
  level: string;
  state: string;
}

export function Education(props: EducationProps) {
  return (
    <div className='educational-info'>
      <span>
        🎓 {props.degree}
        <br />
        <span>
        {props.local}
        </span>
        <br />
        <small>
          {props.level} - {props.state}
        </small>
      </span>
    </div>
  );
}
