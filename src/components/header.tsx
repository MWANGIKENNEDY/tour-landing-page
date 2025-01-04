import Link from "next/link";
import SearchForm from "./searchForm";

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
                  <Link className="block text-teal-600" href="#">
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
                  </Link>
  
                  <div className="flex flex-1 items-center justify-end md:justify-between  ">
                    <nav aria-label="Global" className="hidden md:block">
                      <ul className="flex items-center gap-6 text-sm">
                        <li>
                          <Link className="text-white transition " href="#">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white transition " href="#">
                            Careers
                          </Link>
                        </li>
                        <li>
                          <Link className="text-white transition " href="#">
                            Services
                          </Link>
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



       <SearchForm/>
        </div>
      </section>
    );
  };
  
  export default Header;
  