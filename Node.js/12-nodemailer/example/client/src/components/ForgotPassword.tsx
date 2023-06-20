import  { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    
    const [email, setEmail] = useState()
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(event:any) {
        event.preventDefault()
        setLoading(true)
        const {data} = await axios.post("/api/auth/forgot-password", {email})
        if (data?.error) {
          console.log(data?.error.message)
          setLoading(false)
        } else {
          setLoading(false)
          console.log("Please check your email to reset your password.")
          navigate("/")
        }
    }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <form onSubmit={handleSubmit}>
            <legend className="">Forgot Password</legend>
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
              <button
              disabled={loading}
                type="submit"
                className="btn btn-primary mt-5 col-12 mb-4"
              >
                {loading ? 'Waiting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword