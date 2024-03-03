import Logo from "../images/Logo.png";

function Nav() {
  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900 space-mono-regular">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-auto" alt="Techscribe Logo" />
        </a>

        <div className="flex-grow flex justify-center">
          <ul className="font-medium flex space-x-8">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-gray-800 dark:hover:bg-gray-700"
                aria-current="page"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                Technology
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
