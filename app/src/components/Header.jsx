import logo from "./logo.png"


export default function Header({ onNewChat }) {
    return (
        <div className="flex flex-row justify-between p-4 bg-slate-500 rounded-xl my-4">
            <img style={{ width: "120px", height: "40px" }} src={logo} alt="" />
            <p className="text-3xl text-slate-200 font-semibold">Ishop AI</p>
            <button
                className="bg-slate-400 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded"
                onClick={onNewChat}
            >New chat</button>
        </div>
    )
}