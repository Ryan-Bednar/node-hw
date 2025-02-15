import React from "react";
import "../styles/Contact.css";
import {useForm} from 'react-hook-form';
import { DevTool } from "@hookform/devtools";

export default function Contact() {
    const form = useForm();
    const { register, control, handleSubmit } = form;

    const onSubmit = (data) => {
        console.log('form subitted', data);
    }

    const usernameError = form.formState.errors.username;
    const emailError = form.formState.errors.email;
    const messageError = form.formState.errors.message;
    const messageSuccess = form.formState.isSubmitSuccessful;
    return (
        <div className='contact'>
            <h2>Contact</h2>
            <div className='contact-content'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <br />
                        <input type='text' id='name' {...register("name", { required: "Name is required" })} />
                        {usernameError && <p className="error">{usernameError.message}</p>}
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <br />
                        <input type='email' id='email' {...register("email", { required: "Email is required" })} />
                        {emailError && <p className="error">{emailError.message}</p>}
                    </div>
                    <div>
                        <label htmlFor='message'>Message:</label>
                        <br />
                        <textarea id='message' {...register("message", { required: "Message is required" })}/>
                        {messageError && <p className="error">{messageError.message}</p>}
                        <br />
                    </div>
                    <button type="submit">Submit</button>   
                    {messageSuccess && <p className="success">Thank you for your message. I will respond within 24-48 hours.</p>}

                </form>       
                <DevTool control={control} />
            </div>
        </div>
    )
}
