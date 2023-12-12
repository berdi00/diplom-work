import { Input, Spin } from "antd";
import CustomList from "./CustomList";
import { useState } from "react";
import { useAsyncFn } from "../../hooks/useAsync";
import { getStudentFullDataByBarcodeId } from "../../services/requests";
const { Search } = Input;
const StudentsDiplomas = () => {
  const [data, setData] = useState(undefined);
  const {
    error,
    isLoading,
    execute: getStudentData,
  } = useAsyncFn(getStudentFullDataByBarcodeId);
  const onSearch = (value, _e, info) => {
    if (value.length > 5) {
      getStudentData({ id: value }).then((data) => {
        if (data.students.length > 0) {
          setData([data?.students[0]]);
        }
      });
    }
  };

  const onChange = (e) => {
    if (e.target.value.length > 4) {
      console.log("in onchange req");
      getStudentData({ id: e.target.value }).then((data) => {
        if (data.students.length > 0) {
          setData([data?.students[0]]);
        }
      });
    }
  };

  console.log(data);
  return (
    <div>
      <Search
        onChange={onChange}
        placeholder="barcode id"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{ width: 800 }}
      />
      {isLoading ? <Spin /> : <CustomList data={data || []} />}
      {error}
    </div>
  );
};
export default StudentsDiplomas;
