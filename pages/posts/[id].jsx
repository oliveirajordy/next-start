import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

import { useState, useEffect } from 'react'
import axios from 'axios'

const Posts = props => {

    const { id } = useRouter().query
    const [state, setState] = useState({})

    useEffect(_ => {
        !!id && axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(resp => setState(resp.data))
    }, [id])

    return (
        <Layout>
            <p>usuario: {!!state.userId && state.userId}</p>
            <p>tema: {!!state.title && state.title}</p>
            <p>inlive: {!!state.title && state.completed ? 'sim' : 'não'}</p>
        </Layout>
    )
}

export default Posts