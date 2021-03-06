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
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStyles } from "../../components/divisions/styled";
import PageTitle from "../../components/shared/PageTitle/PageTitle";
import locationAction from "../../store/actions/location";

const Divisions = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { divisions } = useSelector((state) => state.site);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    dispatch(locationAction.fetchDivisions(rowsPerPage, page));
  }, [dispatch, rowsPerPage, page]);

  const deleteDivisionHandler = (id) => {
    dispatch(locationAction.deleteDivision(id));
  };

  const editDivisionHandler = (id) => {
    history.push(`/divisions/${id}`);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log(event);
    setRowsPerPage(event.target.value);
    setPage(0);
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
          <TablePagination
            className={classes.pagination}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            component="div"
            count={divisions.totalElements || 0}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Divisions;
