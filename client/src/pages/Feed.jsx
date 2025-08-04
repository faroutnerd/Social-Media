import React, { useEffect, useState } from 'react'
import { dummyPostsData } from '../assets/assets';
import Loading from '../components/Loading';

const Feed = () => {

  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchfeeds = async () => {
    setFeeds(dummyPostsData);
  }

  useEffect(() => {
    fetchfeeds()
    setLoading(false)
  }, [])
  
  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>
      {/* Stories & Post List */}
      <div>
        <h1>Stories here</h1>
        <div className='p-4 space-y-6'>
          List of posts
        </div>
      </div>

      {/* Right Sidebar */}
      <div className=''>
        {/* 1:21:04 */}
      </div>

    </div>
  ) : <Loading /> 
}

export default Feed
