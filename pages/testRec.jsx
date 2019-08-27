import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import axios from 'axios'

const testRec = props => {

    const [state, setState] = useState({})

    useEffect(_ => {
        console.log('passei por aqui')
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(resp => setState(resp.data))
    }, [])

    return (
        <div>
            <Layout>
                <nav>
                    <Link href="/" ><a>Index</a></Link>
                    <Link href="/ComponentCores" ><a>Componente de Cores</a></Link>
                </nav>
                {console.log(state)}
            </Layout>
        </div>
    )
}

export default testRec