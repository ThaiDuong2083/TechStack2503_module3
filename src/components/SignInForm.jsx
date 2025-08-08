import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import PathVariable from "../enum.jsx";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import googleIcon from "../assets/google.png";
import facebookIcon from "../assets/facebook.png";
import bgSign from "../assets/bg-sign.jpg";
import { ConfigTheme } from '../theme/ConfigTheme.jsx';
import { WrapperTheme } from './WrapperTheme.jsx'

const SignInForm = () => {
    const { login } = useContext(AuthContext);
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            remember: false
        },
        onSubmit: async (values) =>  login(values.username, values.password),
    });


    return (
        <>
            <WrapperTheme>
                <ConfigTheme>
                    <Row className={"h-screen"}>
                        <Col span={10} className={"h-full w-full"} style={{ backgroundImage: `url(${bgSign})`, }}>

                        </Col>

                        <Col span={14} className={"!flex justify-center items-center h-full"}>
                            <Form
                                component="form"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: false }}
                                autoComplete="off"
                                className={"w-3/4"}
                                onFinish={formik.handleSubmit}
                            >
                                <h4 className={"text-4xl font-semibold mb-5 ml-80"}>Đăng nhập</h4>
                                <Form.Item
                                    label="Tên đăng nhập"
                                    name="username"
                                    rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                                >
                                    <Input value={formik.values.username} onChange={formik.handleChange} />
                                </Form.Item>

                                <Form.Item
                                    label="Mật khẩu"
                                    name="password"
                                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                                >
                                    <Input.Password value={formik.values.password} onChange={formik.handleChange} />
                                </Form.Item>

                                <Form.Item name="remember" valuePropName="checked" label={null}>
                                    <Checkbox
                                        name="remember"
                                        checked={formik.values.remember}
                                        onChange={formik.handleChange}
                                    >
                                        Remember me
                                    </Checkbox>
                                </Form.Item>

                                <Form.Item label={null}>
                                    <Button type="primary" htmlType="submit">
                                        Đăng nhập
                                    </Button>
                                </Form.Item>
                                <Form.Item>
                                    <div className={"pl-56 flex flex-row gap-3"}>
                                        <img src={googleIcon} />
                                        <img src={facebookIcon} />
                                    </div>
                                </Form.Item>
                                <Form.Item label={null}>
                                    <span>Bạn chưa có tài khoản?</span> <Link to={PathVariable.SIGN_UP}>Đăng kí ngay</Link>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </ConfigTheme>
            </WrapperTheme>
        </>
    )
}

export default SignInForm;