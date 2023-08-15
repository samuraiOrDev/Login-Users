import React from "react";
import ReactDOM from "react-dom/client";
import {
  ChakraProvider,
  ColorModeScript,
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react";
import UsersApp from "./UsersApp.tsx";
import { UsersProvider } from "./context/UsersProvider.tsx";
import "./index.css";
import { AuthProvider } from "./context/Auth/AuthProvider.tsx";
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};
const theme = extendTheme({ config });
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <UsersProvider>
        <ChakraProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <UsersApp />
        </ChakraProvider>
      </UsersProvider>
    </AuthProvider>
  </React.StrictMode>
);
