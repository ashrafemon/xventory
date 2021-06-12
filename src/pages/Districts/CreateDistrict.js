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
import { toast } from "react-toastify";
import { useStyles } from "../../components/divisions/styled";
import PageTitle from "../../components/shared/PageTitle/PageTitle";
import locationAction from "../../store/actions/location";

const CreateDistrict = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { divisionList } = useSelector((state) => state.site.divisions);
  const [form, setForm] = useState({
    name: "",
    division: null,
  });

  const [divisionOptions, setDivisionOptions] = useState([]);

  useEffect(() => {
    dispatch(locationAction.fetchDivisions(100));
  }, [dispatch]);

  useEffect(() => {
    if (divisionList) {
      let divisions = [];
      divisionList.map((item) => divisions.push(item));
      setDivisionOptions(divisions);
    }
  }, [divisionList]);

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
    } else if (!form.division) {
      toast.error("Division Field Required");
    } else {
      dispatch(
        locationAction.createDistrict({
          name: form.name,
          divisionId: form.division.id,
        })
      );

      setForm({
        name: "",
        division: "",
      });
    }
  };

  console.log(form);

  return (
    <Box>
      <PageTitle title="Districts" />

      <Box mt={2} p={2} className={classes.contentBox}>
        <Typography className={classes.portionTitle} variant="h4">
          Create New District
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
                        Division: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <Autocomplete
                        className={classes.inputField}
                        closeIcon={false}
                        options={divisionOptions}
                        fullWidth
                        size="small"
                        value={form.division}
                        onChange={(e, value) => {
                          console.log(value);
                          changeHandler(value, "division");
                        }}
                        getOptionLabel={(option) => option.name}
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
                        Create District
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

export default CreateDistrict;
