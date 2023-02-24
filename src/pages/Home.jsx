import Typewriter from "typewriter-effect";
import { Typography, Box, Link } from "@mui/material";
import homepageImage from "../assets/homepage-code.png";
import colors from "../assets/colors";

import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "calc(100% - 400px)",
          height: "calc(100vh - 100px)",
          marginInline: "200px",
        }}
      >
        <Typography sx={{ fontFamily: "typewriter", fontSize: "28px" }}>
          <Typewriter
            options={{
              strings: [
                "Hi and welcome to my personal site! <br>" +
                  "My name is Ghazaleh and I am a full-stack software engineer. <br>" +
                  "I'm passionate about problem solving and making cool things.",
                "If you want more info about me you can check my CV " +
                  "or look in the projects section and play around (all the source code is available in my github) <br>" +
                  "If you like what you see, keep in touch! My contact is below.",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 1,
              delay: 20,
            }}
          />
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.mainBrand,
          height: "100vh",
        }}
      >
        <Box sx={{ width: "40%", marginLeft: "200px" }}>
          <Typography
            sx={{
              fontFamily: "typewriter",
              color: colors.lightShade,
              marginBottom: "50px",
            }}
            variant="h3"
          >
            Contact info
          </Typography>
          <Typography
            sx={{
              color: colors.lightShade,
              fontFamily: "typewriter",
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <EmailIcon
              sx={{
                padding: "0",
                position: "inline",
                marginRight: "20px",
                fill: colors.lightShade,
              }}
            />
            <Link
              href="mailto: GhazalehDelfi@gmail.com"
              underline="none"
              sx={{ color: colors.lightShade }}
            >
              GhazalehDelfi@gmail.com
            </Link>
          </Typography>
          <Typography
            sx={{
              color: colors.lightShade,
              fontFamily: "typewriter",
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <GitHubIcon
              sx={{
                padding: "0",
                position: "inline",
                marginRight: "20px",
                fill: colors.lightShade,
              }}
            />
            <Link
              href="https://www.github.com/Ghazalehdelfi"
              underline="none"
              sx={{ color: colors.lightShade }}
            >
              github.com/Ghazalehdelfi
            </Link>
          </Typography>
          <Typography
            sx={{
              color: colors.lightShade,
              fontFamily: "typewriter",
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <LinkedInIcon
              sx={{
                padding: "0",
                position: "inline",
                marginRight: "20px",
                fill: colors.lightShade,
              }}
            />
            <Link
              href="https://www.linkedin.com/in/ghazalehdelfi/"
              underline="none"
              sx={{ color: colors.lightShade }}
            >
              linkedin.com/in/ghazalehdelfi/
            </Link>
          </Typography>
        </Box>
        <img src={homepageImage} />
      </Box>
    </Box>
  );
};

export default Home;
