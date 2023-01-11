import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";

// Create the shape of type User that defines
// what fields each User contains, what can be interacted with
// and the shape of the data returned
export const User = objectType({
    name: "User",
    definition(t) {
        t.int("id");
        t.string("name");
        /*t.nonNull.list.nonNull.field("messages", {
            type: "Message",

            resolve (_parent, _args, ctx) {
                return ctx.db.users.messages
            },
        });*/
    },
});

// Query root fields for User
export const UserQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.field("user", {
            type: "User",
            args: {
                id: nonNull(intArg()),
            },

            resolve(_parent, args, ctx) {
                const { id } = args;
                const requestedUser = ctx.db.users.find(user => user.id === id);

                return requestedUser;
            },
        });

        t.nonNull.list.field("users", {
            type: "User",

            resolve(_parent, _args, ctx) {
                return ctx.db.users
            },
        });
    },
});

// Mutation root fields for User
export const UserMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("createUser", {
            type: "User",
            args: {
                name: nonNull(stringArg()),
            },

            resolve(_parent, args, ctx) {
                const user = {
                    id: Math.floor(Math.random() * 100), // pseudo ID
                    name: args.name,
                }

                ctx.db.users.push(user);
                return user;
            }
        });
    },
});
