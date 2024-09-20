import { Link } from 'react-router-dom';
import Login from './Login';
import axios from 'axios'
import { useForm } from "react-hook-form"

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const onSubmit = async(data) =>{
        const userInfo = {
            fullname: data.fullname,
            email:data.email,
            password:data.password
        }
        await axios.post('http://localhost:3000/user/signup', userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                alert("Signup Success")
            }
        }).catch((err)=>{
             console.log(err)
             alert("Error: ", err)
        })
    }

    return (
        <div className={`w-full flex h-screen justify-center items-center`}>
            <div className="w-[700px]">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* Close modal button */}
                        <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </Link>
                    </form>
                    <h3 className="font-bold text-lg">SignUp</h3>
                    {/* Name */}
                    <div className="flex flex-col mt-4 space-y-2">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-80 outline-none px-3 py-1 border rounded-md"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    {/* Email */}
                    <div className="flex flex-col mt-4 space-y-2">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-80 outline-none px-3 py-1 border rounded-md"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    {/* Password */}
                    <div className="flex flex-col mt-4 space-y-2">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-80 outline-none px-3 py-1 border rounded-md"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    {/* modal bottom */}
                    <div className="flex mt-2 justify-between items-center h-20">
                        <button className="btn bg-pink-600 h-4">SignUp</button>
                        <p>Have an account?{' '}
                            <button className='text-blue-500 underline cursor-pointer' onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button>
                            <Login />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
