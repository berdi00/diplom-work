import { Input, Spin } from "antd";
import CustomList from "./CustomList";
import { useState } from "react";
import { useAsyncFn } from "../../hooks/useAsync";
import { getStudentFullDataByBarcodeId } from "../../services/requests";
const { Search } = Input;
const StudentsDiplomas = () => {
  const [data, setData] = useState([]);
  const {
    error,
    isLoading,
    execute: getStudentData,
  } = useAsyncFn(getStudentFullDataByBarcodeId);
  const onSearch = (value, _e, info) => {
    getStudentData({ id: value }).then((data) => setData([data?.students[0]]));
  };

  console.log(data);
  return (
    <div>
      <Search
        placeholder="barcode id"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{ width: 800 }}
      />
      {isLoading ? <Spin /> : <CustomList data={data} />}
      {error}
    </div>
  );
};
export default StudentsDiplomas;
