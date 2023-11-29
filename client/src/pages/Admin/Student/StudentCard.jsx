import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useAsyncFn } from "../../../hooks/useAsync";
import { deleteStudent } from "../../../services/requests";

const { Meta } = Card;

const StudentCard = ({
  name,
  role,
  diplom_id,
  id,
  image,
  studentlar,
  setStudentLar,
}) => {
  const imgURL = import.meta.env.VITE_SERVER_URL + image;
  console.log(diplom_id);
  const navigate = useNavigate();
  const { execute } = useAsyncFn(deleteStudent);
  return (
    <Card
      key={id}
      hoverable
      actions={[
        <EditOutlined
          key="edit"
          onClick={() => navigate(`/admin/students/${id}`)}
        />,
        <DeleteOutlined
          key="delete"
          onClick={() =>
            execute(id).then((data) => {
              if (data === "OK") {
                const studentlarNew = studentlar?.filter(
                  (item) => item.id !== id
                );
                setStudentLar(studentlarNew);
              }
            })
          }
        />,
      ]}
      style={{ width: 240, marginBottom: "1.5rem" }}
      cover={
        <img
          alt="example"
          style={{ height: "200px", width: "100%" }}
          src={
            image
              ? imgURL
              : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          }
        />
      }
    >
      <Meta title={name} description={role} />
    </Card>
  );
};

export default StudentCard;
