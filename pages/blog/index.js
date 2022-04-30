import Container from '/components/blog/container'
import MoreStories from '/components/blog/more-stories'
import Navbar from '../../components/navbar'
import Intro from '../../components/blog/intro'
import Footer from '../../components/footer'
import Layout from '../../components/blog/layout'
import { getAllPostsForHome } from '/lib/graphcms'
import Head from 'next/head'



export default function Index({ posts, preview }) {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blog</title>
        </Head>
        <Navbar />
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
        <Footer/>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) || []
  return {
    props: { posts, preview },
  }
}
