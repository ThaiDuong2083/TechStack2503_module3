import { ConfigProvider, Card, theme } from "antd"
import { useTheme } from "../hook/UseTheme"

export const ConfigTheme = ({ children}) => {
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
        {children}
    </ConfigProvider>
  );
};