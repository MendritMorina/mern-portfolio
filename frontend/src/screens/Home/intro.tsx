
const Intro = () => {
  return(
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
    <h1 className='text-white'>Hi , I am</h1>
    <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Mendrit Morina</h1>
      <h1 className='text-7xl sm:text-3xl text-white font-semibold'>I build things for the web.</h1>
      <p className='text-white w-2/3'>I am a Software Engineer, currently working as a Full-Stack Developer. My primary focus is on using React for front-end development and Node.js for back-end development. My expertise in these technologies enables me to build robust and scalable web applications.</p>
    <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>View my CV</button>
    </div>
  )
}

export default Intro
