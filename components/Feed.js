// import React from 'react'

import InputBox from "./InputBox"
import Posts from "./Posts"
import Stories from "./Stories"

function Feed({posts}) {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
        <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl scrollbar-hide">
            {/* Stories */}
            <Stories />
            <InputBox />
            <Posts posts={posts} />
            {/* Posts */}
        </div>
    </div>
  )
}

export default Feed