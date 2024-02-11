export function ButtonComponent({ Label,onClick }) {
    return (
        <div>
            <button onClick={onClick} className="bg-slate-900 text-white py-2 px-6 rounded-lg w-full">{Label}</button>
        </div>
    )
}