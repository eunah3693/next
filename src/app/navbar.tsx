import Navbar_Component from "../component/Navbar";

const Link_Info = [
    {"href":"/tire","name":"SHOP"},
    {"href":"/board","name":"COMMUNITY"},
    {"href":"/login","name":"LOGIN"},
]

function Navbar() {
  return (
    <div>
        <Navbar_Component navItems={Link_Info}></Navbar_Component>
    </div>
  );
}

export default Navbar;