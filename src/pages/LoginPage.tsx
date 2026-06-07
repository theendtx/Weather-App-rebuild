import { useAuthStore } from "../store/authStore";

function LoginPage() {
    const login = useAuthStore(state => state.login);

    return (
        <button onClick={login}>Login</button>
    );
}

export default LoginPage;