import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const Pp = props => {

    console.log('passei por aqui Pp')
    const { id } = useRouter().query


    return (
        <Layout>
           <h1>sou Pp</h1>
           meu id: {id }
        </Layout>
    )
}

export default Pp