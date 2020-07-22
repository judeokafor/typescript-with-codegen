import gql from 'graphql-tag';

export const RETURN_ALL_USERS = gql`
	query ReturnUsers {
		returnAllUser {
			lastName
			firstName
		}
	}
`;
