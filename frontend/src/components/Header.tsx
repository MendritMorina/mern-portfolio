const Header = () => {
  const name:string = '<MendritMorina/>'
  return(
    <div className='p-5 bg-primary flex justify-between flex-wrap'>
      <h1 className='text-white text-3xl font-semibold'>{name}</h1>
      <h1 className='text-white text-2xl font-semibold'>// about</h1>
      <h1 className='text-white text-2xl font-semibold'>// experience</h1>
      <h1 className='text-white text-2xl font-semibold'>// projects</h1>
      <h1 className='text-white text-2xl font-semibold'>// contact</h1>
    </div>
  )
}
export default Header
