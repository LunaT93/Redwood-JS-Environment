// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

import EditPostPage from 'src/pages/Post/EditPostPage'
import NewPostPage from 'src/pages/Post/NewPostPage'
import PostPage from 'src/pages/Post/PostPage'
import PostsPage from 'src/pages/Post/PostsPage'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/blog" page={BlogPage} name="blog" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route notfound page={NotFoundPage} />

      <Route path="/posts/new" page={NewPostPage} name="newPost" />
      <Route path="/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
      <Route path="/posts/{id:Int}" page={PostPage} name="post" />
      <Route path="/posts" page={PostsPage} name="posts" />
    </Router>
  )
}

export default Routes
