import { client } from "../../gqlConfig";
import queries from "../../queries";
import * as types from "../../types";

export const fetchPostOfficesBySubDistrictId =
  (subDistrictId, size = 10) =>
  (dispatch) => {
    dispatch({
      type: types.TOGGLE_LOADING,
      payload: true,
    });

    client
      .query({
        query: queries.GET_POST_OFFICES_BY_SUB_DISTRICT_ID,
        variables: {
          subDistrictId,
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
          (res.data.getPostOfficeListBySubDistrictId.code === 200) &
          (res.data.getPostOfficeListBySubDistrictId.status === "OK")
        ) {
          dispatch({
            type: types.FETCH_POST_OFFICES_BY_SUB_DISTRICT_ID,
            payload: res.data.getPostOfficeListBySubDistrictId.data,
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
