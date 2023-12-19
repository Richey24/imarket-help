import Markdown from 'react-markdown'
import { SiOpenai } from "react-icons/si";
import remarkGfm from "remark-gfm";
import lily from "./bot-lady.jpg"

export default function ChatMessage({ message, role }) {

    const roleIcon = role === "user"
        ? <div className="rounded-full h-8 w-8 bg-slate-400 flex items-center justify-center font-semibold text-slate-100 shrink-0">C</div>
        : <div className="rounded-full h-12 w-12 bg-pink-600 flex items-center justify-center font-semibold text-slate-50 shrink-0"><img className='rounded-full' src={lily} /></div>

    const roleName = role === "user"
        ? "Customer"
        : "Lily"

    return (
        <div className="flex flex-row mx-2 my-4">
            {roleIcon}
            <div className="p-1 ml-2">
                <div className="flex-col">
                    <p className="font-semibold text-slate-300">{roleName}</p>
                    <Markdown
                        className="text-slate-50 markdown"
                        remarkPlugins={[remarkGfm]}
                    >
                        {message}
                    </Markdown>
                </div>
            </div>
        </div>
    )
}