
// How the data in Message should be formatted and accepted
export interface Message {
    id: number
    body: string
}

export interface User {
    id: number
    name: string
}

// How the data in Db should be formatted, accepted, and interacted with
export interface Db {
    messages: Message[]
    users: User[]
}

// Export a 'database' that contains an accepted field 'messages' that is 
// an array containing data of type Message
export const db: Db = {
    messages: [{ id: 1, body: "hello there", }, { id: 2, body: "goodbye here", }],
    users: [{ id: 1, name: "Dom" }, { id: 2, name: "Test" }],
};
