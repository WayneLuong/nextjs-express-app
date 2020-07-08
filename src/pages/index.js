import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout'
import PassProp from '../Components/PassProp'

const Home = () => {
    const [api, setAPI] = useState('Loading')

    //Get API from server.js
    async function getAPI() {
        await fetch('/api')
            .then(res => res.json())
            .then(data => setAPI(data))
    }
    useEffect(() => {
        console.log(api)
        getAPI()
    }, [])

    return (
        <Layout>
            <div>
                <h1>Home</h1>
                <h4>API: {api.test}</h4>
                <img src='/image.jpeg' alt="" />
                <PassProp test={api.propTest} />
            </div>
        </Layout>
    )
}
export default Home