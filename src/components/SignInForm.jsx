import {Button, Checkbox, Form, Input} from 'antd';
import {useFormik} from "formik";
import {Link} from "react-router-dom";
import PathVariable from "../enum.jsx";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.jsx";

const SignInForm = () => {
    const {login} = useContext(AuthContext);
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            remember: false
        },
        onSubmit: async (values) => await login(values.username, values.password),
    });

    return (
        <>
            <div className={"justify-center items-center flex h-96 gap-10"}>
                <Form
                    component="form"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    style={{width: "50%"}}
                    initialValues={{remember: false}}
                    autoComplete="off"
                    onFinish={formik.handleSubmit}
                    className={"bg-gray-200 !py-5 !pr-22"}
                >
                    <h4 className={"text-4xl font-semibold mb-5 ml-80"}>Đăng nhập</h4>
                    <Form.Item
                        label="Tên đăng nhập"
                        name="username"
                        rules={[{required: true, message: 'Vui lòng nhập tên đăng nhập!'}]}
                    >
                        <Input value={formik.values.username} onChange={formik.handleChange}/>
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[{required: true, message: 'Vui lòng nhập mật khẩu!'}]}
                    >
                        <Input.Password value={formik.values.password} onChange={formik.handleChange}/>
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
                    <Form.Item label={null}>
                        <span>Bạn chưa có tài khoản?</span> <Link to={PathVariable.SIGN_UP}>Đăng kí ngay</Link>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default SignInForm;