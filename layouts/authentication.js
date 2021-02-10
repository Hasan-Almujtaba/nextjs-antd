import { Layout } from "antd";

const { Content } = Layout;

export default function Authentication({ children }) {
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
}
