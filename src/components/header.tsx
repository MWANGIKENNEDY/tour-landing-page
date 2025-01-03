const Header = () => {
    return (
      <section className="dark:bg-gray-900">
        <div className="h-[52rem] absolute overflow-hidden w-full">
          <div className="-z-1 absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.16)_100%)]"></div>
          <img
            className="h-full w-full object-cover"
            alt="Beach view"
            src="https://images.unsplash.com/photo-1503756234508-e32369269deb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D"
          />
        </div>
  
        <div className="container">
          <div className="relative h-[52rem]">
            <div className="absolute inset-0">
              <header>
                <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 ">
                  <a className="block text-teal-600" href="#">
                    <span className="sr-only">Home</span>
                    <svg
                      className="h-8"
                      viewBox="0 0 28 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="..."
                        fill="currentColor"
                      />
                    </svg>
                  </a>
  
                  <div className="flex flex-1 items-center justify-end md:justify-between  ">
                    <nav aria-label="Global" className="hidden md:block">
                      <ul className="flex items-center gap-6 text-sm">
                        <li>
                          <a className="text-white transition " href="#">
                            About
                          </a>
                        </li>
                        <li>
                          <a className="text-white transition " href="#">
                            Careers
                          </a>
                        </li>
                        <li>
                          <a className="text-white transition " href="#">
                            Services
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div className="flex items-center gap-4">
                      <div className="sm:flex sm:gap-4">
                        {/* <a
                          className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                          href="#"
                        >
                          Login
                        </a>
                        <a
                          className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                          href="#"
                        >
                          Register
                        </a> */}
                      </div>
                      <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                        <span className="sr-only">Toggle menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </header>
              <div className="absolute left-1/2 -translate-x-1/2 top-64 z-3 flex flex-col items-center">
                <div className="title text-3xl lg:text-5xl leading-none text-white">
                  Wanderlust Awaits
                </div>
                <div className="title text-8xl lg:text-[17rem] leading-none lg:-mt-14 text-white">
                  Genesis
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-12 z-50 mx-auto relative border-white/12 flex w-[92%] max-w-[68rem] flex-col gap-4 rounded-3xl border-0 bg-white p-6 lg:w-auto lg:flex-row lg:rounded-full lg:p-10 shadow">
            <div className="lg:flex-1">
              <button className="flex w-full items-center justify-between px-4 py-3 text-sm shadow border-white/12 rounded-full">
                <span>Italy, Romania</span>
                <span>$</span>
              </button>
            </div>
            <div className="lg:flex-1">
              <input
                type="datetime-local"
                className="border-white/12 w-full cursor-pointer rounded-full border-0 px-4 py-3 text-sm dark:border"
              />
            </div>
            <div className="lg:flex-1">
              <input
                type="datetime-local"
                className="border-white/12 w-full cursor-pointer rounded-full border-0 px-4 py-3 text-sm dark:border"
              />
            </div>
            <div className="lg:flex-1">
              <button className="flex w-full items-center justify-between px-4 py-3 text-sm shadow rounded-full">
                <span>1 Room, 2 Guests</span>
              </button>
            </div>
            <div className="lg:flex-1">
              <button className="w-full bg-blue-600 shadow px-4 py-3 text-center text-sm text-white rounded-full">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Header;
  