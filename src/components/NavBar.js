import HomeView from '../views/HomeView';

function NavBar() {
  const logout = () => {
    localStorage.clear();
    return <HomeView />;
  };

  return (
    <nav className="px-5 bg-white border-gray-200 rounded">
      <div className="container flex flex-wrap items-center justify-center mx-auto">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-400 md:p-0 dark:text-white md:hover:text-blue-700"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-400 rounded text hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                PRODUCT
              </a>
            </li>

            <a className="flex items-center">
              <img
                src="https://www.thebluesville.com/wp-content/uploads/2022/04/LOGO_BLV_WEB_1-1-1.png"
                className="mr-3 sm:h-5"
                alt="Bluesville Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <li>
              <a
                className="block py-2 pl-3 pr-4 text-gray-400 rounded text hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                href="#"
              >
                CATEGORY
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-400 rounded text hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                LOGS
              </a>
            </li>
            <li onClick={logout}>
              <a className="block py-2 pl-3 pr-4 text-gray-400 rounded text hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0">
                LOGOUT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
