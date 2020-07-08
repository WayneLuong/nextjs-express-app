import React from 'react'
import Layout from '../../Components/Layout'
import { useRouter } from 'next/router'

export default function params1() {
    //Dynamic routing example
    const router = useRouter()
    const { myParams } = router.query
    console.log(router, router.query)

    // example param path /test/someparam?querytitle=queryvalue&hey=yah
    return (
        <Layout>
            <div>
                <h1>{myParams}</h1>
            </div>
        </Layout>
    )
}
