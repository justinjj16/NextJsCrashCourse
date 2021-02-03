
import Link from 'next/link';
import { useRouter } from 'next/router'

const article = ({ article }) => {
    const router = useRouter();
    const { id } = router.query
    return (
        <div>
            <h1>{article.first_name}</h1>
            <p>{article.last_name}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://reqres.in/api/users/${context.params.id}`);
    const article = await res.json();
    return {
        props: {
            article: article.data
        }
    }
}

export default article