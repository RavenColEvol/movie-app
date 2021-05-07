import SidebarItem from './SidebarItem'


const CATEGORIES = [
    {type:'upcoming', title: 'Opening this week'}, 
    {type:'now_playing', title: 'Now playing'}, 
    {type:'top_rated', title: 'Top Rated'}, 
    {type:'popular', title: 'Around the web'}
];


export default function Sidebar() {
    return (
        <>
            <div
                className='rounded-xl m-2 overflow-hidden'
            >
                <img 
                src="http://image.tmdb.org/t/p/w1280/5BwqwxMEjeFtdknRV792Svo0K1v.jpg" 
                alt=""
                className='w-full'
                />
            </div>
            {CATEGORIES.map(({title, type}) => <SidebarItem key={type} category={type} title={title}/>)}
        </>
    )
}