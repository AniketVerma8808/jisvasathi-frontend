import React from 'react'

const Steps = () => {
  return (
    
      <section className=" px-5 py-15 ">
        <div className=" max-w-7xl mx-auto ">
  <h2 className="text-5xl text-amber-500 text-center  font-bold max-md:text-4xl max-sm:text-3xl font-['inter']">
            Four steps to find your better-half
          </h2>
          <p className='mt-3 text-lg text-gray-600 text-center max-md:text-base max-sm:text-sm'>Let’s Make This Simple</p>
    <div className=" flex flex-col gap-12 mt-10">
      {[
        {
          title: "Create your profile and describe yourself in an honest & transparent way",
        },
        {
          title:
            "Based on the filters and your preferences, browse & search relevant profiles and send your interest",
        },
        {
          title: "Start chatting and talking to accepted profiles",
        },
        {
          title: "If everything goes right, take things forward",
        },
      ].map((step, index) => (
        <div key={index} className="flex items-start gap-6">
          <div className="w-14 h-14 max-sm:w-12 max-sm:h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl max-sm:text-lg shrink-0">
            {index + 1}
          </div>
          <p className="text-lg leading-relaxed">{step.title}</p>
        </div>
      ))}
    </div>
 </div>
</section>


  )
}

export default Steps
