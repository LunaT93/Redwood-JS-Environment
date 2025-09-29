import React from 'react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
//perhaps this should be import {useState} from @redwood yada yda.

import { useQuery, gql } from '@redwoodjs/web'

import 'src/index.css'

const POSTS_QUERY = gql`
  query PostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

const BlogPage = () => {
  const { data, loading, error } = useQuery(POSTS_QUERY)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      <nav className="topnav">
        <div className="nav-logo">
          <img src="/images/LegalBitchLogo.png" alt="Your Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.blog()}>WokeMindVirus Blog</Link>
          </li>
          <li>
            <Link to={routes.contact()}>Contact</Link>
          </li>
        </ul>
      </nav>

      <div>
        <h1>WokeMindVirus Blog</h1>
        {data.posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <small>{new Date(post.createdAt).toLocaleDateString()}</small>
          </article>
        ))}
      </div>
    </>
  )
}

export default BlogPage
