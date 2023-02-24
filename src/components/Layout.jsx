import { Box } from "@mui/material";
import Navbar from "./Navbar";
import colors from "../assets/colors";

const Layout = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: colors.lightAccent,
        width: "100vw",
        maxWidth: "calc(100vw - 10px)",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Box
        sx={{
          height: "100%",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default Layout;
