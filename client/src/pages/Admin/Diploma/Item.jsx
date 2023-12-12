import { Button, Form, Input, Row, DatePicker } from "antd";
import { useParams } from "react-router-dom";
import { useAsyncFn } from "../../../hooks/useAsync";
import { notification } from "antd";
import {
  createDiploma,
  getDiploma,
  updateDiploma,
} from "../../../services/requests";
import { useEffect } from "react";
import dayjs from "dayjs";
// const { Dragger } = Upload;
const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const Item = () => {
  const { diplomId } = useParams();
  const { execute } = useAsyncFn(createDiploma);
  const [form] = Form.useForm();
  const { error, isLoading, execute: getDiplomaFn } = useAsyncFn(getDiploma);
  const { execute: updateDiplomaFn } = useAsyncFn(updateDiploma);

  // --------------- FILE UPLOAD ----------------- //
  const fileChangeHandler = (e) => {
    const data = new FormData();
    for (const file of e.target.files) {
      data.append("images", file);
    }

    fetch(`${import.meta.env.VITE_SERVER_URL}/diplomas/upload/${diplomId}`, {
      method: "POST",
      body: data,
    })
      .then((res) => {
        if (res.ok) {
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

  // ------- DATE CHANGE -----------
  const onChange = (date, dateString) => {
    console.log(dayjs(date).format("DD.MM.YYYY"), dateString);
  };

  useEffect(() => {
    if (diplomId !== "new") {
      getDiplomaFn({ id: diplomId }).then((data) => {
        console.log(data);
        form.setFieldsValue({
          ...data?.diplomas[0],
          deadline:
            data.diplomas[0].deadline !== "Invalid Date"
              ? dayjs(data.diplomas[0].deadline)
              : "",
        });
      });
    }
  }, [diplomId, getDiplomaFn]);
  if (isLoading) {
    <h1>Loading ...</h1>;
  } else if (error) {
    <h1>Error ...</h1>;
  }

  const onFinish = async (values) => {
    if (diplomId === "new") {
      const date = dayjs(values.deadline).format("DD.MM.YYYY");
      await execute({ ...values, deadline: date }).then((data) => {
        if (data === "Created") {
          notification.success({
            message: "201",
            description: "Successfully created",
          });
        }
      });
    } else {
      const date1 = dayjs(values.deadline).format("DD.MM.YYYY");
      await updateDiplomaFn(diplomId, { ...values, deadline: date1 }).then(
        (data) => {
          if (data === "OK") {
            notification.success({
              message: "200",
              description: "Successfully updated",
            });
          }
        }
      );
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
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="deadline">
          <DatePicker onChange={onChange} />
        </Form.Item>

        <label className="uploadImage">
          <input
            accept="image/png, image/jpg, image/gif, image/jpeg"
            style={{ display: "none" }}
            type="file"
            multiple
            onChange={fileChangeHandler}
          />
        </label>

        <Form.Item>
          <Row justify="center">
            <Button size="large" type="primary" htmlType="submit">
              {diplomId === "new" ? "Submit" : "Update"}
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </Row>
  );
};
export default Item;
