import { Box, Container } from "@mui/material";
import  Typography  from "@mui/material/Typography";
import React from "react";
import ImageCollage from "./ImageCollage";
import { LoremIpsum } from "react-lorem-ipsum";
import CustomizedAccordions from "../Accordian";
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import BasicModal from "./modals";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
          alt=""
          height={325}
          width={600}
        />
        <ImageCollage />
      </Box>
      <Box >
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>

        <Typography variant="paragraph" component="p" marginTop={3}>
          <LoremIpsum p={2} />
        </Typography>
      </Box>
      <Box marginBottom={5}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={1}>
          Frequently Asked questions
        </Typography>
        <CustomizedAccordions/>
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          
        >
         <BasicModal/>
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
