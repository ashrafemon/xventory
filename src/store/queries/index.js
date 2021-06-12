import {
  GET_DIVISIONS,
  GET_DIVISION,
  ADD_DIVISION,
  UPDATE_DIVISION,
  DELETE_DIVISION,
} from "./divisionQueries";
import {
  GET_DISTRICTS,
  GET_DISTRICT,
  ADD_DISTRICT,
  UPDATE_DISTRICT,
  DELETE_DISTRICT,
} from "./districtQueries";

import { GET_SUB_DISTRICTS_BY_DISTRICT_ID } from "./subDistrictQueries";
import { GET_POST_OFFICES_BY_SUB_DISTRICT_ID } from "./postOfficeQueries";
import { ADD_STAFF } from "./staffQueries";

const queries = {
  // Division Queries
  GET_DIVISION,
  GET_DIVISIONS,
  ADD_DIVISION,
  UPDATE_DIVISION,
  DELETE_DIVISION,

  // District Queries
  GET_DISTRICTS,
  GET_DISTRICT,
  ADD_DISTRICT,
  UPDATE_DISTRICT,
  DELETE_DISTRICT,

  // Sub District Queries
  GET_SUB_DISTRICTS_BY_DISTRICT_ID,

  // Post Office Queries
  GET_POST_OFFICES_BY_SUB_DISTRICT_ID,

  // Staff Queries
  ADD_STAFF,
};

export default queries;
