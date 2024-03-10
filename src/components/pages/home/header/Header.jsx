
function Header() {
    return (
        <div>
            <div className='w-full h-[80vh] flex items-center justify-center gap-5'>
                <div className="w-full h-full ld:w-1/2 bg-blue-500">
               <h1 className="text-2xl text-white"></h1>
               <button>+Add</button>
               <button>-Reverse</button>
                </div>
                <div className="w-full h-full ld:w-1/2 bg-blue-700">
                </div>
            </div>  
        </div>
    )
}

export default Header;