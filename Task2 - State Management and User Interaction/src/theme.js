import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#0A0A0A",
        color: "white",
      },
    },
  },
  colors: {
    primary: "#0A0A0A",
    secondary: "#171923",
    heading: "#fff",
    text: "#EDF2F7",
    price: "#F7FAFC",
  },
});

export default theme;
