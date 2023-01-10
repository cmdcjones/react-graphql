import { extendType, objectType } from "nexus";

// Create the shape of type Message that defines
// what fields each Message contains, what can be interacted with
// and the shape of the data returned
export const Message = objectType({
    name: "Message",
    definition(t) {
        t.int("id");
        t.string("body");
    },
});

// Create a root field 'hello' that extends Query
// and resolves a type Message (specifically [Message]!)
export const MessageQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.field("hello", {
            type: "Message",

            resolve (_root, _args, ctx) {
                return ctx.db.messages.filter(msg => msg.body === "goodbye here");
            },
        });
    },
});
