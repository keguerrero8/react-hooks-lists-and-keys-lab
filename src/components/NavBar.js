import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navLink = links.map(link => <a key={link} href={"#"+link}>{link}</a>)

  return (
    <nav>
      {navLink}
    </nav>
  )

}

export default NavBar;
