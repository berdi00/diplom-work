import StudentCard from "./StudentCard";
import { Row, Col, Button } from "antd";
import { useStudent } from "../../../contexts/StudentContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Student = () => {
  const { students } = useStudent();
  const navigate = useNavigate();
  const [studentlar, setStudentLar] = useState();
  console.log(students, "students");
  useEffect(() => {
    setStudentLar(students?.students);
  }, [students]);
  return (
    <>
      <Row>
        <Button onClick={() => navigate(`/admin/students/new`)}>
          Add new Student
        </Button>
      </Row>
      <Row gutter={20} style={{ marginTop: "1rem" }}>
        {studentlar?.map((item) => (
          <Col key={item.id}>
            <StudentCard
              setStudentLar={setStudentLar}
              studentlar={studentlar}
              image={item.images}
              id={item.id}
              name={item.name}
              role={item.role}
              diplom_id={item.diplom_id}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Student;
