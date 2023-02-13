interface CoursePart {
  name: string;
  exerciseCount: number;
}

interface ContentProps {
  courseparts: Array<CoursePart>;
}

const Content = (props: ContentProps) => {
  return (
    <>
      {props.courseparts.map((course) => (
        <p key={course.name}>
          {course.name} {course.exerciseCount}
        </p>
      ))}
    </>
  );
};

export default Content;
