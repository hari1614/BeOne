import './style.displayContent.css';
import Island1 from '../../assets/images/island1.jpg';
const displayContent = (props) => {
    console.log('props:', props)
   
    return (

        <div className={"display-content " + props.data.dynamic_style}>
            <div className='left-content'>
                <div>
                    <h1>{props.data.title}</h1>  
                    <p>{props.data.discription}</p>
                    <button className='left-button'>{props.data.button}</button>
                </div>
            </div>
            <div className="right-content">
                 <img src={props.data.display_img} alt="El nildo" />  
            </div>
        </div>
    );
}

export default displayContent;


 // const DisplayItems = () => {
    //     const components = [];
    //     for(let i = 0; i < 3;i++) {
    //         components.push(
    //             <div  className = "content-one"key={i}>
    //                 <h1>hello world</h1>
    //                 <p>hey how old are you</p>
    //             </div>
    //         );
    //     }
    //     return components;