import { gql } from "@apollo/client";

export const GET_SUB_DISTRICTS_BY_DISTRICT_ID = gql`
  query ($districtId: String!, $size: Int!) {
    getSubDistrictListByDistrictId(
      districtId: $districtId
      size: $size
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
        subDistrictList {
          id
          name
          district {
            id
            name
            division {
              id
              name
              country
            }
          }
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
