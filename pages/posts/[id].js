// It's a component to use getStaticPaths to get post information
const Post = (props) => {
    return (
        <div>
            <h1>{props.post.body}</h1>
        </div>
    );
};
export default Post;

// to use getStaticProps we must use getStaticPaths at first, to get all paths and give each of them to getStaticProps function.
export const getStaticPaths = async () => {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const posts = await res.json();
    const paths = posts.map((item) => {
        return {
            params: { id: `${item.id}` },
        };
    });

    return {
        paths: paths,
        fallback: false,
    };
};

// getStaticProps get each post
export const getStaticProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    );
    const post = await res.json();
    return {
        props: {
            post,
        },
    };
};
