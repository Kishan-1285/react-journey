import { useParams } from "react-router-dom";

function Student() {
  const { guys } = useParams();

  return (
    <>
      <h1>Student Page</h1>
      <h2>Student ID: {guys}</h2>
    </>
  );
}

export default Student;