import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PageTitle from "../components/shared/PageTitle/PageTitle";
import io from "socket.io-client";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const socket = io("http://localhost:5000");

const Home = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    socket.on("connection");

    socket.emit("fetchData", "fetch");

    setInterval(() => {
      socket.emit("fetchData", "fetch");
    }, [10000]);

    socket.on("newData", (data) => {
      setScore(data);
    });
  }, []);

  return (
    <Box>
      <PageTitle title="Dashboard" />

      <Box mt={5}>
        <Grid container>
          <Grid item sm={2}>
            <Card>
              <CardContent>
                <Typography style={{ textAlign: "center" }} variant="h1">
                  {score}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
