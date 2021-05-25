import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

export default function Title(props: Props) {
    return (
        <h1 className='lg:text-3xl md:text-2xl text-xl font-bold text-gray-900 lg:mb-8 md:mb-6 mb-4'>
            {props.children}
        </h1>
    )
}
