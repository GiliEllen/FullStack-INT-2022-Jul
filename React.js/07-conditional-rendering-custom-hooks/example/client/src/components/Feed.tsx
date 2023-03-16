import Post from './Post';

const Feed = ({ posts }:any) => {
    return (
        <>
            {posts.map((post: { id: any; }):any => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed