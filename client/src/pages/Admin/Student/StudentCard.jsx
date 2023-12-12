import {
  DeleteOutlined,
  EditOutlined,
  FileWordOutlined,
} from "@ant-design/icons";
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
  file_path,
}) => {
  const imgURL = import.meta.env.VITE_SERVER_URL + image;
  console.log(diplom_id);
  const navigate = useNavigate();
  const { execute } = useAsyncFn(deleteStudent);
  console.log(file_path, "file path");
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
      style={{ width: 220, marginBottom: "1.5rem" }}
      cover={
        <div style={{ height: "250px", width: "220px" }}>
          <img
            alt="example"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            src={
              image
                ? imgURL
                : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            }
          />
        </div>
      }
    >
      <Meta
        title={name}
        description={role}
        avatar={
          file_path ? (
            <FileWordOutlined
              style={{ fontSize: "1.2rem" }}
              onClick={() =>
                (window.location.href = `${
                  import.meta.env.VITE_SERVER_URL
                }${file_path}`)
              }
            />
          ) : null
        }
      />
    </Card>
  );
};

export default StudentCard;
