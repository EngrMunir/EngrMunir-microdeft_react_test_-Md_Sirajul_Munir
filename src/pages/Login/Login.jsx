
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import Swal from "sweetalert2";


const Login = () => {
 
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async(data) =>{
     
     const userInfo ={
        email: data.email,
        password: data.password
     }
    
          const response = await axios.post(
            "https://react-interview.crd4lc.easypanel.host/api/login",
            userInfo,
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );
    
        //   console.log(response.data.data.token)
          const token = response.data.data.token;
          
          if(token){
            localStorage.setItem("authToken", token); 
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "LoggedIn Successful",
                showConfirmButton: false,
                timer: 1500
              });
          }
        } ;


    return (
        <div>
        <div className="mx-auto md:w-1/2">
           <h2 className="text-3xl mb-6 text-center">Please Login</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
              
               <input type="email" placeholder="Email" {...register('email', {required:true})} className="border w-full py-2 px-4 mb-4" />
               {
                    errors.email && <span className="text-red-500">Email is required</span>
                }
               <br />
               <input type="password" placeholder="Password" {...register('password',{required:true})} className="border w-full py-2 px-4 mb-4" />
               {
                    errors.password && <span className="text-red-500">Password is required</span>
                }
               <br />
               <input className="btn btn-secondary w-full mb-4" type="submit" value="Login" />
           </form>
           <p className="text-center mb-5">New here? Please <Link className="text-blue-500" to="/register">Register</Link> </p>
       </div>  
      </div>   
    );
};

export default Login;