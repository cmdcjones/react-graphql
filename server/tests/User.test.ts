import { ApolloServer } from "@apollo/server";
import { schema } from "../src/graphql/schema";

it('returns new User with name "Nick"', async () => {
    const testServer = new ApolloServer({ 
        schema,
    });

    const response = await testServer.executeOperation({
        query: `mutation createUser($name: String!) { 
            createUser(name: $name) {
                id,
                name
            }
        }`,
        variables: { name: "Nick" },
    });

    expect(response).toBe("Nick");
});

// const { url } = await startStandaloneServer(server, {
//     listen: { port: PORT },
//     context: async () => context,
// });


