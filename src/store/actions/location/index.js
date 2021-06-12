import {
  fetchDivisions,
  fetchDivision,
  createDivision,
  updateDivision,
  deleteDivision,
} from "./divisionAction";

import {
  fetchDistricts,
  fetchDistrict,
  createDistrict,
  updateDistrict,
  deleteDistrict,
} from "./districtAction";

import { fetchSubDistrictsByDistrictId } from "./subDistrictAction";
import { fetchPostOfficesBySubDistrictId } from "./postOfficeAction";

const locationAction = {
  // Division Action
  fetchDivisions,
  fetchDivision,
  createDivision,
  updateDivision,
  deleteDivision,

  // District Action
  fetchDistricts,
  fetchDistrict,
  createDistrict,
  updateDistrict,
  deleteDistrict,

  // Sub District Action
  fetchSubDistrictsByDistrictId,

  // Sub District Action
  fetchPostOfficesBySubDistrictId,
};

export default locationAction;
