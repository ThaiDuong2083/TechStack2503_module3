import {Button, Form, Input} from 'antd';
import {useForm, Controller} from 'react-hook-form';

const SignUpForm = () => {
    const {
        handleSubmit,
        control,
        watch,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        console.log('Dữ liệu đăng ký:', data);
    };
    const password = watch("password");

    return (
        <>
            <div className={"justify-center items-center flex h-96 gap-10"}>
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    style={{width: "50%"}}
                    initialValues={{remember: true}}
                    autoComplete="off"
                    className={"bg-gray-200 !py-5 !pr-22"}
                    onFinish={handleSubmit(onSubmit)}
                >
                    <h4 className={"text-4xl font-semibold mb-5 ml-80"}>Đăng kí</h4>
                    <Form.Item
                        label="Tên đăng nhập"
                        validateStatus={errors.username ? 'error' : ''}
                        help={errors.username?.message}
                    >
                        <Controller
                            name="username"
                            control={control}
                            rules={{required: 'Vui lòng nhập tên đăng nhập!'}}
                            render={({field}) => <Input {...field} />}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        validateStatus={errors.password ? 'error' : ''}
                        help={errors.password?.message}
                    >
                        <Controller
                            name="password"
                            control={control}
                            rules={{required: 'Vui lòng nhập mật khẩu!'}}
                            render={({field}) => <Input.Password {...field} />}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Nhập lại mật khẩu"
                        validateStatus={errors.confirmPassword ? 'error' : ''}
                        help={errors.confirmPassword?.message}
                    >
                        <Controller
                            name="confirmPassword"
                            control={control}
                            rules={{
                                required: 'Vui lòng nhập lại mật khẩu!',
                                validate: value =>
                                    value === password || 'Mật khẩu không khớp!'
                            }}
                            render={({field}) => <Input.Password {...field} />}
                        />
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Đăng kí
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default SignUpForm;