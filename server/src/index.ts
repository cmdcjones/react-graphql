import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphql/schema.js";
import { PORT } from "./utils.js";

const server = new ApolloServer({ schema });

const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
});

console.log(`Server is ready at ${url}`);
