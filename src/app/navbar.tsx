import NavbarComponent from "../component/navbar";

interface NavItem {
  href: string;
  name: string;
}

const Link_data: NavItem[] = [
    {"href":"/tire","name":"SHOP"},
    {"href":"/board","name":"COMMUNITY"},
    {"href":"/login","name":"LOGIN"},
]

function Navbar() {
  return (
    <div>
        <NavbarComponent navItems={Link_data} />
    </div>
  );
}

export default Navbar;
