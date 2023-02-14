import { CoursePart } from './App';
import Part from './Part';

interface ContentProps {
  courseparts: Array<CoursePart>;
}

const Content = (props: ContentProps) => {
  return (
    <>
      {props.courseparts.map((part) => (
        <div key={part.name}>
          <Part part={part} />
          <br />
        </div>
      ))}
    </>
  );
};

export default Content;
