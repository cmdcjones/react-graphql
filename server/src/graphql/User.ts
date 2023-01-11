import { extendType, intArg, nonNull, objectType } from "nexus";

// Create the shape of type User that defines
// what fields each User contains, what can be interacted with
// and the shape of the data returned
export const User = objectType({
    name: "User",
    definition(t) {
        t.int("id");
        t.string("name");
        t.nonNull.list.nonNull.field("messages", {
            type: "Message",

            resolve (parent, args, ctx) {
                return ctx.db.users.messages
            },
        });
    },
});

// Create a root field 'users' that extends Query
// and resolves a list of type User (specifically [User]!)
export const UserQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.field("user", {
            type: "User",
            args: {
                id: nonNull(intArg()),
            },

            resolve(parent, args, ctx) {
                const { id } = args;
                const requestedUser = ctx.db.users.find(user => user.id === id);

                return requestedUser;
            },
        });

        t.nonNull.list.field("users", {
            type: "User",

            resolve(parent, args, ctx) {
                return ctx.db.users
            },
        });
    },
});

