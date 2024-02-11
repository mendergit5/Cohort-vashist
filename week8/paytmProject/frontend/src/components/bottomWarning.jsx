import { Link } from "react-router-dom"

export function BottomWarningComponent({ Label, buttontext, to }) {
    return (
        <div className="pb-1 flex justify-center py-4">
            <div className="">{Label}</div>
            <Link className="pl-1 pointer underline" to={to}>{buttontext}</Link>
        </div>
    )
}