import { useLayoutEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import MovieDetail from './MovieDetail'
import Sidebar from './Sidebar'

export default function Layout() {

    const location = useLocation();
    
    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Navbar />
            <div className='flex mx-auto max-w-screen-xl mb-10 sm:mt-8 mt-2'>
                <section className='w-3/12 self-start mr-8 lg:mr-16 bg-gray-900 rounded-xl text-white md:block  hidden'>
                    <Sidebar/>
                </section>

                <section className='md:w-9/12 w-full px-6 md:px-4 ml-auto'>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/:movie_id' component={MovieDetail} />
                    </Switch>
                </section>

            </div>
        </>
    )
}