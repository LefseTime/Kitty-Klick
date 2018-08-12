import React from "react";
import "./KittyCard.css";

// class KittyCard extends App {
//     state = {
//         clicked: false
//     }

//     render = () => (
//         <div className="card">
//             <div className="img-container" onClick={this.clickKitty}>
//                 <img alt={props.name} src={props.image} />
//             </div>
//         </div>


//     )
// }



const KittyCard = props => (
    <div className="card">
        <div className="img-container" onClick={this.clickKitty}>
            <img alt={props.name} src={props.image} />
        </div>
    </div>



);

export default KittyCard;