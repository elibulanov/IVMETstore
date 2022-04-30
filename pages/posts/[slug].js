import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/blog/container'
import PostBody from '../../components/blog/post-body'
import MoreStories from '../../components/blog/more-stories'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import PostHeader from '../../components/blog/post-header'
import SectionSeparator from '../../components/blog/section-separator'
import Layout from '../../components/blog/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/graphcms'
import PostTitle from '../../components/blog/post-title'
import Head from 'next/head'




export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
    <Navbar />
    <Layout preview={preview}>
      <Container>
        
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} 
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                // date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
    <Footer/>
    </>

  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || [],
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug()
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  }
}
