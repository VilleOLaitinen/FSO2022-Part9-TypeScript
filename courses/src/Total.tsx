interface CoursePart {
  name: string;
  exerciseCount: number;
}
interface TotalProps {
  courseparts: Array<CoursePart>;
}

const Total = (props: TotalProps) => {
  return (
    <p>
      Number of exercises{" "}
      {props.courseparts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  );
};

export default Total;
