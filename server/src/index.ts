import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphql/schema";
import { context } from "./context";
import { PORT } from "./utils";

export const server = new ApolloServer({ 
    schema,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
    context: async () => context,
});

console.log(`Server is ready at ${url}`);
