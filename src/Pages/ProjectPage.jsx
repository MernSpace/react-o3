import React from 'react';
import MsLayout from "../MsLayout/MsLayout.jsx";
import Forms from "../Component/Forms.jsx";

const ProjectPage = () => {
    return (
        <MsLayout>
           <div>
               <div>
                   <img src="../src/assets/imges/All.png"/>
                   <img src="../src/assets/imges/all (2).png"/>
               </div>
           </div>
            <div className="myhm mymb text-center"><Forms/></div>
        </MsLayout>
    );
};

export default ProjectPage;