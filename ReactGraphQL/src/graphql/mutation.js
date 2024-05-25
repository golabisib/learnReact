import { gql } from "@apollo/client";

const CREATE_USER = gql`
    mutation {
        createUser (
            input: {
                name: "Roozbeh"
                username: "Golabisib"
                email: "roozbehJangjo@gmail.com"
                phone: "09024995222"
            }
        ) {
            id,
            name,
            email,
            phone,
        }
    }
`;

export { CREATE_USER }
