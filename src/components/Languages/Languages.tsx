import './languages.scss';

interface LanguageProps {
  language: string;
  level: string;
  symbol: string;
}

export function Languages(props: LanguageProps) {
  return (
    <div className='languages-info'>
      <span>
        {props.symbol} {props.language} - {props.level}
      </span>
    </div>
  );
}
