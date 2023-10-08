import { Link } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {

   const { createUser } = useContext(AuthContext);

   const handleRegister = e => {
      e.preventDefault();
      console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      const name = form.get('name');
      const password = form.get('password');
      const photo = form.get('photo');
      const email = form.get('email');
      console.log(name, password, photo, email);
      // create user
      createUser(email, password)
         .then(result => {
            console.log(result.user)
         })
         .catch(error => {
            console.error(error)
         })
   }

   return (
      <div>
         <Navbar></Navbar>
         <h1 className="text-3xl text-center">Register Here</h1>
         <div>
            <div className="hero min-h-screen bg-base-100">
               <div className="hero-content">
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                     <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Your Name</span>
                           </label>
                           <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text">Photo URL</span>
                           </label>
                           <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered" required />
                        </div>
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
                           {/* <label className="label">
                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                           </label> */}
                        </div>
                        <div className="form-control mt-6">
                           <button className="btn btn-primary">Register</button>
                        </div>
                     </form>
                     <p className="text-sm p-2">Already have an account? <Link to='/login' className="text-red-500 font-bold underline">Login</Link></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;