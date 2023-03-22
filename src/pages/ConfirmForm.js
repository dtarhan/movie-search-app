import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ConfirmForm = (props) => {
    const { showComponent, setShowComponent } = props;
    console.log(showComponent);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Confirm = () => {
        setShowComponent(true)
        navigate("/")
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        //validation

        if (

            email === "" ||
            password === "") {
            alert("Email and password should be required.")
            return
        }
        if (password.length < 6) {
            alert("Password should be longer than 6 letters.")
            return
        }


        const newUser = {
            id: String(new Date().getTime()),
            email: email,
            password: password,

        }


    };
    return (
        <div>
            <div className="container my-5">
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email Adress
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Ex: dtarhan@gmail.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="password"
                            placeholder="Ex: 123456"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className="d-flex justify-content-center my-5">
                        <button type="submit" onClick={Confirm} className="btn btn-primary w-20">
                            Kaydet
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ConfirmForm