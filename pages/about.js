import Head from "next/head";
import Link from "next/link";
import { Layout, Menu, PageHeader, Typography } from "antd";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function About() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          display: "flex",
        }}
      >
        <PageHeader
          ghost={false}
          backIcon={false}
          title="Rogersovich"
          style={{ height: "inherit", background: "none", padding: "8px 0" }}
        ></PageHeader>
        <Menu
          style={{
            display: "flex",
            float: "right",
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["about"]}
        >
          <Menu.Item key="home">
            <Title
              level={5}
              style={{
                marginBottom: "0.5em",
                marginTop: "0.5em",
                color: "white",
                fontWeight: "500",
              }}
            >
              Home
            </Title>
          </Menu.Item>
          <Menu.Item key="about">
            <Title
              level={5}
              style={{
                marginBottom: "0.5em",
                marginTop: "0.5em",
                color: "white",
                fontWeight: "500",
              }}
            >
              About
            </Title>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 100 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 480 }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default About;
