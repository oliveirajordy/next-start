import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import PostLink from '../components/PostLink'
import SubPostLink from '../components/PostLink'

const Index = props => {

    const [count, setCount] = useState(0)

    useEffect(_ => {
        setTimeout(_ => {
            setCount(count + 1)
        }, 1500)
    })

    console.log('passei por aqui index')

    return (
        <Layout>
            <nav>
                <Link href="/testRec" ><a>Requisições</a></Link>
                <Link href="/ComponentCores" ><a>Componente de Cores</a></Link>
            </nav>
            Home
            <ul>
                <li><PostLink link="/posts?title=ola-mundo&id=00" title="Ola Mundo" /></li>
                <li><PostLink link="/posts?title=hello-world&id=11" title="hello world" /></li>
                <li><PostLink link="/posts?title=ohayo-sekai&id=22" title="ohayo sekai" /></li>
                <li><PostLink link="/posts/pp?id=5" title="ohayo sekai" /></li>
            </ul>
            <ul>
                <li><SubPostLink linktemplete="/posts/[id]" link="/posts/1" title="sub post 1" /></li>
                <li><SubPostLink linktemplete="/posts/[id]" link="/posts/2" title="sub page 2" /></li>
            </ul>
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