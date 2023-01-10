import { extendType, objectType } from "nexus";

export const Message = objectType({
    name: "Message",
    definition(t) {
        t.int("id");
        t.string("body");
    },
});

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
