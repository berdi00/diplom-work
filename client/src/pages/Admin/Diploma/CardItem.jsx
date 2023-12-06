import { Carousel, Row, Col, Image, Card, Button, Divider } from "antd";
import { DeleteTwoTone, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAsyncFn } from "../../../hooks/useAsync";
import { deleteDiploma } from "../../../services/requests";
const CardItem = ({
  id,
  name,
  description,
  images,
  deadline,
  setDiplomas,
  diplomas,
}) => {
  const { execute } = useAsyncFn(deleteDiploma);
  const navigate = useNavigate();

  return (
    <>
      <Row justify="end">
        <Button
          icon={<RightOutlined />}
          style={{ marginRight: "5px" }}
          onClick={() => navigate(`/admin/${id}`)}
        />
        <Button
          icon={<DeleteTwoTone twoToneColor="red" />}
          style={{ marginRight: "5px" }}
          onClick={async () => {
            await execute(id).then((data) => {
              if (data === "OK") {
                const diplomasNew = diplomas?.filter((item) => item.id !== id);
                setDiplomas(diplomasNew);
              }
            });
          }}
        />
      </Row>
      <Row>
        <Col span={12}>
          <Carousel autoplay style={{ width: "100%" }}>
            {images?.length > 0 ? (
              images.map((val) => (
                <Image
                  key={val}
                  width="100%"
                  src={import.meta.env.VITE_SERVER_URL.toString() + val}
                />
              ))
            ) : (
              <Image width="100%" src="/cat.jpeg" />
            )}
          </Carousel>
        </Col>
        <Col span={12}>
          <Card
            title={name}
            extra={<p>{deadline}</p>}
            style={{
              height: "100%",
            }}
          >
            <p>{description}</p>
          </Card>
        </Col>
      </Row>
      <div style={{ marginTop: "100px" }}>
        <Divider />
      </div>
    </>
  );
};

export default CardItem;
