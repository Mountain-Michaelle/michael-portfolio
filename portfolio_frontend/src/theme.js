import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "'Space Grotesk', sans-serif",
    },
  },
});

export default theme;
