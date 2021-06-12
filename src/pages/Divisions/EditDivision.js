import {
  Box,
  Button,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useStyles } from "../../components/divisions/styled";
import PageTitle from "../../components/shared/PageTitle/PageTitle";
import locationAction from "../../store/actions/location";

const EditDivision = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [countries] = useState(["Bangladesh", "India", "USA"]);
  const [form, setForm] = useState({
    name: "",
    country: "",
  });
  const { division } = useSelector((state) => state.site);

  useEffect(() => {
    dispatch(locationAction.fetchDivision(id));
  }, [dispatch, id]);

  useEffect(() => {
    setForm({
      name: division.name,
      country: division.country,
    });
  }, [division]);

  const changeHandler = (value, field) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (form.name === "") {
      toast.error("Name Field Required");
    } else if (form.country === "") {
      toast.error("Country Field Required");
    } else {
      dispatch(
        locationAction.updateDivision({
          name: form.name,
          country: form.country,
          id: id,
        })
      );

      setForm({
        name: "",
        country: "",
      });
    }
  };

  return (
    <Box>
      <PageTitle title="Divisions" />

      <Box mt={2} p={2} className={classes.contentBox}>
        <Typography className={classes.portionTitle} variant="h4">
          Edit Division
        </Typography>

        <Box mt={5}>
          <Grid container justify="center">
            <Grid item xs={12} sm={6} md={6}>
              <form onSubmit={submitHandler}>
                <Box mb={2}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={2}>
                      <FormLabel className={classes.inputLabel}>
                        Name: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <TextField
                        className={classes.inputField}
                        fullWidth
                        variant="outlined"
                        value={form.name}
                        size="small"
                        onChange={(e) => changeHandler(e.target.value, "name")}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={2}>
                      <FormLabel className={classes.inputLabel}>
                        Country: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <Autocomplete
                        className={classes.inputField}
                        closeIcon={false}
                        options={countries}
                        fullWidth
                        size="small"
                        value={form.country}
                        onChange={(e, value) => changeHandler(value, "country")}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Grid container justify="flex-end">
                    <Grid item xs={12} sm={10}>
                      <Button type="submit" variant="contained" color="primary">
                        Update Division
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default EditDivision;
