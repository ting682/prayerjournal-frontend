import React from 'react'
import { useSelector } from 'react-redux'
import { Blog } from '../blog'

export const BlogsContainer = (props) => {

    const blogs = useSelector(state => state.blogs.blogs)

    const loaded = useSelector(state => state.blogs.loaded)

    const mapBlogs = () => {
        blogs.map(blog => {
            <Blog imageUrl={blog.image_url} title={blog.title} description={blog.description} />
        })
    }

    if(loaded) {
        return (
            <React.Fragment>
                {mapBlogs()}
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }

    
}