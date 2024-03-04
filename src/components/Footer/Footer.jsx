import '../Footer/style.footer.css'
const Footer = () => {
    return (
        <div className="about-main">
            <div className="categories">
                <h1>Categories</h1>
                <ul>

                    <li><a href="#Asia">Asia Tour</a></li>
                    <li><a href="#Europe">Europe Adventures</a></li>
                    <li><a href="#Destinations">Destinations</a></li>
                    <li><a href="#Seasonal tour">Seasonal Tour</a></li>
                </ul>
            </div>
            <div className="contact">
                <h1>Contact</h1>
                <ul>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms Of Service</a></li>
                    <li><a href="/categories">Categories</a></li>
                    <li><a href="/about">About</a></li>
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