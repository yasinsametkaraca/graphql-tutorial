# Graphql Tutorial

## GraphQL: Resolvers and Schemas

In GraphQL, `resolvers` and `schemas` are essential components that work together to manage GraphQL queries. Below is a brief explanation of each.

### Schema

A `schema` in GraphQL defines the structure of your API. It specifies:

- What queries can be made
- What mutations can be performed
- What types of data are available

The schema acts as the blueprint of your GraphQL API, describing what data clients can request and how that data can be accessed.

#### Example Schema

```graphql
type Query {
  book(id: ID!): Book
  books: [Book]
}

type Mutation {
  addBook(title: String!, author: String!): Book
}

type Book {
  id: ID!
  title: String!
  author: String!
}
```

### Resolvers

A `resolver` is a function that handles the logic for fetching or modifying the data specified in your GraphQL schema. When a query or mutation is made, the corresponding resolver function is called to return the necessary data.

#### Example Resolver

```javascript
const resolvers = {
  Query: {
    book: (parent, args, context, info) => {
      return books.find(book => book.id === args.id);
    },
    books: () => {
      return books;
    }
  },
  Mutation: {
    addBook: (parent, args) => {
      const newBook = {
        id: generateId(),
        title: args.title,
        author: args.author
      };
      books.push(newBook);
      return newBook;
    }
  }
};
```


## GraphQL Queries and Mutations

In GraphQL, `queries` and `mutations` are the primary operations used to interact with the data in your API. They are key concepts that enable clients to request data and modify data, respectively.

### Query

A `query` is used to fetch data from a GraphQL API. It is analogous to a `GET` request in RESTful APIs. Queries allow clients to specify exactly what data they need and how it should be structured. This makes data retrieval efficient and flexible.

#### Example Query

Here’s an example of a query that fetches a list of books with their titles and authors:

```graphql
query {
  books {
    title
    author
  }
}
```

### Mutation

A `mutation` is used to modify data on the server. It is analogous to POST, PUT, PATCH, or DELETE requests in RESTful APIs. Mutations allow clients to create, update, or delete data. Just like queries, mutations can return data, allowing clients to immediately get feedback on the changes they’ve made.

#### Example Mutation

Here’s an example of a mutation that adds a new book to the list:

```graphql
mutation {
    addBook(title: "1984", author: "George Orwell") {
        id
        title
        author
    }
}
```

### Differences Between Queries and Mutations

``Queries``: Used to retrieve data without modifying it. Queries are idempotent, meaning they can be executed multiple times without changing the result.

``Mutations``: Used to modify data (create, update, delete). Mutations are not idempotent, as they alter the data on the server.