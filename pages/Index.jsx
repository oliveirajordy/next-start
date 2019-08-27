import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

const Index = props => {

    const [count, setCount] = useState(0)

    useEffect(_ => {
        setTimeout(_ => {
            setCount(count + 1)
        }, 1500)
    })

    return (
        <Layout>
            <nav>
                <Link href="/testRec" ><a>Requisições</a></Link>
                <Link href="/ComponentCores" ><a>Componente de Cores</a></Link>
            </nav>
            Home
                {`contagem:${count}`}
            <button onClick={() => setCount(count + 1)} >i++</button>
            <style jsx>{`
                    div{
                        min-height:100%;
                    }
                    button{
                        padding:10px;
                    }
            `}</style>
        </Layout>
    )
}

export default Index