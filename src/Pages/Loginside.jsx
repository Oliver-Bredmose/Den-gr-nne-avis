export function Login(){


const login = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const bodyJSON = JSON.stringify({
        username: username,
        password: password,
    });

    const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: bodyJSON,
    });
    
    const responseText = await res.text();
    let data;

    try {
        data = JSON.parse(responseText);
    } catch {
        data = { message: responseText };
    }

    console.log("data", data);
    console.log("user og pass", username, password);

    if (!res.ok) {
        alert(data.message || "Login mislykkedes");
    }
    };

    return (
        <>
            <h1>Login</h1>
            <p>Intast dit Brugeranvn og password</p>
            <form onSubmit={(e) => login(e)}>
                <input
                type="text"
                name="username"
                placeholder="indtast brugernavn"
                ></input>
                <input
                type="password"
                name="password"
                placeholder="Indtast Password"
                ></input>
                <input type="submit" value="Login"></input>
            </form>
        </>
    );
}