import {useFormik} from "formik";
import {Button, Col, DatePicker, Form, Input, Row, TreeSelect} from "antd";
import dayjs from "dayjs";
import {UseUser} from "../hook/UseUser.jsx";

export const Profile = () => {
    const {userData} = UseUser();
    const formValue = userData;
    const formik = useFormik({
        initialValues: formValue,
        enableReinitialize: true,
        onSubmit: (values) => alert(JSON.stringify(values)),
    });
    return (
        <>
            <div>
                <Form
                    component="form"
                    initialValues={{remember: false}}
                    autoComplete="off"
                    onFinish={formik.handleSubmit}
                    layout="vertical"
                    className={"!px-10 !py-5"}
                >
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label="Họ"
                                rules={[{required: true, message: 'Vui lòng nhập họ!'}]}
                            >
                                <Input size={"large"} name="firstName" value={formik.values.firstName} onChange={formik.handleChange}/>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                label="Tên"
                                rules={[{required: true, message: 'Vui lòng nhập tên!'}]}
                            >
                                <Input size={"large"} name="lastName" value={formik.values.lastName} onChange={formik.handleChange}/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label="Số điện thoại"
                                rules={[{required: true, message: 'Vui lòng nhập số điện thoại!'}]}
                            >
                                <Input size={"large"} name="phone" value={formik.values.phone} onChange={formik.handleChange}/>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                label="Giới tính"
                                rules={[{required: true, message: 'Vui lòng chọn giới tính!'}]}
                            >
                                <TreeSelect
                                    showSearch
                                    name="gender"
                                    size={"large"}
                                    style={{width: '100%'}}
                                    value={formik.values.gender}
                                    styles={{
                                        popup: {root: {maxHeight: 400, overflow: 'auto'}},
                                    }}
                                    allowClear
                                    treeDefaultExpandAll
                                    onChange={(value) => formik.setFieldValue('gender', value)}
                                    treeData={[{value: "male", label: "Nam"}, {value: "female", label: "Nữ"}]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label="Email"
                                rules={[{required: true, message: 'Vui lòng nhập email!'}]}
                            >
                                <Input size={"large"} name="email" type={"email"} value={formik.values.email}
                                       onChange={formik.handleChange}/>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                label="Ngày sinh"
                                required
                                validateStatus={formik.errors.birthDate}
                                help={formik.errors.birthDate && formik.touched.birthDate ? formik.errors.birthDate : ''}
                            >
                                <DatePicker
                                    format="DD/MM/YYYY"
                                    size="large"
                                    value={formik.values.birthDate ? dayjs(formik.values.birthDate) : null}
                                    onChange={(value) => formik.setFieldValue('birthDate', value.format("YYYY-MM-DD"))}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}