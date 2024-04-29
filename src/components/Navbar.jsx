import {Link} from "react-router-dom";
import { MdTravelExplore } from "react-icons/md";
const Navbar = () => {
    return(
        <>
        <nav className='bg-blue-950 py-4' > { /*  */}
            <div className='container mx-auto flex justify-between items-center mt-1 mb-1 '>
            <Link to="/" className='text-blue-500  font-bold text-2xl'><MdTravelExplore />Travel</Link>
            <ul className="flex justify-center space-x-6">
            <li>
                 <Link to="/home" className='hover:underline hover:text-green-500 text-white transition duration-300 ease-in-out font-bold '>Home</Link>
             </li>
             <li>
                  <Link to="/blog" className='hover:underline hover:text-green-500 text-white transition duration-300 ease-in-out font-bold'>Blog</Link> 
             </li>
             <li>
                  <Link to="" className='hover:underline hover:text-green-500 text-white transition duration-300 ease-in-out font-bold'>Plans</Link> 
             </li>
             <li>
                  <Link to="/about" className='hover:underline hover:text-green-500 text-white transition duration-300 ease-in-out font-bold'>About</Link> 
             </li>
             </ul>             
            </div>
        </nav>
        </>
    )
}
export default Navbar;