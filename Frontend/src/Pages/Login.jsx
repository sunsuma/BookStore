import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div id='loginPage'>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link to={'/'} className="btn btn-sm btn-circle outline-none btn-ghost absolute right-2 top-2"
            onClick={()=>document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className="flex flex-col mt-4 space-y-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 outline-none px-3 py-1 border rounded-md"
                {...register("email", { required: "Email is required" })} 
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            {/* Password */}
            <div className="flex flex-col mt-4 space-y-2">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 outline-none px-3 py-1 border rounded-md"
                {...register("password", { required: "Password is required" })} 
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>
            {/* modal bottom */}
            <div className="flex mt-2 justify-between items-center h-20">
              <button className="btn bg-pink-600 h-4">Login</button>
              <p>Not registered?{" "}
                <Link to={'signup'} className='text-blue-500 underline'>Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;