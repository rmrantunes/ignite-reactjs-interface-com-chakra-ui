import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: "#FFBA08",
    black: "#000000",
    textDark: "#47585B",
    infoDark: "#999999",
    white: "#FFFFFF",
    textLight: "#F5F8FA",
    infoLight: "#DADADA",
  },

  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },

  styles: {
    global: {
      body: {
        bgColor: "textLight",
      },
    },
  },
});
