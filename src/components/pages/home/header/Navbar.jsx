
export default function Navbar() {
    const navLinks = <>
        <li><a className="btn btn-info">Home</a></li>
        <li><a className="btn btn-info">Project</a></li>
        <li><a className="btn btn-info">About</a></li>
        <li><a className="btn btn-info">Blog</a></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <ul className="p-2 flex items-center justify-center gap-5 flex-col">
                            {
                                navLinks
                            }
                        </ul>
                    </ul>
                </div>
                <a className="text-3xl font-bold">Kayum</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center justify-center gap-5">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>

    )
}
