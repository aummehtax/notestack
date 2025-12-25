import { useDispatch, useSelector } from "react-redux"
import { eyeToggle } from '../../redux/slices/eyeToggleSlice'


const Login = () => {

  const darkAndLight = useSelector((state) => state.theme.darkMode)
  const dispatch = useDispatch()
  const eyeHandle = useSelector((state) => state.eye)
  

  return (
    <div className={`w-full relative select-none h-screen flex justify-center items-center ${darkAndLight ? "bg-black" : "bg-white"}  overflow-hidden`}>

  
    {/* top gradient blob */}
    <div
      aria-hidden="true"
      className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    >
      <div
        style={{
          clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
        className="relative left-[calc(50%-16rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fe523b] to-[#ff8a73] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      />
    </div>


    {/* bottom gradient blob */}
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(96%-30rem)]"
    >
      <div style={{
        clipPath:
        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#fe523b] to-[#ff8a73] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      />
    </div>
  
  
  {/* login */}
  <div className="left w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[25%] h-auto sm:h-[58%] p-5 px-6 sm:px-13 py-6  rounded-md border-[#fe523b] z-30">
    <h1 className="text-center text-2xl font-medium">Login</h1>

   <form action="" className="flex flex-col gap-5 mt-5">
      <div>
        <label htmlFor="" className="font-medium">Email</label>
        <input type="email" className="w-full h-10 mt-3 border border-gray-400 rounded-md px-4 outline-0" placeholder="name@mail.com"/>
      </div>

      <div className='relative'>
        <label htmlFor="" className="font-medium">Password</label>
         <input  type={`${eyeHandle ? "text" : "password" }`} className=" w-full mt-3 h-10 border border-gray-400 rounded-md px-4 outline-0" placeholder="******"/>

          <div onClick={() => {
                       dispatch(eyeToggle())
                     }} 
                     className="absolute right-2 bottom-2.5 cursor-pointer">
                       {  
                         eyeHandle ? 
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                         :
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>
                       }
                       
                     </div>
      </div>

      <div>
        <button type="submit" className="w-full h-10 cursor-pointer bg-[#fe523b] rounded-md font-medium">LOG IN</button>
        <h2 className="font-medium my-4 cursor-pointer">Forgot Password</h2>
      </div>

      <button type="button" className="w-full h-10 flex justify-center items-center gap-3 rounded-md cursor-pointer bg-black border border-gray-400 font-medium tracking-tight text-white">
        <img src="https://res.cloudinary.com/aumcloud003/image/upload/v1766649701/search_npceah.png" alt="" className="w-5 h-5"/>
        <span className="text-sm sm:text-base">LOG IN WITH GOOGLE</span>
      </button>

      <a href="/signup" className="text-center font-medium text-sm sm:text-base">Not registered? <span className="font-bold">Create account</span></a>
   </form>


  </div>

</div>
  )
}

export default Login
