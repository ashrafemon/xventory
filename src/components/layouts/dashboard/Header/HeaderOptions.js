import {
  Avatar,
  Box,
  IconButton,
  Popover,
  Typography,
} from "@material-ui/core";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import LockIcon from "@material-ui/icons/Lock";
import OpenWithIcon from "@material-ui/icons/OpenWith";
import React from "react";
import { images } from "./../../../../constants/ThemeData";
import { useStyles } from "./styled";

const HeaderOptions = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box className={classes.headerOptionContainer}>
      <Box>
        <IconButton className={classes.btn}>
          <OpenWithIcon />
        </IconButton>

        <IconButton className={classes.btn}>
          <LockIcon />
        </IconButton>

        <IconButton className={classes.btn}>
          <InfoOutlinedIcon />
        </IconButton>

        <IconButton className={classes.btn}>
          <HelpOutlineOutlinedIcon />
        </IconButton>
      </Box>

      <Box className={classes.avatarContainer} onClick={handleClick}>
        <Avatar src={images.avatar} />
        <Box>
          <Typography className={classes.name} variant="body1">
            John Doe
          </Typography>
          <Typography className={classes.role} variant="body2">
            Admin
          </Typography>
        </Box>
        <Box className={classes.iconContent}>
          <ArrowDropDownOutlinedIcon />
        </Box>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box className={classes.popOver}>
          <Typography className={classes.typography}>
            The content of the Popover.
          </Typography>
        </Box>
      </Popover>
    </Box>
  );
};

export default HeaderOptions;
