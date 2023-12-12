import { Carousel, List, Image } from "antd";

const CustomList = ({ data }) => {
  console.log(data, "data");
  return (
    <>
      {data ? (
        <>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                key={item?.name}
                extra={
                  <Carousel style={{ width: "400px" }}>
                    {item?.diplom_images?.map((item) => (
                      <Image
                        key={item}
                        width="100%"
                        src={import.meta.env.VITE_SERVER_URL.toString() + item}
                      />
                    ))}
                  </Carousel>
                }
              >
                <List.Item.Meta
                  avatar={
                    <div style={{ width: "200px", height: "200px" }}>
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        alt="logo"
                        src={
                          import.meta.env.VITE_SERVER_URL.toString() +
                          item?.images[0]
                        }
                      />
                    </div>
                  }
                  title={<span>{item?.name}</span>}
                  description={
                    <div>
                      <span>
                        <strong>Diplom: </strong>
                        {item?.diplom_name}
                      </span>
                      <div>
                        <strong>Role: </strong>
                        {item?.role}
                      </div>
                    </div>
                  }
                />
                <div style={{ height: "400px" }}>{item.description}</div>
              </List.Item>
            )}
          />
          <object
            className="pdf-container"
            data={`${import.meta.env.VITE_SERVER_URL}${data[0]?.file_path}`}
          ></object>
        </>
      ) : (
        <h1>No Student</h1>
      )}
    </>
  );
};

export default CustomList;
