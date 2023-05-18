import "./style/login.css";

import { useAuthContext } from "../../AuthContext/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}

export const Login = () => {
    const { onLoginSubmit } = useAuthContext();
    const {values, changeHandler, onSubmit} = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
        <div className="login-parent">
            <section id="login-form">
                <form id="login" method="POST" onSubmit={onSubmit}>
                    <h1>Sign In</h1>
                    <div className="inset">
                        <p>
                            <label htmlFor="email">EMAIL ADDRESS</label>
                            <input type="text" id="email" name={LoginFormKeys.Email} value={values[LoginFormKeys.Email]} onChange={changeHandler}/>
                        </p>
                        <p>
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" id="password" name={LoginFormKeys.Password} value={values[LoginFormKeys.Password]} onChange={changeHandler} />
                        </p>
                    </div>
                    <p className="p-container">
                        <input type="submit" name="go" id="go" value="Login" />
                    </p>
                </form>
            </section>
        </div>
    );
};