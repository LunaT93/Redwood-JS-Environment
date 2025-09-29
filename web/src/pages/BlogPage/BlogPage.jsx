import React from 'react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
//perhaps this should be import {useState} from @redwood yada yda.

import { useQuery, gql } from '@redwoodjs/web'

import 'src/index.css'

import 'src/scaffold.css'

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
  <div className="blog-container">
  {data.posts.map((post, index) => {
    const colors = [
      'var(--color-1)',
      'var(--color-2)',
      'var(--color-3)',
      'var(--color-4)',
    ]
    const bgColor = colors[index % colors.length]

    return (
      <article
        key={post.id}
        style={{
          backgroundColor: bgColor,
          padding: '1.5rem',
          borderRadius: '8px',
          marginBottom: '1rem',
          color: '#fff', // adjust for contrast
        }}
      >
        <h2>{post.title}</h2>
        {post.body.split(/\n\n/).map((para, i) => (
  <p key={i}>{para}</p> //added functionality to create new paragraphs when I enter text.
))}
        <small>{new Date(post.createdAt).toLocaleDateString()}</small>
      </article>
    )
  })}
</div>
</div>

    </>
  )
}

export default BlogPage
