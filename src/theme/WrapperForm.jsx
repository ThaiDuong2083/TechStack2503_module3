import { ConfigProvider, Form, theme } from "antd"
import { useTheme } from "../hook/UseTheme"

export const WrapperForm = ({ children, config = {} }) => {
  const { theme: currentTheme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === "dark"
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
      }}
    >
      <Form {...config}>
        {children}
      </Form>
    </ConfigProvider>
  );
};