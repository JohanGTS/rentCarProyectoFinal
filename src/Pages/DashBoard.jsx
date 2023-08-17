import React, { useState, useEffect } from "react";
import AccordionDash from "../Components/AccordionDash";
import { getAllData, getData } from "../Features/apiCalls";
import LinesChart from "../Components/Charts/LineChart";
import BarsChart from "../Components/Charts/BarsChart";
import PiesChart from "../Components/Charts/PiesChart";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Grid,
  Card,
  CardActions,
  CardContent,
  Stack,
} from "@mui/material";
import CountUp from "react-countup";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

export const DashBoard = () => {
  let [dashboard, setDashboard] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData("dashboard/dashboard");
        setDashboard(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card
                  sx={{
                    minWidth: 49 + "%",
                    height: 150,
                    background:
                      "linear-gradient(158deg, rgba(40,34,70,1) 0%, rgba(30,47,141,1) 100%)",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        marginTop: "10px",
                        marginLeft: "-5px",
                        color: "aliceblue",
                      }}
                    >
                      <DirectionsCarIcon />
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#ffffff" }}
                    >
                      <CountUp
                        delay={0.2}
                        end={dashboard.vehiculo}
                        duration={0.7}
                      />
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1", fontSize: "18px" }}
                    >
                      Vehiculos
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    minWidth: 49 + "%",
                    height: 150,
                    background:
                      "linear-gradient(158deg, rgba(53,138,178,1) 0%, rgba(91,180,96,1) 100%)",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        marginTop: "10px",
                        marginLeft: "-5px",
                        color: "aliceblue",
                      }}
                    >
                      <PersonIcon />
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#ffffff" }}
                    >
                      <CountUp
                        delay={0.2}
                        end={dashboard.usuarios}
                        duration={0.7}
                      />
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1", fontSize: "18px" }}
                    >
                      Usuarios
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card
                  sx={{
                    maxWidth: 415,
                    background:
                      "linear-gradient(158deg, rgba(53,138,178,1) 0%, rgba(91,180,96,1) 100%)",
                  }}
                >
                  <CardContent>
                    <Stack spacing={2} direction="row">
                      <Box
                        sx={{
                          marginTop: "10px",
                          marginLeft: "20px",
                          color: "aliceblue",
                        }}
                      >
                        <StorefrontIcon />
                      </Box>
                      <Box sx={{ padding: "10px, 10px, 10px, 10px" }}>
                        <Typography fontWeight="600" sx={{ color: "#ffffff" }}>
                          <CountUp
                            delay={0.2}
                            end={dashboard.reservas}
                            duration={0.7}
                          />
                        </Typography>
                        <Typography fontSize="14px" sx={{ color: "#ccd1d1" }}>
                          Reservas
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    maxWidth: 415,
                    background:
                      "linear-gradient(158deg, rgba(40,34,70,1) 0%, rgba(30,47,141,1) 100%)",
                  }}
                >
                  <CardContent>
                    <Stack spacing={2} direction="row">
                      <Box
                        sx={{
                          marginTop: "10px",
                          marginLeft: "20px",
                          color: "aliceblue",
                        }}
                      >
                        <StorefrontIcon />
                      </Box>
                      <Box sx={{ padding: "10px, 10px, 10px, 10px" }}>
                        <Typography fontWeight="600" sx={{ color: "#ffffff" }}>
                          $
                          <CountUp
                            delay={0.2}
                            end={dashboard.total}
                            duration={0.7}
                          />
                        </Typography>
                        <Typography fontSize="14px" sx={{ color: "#ccd1d1" }}>
                          Ventas totales
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <Typography fontWeight="600" sx={{ color: "black" }}>
                    {" "}
                    Vehiculos Mas Rentados
                  </Typography>
                  <br />
                  <Box sx={{ width: "850px", height: "400px" }}>
                    <BarsChart />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <AccordionDash />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
