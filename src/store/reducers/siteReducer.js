import menuList from "../../constants/SideBarList";
import stores from "../../constants/StoreList";
import * as types from "./../types";

const initialState = {
  menuList: menuList,
  stores: stores,
  sidebarShow: true,
};

const siteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarShow: action.payload,
      };
    default:
      return state;
  }
};

export default siteReducer;
