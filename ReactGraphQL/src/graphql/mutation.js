import { gql } from "@apollo/client";

const CREATE_USER = gql`
    mutation CreateUser(
        $name: String!
        $username: String!
        $email: String!
        $phone: String!
        ) {
        createUser (
            input: {
                name: $name
                username: $username
                email: $email
                phone: $phone
            }
        ) {
            id,
            name,
            email,
            phone,
        }
    }
`;

const UPDATE_USER = gql`
mutation updateUser($id: ID!, $name: String!){
    updateUser(
        id : $id
        input: {
            name : $name
        }
    ){
        id,
        name,
        email,
    }

}
`;

const DELETE_USER = gql`
mutation deleteUser($id: ID!){
    deleteUser(id: $id)
}
`

export { CREATE_USER, UPDATE_USER, DELETE_USER };
