import React from 'react';
import MsLayout from "../MsLayout/MsLayout.jsx";
import Forms from "../Component/Forms.jsx";

const TestimonialPage = () => {
    return (
        <MsLayout>
            <div className="flex justify-between text-center myhm">
                <div className="items-center">
                    <img  src="../src/assets/imges/person.png"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                    <h1>Alice Bradley</h1>
                    <h4>Backend Developer</h4>
                </div>
                <div>
                    <img src="../src/assets/imges/person.png"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                    <h1>Alice Bradley</h1>
                    <h4>Backend Developer</h4>
                </div>
                <div>
                    <img src="../src/assets/imges/person.png"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                    <h1>Alice Bradley</h1>
                    <h4>Backend Developer</h4>
                </div>
                <div>
                    <img src="../src/assets/imges/person.png"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.</p>
                    <h1>Alice Bradley</h1>
                    <h4>Backend Developer</h4>
                </div>

            </div>
            <div className="myhm mymb text-center"><Forms/></div>
        </MsLayout>
    );
};

export default TestimonialPage;