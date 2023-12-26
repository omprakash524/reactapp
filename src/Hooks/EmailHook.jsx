import React from "react";
import { useState } from "react";

export default function Registration(){
    const [form, setForm] = useState({
        firstName : 'Om',
        lastName : "Prakash",
        email : 'OmPrakash@sculpture.com',
    });

    return(
        <>
        <label>
            First name : 
            <input value={form.firstName}
            onChange={e=>{
                setForm({
                    ...form,
                    firstName: e.target.value
                });
            }}
            />
        </label>
        <br></br>
        <label>
            Last name:
            <input value={form.lastName}
            onChange={e=>{
                setForm({
                    ...form,
                    lastName : e.target.value
                });
            }}
            />
        </label>
        <br></br>
        <label>
            Email : 
            <input value={form.email}
            onChange={e=>{
                setForm({
                    ...form,
                    email : e.target.value
                });
            }}
            />
        </label>
        <p>
            {form.firstName}{' '}
            {form.lastName}{' '}
            {/* ({form.email}) */}
            {form.email}
        </p>

        <button onClick={()=>{setForm('')}}>Reset</button>
        </>
    );
};