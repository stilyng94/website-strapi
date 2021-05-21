import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../components/Layout"
import withClient from "../helpers/build_client"
import Link from "next/link"
import { Image } from "@chakra-ui/react"



const Blog = ({ blog }: any) => (
    <Layout title="Blog | SAYeTECH">
        <h1>Hello SAYeTECH 🔥 🔥 </h1>
        <section>
            <Link href="/">
                <a>
                    Go Home
                </a>
            </Link>
            <div key={blog.id}>
                <h2>{blog.title}</h2>
                <Image src={blog.image_url} alt={blog.title} />
                <p>{blog.content}</p>
            </div>
        </section>
    </Layout>

)

//Total available Pages
export const getStaticPaths: GetStaticPaths = async (ctx: any) => {
    const client = withClient(ctx);

    try {
        const { data } = await client.get('/blogs');
        const paths = data.map((blog: any) => ({ params: { slug: blog.slug } }));
        return { paths, fallback: true };
    } catch (error) {
        return { fallback: true, paths: [] }
    }

};

// Get page data
export const getStaticProps: GetStaticProps = async (ctx: any) => {
    const client = withClient(ctx);

    try {
        const { slug } = ctx.params

        const { data } = await client.get(`/blogs/?slug=${slug}`);
        const blog = data[0]
        return { props: { blog } };
    } catch (error) {
        return { notFound: true, }
    }

};

export default Blog