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
  subDistricts: [],
  postOffices: [],
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
    case types.FETCH_DISTRICTS:
      return {
        ...state,
        districts: action.payload,
      };
    case types.FETCH_DISTRICT:
      return {
        ...state,
        district: action.payload,
      };
    case types.UPDATE_DISTRICT:
      return {
        ...state,
        district: action.payload,
      };
    case types.DELETE_DISTRICT:
      return {
        ...state,
        districts: {
          ...state.districts,
          districtList: state.districts.districtList.filter(
            (item) => item.id !== action.payload
          ),
        },
      };
    case types.FETCH_SUB_DISTRICTS_BY_DISTRICT_ID:
      return {
        ...state,
        subDistricts: action.payload,
      };
    case types.FETCH_POST_OFFICES_BY_SUB_DISTRICT_ID:
      return {
        ...state,
        postOffices: action.payload,
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
