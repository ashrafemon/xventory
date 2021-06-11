import {
  Box,
  Button,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useStyles } from "../../components/divisions/styled";
import PageTitle from "../../components/shared/PageTitle/PageTitle";
import { createDivision } from "../../store/actions/siteAction";
import { toast } from "react-toastify";

const CreateDivision = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [countries] = useState(["Bangladesh", "India", "USA"]);
  const [form, setForm] = useState({
    name: "",
    country: "",
  });

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
      dispatch(createDivision(form));

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
          Create New Division
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
                        Create Division
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

export default CreateDivision;
