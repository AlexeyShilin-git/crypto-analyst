import { Layout, Card, Space } from "antd";

const { Sider } = Layout;

export default function AppSider() {
  return (
    <Sider
      width="25%"
      className="text-center bg-slate-900 text-amber-50 leading-30 md:text-xl"
    >
      <Space direction="vertical">
        <Card title="Bitcoin" className="w-[300px]">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    </Sider>
  );
}
