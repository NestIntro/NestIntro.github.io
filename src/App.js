import { Box, Image, Img, Text } from "@chakra-ui/react";
import background from "./assets/images/background.jpeg";
import title from "./assets/images/title.png";
import subtitle from "./assets/images/subtitle.png";
import bubble from "./assets/images/bubble.png";
import installation from "./assets/images/installation.png";
import basicusage from "./assets/images/basic-usage.png";
import spongebob from "./assets/images/spongebob.png";
import patrick from "./assets/images/patrick.png";
import squidward from "./assets/images/squidward.png";
import plankton from "./assets/images/plankton.png";
import gary from "./assets/images/gary.png";
import krabs from "./assets/images/krabs.png";
import sandy from "./assets/images/sandy.png";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter basename="/SpongeBobMagicConch">
      <Box>
        <Box
          // width="100vw"
          // height="100vh"
          position={"relative"}
          backgroundImage={background}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="start"
        >
          <Image src={title} alt="Spongebob" mb={-80} />
          <Image src={subtitle} alt="MagicConch" w="500px" />
          <Box position="relative">
            <Image src={bubble} alt="Bubble" />
            <Box
              w={"500px"}
              position="absolute"
              top="50%"
              left="52%"
              transform="translate(-50%, -50%)"
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Image src={installation} />
                <Text
                  w={"300px"}
                  lineHeight={"50px"}
                  h={"50px"}
                  textAlign={"center"}
                  bgColor={"black"}
                  color={"#FFFFFF"}
                >
                  $npm i magic-conch-soragodong
                </Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Image src={basicusage} />
                <Text
                  w={"450px"}
                  lineHeight={"50px"}
                  h={"50px"}
                  textAlign={"center"}
                  bgColor={"black"}
                  color={"#FFFFFF"}
                  borderRadius={"3xl"}
                >
                  $node node_modules/magic-conch-soragodong/cli.js{" "}
                </Text>
              </Box>
              <Img
                src={spongebob}
                position="absolute"
                top="25%"
                right="-70%"
                w="250px"
                h="250px"
                transform="rotate(-20deg) scaleX(-1)"
              />
              <Img
                src={krabs}
                position="absolute"
                bottom="80%"
                right="137%"
                w="300px"
                h="300px"
                transform="rotate(10deg)"
              />
              <Img
                src={gary}
                position="absolute"
                // bottom="70%"
                // right="120%"
                top="-176%"
                right="105%"
                w="90px"
                // h="100px"
                transform="rotate(-20deg)"
              />
              <Img
                src={patrick}
                position="absolute"
                top="20%"
                right="120%"
                w="300px"
                h="300px"
                transform="rotate(-20deg)"
              />
              <Img
                src={squidward}
                position="absolute"
                bottom="80%"
                left="150%"
                w="220px"
                // h="250px"
                transform="rotate(10deg)"
              />
              <Img
                src={sandy}
                position="absolute"
                bottom="70%"
                left="80%"
                // w="220px"
                h="300px"
                transform="rotate(-10deg)"
              />

              <Img
                src={plankton}
                position="absolute"
                bottom="220%"
                left="125%"
                w="150px"
                h="150px"
                transform="rotate(-40deg) scaleX(-1)"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
