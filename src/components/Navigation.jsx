const Navigation = (props) => {

    return (
        <div className="navbar">
            <ul >
                {props.navLinks.map((link) => {
                    return (
                        <li key={link.href}>
                            <a href={link.href}>
                                {link.displayName}
                            </a>
                        </li>)
                })}
            </ul>
        </div>
    )
}
export default Navigation;


