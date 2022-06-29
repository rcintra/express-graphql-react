import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
    mutation 
        AddProject($name: String!, $description: String!, $status: ProjectStatus!) {
            addProject(
                name: $name,
                description: $description,
                status: $status) {
                    id
                    name
                    description
                    status
                }
        }    
`;

const DELETE_PROJECT = gql`
    mutation 
        DeleteProject($id: ID!) {
            deleteProject(
                id: $id) {
                    id
                }
        }    
`;

export { ADD_PROJECT, DELETE_PROJECT };