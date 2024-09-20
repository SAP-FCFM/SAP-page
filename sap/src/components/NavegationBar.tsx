import './NavegationBar.css'
import viteLogo from '/vite.svg'
function Header() {
    const navItemList = [
        {
            name: "Inicio",
            url:""
        },
        {
            name: "Noticas",
            url:""
        },
        {
            name: "Nosotros",
            url:""
        },
        {
            name: "Contacto",
            url: ""
        },
        {
            name: "Historia",
            url: ""
        },
        {
            name: "Eventos",
            url:""
        }

    ]
    return (
        <>
            <nav className="NavBar">
                <a>
                    <img src={viteLogo} alt="Vite logo" />
                </a>
                <ul>
                    {
                        navItemList.map(navItem => (
                            <li id={navItem.name} className = "ItemNav" >
                                <a href={navItem.url}>
                                    {navItem.name}
                                </a>
                            </li>
                        )
                        )
                    }
                </ul>
            </nav>
        </>
   
  );
}

export default Header;