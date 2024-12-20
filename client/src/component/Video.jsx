const Video = () => {
  return (
    <div className="w-full relative">
      <video 
        className="w-full h-[600px] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source 
          src="https://media.istockphoto.com/id/1410441629/video/fit-females-doing-warmup-exercises-in-a-fitness-class-at-a-center-training-coach-guiding-a.mp4?s=mp4-640x640-is&k=20&c=FDSJfxJGUgTijKHrIxDFL4RJYCE7V3rTG98I4JqTRQc=" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-8xl font-bold text-white">YogaStore</h1>
      </div>
    </div>
  )
}

export default Video