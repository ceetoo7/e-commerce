import './Login.css'
const Login = ()=>{
    return (
        <div className='container'>
            <form className="login-form">
            <h1>Login Page</h1>

            <label htmlFor="email">Email : </label>
            <input type="email" name="email" />

            <label htmlFor="Password">Password : </label>
            <input type="password" name="password" />

            <button className="btn-submit">Submit</button>

            <div className='new'>
                <p>Not a member yet?</p>
                <a href="/register">Register</a>
            </div>
        </form>
        </div>
    )
}

export default Login