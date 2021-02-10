import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Button, Row, Col } from "antd";
import { GitlabFilled } from "@ant-design/icons";
import Authentication from "../layouts/authentication";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <Authentication>
      <Row justify="center" style={{ minHeight: '100vh' }}>
        <Col lg={12}>
          <LoginForm></LoginForm>
        </Col>
      </Row>
    </Authentication>
  );
}
