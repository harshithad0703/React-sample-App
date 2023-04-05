import Navigation from "./Navigation";
const navLinks = [
    { href: "#home", displayName: "HOME"},
    { href: "#blog", displayName: "BLOG"},
    { href: "#contact", displayName: "CONTACT"}
]
const Header = ()=>{
    return (<header>
        <Navigation navLinks={navLinks}/>
    </header> 
    );
}
export default Header;