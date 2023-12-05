import CardItem from "./CardItem";
import { useDiploma } from "../../../contexts/DiplomaContext";
import { Button, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const { diplomas } = useDiploma();
  const [diploms, setDiplomas] = useState();

  useEffect(() => {
    setDiplomas(diplomas?.diplomas);
  }, [diplomas]);
  const navigate = useNavigate();
  console.log(diplomas, "diplomas");
  return (
    <div style={{ position: "relative" }}>
      <Row>
        <Button onClick={() => navigate("/admin/new")}>Add Diploma</Button>
      </Row>
      {diploms?.map((val) => (
        <CardItem
          setDiplomas={setDiplomas}
          id={val.id}
          key={val.id}
          name={val.name}
          description={val.description}
          images={val.images}
          deadline={val.deadline}
          diplomas={diploms}
        />
      ))}
    </div>
  );
};

export default Index;
