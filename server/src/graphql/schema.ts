import { makeSchema } from "nexus";

import { join, dirname } from "path";
import { fileURLToPath } from "url";

import * as types from ".";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const schema = makeSchema({
    types,
    outputs: {
        schema: join(__dirname, '..', 'schema.graphql'),
        typegen: join(__dirname, '..', 'nexus-typegen.ts'),
    },
});
