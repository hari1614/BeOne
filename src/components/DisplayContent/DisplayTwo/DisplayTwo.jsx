import global from '../../../assets/images/global.png'
import './style.displayTwo.css';
const DisplayTwo = () => {
    return (
        <div className="main-items">
            <div className="main-one">
                <h1>Discover the World Your Passport to
                    Unforgettable Adventures!</h1>
                <p>
                   "Embark on a journey of a lifetime
                    with our curated selection of
                    immersive travel experiences.
                    From exploring ancient ruins to
                    basking on sun-kissed beaches,
                    let us be your guide to discovering
                    the wonders of the world. Start
                    planning your next adventure today!"
                </p>
                <img src={global} alt="global" />

            </div>
            {/* <div className="main-two">

            </div>
            <div className="main-three">

            </div> */}
        </div>
    );
}

export default DisplayTwo;