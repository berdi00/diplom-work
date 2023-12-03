import { Carousel, List } from "antd";
const data = [
  {
    href: "https://ant.design",
    title: `ant design part`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key`,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  },
];

const contentStyle = {
  margin: 0,
  height: "240px",
  color: "#fff",
  lineHeight: "240px",
  textAlign: "center",
  background: "#364d79",
};

// const IconText = ({ icon, text }) => (
//   <Space>
//     {React.createElement(icon)}
//     {text}
//   </Space>
// );
const StudentsDiplomas = () => (
  <List
    itemLayout="vertical"
    size="large"
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        key={item.title}
        extra={
          <Carousel style={{ width: "400px" }}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
          </Carousel>
        }
      >
        <List.Item.Meta
          avatar={
            <div style={{ width: "200px", height: "200px" }}>
              <img
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                alt="logo"
                src="/kowus.jpeg"
              />
            </div>
          }
          title={<a href={item.href}>Kowusow Gurbangeldi</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);
export default StudentsDiplomas;
