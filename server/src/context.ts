
import { Db, db } from "./db.js";

export interface Context {
    db: Db
}

export const context = {
    db
};
