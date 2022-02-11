import React from "react";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import "../App.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});
const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img className="img" src={tour.image} alt="Cannot find" />
          <Box paddingX={1}>
            {" "}
            <Typography variant="subtitle1" component="h2">
              {tour.name}{" "}
            </Typography>{" "}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Rating
                name="read-only"
                value={4.5}
                readOnly
                precision={0.25}
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.ratiing}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={0.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={1}>
                FROM £ to £{tour.price}
              </Typography>
            </Box>
          </Box>{" "}
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
