import {
  Box,
  Dialog,
  DialogContent,
  Grid,
  Hidden,
  makeStyles,
  Slide,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/layouts/dashboard/Header";
import SideBar from "../components/layouts/dashboard/SideBar";
import { TOGGLE_SIDEBAR } from "../store/types";
import { useDimension } from "../utils/Dimension";
import ReactLoading from "react-loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#272934",
  },
  sidebar: {
    width: "100%",
    height: "100%",
  },
  content: {
    width: "100%",
    height: "100%",
  },
  sidebarDialog: {
    width: "100%",
  },
  sidebarDialogContent: {
    width: "100%",
    padding: "0 !important",
  },
  loaderWrapper: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
});

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dimension = useDimension();
  const { sidebarShow, loading } = useSelector((state) => state.site);

  const closeHandler = () => {
    dispatch({
      type: TOGGLE_SIDEBAR,
      payload: !sidebarShow,
    });
  };

  return (
    <>
      {loading && (
        <Box className={classes.loaderWrapper}>
          <ReactLoading type="spin" color="crimson" height={100} width={100} />
        </Box>
      )}

      <ToastContainer />

      <Grid
        container
        justify="space-between"
        alignItems="stretch"
        className={classes.wrapper}
      >
        <Hidden smDown>
          <Slide direction="right" in={sidebarShow} mountOnEnter unmountOnExit>
            <Grid item lg={2} md={3} sm={3} xs={12} className={classes.sidebar}>
              <SideBar />
            </Grid>
          </Slide>
        </Hidden>

        <Grid
          item
          lg={sidebarShow ? 10 : 12}
          md={sidebarShow ? 9 : 12}
          sm={12}
          xs={12}
          className={classes.content}
        >
          <Header />
          <Box p={3}>{children}</Box>
        </Grid>
      </Grid>

      {dimension.width < 960 && (
        <Dialog
          className={classes.sidebarDialog}
          open={sidebarShow}
          fullWidth
          maxWidth="sm"
          onClose={closeHandler}
        >
          <DialogContent className={classes.sidebarDialogContent}>
            <SideBar />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default DashboardLayout;
