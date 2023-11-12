import React from 'react';
import MsLayout from "../MsLayout/MsLayout.jsx";
import Forms from "../Component/Forms.jsx";

const TeamPage = () => {
    return (
        <MsLayout>
            <div className="text-center mt-50 mymb myhm">
                <h1>Team Member</h1>
                <h1>Check our awesome team members</h1>
            </div >
            <div className="lg:flex justify-between">
                <img className="pl-10" src="../src/assets/imges/Rectangle1.png"/>
                <img src="../src/assets/imges/r2.png"/>
                <img src="../src/assets/imges/r3.png"/>
                <img src="../src/assets/imges/r4.png"/>
            </div>
            <div className="text-center myhm mymb"><Forms/></div>
        </MsLayout>
    );
};

export default TeamPage;