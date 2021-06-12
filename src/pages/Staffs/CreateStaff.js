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
import bloodGroup from "../../constants/BloodGroup";
import countries from "../../constants/Country";
import relations from "../../constants/Relation";
import locationAction from "../../store/actions/location";
import { createStaff } from "../../store/actions/staffAction";

const CreateStaff = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { districtList } = useSelector((state) => state.site.districts);
  const { subDistrictList } = useSelector((state) => state.site.subDistricts);
  const { postOfficeList } = useSelector((state) => state.site.postOffices);

  const [districtOptions, setDistrictOptions] = useState([]);
  const [subDistrictOptions, setSubDistrictOptions] = useState([]);
  const [postOfficeOptions, setPostOfficeOptions] = useState([]);

  const [form, setForm] = useState({
    name: "",
    designation: "",
    phoneList: "",
    emailList: "",
    bloodGroup: "",
    education: "",
    description: "",
    address: {
      streetAddress: "",
      district: null,
      subDistrict: null,
      postOffice: null,
      country: "",
    },
    emergencyContactPerson: {
      name: "",
      phoneList: "",
      emailList: "",
      relation: "",
    },
  });

  useEffect(() => {
    dispatch(locationAction.fetchDistricts(100));
  }, [dispatch]);

  useEffect(() => {
    if (districtList) {
      let districts = [];
      districtList.map((item) => districts.push(item));
      setDistrictOptions(districts);
    }
  }, [districtList]);

  useEffect(() => {
    if (subDistrictList) {
      let subDistricts = [];
      subDistrictList.map((item) => subDistricts.push(item));
      setSubDistrictOptions(subDistricts);
    }
  }, [subDistrictList]);

  useEffect(() => {
    if (postOfficeList) {
      let postOffices = [];
      postOfficeList.map((item) => postOffices.push(item));
      setPostOfficeOptions(postOffices);
    }
  }, [postOfficeList]);

  const changeHandler = (value, field) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const addressChangeHandler = (value, field) => {
    if (field === "district") {
      dispatch(locationAction.fetchSubDistrictsByDistrictId(value.id, 100));
    } else if (field === "subDistrict") {
      dispatch(locationAction.fetchPostOfficesBySubDistrictId(value.id, 100));
    }

    setForm({
      ...form,
      address: {
        ...form.address,
        [field]: value,
      },
    });
  };

  // let { address } = form;
  // useEffect(() => {
  //   if (address.district) {
  //     setForm({
  //       ...form,
  //       address: {
  //         ...form.address,
  //         subDistrict: null,
  //         postOffice: null,
  //       },
  //     });
  //   } else if (address.subDistrict) {
  //     setForm({
  //       ...form,
  //       address: {
  //         ...form.address,
  //         postOffice: null,
  //       },
  //     });
  //   }
  // }, [address.district, address.subDistrict]);

  const emergencyChangeHandler = (value, field) => {
    setForm({
      ...form,
      emergencyContactPerson: {
        ...form.emergencyContactPerson,
        [field]: value,
      },
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (form.name === "") {
      toast.error("Name Field Required");
    } else if (form.designation === "") {
      toast.error("Designation Field Required");
    } else if (form.phoneList === "") {
      toast.error("Phone Field Required");
    } else {
      dispatch(createStaff(form));
      // setForm({
      //   name: "",
      //   country: "",
      // });
    }
  };

  // console.log(form);

  return (
    <Box>
      <PageTitle title="Staffs" />

      <Box mt={2} p={2} className={classes.contentBox}>
        <Typography className={classes.portionTitle} variant="h4">
          Create New Staff
        </Typography>

        <Box mt={5}>
          <Grid container justify="center">
            <Grid item xs={12} sm={6} md={6}>
              <form onSubmit={submitHandler}>
                <Box mb={2}>
                  <Typography variant="h5" color="primary">
                    Basic Information
                  </Typography>
                </Box>

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
                        Designation: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <TextField
                        className={classes.inputField}
                        fullWidth
                        variant="outlined"
                        value={form.designation}
                        size="small"
                        onChange={(e) =>
                          changeHandler(e.target.value, "designation")
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={2}>
                      <FormLabel className={classes.inputLabel}>
                        Phone: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <TextField
                        className={classes.inputField}
                        fullWidth
                        variant="outlined"
                        value={form.phoneList}
                        size="small"
                        onChange={(e) =>
                          changeHandler(e.target.value, "phoneList")
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={2}>
                      <FormLabel className={classes.inputLabel}>
                        Email: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <TextField
                        className={classes.inputField}
                        fullWidth
                        variant="outlined"
                        value={form.emailList}
                        size="small"
                        onChange={(e) =>
                          changeHandler(e.target.value, "emailList")
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={2}>
                      <FormLabel className={classes.inputLabel}>
                        Blood Group: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <Autocomplete
                        className={classes.inputField}
                        closeIcon={false}
                        options={bloodGroup}
                        fullWidth
                        size="small"
                        value={form.bloodGroup}
                        onChange={(e, value) =>
                          changeHandler(value, "bloodGroup")
                        }
                        getOptionLabel={(option) => option}
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={2}>
                      <FormLabel className={classes.inputLabel}>
                        Education: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <TextField
                        className={classes.inputField}
                        fullWidth
                        variant="outlined"
                        value={form.education}
                        size="small"
                        onChange={(e) =>
                          changeHandler(e.target.value, "education")
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Typography variant="h5" color="primary">
                    Address Information
                  </Typography>
                </Box>

                <Box mb={2}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={2}>
                      <FormLabel className={classes.inputLabel}>
                        Street Address: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <TextField
                        className={classes.inputField}
                        fullWidth
                        variant="outlined"
                        value={form.address.streetAddress}
                        size="small"
                        onChange={(e) =>
                          addressChangeHandler(e.target.value, "streetAddress")
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={2}>
                      <FormLabel className={classes.inputLabel}>
                        Districts: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <Autocomplete
                        className={classes.inputField}
                        closeIcon={false}
                        options={districtOptions}
                        fullWidth
                        size="small"
                        value={form.address.district}
                        onChange={(e, value) =>
                          addressChangeHandler(value, "district")
                        }
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={2}>
                      <FormLabel className={classes.inputLabel}>
                        Sub Districts: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <Autocomplete
                        className={classes.inputField}
                        closeIcon={false}
                        options={subDistrictOptions}
                        fullWidth
                        size="small"
                        value={form.address.subDistrict}
                        onChange={(e, value) =>
                          addressChangeHandler(value, "subDistrict")
                        }
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={2}>
                      <FormLabel className={classes.inputLabel}>
                        Post Offices: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <Autocomplete
                        className={classes.inputField}
                        closeIcon={false}
                        options={postOfficeOptions}
                        fullWidth
                        size="small"
                        value={form.address.postOffice}
                        onChange={(e, value) =>
                          addressChangeHandler(value, "postOffice")
                        }
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" />
                        )}
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
                        value={form.address.country}
                        onChange={(e, value) =>
                          addressChangeHandler(value, "country")
                        }
                        getOptionLabel={(option) => option}
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={2}>
                      <FormLabel className={classes.inputLabel}>
                        Description: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <TextField
                        className={classes.inputField}
                        fullWidth
                        variant="outlined"
                        multiline
                        value={form.description}
                        rows={5}
                        rowsMax={5}
                        size="small"
                        onChange={(e) =>
                          changeHandler(e.target.value, "description")
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Typography variant="h5" color="primary">
                    Emergency Contact Information
                  </Typography>
                </Box>

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
                        value={form.emergencyContactPerson.name}
                        size="small"
                        onChange={(e) =>
                          emergencyChangeHandler(e.target.value, "name")
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={2}>
                      <FormLabel className={classes.inputLabel}>
                        Phone: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <TextField
                        className={classes.inputField}
                        fullWidth
                        variant="outlined"
                        value={form.emergencyContactPerson.phoneList}
                        size="small"
                        onChange={(e) =>
                          emergencyChangeHandler(e.target.value, "phoneList")
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={2}>
                      <FormLabel className={classes.inputLabel}>
                        Email: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <TextField
                        className={classes.inputField}
                        fullWidth
                        variant="outlined"
                        value={form.emergencyContactPerson.emailList}
                        size="small"
                        onChange={(e) =>
                          emergencyChangeHandler(e.target.value, "emailList")
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box mb={2}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={2}>
                      <FormLabel className={classes.inputLabel}>
                        Relation: *
                      </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <Autocomplete
                        className={classes.inputField}
                        closeIcon={false}
                        options={relations}
                        fullWidth
                        size="small"
                        value={form.emergencyContactPerson.relation}
                        onChange={(e, value) =>
                          emergencyChangeHandler(value, "relation")
                        }
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
                        Create Staff
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

export default CreateStaff;
