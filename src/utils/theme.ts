import { createTheme } from "@mui/material";

export const colors = {
  primary: "#325EFF",
  primarBg: "#DDE4FF",
  success: "#357A00",
  error: "#BA1E45",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    success: {
      main: colors.success,
    },
    error: {
      main: colors.error,
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
  },
});
