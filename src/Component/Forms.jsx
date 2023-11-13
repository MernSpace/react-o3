import React, {useState} from 'react';

const Forms = () => {
    const [formObj, setFormObj] =useState({
        name:""
    })
    const InputOnChange =(property, value)=>{
        setFormObj((prevObj) => ({
            ...prevObj,
            [property]: value
        }));
    }
    const FormSubmit=(e)=>{
        e.preventDefault();
        alert(JSON.stringify(formObj))
    }

    return (
        <div className="justify-center ">
           <h1>SUBSCRIBE</h1>
            <h1>Subscribe to get the latest news about us</h1>
            <p>Please drop your email below to get daily update about what we do</p>
            <input onChange={(e)=>{InputOnChange("name",e.target.value)}} value={FormObj.fName} className="input mt-10 border-blue-500" type="text"/>
            <button onClick={FormSubmit} className="btn-primary p-2">Submit</button>
        </div>
    );
};

export default Forms;
