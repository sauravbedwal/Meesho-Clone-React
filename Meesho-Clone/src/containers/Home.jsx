import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Filter from "../components/Filter";
import Catalog from "../components/Catalog";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <Item sx={{ background: "red" }}>
            <Filter />
          </Item>
        </Grid>
        <Grid xs={9}>
          <Item sx={{ background: "white" }}>
            <Catalog />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
