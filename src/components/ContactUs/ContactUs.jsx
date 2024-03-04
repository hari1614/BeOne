import '../ContactUs/style.contactUs.css'
import Contact from '../../assets/images/best-contact-us-pages-2.png'
const ContactUs = () => {
    return (
        //     <div class="full-screen-container">
        //     <div class="login-container">
        //         <h1 class="login-title">Welcome</h1>
        //         <form class="form">
        //             <div class="input-group success">
        //                 <label for="email">Email</label>
        //                 <input type="email" name="email" id="email"/>
        //                 <span class="msg">Valid email</span>
        //             </div>

        //             <div class="input-group error">
        //                 <label for="password">Password</label>
        //                 <input type="password" name="password" id="password"/>
        //                 <span class="msg">Incorreact password</span>
        //             </div>

        //             <button type="submit" class="login-button">Login</button>
        //             <button type="submit" class="login-button">Register</button>
        //         </form>
        //     </div>
        // </div>
        <div className="contact-us">
            <h1>Get in Touch: Reach Out and Let's Explore Together</h1>
            <div className="form">
                <div className="form-left">
                    {<form className="input-group">
                        <label htmlFor="name">Name</label><br />
                        <input type="text" /><br />
                        <label htmlFor="email">Email</label><br />
                        <input type="email" /><br />
                        <label htmlFor="message">Message</label><br />
                        <textarea name="textarea" id="" cols="30" rows="10"></textarea><br />
                        <button>Submit</button>
                    </form>}

                </div>
                <div className="form-right">
                    <img src={Contact} alt="contact" />
                </div>
            </div>
            {/* <div className="right">
                <img src={Contact} alt="contact" />
            </div> */}
        </div>
    );
}

export default ContactUs;