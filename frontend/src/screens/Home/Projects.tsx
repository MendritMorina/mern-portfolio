import mySelf from '../../assets/Myself.png'
import {useDispatch, useSelector} from "react-redux";
import {setSelectedItemIndex} from "../../redux/features/project/projectSlice";
import {useGetAllProjectsQuery} from "../../redux/api/projectApiSlice";

//useSelector - Read the data
//useDispatch - Changing the data by sending "actions"
const Projects = () => {
  const selectedItemIndex = useSelector((state:any) => state.projects.selectedItemIndex);
  const dispatch = useDispatch()
  const {data:projects} = useGetAllProjectsQuery('')
  return(
    <div>
      <div className='flex gap-8 items-center py-10'>
        <h1 className='text-3xl text-secondary'>Projects</h1>
        <div className='w-60 h-[1px] bg-tertiary'></div>
      </div>
      <div className='flex py-10 gap-20 sm:flex-col'>
        <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
          {projects?.map((project:any, index:any) =>(
            <div key={project?.id} onClick={()=> dispatch(setSelectedItemIndex(index))} className='cursor-pointer'>
              <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3' :'text-white'}`}>{project?.title}</h1>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center gap-10 sm:flex-col'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-secondary text-xl'>{projects?.[selectedItemIndex]?.title}</h1>
          <p className='text-white'>{projects?.[selectedItemIndex]?.description}</p>
          <p>{projects?.[selectedItemIndex]?.content}</p>
        </div>
          <img src={mySelf} alt="" className="h-60 w-72"/>
      </div>
      </div>
    </div>

  )
}

export default Projects
