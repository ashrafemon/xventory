import * as types from "../types";
import {
  ADD_DIVISION,
  GET_DIVISION,
  GET_DIVISIONS,
  ADD_DISTRICT,
  DELETE_DIVISION,
  UPDATE_DIVISION,
} from "../queries/siteQueries";
import { client } from "../gqlConfig";
import { toast } from "react-toastify";

export const fetchDivisions = () => (dispatch) => {
  dispatch({
    type: types.TOGGLE_LOADING,
    payload: true,
  });

  client
    .query({
      query: GET_DIVISIONS,
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.TOGGLE_LOADING,
        payload: false,
      });
      if (res.data.getDivisionListByCountryName.code === 200) {
        dispatch({
          type: types.FETCH_DIVISIONS,
          payload: res.data.getDivisionListByCountryName.data,
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

export const fetchDivision = (id) => (dispatch) => {
  dispatch({
    type: types.TOGGLE_LOADING,
    payload: true,
  });

  client
    .query({
      query: GET_DIVISION,
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
      if (res.data.getDivisionById.code === 200) {
        dispatch({
          type: types.FETCH_DIVISION,
          payload: res.data.getDivisionById.data,
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

export const createDivision =
  ({ name, country }) =>
  (dispatch) => {
    dispatch({
      type: types.TOGGLE_LOADING,
      payload: true,
    });

    client
      .mutate({
        mutation: ADD_DIVISION,
        variables: {
          name,
          country,
        },
      })
      .then((res) => {
        console.log(res);
        if (
          (res.data.createDivision.code === 200) &
          (res.data.createDivision.status === "OK")
        ) {
          toast.success("Division added...");
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

export const updateDivision =
  ({ id, name, country }) =>
  (dispatch) => {
    dispatch({
      type: types.TOGGLE_LOADING,
      payload: true,
    });

    client
      .mutate({
        mutation: UPDATE_DIVISION,
        variables: {
          id,
          name,
          country,
        },
      })
      .then((res) => {
        console.log(res);
        if (
          (res.data.updateDivision.code === 200) &
          (res.data.updateDivision.status === "OK")
        ) {
          toast.success("Division updated...");
          dispatch({
            type: types.UPDATE_DIVISION,
            payload: res.data.updateDivision.data,
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

export const deleteDivision = (id) => (dispatch) => {
  dispatch({
    type: types.TOGGLE_LOADING,
    payload: true,
  });

  client
    .mutate({
      mutation: DELETE_DIVISION,
      variables: {
        id,
      },
    })
    .then((res) => {
      console.log(res);
      if (
        (res.data.deleteDivision.code === 200) &
        (res.data.deleteDivision.status === "OK")
      ) {
        dispatch({
          type: types.DELETE_DIVISION,
          payload: id,
        });
        toast.success("Division deleted...");
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

export const createDistrict =
  ({ name, divisionId }) =>
  (dispatch) => {
    console.log(name, divisionId);
    client
      .mutate({
        mutation: ADD_DISTRICT,
        variables: {
          name,
          divisionId,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
