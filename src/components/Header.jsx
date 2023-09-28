import { Link } from 'react-router-dom'
import {quizwiz} from '../assets'
const Header = () => {
  return (
      <header className='text-white bg-gradient-to-r from-slate-800 via-gray-950 to-slate-700 w-full py-4'>
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/"><img src={quizwiz} alt='quizwiz-logo' className=' ml-12 max-md:ml-0 w-64'/></Link>
              
              <button type="button" onClick={()=>window.open('https://github.com/ehteshamul51haque/Quiz_App')} className='px-4 py-2 mr-12 max-md:mr-0 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300'>GitHub</button>
      </nav>
      <hr className='mt-3'/>
    </header>
  )
}

export default Header
