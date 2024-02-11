export function InputBox({ Label, placeholder, onChange }) {
    return (
        <div className="pt-2">
            <div className="text-md text-left font-semibold">{Label}</div>
            <input type="text" onChange={onChange} className="p-2 mt-1 w-full border rounded-md border-slate-200" placeholder={placeholder} />
        </div>
    )

}