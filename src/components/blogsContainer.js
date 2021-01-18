import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Blog } from './blog'
import { fetchBlogs } from '../actions/fetchBlogs'
import { useHistory } from 'react-router-dom'
import { AddBlog } from './addBlog'

export const BlogsContainer = (props) => {

    const blogs = useSelector(state => state.blogs.blogs)

    const loaded = useSelector(state => state.blogs.loaded)

    const loggingOut = useSelector(state => state.user.loggingOut)

    const history = useHistory()

    const dispatch = useDispatch()

    useEffect(() => {
        if (!loggingOut) {
            dispatch(fetchBlogs(history))
        }
    }, [dispatch, loggingOut, history])


    // debugger
    if(loaded) {
        // debugger
        return (
            <React.Fragment>
                <AddBlog />
                {blogs.map(blog => {
                    
                    return <Blog key={blog.id} blogId={blog.id} userId={blog.attributes.user_id} entries={blog.entries} updatedAt={blog.attributes.updated_at} imageUrl={blog.attributes.image_url} title={blog.attributes.title} description={blog.attributes.description} published={blog.attributes.published} videoUrl={blog.attributes.video_url} />
                    
                })}
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }

    
}