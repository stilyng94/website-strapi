import { GetStaticProps } from 'next';
import Layout from '../components/Layout'
import withClient from "../helpers/build_client"
import Link from "next/link"


const IndexPage = ({ blogs }: any) => (
  <Layout title="Home | SAYeTECH">
    <h1>Hello SAYeTECH 🔥 🔥 </h1>

    <section>
      {blogs && blogs.map((blog: any) => (
        <Link key={blog.id} href={`/${blog.slug}`}>
          <a>
            <div key={blog.id}>
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </div>
          </a>
        </Link>
      )
      )}
    </section>
  </Layout>
)

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const client = withClient(ctx);
  try {
    const { data } = await client.get('/blogs');

    return { props: { blogs: data } };
  } catch (error) {
    return {
      notFound: true,
    }
  }



};

export default IndexPage
