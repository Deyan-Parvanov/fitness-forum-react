import { useContext } from "react";

import "./style/register.css";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../AuthContext/AuthContext";

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (
        <div className="register-parent">
            <section id="register-form">
                <form id="register" action="" method="post" onSubmit={onSubmit} >
                    <h1>Sign Up</h1>
                    <div className="inset">
                        <p>
                            <label htmlFor="email">EMAIL ADDRESS</label>
                            <input type="text" name="email" id="email" value={values.email} onChange={changeHandler} />
                        </p>
                        <p>
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" name="password" id="password" value={values.password} onChange={changeHandler} />
                        </p>
                        <p>
                            <label htmlFor="password">CONFIRM PASSWORD</label>
                            <input type="password" name="confirmPassword" id="confirm-password" value={values.confirmPassword} onChange={changeHandler} />
                        </p>
                    </div>
                    <p className="p-container-reg">
                        <input type="submit" name="go" id="go" value="Register" />
                    </p>
                </form>
            </section>
        </div>
    );
};