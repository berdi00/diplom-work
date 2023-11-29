import { Button, Form, Input, Row, DatePicker } from "antd";
import { useParams } from "react-router-dom";
import { useAsyncFn } from "../../../hooks/useAsync";
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

    fetch(`http://localhost:8000/diplomas/upload/${diplomId}`, {
      method: "POST",
      body: data,
    })
      .then(() => {
        console.log("File Sent Successful");
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
          deadline: data.diplomas[0].deadline
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
      await execute({ ...values, deadline: date }).then((data) =>
        console.log(data, "create")
      );
    } else {
      const date1 = dayjs(values.deadline).format("DD.MM.YYYY");
      await updateDiplomaFn(diplomId, { ...values, deadline: date1 }).then(
        (data) => console.log(data, "update")
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
        <Form.Item>
          <input type="file" multiple onChange={fileChangeHandler} />
        </Form.Item>
        <Form.Item>
          <Row justify="center">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </Row>
  );
};
export default Item;
