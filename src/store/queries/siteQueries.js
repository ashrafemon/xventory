import { gql } from "@apollo/client";

export const GET_DIVISIONS = gql`
  {
    getDivisionListByCountryName(
      countryName: "Bangladesh"
      size: 10
      offset: 0
    ) {
      status
      code
      errors {
        code
        field
        message
        description
      }
      data {
        divisionList {
          id
          name
          country
        }
        offset
        limit
        numberOfElements
        totalElements
        totalPages
        first
        last
      }
    }
  }
`;

export const GET_DIVISION = gql`
  query ($id: String!) {
    getDivisionById(divisionId: $id) {
      status
      code
      errors {
        code
        field
        message
        description
      }
      data {
        id
        name
        country
      }
    }
  }
`;

export const ADD_DIVISION = gql`
  mutation ($name: String!, $country: String!) {
    createDivision(division: { name: $name, country: $country }) {
      status
      code
      errors {
        code
        field
        message
        description
      }
      data {
        id
        name
        country
      }
    }
  }
`;

export const UPDATE_DIVISION = gql`
  mutation ($id: String!, $name: String!, $country: String!) {
    updateDivision(division: { id: $id, name: $name, country: $country }) {
      status
      code
      errors {
        code
        field
        message
        description
      }
      data {
        id
        name
        country
      }
    }
  }
`;

export const DELETE_DIVISION = gql`
  mutation ($id: String!) {
    deleteDivision(divisionId: $id) {
      status
      code
      errors {
        code
        field
        message
        description
      }
    }
  }
`;

export const ADD_DISTRICT = gql`
  mutation ($name: String!, $divisionId: String!) {
    createDistrict(district: { name: $name, division: { id: $divisionId } }) {
      status
      code
      errors {
        code
        field
        message
        description
      }
      data {
        id
        name
        division {
          id
          name
          country
        }
      }
    }
  }
`;
