import './Register.css'
const Register = ()=>{
    return (
        <div className='container'>
            <form className="register-form">
            <h1>Register Page</h1>
            <label htmlFor="username">Username : </label>
            <input type="text" name="username" />

            <label htmlFor="email">Email : </label>
            <input type="email" name="email" />

            <label htmlFor="Password">Password : </label>
            <input type="password" name="password" />

            <label htmlFor="confirmPassword">Confirm Password : </label>
            <input type="password" name="password" />

            <button className="btn-submit">Submit</button>
        </form>
        </div>
    )
}

export default Register