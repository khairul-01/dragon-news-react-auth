import { Link } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";


const Login = () => {

   const handleLogin = e => {
      e.preventDefault();
      console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      console.log(form.get('email'));
   }
   return (
      <div>
         <Navbar></Navbar>
         <h1 className="text-3xl text-center">Login Here</h1>
         <div>
            <div className="hero min-h-screen bg-base-100">
               <div className="hero-content">
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                     <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Email</span>
                           </label>
                           <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Password</span>
                           </label>
                           <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                           <label className="label">
                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                           </label>
                        </div>
                        <div className="form-control mt-6">
                           <button className="btn btn-primary">Login</button>
                        </div>
                     </form>
                     <p className="text-sm p-2">Do not have an account? <Link to='/register' className="text-red-500 font-bold underline">Register</Link></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;