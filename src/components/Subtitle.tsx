import { ReactNode } from "react";

interface Props {
    children: ReactNode,
    className?: string
}

export default function Subtitle(props: Props) {
    const {className = ''} = props;
    return (
        <h2 className={`lg:text-3xl md:text-2xl text-xs font-bold text-gray-800 lg:mb-8 md:mb-6 mb-4 ${className}`}>
            {props.children}
        </h2>
    )
}
