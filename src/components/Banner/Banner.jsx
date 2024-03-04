import '../Banner/style.banner.css';
import { content } from './content';
import banner from '../../assets/images/garth-pratt-3YfSwCfJ6Do-unsplash.jpg'
const Banner = () => {
    return ( 
        <div className="banner">
               <img src={banner} alt="Banner" />
         <div className="banner-content">
            {content.map((item, index)=> {
                return(
                    <div key={index}>
                    <h1>{item.head}</h1>
                    <p>{item.paragraph}</p>
                    </div>
                )
            })}
            
      

          
        </div>
      </div> 

     );
}
 
export default Banner;