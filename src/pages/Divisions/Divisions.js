import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Grid,
  Button,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "../../components/divisions/styled";
import PageTitle from "../../components/shared/PageTitle/PageTitle";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteDivision, fetchDivisions } from "../../store/actions/siteAction";
import { useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";

const Divisions = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { divisions } = useSelector((state) => state.site);

  useEffect(() => {
    dispatch(fetchDivisions());
  }, [dispatch]);

  const deleteDivisionHandler = (id) => {
    dispatch(deleteDivision(id));
  };

  const editDivisionHandler = (id) => {
    history.push(`/divisions/${id}`);
  };

  return (
    <Box>
      <PageTitle title="Divisions" />

      <Box mt={2} p={2} className={classes.contentBox}>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={10} md={10}>
            <Typography className={classes.portionTitle} variant="h4">
              Division Lists
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => history.push("/divisions/create")}
            >
              Add Division
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
                  <TableCell>Country</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {divisions &&
                  divisions.divisionList &&
                  divisions.divisionList.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.country}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => editDivisionHandler(item.id)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => deleteDivisionHandler(item.id)}
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

export default Divisions;
