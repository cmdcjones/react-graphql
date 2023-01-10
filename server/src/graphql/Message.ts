import { objectType } from "nexus";

export const Message = objectType({
    name: "Message",
    definition(t) {
        t.int("id");
        t.string("body");
    },
});
