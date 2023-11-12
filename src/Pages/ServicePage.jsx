import React from 'react';
import MsLayout from "../MsLayout/MsLayout.jsx";
import Forms from "../Component/Forms.jsx";

const ServicePage = () => {
    return (
        <MsLayout>
          <div className="ml-10 mr-10">
              <h1></h1>
              <p></p>
             <div>
                 <div className="flex myhm">
                     <img className="mr-10" src="../src/assets/imges/Mask.png"/>
                     <img src="../src/assets/imges/Mask.png"/>
                     <img className="mr-10" src="../src/assets/imges/Mask.png"/>
                     <img src="../src/assets/imges/Mask.png"/>
                 </div>
                 <div className="flex myhm">
                     <img className="mr-10" src="../src/assets/imges/Mask.png"/>
                     <img src="../src/assets/imges/Mask.png"/>
                     <img className="mr-10" src="../src/assets/imges/Mask.png"/>
                     <img src="../src/assets/imges/Mask.png"/>
                 </div>
             </div>
          </div>
            <div className="text-center myhm mymb"><Forms/></div>
        </MsLayout>
    );
};

export default ServicePage;