import Head from "next/head";

// It's a component to use getServerSideProps function to get data in each request
const User = (props) => {
    return (
        <div>
            <Head>
                <title>
                    {props.userInformation.name} profile
                </title>
            </Head>
            Hello {props.userInformation.name}, <br />
            you are welcome at any time.<br />

        </div>
    )
}
export default User;

// getServerSideProps is ran when every new request is made to the page.
export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const userInformation = await res.json();
    return {
        props: {
            userInformation,
        }
    }
}