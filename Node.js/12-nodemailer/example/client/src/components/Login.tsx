import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(event:any) {
        event.preventDefault()
        setLoading(true)
        const {data} = await axios.post("/api/users/login", {email, password})
        if (data?.error) {
          setLoading(false)
        } else {
          console.log(data)
          setLoading(false)
          console.log("Login successful")
          navigate("/home")
        }
    }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <form onSubmit={handleSubmit}>
            <legend className="">Login</legend>
            <div className="form-group row">
              <p className="col-sm- col-form-label">
                Not a member?<span> </span>
                <Link to="/register">Click here to register</Link>
              </p>
            </div>
            <div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                  autoFocus
                  onInput={(ev: any) => {
                    setEmail(ev.target.value);
                  }}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label mt-4"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                  value={password}
                  onInput={(ev: any) => {
                    setPassword(ev.target.value);
                  }}
                />
              </div>
              <button
              disabled={loading}
                type="submit"
                className="btn btn-primary mt-5 col-12 mb-4"
              >
                {loading ? 'Waiting...' : 'Log In'}
              </button>
            </div>
          </form>
          <Link className='text-danger' to="/auth/forgot-password">Forgot password</Link>
        </div>
      </div>
    </div>
  )
}

export default Login