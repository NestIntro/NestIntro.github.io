import { Box, Code, Image, Input, Text } from "@chakra-ui/react";
import background from "./assets/images/background.jpeg";
import title from "./assets/images/title.png";
import subtitle from "./assets/images/subtitle.png";
import bubble from "./assets/images/bubble.png";
import installation from "./assets/images/installation.png";
import basicusage from "./assets/images/basic-usage.png";
// import spongebob from "./assets/images/spongebob.png";
// import patrick from "./assets/images/patrick.png";
// import squidward from "./assets/images/squidward.png";
// import plankton from "./assets/images/plankton.png";
// import gary from "./assets/images/gary.png";
// import krabs from "./assets/images/krabs.png";

export default function App() {
  return (
    <Box>
      <Box
        // width="100vw"
        // height="100vh"
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
              >
                $node node_modules/magic-conch-soragodong/cli.js{" "}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
