import Link from "next/link";
// It's a component to display all posts that returned from JSON-Placeholder fake API
const Posts = (props) => {
    return (
        <div>
            {props.posts.map((item) => (
                <div key={item.id}>
                    <Link href={`/posts/${item.id}`}>{item.title}</Link>
                </div>
            ))}
        </div>
    );
};
export default Posts;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const posts = await res.json();
    return {
        props: {
            posts,
        },
    };
};
