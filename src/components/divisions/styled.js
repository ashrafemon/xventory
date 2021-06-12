import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  contentBox: {
    width: "100%",
    backgroundColor: "#1F2129",
    borderRadius: 10,
  },
  portionTitle: {
    color: "#fff",
    fontWeight: 600,
  },
  table: {
    "& th": {
      color: "#fff",
    },
    "& td": {
      color: "#fff",
    },
  },

  inputLabel: {
    color: "#fff",
  },
  inputField: {
    backgroundColor: "#fff",
    borderRadius: 8,
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      border: 0,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: 0,
      },
      "&:hover fieldset": {
        border: 0,
      },
      "&.Mui-focused fieldset": {
        border: 0,
      },
    },
  },
  pagination: {
    color: "#fff",
  },
});
