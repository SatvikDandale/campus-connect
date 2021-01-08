import React, { useEffect, useState } from 'react'
import LoadingOverlay from 'react-loading-overlay';
import { getReportedPosts } from '../../Services/postService';
import Post from '../Post/post';

export default function ReportedPosts(props) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getReportedPosts(props.user.name)
        .then((posts) => {
            setPosts(posts);
            setLoading(false);
        })
        .catch((error) => {
            alert("Can't get reported posts.");
            setLoading(false);
        })
    }, [props.user.name])

    return (
        <LoadingOverlay
            active={loading}
            spinner
            text="Getting posts"
        >
            <div className="reported__post">
                {posts.map((post) => <Post reported={true} post={post}></Post>)}
            </div>
        </LoadingOverlay>
    )
}
