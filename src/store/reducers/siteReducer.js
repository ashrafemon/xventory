import menuList from "../../constants/SideBarList";
import stores from "../../constants/StoreList";
import * as types from "./../types";

const initialState = {
  menuList: menuList,
  stores: stores,
  sidebarShow: true,
  divisions: [],
  loading: false,
  errors: null,
  division: {},
  districts: [],
  district: {},
};

const siteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarShow: action.payload,
      };
    case types.FETCH_DIVISIONS:
      return {
        ...state,
        divisions: action.payload,
      };
    case types.FETCH_DIVISION:
      return {
        ...state,
        division: action.payload,
      };
    case types.UPDATE_DIVISION:
      return {
        ...state,
        division: action.payload,
      };
    case types.DELETE_DIVISION:
      return {
        ...state,
        divisions: {
          ...state.divisions,
          divisionList: state.divisions.divisionList.filter(
            (item) => item.id !== action.payload
          ),
        },
      };
    case types.TOGGLE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default siteReducer;
