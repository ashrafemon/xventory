import {
  Avatar,
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ArrowDropUpOutlinedIcon from "@material-ui/icons/ArrowDropUpOutlined";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import { Autocomplete } from "@material-ui/lab";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { images } from "../../../../constants/ThemeData";
import { CustomTextField, useStyles } from "./styled";

const SideBar = () => {
  const classes = useStyles();
  const { menuList, stores } = useSelector((state) => state.site);
  const [open, setOpen] = useState(false);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.logoContainer}>
        <Avatar className={classes.logo} src={images.logo} />
      </Box>

      <Box className={classes.storeFieldContainer}>
        <Typography variant="body1" className={classes.storeFieldLabel}>
          Shop Name
        </Typography>
        <Autocomplete
          closeIcon={false}
          className={classes.storeField}
          fullWidth
          options={stores}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <CustomTextField {...params} fullWidth variant="outlined" />
          )}
        />
      </Box>

      <Box>
        <Typography variant="body1" className={classes.storeFieldLabel}>
          General
        </Typography>

        <List className={classes.menuList}>
          {menuList.map((item, index) => (
            <Box key={index}>
              <ListItem
                button
                className={classes.menuListItem}
                onClick={() => setOpen(!open)}
                //   selected
              >
                <ListItemIcon className={classes.menuListItemIcon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  className={classes.menuListItemText}
                  primary={item.name}
                />
                {item.items &&
                  (open ? (
                    <ArrowDropUpOutlinedIcon />
                  ) : (
                    <ArrowRightOutlinedIcon />
                  ))}
              </ListItem>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  disablePadding
                  className={classes.nestedMenuList}
                >
                  {item.items &&
                    item.items.map((innerItem, index) => (
                      <ListItem
                        button
                        key={index}
                        className={classes.menuListItem}
                      >
                        <ListItemIcon className={classes.menuListItemIcon}>
                          {innerItem.icon}
                        </ListItemIcon>
                        <ListItemText
                          className={classes.menuListItemText}
                          primary={innerItem.name}
                        />
                      </ListItem>
                    ))}
                </List>
              </Collapse>
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
