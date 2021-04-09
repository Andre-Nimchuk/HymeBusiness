import { gql } from '@apollo/client';

export const UPDATE_MY_PROFILE = gql`
    mutation updateMyProfile($input: UpdateUserInput!) {
        updateMyProfile(input: $input) {
            userId
        }
    }
`;
export const GET_UPLOAD_URL = gql`
    mutation getUploadUrl($input: UploadUrlInput!) {
        getUploadUrl(input: $input) {
            signedUrl
            key
        }
    }
`;

export default UPDATE_MY_PROFILE;
