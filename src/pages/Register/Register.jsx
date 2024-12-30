import { useForm } from "react-hook-form";
import { Link } from "react-router";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";


const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [message, setMessage] = useState("")
    // const navigate = useNavigate();


    const onSubmit = async(data) =>{
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
        }

        try {
            const response = await axios.post(
              "https://react-interview.crd4lc.easypanel.host/api/register",
              userInfo,
              {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              }
            );
      
            if(response.data.status_class){
                Swal.fire({
                    title: "Drag me!",
                    icon: "success",
                    draggable: true
                  });
            }
          } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            setMessage("Registration failed. Please try again.");
          }        
    }
    
    
    return (
        <div>
        <div className="mx-auto md:w-1/2">
           <h2 className="text-3xl mb-6 text-center">Please Register</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Your Name" {...register('name', {required: true})} className="border w-full mb-4 py-2 px-4" />
                    {
                        errors.name && <span className="text-red-500">Name is required</span>
                    }
                    <br />
                    <input type="email" placeholder="Email" {...register('email', {required:true})} className="border w-full py-2 px-4 mb-4" />
                    {
                        errors.email && <span className="text-red-500">Email is required</span>
                    }
                    <br />
                    <input type="password" placeholder="Password" {...register('password',{required:true, minLength:6, pattern:/(?=.*[A-Z])(?=.*[a-z])/})} className="border w-full py-2 px-4 mb-4" />
                        {
                            errors.password?.type === 'required' && <p className="text-red-500">Password must be required</p>
                        }
                        {
                            errors.password?.type ==='minLength' && <p className="text-red-500">Password must be at least six character</p>
                        }
                        {
                            errors.password?.type ==='pattern' && <p className="text-red-500">Password must be at least one upper case , one lower case</p>
                        }
                    <br />
                    <input className="btn btn-secondary w-full mb-4" type="submit" value="Register" />
                </form>
           <p className="text-center mb-5">Already registered? Please <Link className="text-blue-500" to="/login">Login</Link> </p>
       </div>  
      </div>   
    );
};

export default Register;