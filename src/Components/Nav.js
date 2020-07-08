import React from 'react'
import Link from 'next/link'

export default function Nav() {
    return (
        <ul>
            <li>
                {/* Link should contain a tag */}
                <Link href='/'><a>Home</a></Link>
            </li>
            <li>
                <Link href='/about'><a>About</a></Link>
            </li>
            <li>
                <Link href='/test/[myParams]' as='/test/itworks?hello=world&amp;good=bye'><a>Dynamic Param Link</a></Link>
            </li>
            <li>
                <Link href='/test/multi/[myParams2]' as='/test/multi/route2'><a>Dynamic Param Link Milti</a></Link>
            </li>

            {/* Component-based: This styling only pertains to this component */}
            <style jsx>{`
                ul {
                    background: #333;
                    display:flex;
                    list-style:none;
                }
                ul li a{
                    margin-right:20px;
                    color: white;
                }
            `}</style>
        </ul>
    )
}
