
export default function Header() {
  return (
    <div className=" w-full">
      <nav className="bg-gray-200 py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a href="#" className="font-bold text-xl text-indigo-600">FWR</a>
            <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}