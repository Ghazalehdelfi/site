import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import colors from "../assets/colors";
import { useState } from "react";

const Navbar = () => {
  const [hasScroll, setHasScroll] = useState(false);
  const location = window.location.pathname;

  const options = [
    { label: "HOME", path: "/" },
    { label: "PROJECTS", path: "/projects" },
    { label: "CV", path: "/cv" },
  ];

  const navigate = useNavigate();

  console.log(window.scrollY);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setHasScroll(true);
    } else {
      setHasScroll(false);
    }
  });

  return (
    <Box
      sx={{
        position: "sticky",
        top: "0",
        display: "flex",
        flexDirection: "row",
        backgroundColor: hasScroll ? colors.lightShade : colors.lightAccent,
        width: "calc(100% - 100px)",
        height: "100px",
        alignItems: "center",
        paddingInline: "50px",
      }}
    >
      <Typography
        sx={{
          color: hasScroll ? colors.darkShade : colors.lightShade,
          letterSpacing: "10px",
          fontWeight: "700",
          fontSize: "24px",
        }}
      >
        GHAZALEH DELFI
      </Typography>
      <Box sx={{ marginLeft: "auto", display: "flex", gap: "15px" }}>
        {options.map((option, index) => {
          const isSelected = location === option.path;
          return (
            <Button
              key={index}
              sx={{
                textDecoration: `${isSelected ? "underline" : "none"}`,
                textAlign: "center",
                letterSpacing: "10px",
                textIndent: "-10px",
                color: hasScroll ? colors.darkShade : colors.lightShade,
                fontWeight: "700",
                "&:hover": {
                  textDecoration: `${isSelected ? "underline" : "none"}`,
                },
              }}
              onClick={() => {
                navigate(option.path);
              }}
            >
              {option.label}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default Navbar;
