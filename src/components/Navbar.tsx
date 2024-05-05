import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className='sticky top-0 bg-white z-10'>
        <div className='flex justify-between items-center max-w-screen-xl px-4 mx-auto py-2'>
            <Link to='/' className='font-bold uppercase trailing-wide bg-yellow-400 text-gray-900 
                                    py-2 px-2 rounded text-xs  md:text-normal lg:text-lg'>
                Movie app
            </Link>
            <a 
            href='https://github.com/RavenColEvol/movie-app'
            target='_blank'
            rel='noreferrer'
            className='bg-gray-900 text-white px-4 md:py-3 py-2 rounded-full font-semibold hover:shadow-lg text-xs md:text-normal flex items-center'>
              <span className='text-base mr-2'>★</span>Star on Github
            </a>
        </div>
      </nav>
    </>
  );
}