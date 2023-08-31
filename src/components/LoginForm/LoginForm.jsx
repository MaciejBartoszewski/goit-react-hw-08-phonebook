import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/actions";


export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
    };

    return (
        <form
            onSubmit={handleSubmit}
            autoComplete="off"
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center"
            }}
        >
            <label>
                Username
                <input type="text" name="name" />
            </label>
            <label>
                Email
                <input type="email" name="email" />
            </label>
            <label>
                Password
                <input type="password" name="password" />
            </label>
            <button type="submit">Log in</button>
        </form>
    );
};