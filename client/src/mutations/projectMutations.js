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

export { ADD_PROJECT };