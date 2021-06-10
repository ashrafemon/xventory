import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  toolbar: {
    backgroundColor: "#1F2129",
    paddingTop: 10,
    paddingBottom: 10,
  },
  // Collapsible Btn
  collapsibleOption: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    "@media(max-width: 600px)": {
      flexDirection: "column",
    },
  },
  collapseBtn: {
    backgroundColor: "#272934",
    borderRadius: 5,
    color: "#fff",
  },
  // Header List
  headerList: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#272934",
    borderRadius: 30,
    padding: "5px",
    "@media(max-width: 600px)": {
      flexDirection: "column",
    },
  },
  headerListItem: {
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 30,
    "@media(max-width: 600px)": {
      width: "100%",
    },
  },
  headerListItemIcon: {
    width: 30,
    borderRadius: 0,
    overflow: "initial",
    "& .MuiAvatar-img": {
      objectFit: "contain",
    },
  },
  headerListItemText: {
    "& .MuiTypography-root": {
      fontSize: 14,
      lineHeight: 1,
      fontWeight: 600,
    },
  },

  // Header Options
  headerOptionContainer: {
    marginLeft: "auto",
    display: "flex",
    "@media(max-width: 500px)": {
      flexDirection: "column",
    },
  },
  btn: {
    color: "#fff",
  },
  avatarContainer: {
    backgroundColor: "#272934",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    padding: "5px 10px",
    boxSizing: "border-box",
    borderRadius: 30,
    cursor: "pointer",
  },
  name: {
    fontWeight: 600,
    color: "#fff",
    textTransform: "uppercase",
    lineHeight: 1.2,
  },
  role: {
    fontWeight: 600,
    color: "#9B9D80",
    lineHeight: 1,
  },
  iconContent: {
    marginLeft: "auto",
  },

  popOver: {
    width: "100%",
    padding: "10px 5px",
    boxSizing: "border-box",
  },
});
