import { User } from "./types";

export default function App() {
    const users: User[] = [
        {
            name: "Dominique",
            messages: [
                {
                    body: "Prisma rocks!",
                },
                {
                    body: "Did I mention I love Prisma?",
                },
            ],
        },
];

    return (
        <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap">
            <h2 className="text-4xl text-yellow-500">Hello, world!</h2>
        </div>
    );
}
