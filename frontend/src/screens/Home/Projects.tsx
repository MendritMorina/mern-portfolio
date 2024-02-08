import {useState} from "react";
import mySelf from '../../assets/Myself.png'

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const projects = [
    {"id":"1","title":"Shpejtimi Travel", "image":mySelf,"description":"haha","content":"haha","link":"/","personal":"false","technologies":[]},
    {"id":"1","title":"Prishtina Parking", "image":mySelf,"description":"haha","content":"haha","link":"/","personal":"false","technologies":[]},
    {"id":"1","title":"Agroculture platform", "image":mySelf,"description":"haha","content":"haha","link":"/","personal":"false","technologies":[]},
  ]
  return(
    <div>
      <div className='flex gap-8 items-center py-10'>
        <h1 className='text-3xl text-secondary'>Projects</h1>
        <div className='w-60 h-[1px] bg-tertiary'></div>
      </div>
      <div className='flex py-10 gap-20 sm:flex-col'>
        <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
          {projects?.map((experience, index) =>(
            <div onClick={()=> setSelectedItemIndex(index)} className='cursor-pointer'>
              <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3' :'text-white'}`}>{experience.title}</h1>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center gap-10 sm:flex-col'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-secondary text-xl'>{projects[selectedItemIndex].title}</h1>
          <p className='text-white'>{projects[selectedItemIndex].description}</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
          <img src={projects[selectedItemIndex].image} alt="" className="h-60 w-72"/>
      </div>
      </div>
    </div>

  )
}

export default Projects
