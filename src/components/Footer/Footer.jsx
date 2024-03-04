import '../Footer/style.footer.css'
const Footer = () => {
    return (
        <div className="about-main">
            <div className="categories">
                <h1>Categories</h1>
                <ul>

                    <li><a href="#">Asia Tour</a></li>
                    <li><a href="#">Europe Adventures</a></li>
                    <li><a href="#">Destinations</a></li>
                    <li><a href="#">Seasonal Tour</a></li>
                </ul>
            </div>
            <div className="contact">
                <h1>Contact</h1>
                <ul>
                    <li><a href="/category/Sports">Contact</a></li>
                    <li><a href="/category/Sports">Privacy Policy</a></li>
                    <li><a href="/category/Sports">Terms Of Service</a></li>
                    <li><a href="/category/Sports">Categories</a></li>
                    <li><a href="/category/Sports">About</a></li>
                </ul>
            </div>
            <div className="option">
                <select name="Country">
                    <option value="United States">India</option>
                    <option value=" "> </option>
                    <option value=" "> </option>
                    <option value=" "> </option>
                    <option value=" "> </option>
                </select>
            </div>


        </div>
    );
}

export default Footer;