const loader = [1,2,3,4].map((_,idx) => {
    return (
        <div 
            key={idx}
            style={{'width':'12.5rem'}}
            className='loader overflow-hidden card lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 text-center mx-auto md:w-auto mb-8 rounded-lg  duration-300 ease-in-out text-gray-900 hover:shadow-xl transform hover:scale-105 hover:bg-gray-800 hover:text-white'>
             <div className='card__img--shadow card__img--loader'>
                <div className="overflow-hidden rounded-lg">
                    <div className='card__img skeleton-box'></div>
                </div>
            </div>
            <h2 className='skeleton-box text-center mt-2 mb-1 font-semibold text-xs rounded-sm'></h2>
            <div className="skeleton-box stars mb-2 rounded-sm">
            </div>
        </div>
    )
});
const Loader = () => {
    return <>{loader}</>
}

export default Loader;