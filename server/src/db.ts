
export interface Message {
    id: number
    body: string
}

export interface Db {
    messages: Message[]
}

export const db: Db = {
    messages: [{ id: 1, body: "hello there", }, { id: 2, body: "goodbye here", }],
};
