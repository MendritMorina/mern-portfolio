import {useState} from "react";

const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const experiences = [
    {"id":"1","company":"Cacttus","title":"Software Engineer", "period":"2021-present","description":"haha"},
    {"id":"2","company":"Appbites","title":"Software Developer", "period":"2021-present","description":"hehe"},
    {"id":"3","company":"Tech","title":"Intern", "period":"2018-2021","description":"hihi"}
  ]
  return(
    <div>
      <div className='flex gap-8 items-center py-10'>
        <h1 className='text-3xl text-secondary'>Experience</h1>
        <div className='w-60 h-[1px] bg-tertiary'></div>
      </div>
      <div className='flex py-10 gap-20 sm:flex-col'>
        <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
          {experiences.map((experience, index) =>(
            <div onClick={()=> setSelectedItemIndex(index)} className='cursor-pointer'>
              <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3' :'text-white'}`}>{experience.period}</h1>
            </div>
            ))}
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-secondary text-xl'>{experiences[selectedItemIndex].title}</h1>
          <h1 className='text-tertiary text-xl'>{experiences[selectedItemIndex].company}</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>
    </div>
  )
}

export default Experiences
