import { client } from "../../gqlConfig";
import queries from "../../queries";
import * as types from "../../types";

export const fetchSubDistrictsByDistrictId =
  (districtId, size = 10) =>
  (dispatch) => {
    dispatch({
      type: types.TOGGLE_LOADING,
      payload: true,
    });

    client
      .query({
        query: queries.GET_SUB_DISTRICTS_BY_DISTRICT_ID,
        variables: {
          districtId,
          size,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: types.TOGGLE_LOADING,
          payload: false,
        });
        if (
          (res.data.getSubDistrictListByDistrictId.code === 200) &
          (res.data.getSubDistrictListByDistrictId.status === "OK")
        ) {
          dispatch({
            type: types.FETCH_SUB_DISTRICTS_BY_DISTRICT_ID,
            payload: res.data.getSubDistrictListByDistrictId.data,
          });
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
