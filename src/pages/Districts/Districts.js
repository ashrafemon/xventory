import {
  Box,
  Button,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStyles } from "../../components/divisions/styled";
import PageTitle from "../../components/shared/PageTitle/PageTitle";
import locationAction from "../../store/actions/location";

const Districts = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { districts } = useSelector((state) => state.site);

  useEffect(() => {
    dispatch(locationAction.fetchDistricts(100));
  }, [dispatch]);

  const deleteDistrictHandler = (id) => {
    dispatch(locationAction.deleteDistrict(id));
  };

  const editDistrictHandler = (id) => {
    history.push(`/districts/${id}`);
  };

  return (
    <Box>
      <PageTitle title="Districts" />

      <Box mt={2} p={2} className={classes.contentBox}>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={10} md={10}>
            <Typography className={classes.portionTitle} variant="h4">
              District Lists
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => history.push("/districts/create")}
            >
              Add District
            </Button>
          </Grid>
        </Grid>

        <Box mt={3}>
          <TableContainer>
            <Table size="small" className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Division</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {districts &&
                  districts.districtList &&
                  districts.districtList.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.division.name}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => editDistrictHandler(item.id)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => deleteDistrictHandler(item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Districts;
