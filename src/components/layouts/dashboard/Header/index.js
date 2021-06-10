import {
  AppBar,
  Avatar,
  Box,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { images } from "./../../../../constants/ThemeData";
import HeaderOptions from "./HeaderOptions";
import { useStyles } from "./styled";

import { TOGGLE_SIDEBAR } from "./../../../../store/types";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { sidebarShow } = useSelector((state) => state.site);

  const collapseHandler = () => {
    dispatch({
      type: TOGGLE_SIDEBAR,
      payload: !sidebarShow,
    });
  };

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.collapsibleOption}>
          <IconButton className={classes.collapseBtn} onClick={collapseHandler}>
            <MenuIcon />
          </IconButton>
          <Hidden mdDown>
            <List className={classes.headerList}>
              <ListItem button className={classes.headerListItem}>
                <ListItemAvatar>
                  <Avatar
                    src={images.shopify}
                    className={classes.headerListItemIcon}
                  />
                </ListItemAvatar>
                <ListItemText
                  className={classes.headerListItemText}
                  primary="POS"
                />
              </ListItem>
              <ListItem button className={classes.headerListItem}>
                <ListItemAvatar>
                  <Avatar
                    src={images.cashBook}
                    className={classes.headerListItemIcon}
                  />
                </ListItemAvatar>
                <ListItemText
                  className={classes.headerListItemText}
                  primary="Cash Book"
                />
              </ListItem>
              <ListItem button className={classes.headerListItem}>
                <ListItemAvatar>
                  <Avatar
                    src={images.file}
                    className={classes.headerListItemIcon}
                  />
                </ListItemAvatar>
                <ListItemText
                  className={classes.headerListItemText}
                  primary="Invoices"
                />
              </ListItem>
            </List>
          </Hidden>
        </Box>

        <HeaderOptions />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
