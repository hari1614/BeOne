
import '../Navbar/style.navbar.css'
import { MenuItems } from "./MenuItems";
const Navbar = () => {
  
  return (

    <nav className="navbar">
      <div className="navbar-icon">
        <h1>beOne<i class="fa-solid fa-feather-pointed"></i></h1>
      </div>
      <div className="navbar-links">
        {MenuItems.map((item, index) => {
          return (
            <a href={item.url} className={item.clsName}>
              <i className={item.icon}></i>
              {item.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;