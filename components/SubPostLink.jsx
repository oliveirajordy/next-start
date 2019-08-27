import Link from 'next/link'

const PostLink = props => {
    
    return (
        <Link href={`${props.linktemplete}`} as={`${props.link}`} >
            <a>{props.title}</a>
        </Link>
    )
}

export default SubPostLink