import Link from 'next/link'

const PostLink = props => {
    
    return (
        <Link href={`${props.link}`}>
            <a>{props.title}</a>
        </Link>
    )
}

export default PostLink