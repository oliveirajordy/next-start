import { useRouter } from 'next/router'
import Layout from '../components/Layout'

const Post = props => {

    const { title, id } = useRouter().query
    console.log('passei por aqui post')

    return (
        <Layout>
            <h1>{title}</h1>
            <p>meu id: {id} </p>
        </Layout>
    )
}

export default Post