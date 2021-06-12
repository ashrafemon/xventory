import * as types from "../../types";
import queries from "../../queries";
import { client } from "../../gqlConfig";
import { toast } from "react-toastify";

export const fetchDistricts =
  (size = 10) =>
  (dispatch) => {
    dispatch({
      type: types.TOGGLE_LOADING,
      payload: true,
    });

    client
      .query({
        query: queries.GET_DISTRICTS,
        variables: {
          size,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: types.TOGGLE_LOADING,
          payload: false,
        });
        if (res.data.getDistrictList.code === 200) {
          dispatch({
            type: types.FETCH_DISTRICTS,
            payload: res.data.getDistrictList.data,
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

export const fetchDistrict = (id) => (dispatch) => {
  dispatch({
    type: types.TOGGLE_LOADING,
    payload: true,
  });

  client
    .query({
      query: queries.GET_DISTRICT,
      variables: {
        id,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.TOGGLE_LOADING,
        payload: false,
      });
      if (res.data.getDistrictById.code === 200) {
        dispatch({
          type: types.FETCH_DISTRICT,
          payload: res.data.getDistrictById.data,
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

export const createDistrict =
  ({ name, divisionId }) =>
  (dispatch) => {
    dispatch({
      type: types.TOGGLE_LOADING,
      payload: true,
    });
    client
      .mutate({
        mutation: queries.ADD_DISTRICT,
        variables: {
          name,
          divisionId,
        },
      })
      .then((res) => {
        console.log(res);
        if (
          (res.data.createDistrict.code === 200) &
          (res.data.createDistrict.status === "OK")
        ) {
          toast.success("District added...");
        }

        dispatch({
          type: types.TOGGLE_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: types.TOGGLE_LOADING,
          payload: false,
        });
      });
  };

export const updateDistrict =
  ({ id, name, divisionId }) =>
  (dispatch) => {
    dispatch({
      type: types.TOGGLE_LOADING,
      payload: true,
    });

    client
      .mutate({
        mutation: queries.UPDATE_DISTRICT,
        variables: {
          id,
          name,
          divisionId,
        },
      })
      .then((res) => {
        console.log(res);
        if (
          (res.data.updateDistrict.code === 200) &
          (res.data.updateDistrict.status === "OK")
        ) {
          toast.success("Division updated...");
          dispatch({
            type: types.UPDATE_DIVISION,
            payload: res.data.updateDistrict.data,
          });
        }

        dispatch({
          type: types.TOGGLE_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: types.TOGGLE_LOADING,
          payload: false,
        });
      });
  };

export const deleteDistrict = (id) => (dispatch) => {
  dispatch({
    type: types.TOGGLE_LOADING,
    payload: true,
  });

  client
    .mutate({
      mutation: queries.DELETE_DISTRICT,
      variables: {
        id,
      },
    })
    .then((res) => {
      console.log(res);
      if (
        (res.data.deleteDistrict.code === 200) &
        (res.data.deleteDistrict.status === "OK")
      ) {
        dispatch({
          type: types.DELETE_DISTRICT,
          payload: id,
        });
        toast.success("District deleted...");
      }

      dispatch({
        type: types.TOGGLE_LOADING,
        payload: false,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.TOGGLE_LOADING,
        payload: false,
      });
    });
};
