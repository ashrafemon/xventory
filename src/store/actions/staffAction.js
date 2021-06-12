import * as types from "../types";
import queries from "../queries";
import { client } from "../gqlConfig";
import { toast } from "react-toastify";

export const createStaff = (data) => (dispatch) => {
  let {
    name,
    designation,
    phoneList,
    emailList,
    bloodGroup,
    education,
    description,
    address,
    emergencyContactPerson,
  } = data;

  //   console.log(data);

  dispatch({
    type: types.TOGGLE_LOADING,
    payload: true,
  });

  client
    .mutate({
      mutation: queries.ADD_STAFF,
      variables: {
        name,
        designation,
        phoneList: [phoneList],
        emailList: [emailList],
        bloodGroup,
        education,
        description,
        streetAddress: address.streetAddress,
        postOfficeId: address.postOffice.id,
        subDistrictId: address.subDistrict.id,
        districtId: address.district.id,
        country: address.country,
        emergencyName: emergencyContactPerson.name,
        emergencyPhoneList: [emergencyContactPerson.phoneList],
        emergencyEmailList: [emergencyContactPerson.emailList],
        emergencyRelation: emergencyContactPerson.relation,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.TOGGLE_LOADING,
        payload: false,
      });
      if (
        (res.data.createStaff.code === 200) &
        (res.data.createStaff.status === "OK")
      ) {
        toast.success("Staff created...");
        // dispatch({
        //   type: types.FETCH_SUB_DISTRICTS_BY_DISTRICT_ID,
        //   payload: res.data.getSubDistrictListByDistrictId.data,
        // });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.TOGGLE_LOADING,
        payload: false,
      });
    });
};
