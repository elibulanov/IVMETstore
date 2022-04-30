
import Date from '../blog/date'
import CoverImage from '../blog/cover-image'
import PostTitle from '../blog/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 -mx-5 md:mb-16 sm:mx-0 flex justify-center">
        <CoverImage title={title} url={coverImage.url} />
        
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6 md:hidden">
          
        </div>
        <div className="mb-6 text-lg">
          {/* <Date dateString={date} /> */}
        </div>
      </div>
    </>
  )
}
