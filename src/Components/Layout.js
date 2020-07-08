import React from 'react'
import Head from 'next/head'
import Nav from '../Components/Nav'

export default function Layout(props) {
    return (
        <div>
            {/* Head tag */}
            <Head>
                <title>My Next App</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
            </Head>
            <Nav />
            {/* Layout for rest of app */}
            {props.children}
        </div>
    )
}
