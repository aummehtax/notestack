import { useEffect, useState } from "react";

const navigation = [
  { name: "Features", href: "#" },
  { name: "Demo", href: "#" },
  { name: "Pricing", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkAndLight, setDarkAndLight] = useState(
    
   () => {
     //initialize from localstorage on first render
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? saved === "true" : true;
   }
  );

  useEffect(() => {
    localStorage.setItem("darkMode" , darkAndLight.toString())
  },[darkAndLight])

  return (
    <div
      className={`${
        darkAndLight ? "bg-black" : "bg-white"
      } select-none min-h-screen pb-30`}
    >
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                alt="NoteStack"
                src="https://res.cloudinary.com/aumcloud003/image/upload/v1766398828/Untitled_design-Photoroom_b2jhwv.png"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden ">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700`}
            >
              <span className="sr-only">Open main menu</span>
              {darkAndLight ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold ${
                  darkAndLight ? "text-white" : "text-gray-700"
                }`}
              >
                {item.name}
              </a>
            ))}

            <div
              onClick={() => { setDarkAndLight(!darkAndLight)}}
              className="cursor-pointer"
            >
              {darkAndLight ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-sun-icon lucide-sun"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#141414"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-moon-icon lucide-moon"
                >
                  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                </svg>
              )}
            </div>

            <a
              href="#"
              className={`text-sm font-semibold ${
                darkAndLight ? "text-white" : "text-gray-700"
              }`}
            >
              Sign in
            </a>
            <a
              href="#"
              className="rounded-md bg-[#fe523b] hover:bg-[#e6442f] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors"
            >
              Get started free
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="fixed inset-0 bg-transparent bg-opacity-50"
              onClick={() => setMobileMenuOpen(false)}
            />

            <div
              className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  ${darkAndLight ? "bg-black" : "bg-white"} px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
            >
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">NoteStack</span>
                  <img
                    alt="NoteStack"
                    src="https://res.cloudinary.com/aumcloud003/image/upload/v1766398828/Untitled_design-Photoroom_b2jhwv.png"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`-m-2.5 rounded-md p-2.5  ${
                    darkAndLight ? "text-white" : "text-gray-700"
                  }`}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div
                  className={`-my-6 divide-y   ${
                    darkAndLight ? "divide-gray-500/60" : "divide-gray-500/10"
                  }`}
                >
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${
                          darkAndLight ? "text-white" : "text-gray-700"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}

                    <div
                      onClick={() => setDarkAndLight(!darkAndLight)}
                      className="cursor-pointer"
                    >
                      {darkAndLight ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-sun-icon lucide-sun"
                        >
                          <circle cx="12" cy="12" r="4" />
                          <path d="M12 2v2" />
                          <path d="M12 20v2" />
                          <path d="m4.93 4.93 1.41 1.41" />
                          <path d="m17.66 17.66 1.41 1.41" />
                          <path d="M2 12h2" />
                          <path d="M20 12h2" />
                          <path d="m6.34 17.66-1.41 1.41" />
                          <path d="m19.07 4.93-1.41 1.41" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#141414"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-moon-icon lucide-moon"
                        >
                          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="py-6 space-y-4">
                    <a
                      href="#"
                      className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold ${
                        darkAndLight ? "text-white" : "text-gray-700"
                      }`}
                    >
                      Sign in
                    </a>
                    <div className="flex justify-center">
                      <a
                        href="#"
                        className="block rounded-md bg-[#fe523b] hover:bg-[#e6442f] w-[60%] py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors"
                      >
                        Get started free
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Top gradient blob */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#fe523b] to-[#ff8a73] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className={`relative rounded-full px-3 py-1 text-sm leading-6 ${darkAndLight ? "text-white  ring-[#ffffff34]  hover:ring-[#ffffff49]" : "text-gray-500 ring-gray-900/10  hover:ring-gray-900/20"} ring-1 transition-colors`}>
              Early access available - Limited spots.
            </div>
          </div>

          <div className="text-center">
            <h1 className={`text-4xl font-bold tracking-tight ${darkAndLight ? "text-white" : "text-gray-900"} sm:text-6xl`}>
              Notes without Noise
            </h1>
            <p className={`mt-6 text-lg leading-8 ${darkAndLight ? "text-white" : "text-gray-600"} `}>
              A minimalist workspace for focused minds. Capture thoughts,
              organize ideas, and boost productivity without distractions.
              Everything you need, nothing you don't.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <a
                href="#"
                className=" px-8 sm:w-auto rounded-md bg-[#fe523b] hover:bg-[#e6442f] sm:px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors text-center"
              >
                Start taking notes
              </a>
              <a
                href="#"
                className={`text-sm font-semibold ${darkAndLight ? "text-white" : "text-gray-900"} hover:text-gray-600 transition-colors`}
              >
                Watch demo <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom gradient blob */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(96%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#fe523b] to-[#ff8a73] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>

      <div className="flex justify-center ">
        <a
          href="#"
          className="hover-3d w-[90%] sm:w-[80%] lg:w-[75%] cursor-pointer"
        >
          <div className="card w-full text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
            <div className="card-body">
              {darkAndLight ? (
                <img
                  className="rounded-md transition duration-300"
                  src="https://res.cloudinary.com/aumcloud003/image/upload/v1766486327/Screenshot_from_2025-12-23_16-06-32_peqln8.png"
                  alt=""
                />
              ) : (
                <img
                  className="rounded-md transition duration-300"
                  src="https://res.cloudinary.com/aumcloud003/image/upload/v1766486635/Screenshot_from_2025-12-23_16-13-44_zqxvse.png"
                  alt=""
                />
              )}
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </a>
      </div>



     <div className="w-full">
		  {/* Container */}
		  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
		    {/* Title */}
		    <div className="flex flex-col items-center text-center">
		      <h2 className="text-3xl font-bold md:text-5xl">
		        Make every step user-centric
		      </h2>
		      <p className="mb-8 mt-4 max-w-xl text-base text-gray-500 md:mb-12 md:text-lg">
		        Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
		        purus sit amet luctus magna fringilla urna
		      </p>
		    </div>
		    {/* Features Content */}
		    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
		      {/* Features Item */}
		      <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
		        <img src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074" alt="" className="inline-block h-16 w-16 object-cover rounded-full " />
		        <h3 className="text-xl font-semibold">Support</h3>
		        <p className="text-sm text-gray-500">
		          Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
		          purus sit.
		        </p>
		      </div>
		      {/* Features Item */}
		      <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
		        <img src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074" alt="" className="inline-block h-16 w-16 object-cover rounded-full " />
		        <h3 className="text-xl font-semibold">Organise</h3>
		        <p className="text-sm text-gray-500">
		          Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
		          purus sit.
		        </p>
		      </div>
		      {/* Features Item */}
		      <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
		        <img src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074" alt="" className="inline-block h-16 w-16 object-cover rounded-full " />
		        <h3 className="text-xl font-semibold">Flexibility</h3>
		        <p className="text-sm text-gray-500">
		          Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
		          purus sit.
		        </p>
		      </div>
		      {/* Features Item */}
		      <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
		        <img src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074" alt="" className="inline-block h-16 w-16 object-cover rounded-full " />
		        <h3 className="text-xl font-semibold">Speed</h3>
		        <p className="text-sm text-gray-500">
		          Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
		          purus sit.
		        </p>
		      </div>
		      {/* Features Item */}
		      <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
		        <img src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074" alt="" className="inline-block h-16 w-16 object-cover rounded-full " />
		        <h3 className="text-xl font-semibold">Quality</h3>
		        <p className="text-sm text-gray-500">
		          Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
		          purus sit.
		        </p>
		      </div>
		      {/* Features Item */}
		      <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
		        <img src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074" alt="" className="inline-block h-16 w-16 object-cover rounded-full " />
		        <h3 className="text-xl font-semibold">Resource</h3>
		        <p className="text-sm text-gray-500">
		          Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
		          purus sit.
		        </p>
		      </div>
		    </div>
		  </div>

     </div>



    </div>
  );
}
