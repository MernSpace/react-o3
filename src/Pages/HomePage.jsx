import React from 'react';
import MsLayout from "../MsLayout/MsLayout.jsx";
import '../assets/css/Home.css'
import Forms from "../Component/Forms.jsx";


const HomePage = () => {
    const data=[{
        img:"../public/logo-2.png"
    },{
        img:"/logo-3.png"
    },{
        img:"/logo-4.png"
    },{
        img:"/logo-4.png"
    },{
            img:"/logo-4.png"
        }
    ]
    return (
        <MsLayout>
           <div className="container lg:flex mt-5 justify-between p-10 mb-50">
            <div className="align-middle">
                <h1 className="text-5xl">Increase Your<br/> Customers Loyalty <br/>and Satisfaction</h1>
                <h6 className="mt-10">We help businesses like yours earn more customers,<br/> standout from competitors, make more money</h6>
                <butoon className="btn mt-10">Get Started</butoon>
            </div>
            <div className="">
                <div className="lg:flex">
                    <img className="mr-5" src="../src/assets/imges/img-1.png"/>
                    <img src="../src/assets/imges/img-2.png"/>
                </div>
                <div className="mt-5 lg:flex">
                    <img src="../src/assets/imges/img-3.png"/>
                    <img className="ml-5" src="../src/assets/imges/img-4.png"/>
                </div>
            </div>

           </div>
            <div className="lg:flex pb-15 container justify-between mt-10">
                {
                    data.map((item,i)=>{
                        return(
                            <div key={i}>
                                <img src= {item['img']}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="myhm ml-10 pb-50">
                <div className="mb-50 ml-50">
                    <h1 className="font-bold text-neutral-900">Work List</h1>
                    <h2>We provide the Perfect Solution<br/>to your business growth</h2>
                </div>
                <div className="lg:flex justify-around mt-5">
                    <div>
                        <img src="../src/assets/imges/icon-1.png"/>
                        <h1>Grow Your Business</h1>
                        <button className="btn-primary p-2.5 rounded-tr-lg rounded-bl-md mt-10">Get Start</button>
                    </div>
                    <div>
                        <img src="../src/assets/imges/icon-1.png"/>
                        <h1>Grow Your Business</h1>
                        <button className="btn-primary p-2.5 rounded-tr-lg rounded-bl-md mt-10">Get Start</button>
                    </div>
                    <div>
                        <img src="../src/assets/imges/icon-1.png"/>
                        <h1>Grow Your Business</h1>
                        <button className="btn-primary p-2.5 rounded-tr-lg rounded-bl-md mt-10">Get Start</button>
                    </div>
                </div>
            </div>

            <div className="lg:flex justify-between myhm">
                <img src="../src/assets/imges/Group 4.png"/>
                <img src="../src/assets/imges/Group-2.png"/>
                <img src="../src/assets/imges/Group 3.png"/>
                <img src="../src/assets/imges/Group 4.png"/>

            </div>
            <div className="lg:flex justify-around myhm">
                <div>
                    <img src= "../src/assets/imges/Mask (4).png"/>
                </div>
                <div className=" ">
                    <img src="../src/assets/imges/Mask (1).png"/>
                    <img className="mt-10" src="../src/assets/imges/Mask (2).png"/>
                </div>
                <div className="">
                    <img src="../src/assets/imges/Mask (3).png"/>
                    <img className="mt-10" src="../src/assets/imges/Mask (2).png"/>
                </div>
            </div>
            <div className="justify-center text-center myhm mymb">
                <Forms/>
            </div>


        </MsLayout>
    );
};

export default HomePage;
