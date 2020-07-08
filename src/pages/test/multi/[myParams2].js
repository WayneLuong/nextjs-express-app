import React from 'react'
import Layout from '../../../Components/Layout'
import { useRouter } from 'next/router'

export default function params2() {
    //Dynamic routing example
    const router = useRouter()
    const { myParams2 } = router.query
    console.log(router, router.query)

    // example param path /test/multi/someparam?querytitle=queryvalue&hey=yah
    return (
        <Layout>
            <div>
                <h1>{myParams2}</h1>
            </div>
        </Layout>
    )
}
