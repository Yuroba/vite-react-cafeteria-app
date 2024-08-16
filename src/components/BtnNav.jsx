
export const NavButton = ({to, label, onMouse})=>{
    return (
        <a href={to} className="nav-button" onMouseOver={onMouse} onMouseOut={onMouse}>{label}</a>
    )
}
