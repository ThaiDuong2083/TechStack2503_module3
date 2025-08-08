import { Button, Col, Form, Input, Row, Select } from 'antd';
import { useFormik } from "formik";
import bgSign from "../assets/bg-sign.jpg";
import googleIcon from "../assets/google.png";
import facebookIcon from "../assets/facebook.png";
import { ConfigTheme } from '../theme/ConfigTheme.jsx';
import {WrapperTheme} from './WrapperTheme.jsx'

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            phone: "",
            full_name: "",
            gender: "",
            dob: "",
            username: '',
            password: '',
            confirm_password: '',
        },
        onSubmit: values => {
            console.log(values);
        },
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
                                onFinish={formik.handleSubmit}
                                className={"w-3/4"}
                            >
                                <h4 className={"text-4xl font-semibold mb-5 ml-80"}>Đăng kí</h4>
                                <Form.Item
                                    label="Tên đăng nhập"
                                    name="username"
                                    rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                                >
                                    <Input value={formik.values.username} onChange={formik.handleChange} />
                                </Form.Item>

                                <Form.Item
                                    label="Họ tên"
                                    name="full_name"
                                    rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                                >
                                    <Input value={formik.values.full_name} onChange={formik.handleChange} />
                                </Form.Item>

                                <Form.Item
                                    label="Số điện thoại"
                                    name="phone"
                                    rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                                >
                                    <Input value={formik.values.phone} onChange={formik.handleChange} />
                                </Form.Item>

                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                                >
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Giới tính"
                                    name="gender"
                                    rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
                                >
                                    <Select
                                        name="gender"
                                        value={formik.values.gender}
                                        onChange={(value) => formik.setFieldValue('gender', value)}
                                    >
                                        <Select.Option value="">Chọn giới tính</Select.Option>
                                        <Select.Option value="0">Nam</Select.Option>
                                        <Select.Option value="1">Nữ</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label="Ngày sinh"
                                    name="dob"
                                    rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}
                                >
                                    <Input
                                        type="date"
                                        name="dob"
                                        value={formik.values.dob}
                                        onChange={formik.handleChange}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Mật khẩu"
                                    name="password"
                                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                                >
                                    <Input.Password value={formik.values.password} onChange={formik.handleChange} />
                                </Form.Item>

                                <Form.Item
                                    label="Xác nhận mật khẩu"
                                    name="confirm_password"
                                    rules={[
                                        { required: true, message: 'Vui lòng nhập lại mật khẩu!' },
                                        {
                                            validator: (_, value) => {
                                                if (!value || value === formik.values.password) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject('Mật khẩu không khớp!');
                                            },
                                        },
                                    ]}>
                                    <Input.Password value={formik.values.confirm_password} onChange={formik.handleChange} />
                                </Form.Item>

                                <Form.Item>
                                    <div className={"pl-56 flex flex-row gap-3"}>
                                        <img src={googleIcon} />
                                        <img src={facebookIcon} />
                                    </div>
                                </Form.Item>

                                <Form.Item label={null}>
                                    <Button type="primary" htmlType="submit">
                                        Đăng kí
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </ConfigTheme>
            </WrapperTheme>
        </>
    )
}

export default SignUpForm;