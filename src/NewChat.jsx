import { Link } from "react-router-dom";

export default function NewChat() {
    return (
        <div className="row-start-2 flex items-center justify-center bg-white p-4 rounded-lg shadow-md dark:bg-gray-200">
            <button className="text-md flex items-center justify-center gap-3 text-purple-600 rounded-xl border border-[#DECCFF] text-black px-5 py-2.5 transition hover:bg-[#DECCFF]/20">
                <Link to="/history">
                    New Chat
                </Link>
            </button>
        </div>
    );
}