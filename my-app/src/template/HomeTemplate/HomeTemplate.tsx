import { JSX } from 'react'

interface HomeTemplateProps {
    children: JSX.Element
}

const HomeTemplate = (props: HomeTemplateProps) => {

    return (
        <div>
            {props.children}
        </div>
    )
    
}

export default HomeTemplate
