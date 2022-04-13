import Head from "next/head";
import Link from "next/link";
// Users it's a component used to get user's information by using getStaticProp function
const Users = (props) => {
    return (
        <div>
            <Head>
                <title>
                    Users Information
                </title>
            </Head>
            Users
            {props.users.map(item => (
                <div key={item.id}>
                    <Link href={`/users/${item.id}`}>
                        {item.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default Users;

//  getStaticProps is ran at build time, meaning that whenever you run npm run build this is when your static pages are built.
export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return {
        props: {
            users,
        },
    }
}