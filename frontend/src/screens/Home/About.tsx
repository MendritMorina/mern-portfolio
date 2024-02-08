import mySelf from '../../assets/Myself.png'

const About = () => {
  const skills=[
    "JavaScript",
    "TypeScript",
    "Node",
    "Express",
    "Nest",
    "PostgresSQL",
    "MongoDB",
    "React",
    "Html",
    "Css",
    "Tailwind",
    "Bootstrap"
  ]
  return(
    <div>
      <div className='flex gap-8 items-center py-10'>
        <h1 className='text-3xl text-secondary'>About</h1>
        <div className='w-60 h-[1px] bg-tertiary'></div>
      </div>
      <div className='flex w-full items-center sm:flex-col'>
        <div className='h-[70vh] w-1/2 flex items-center justify-center sm:w-full'>
          <img className="rounded w-[350px] h-[350px] sm:w-[300px] sm:h-[300px]"  src={mySelf} alt="Myself"/>
        </div>
        <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
          <p className='text-white'>Hello! My name is Mendrit Morina. I enjoy creating web applications. My interest in web development started back in 2021 when I decided to explore coding. This marked the beginning of my journey into a fascinating world where creativity meets technology. I'm constantly learning and growing in this dynamic field.</p>
          <p className='text-white'>Fast-forward to today, I've had the privilege of working at a large software company. Currently, my primary focus is on building accessible and inclusive products, ensuring they are user-friendly for a diverse audience.</p>
        </div>
      </div>
      <div className='py-5'>
        <h1 className='text-tertiary text-xl'>Here are a few technologies I've been working with recently:</h1>
        <div className='flex flex-wrap gap-10 mt-5'>
          {skills?.map((skill, index) => (
            <div key={index} className='border border-tertiary py-3 px-10'>
              <h1 className='text-tertiary'>{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
