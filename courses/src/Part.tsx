import { CoursePart } from './App';
interface TotalProps {
  part: CoursePart;
}

const assertNever = (value: never): never => {
  throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
};

const Part = (props: TotalProps) => {
  switch (props.part.kind) {
    case 'basic':
      return (
        <div>
          <strong>
            {props.part.name} {props.part.exerciseCount}
          </strong>
          <br />
          <i>{props.part.description}</i>
        </div>
      );
    case 'backround':
      return (
        <div>
          <strong>
            {props.part.name} {props.part.exerciseCount}
          </strong>
          <br />
          <i>{props.part.description}</i>
          <br />
          Backround material:{' '}
          <a href={props.part.backroundMaterial}>{props.part.backroundMaterial}</a>
        </div>
      );
    case 'group':
      return (
        <div>
          <strong>
            {props.part.name} {props.part.exerciseCount}
          </strong>
          <br />
          Group projects: {props.part.groupProjectCount}
        </div>
      );
    case 'special':
      return (
        <div>
          <strong>
            {props.part.name} {props.part.exerciseCount}
          </strong>
          <br />
          <i>{props.part.description}</i>
          <br />
          Required skills: {props.part.requirements.join(', ')}
        </div>
      );
    default:
      return assertNever(props.part);
  }
};

export default Part;
