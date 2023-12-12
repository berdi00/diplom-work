import { useParams } from "react-router-dom";
import { Button, Form, Input, Row, Select, Space, notification } from "antd";
import { useEffect, useState } from "react";
import { useAsyncFn } from "../../../hooks/useAsync";
import {
  createStudent,
  updateStudent,
  getStudent,
} from "../../../services/requests";
import { useDiploma } from "../../../contexts/DiplomaContext";

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
const StudentItem = () => {
  const { studentId } = useParams();
  const { diplomas } = useDiploma();
  const [keyValued, setKeyValued] = useState();
  const [form] = Form.useForm();
  const { execute: getStudentFn } = useAsyncFn(getStudent);
  const { execute } = useAsyncFn(createStudent);
  const { execute: updateStudentFn } = useAsyncFn(updateStudent);

  useEffect(() => {
    if (studentId !== "new") {
      getStudentFn({ id: studentId }).then((data) =>
        form.setFieldsValue({ ...data.students[0] })
      );
    }

    const modified = diplomas.diplomas.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    setKeyValued(modified);
  }, [studentId]);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const fileChangeHandler = (e) => {
    const data = new FormData();
    for (const file of e.target.files) {
      data.append("images", file);
    }

    fetch(`${import.meta.env.VITE_SERVER_URL}/students/upload/${studentId}`, {
      method: "POST",
      body: data,
    })
      .then((res) => {
        if (res.ok) {
          console.log(res, "response image upload");
          notification.success({
            message: "Image Upload",
            description: "Image Successfully Uploaded",
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fileChangeHandler2 = (e) => {
    const data = new FormData();
    for (const file of e.target.files) {
      data.append("file", file);
    }

    fetch(
      `${import.meta.env.VITE_SERVER_URL}/diplomas/files/upload/${studentId}`,
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log(res, "response image upload");
          notification.success({
            message: "File Upload",
            description: "File Successfully Uploaded",
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onFinish = (values) => {
    if (studentId !== "new") {
      updateStudentFn(studentId, values).then((data) => {
        if (data === "OK") {
          notification.success({
            message: "200",
            description: "Successfully updated",
          });
        }
      });
    } else {
      execute(values).then((data) => {
        if (data === "Created") {
          notification.success({
            message: "201",
            description: "Successfully created",
          });
        }
      });
    }
  };

  return (
    <Row justify="center">
      <Form
        {...layout}
        form={form}
        name="nest-messages"
        onFinish={onFinish}
        style={{ width: "600px", marginTop: "1rem" }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="role" label="Role">
          <Input />
        </Form.Item>
        <Form.Item
          name="qr_id"
          rules={[
            {
              required: true,
            },
          ]}
          label="Barcode id"
        >
          <Input />
        </Form.Item>
        <Form.Item name="diplom_id" label="Diplom">
          <Select
            style={{ width: "100%" }}
            onChange={handleChange}
            options={keyValued}
          />
        </Form.Item>
        <Space>
          <label className="uploadImage">
            <input
              accept="image/png, image/jpg, image/gif, image/jpeg"
              style={{ display: "none" }}
              type="file"
              multiple
              onChange={fileChangeHandler}
            />
          </label>
          <label className="uploadFile">
            <input
              accept=".pdf"
              style={{ display: "none" }}
              type="file"
              multiple
              onChange={fileChangeHandler2}
            />
          </label>
        </Space>
        <Form.Item>
          <Row justify="center">
            <Button size="large" type="primary" htmlType="submit">
              {studentId === "new" ? "Submit" : "Update"}
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default StudentItem;
