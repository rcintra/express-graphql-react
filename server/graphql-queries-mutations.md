# GraphQL Queries & Mutations

These are the GraphQL queries and mutations.

## Get name and status of all projects

```
{
  projects {
    name
    status
  }
}
```

## Get a single project name, description along with the client name and email

```
{
  project(id: 1) {
    name
    description,
    client {
      name
      email
    }
  }
}
```
## Create a new project and return name and description

```
mutation {
  addProject(name: "Mobile App", description: "This is the project description", status: "new", clientId: "1") {
   name
   description
  }
}
```

## Update a project status and return name and status

```
mutation {
  updateProject(status: "completed") {
   name
   status
  }
}
```

## Delete a project and return id and name

```
mutation {
  deleteProject(id: "1") {
    id
    name
  }
  
}
```
