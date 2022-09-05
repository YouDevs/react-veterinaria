// const Error = ({msg}) => {

// Con children 👇
const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-lg'>
        {/* <p>{msg}</p> */}

        {/* Con children 👇 */}
        <p>{children}</p>
    </div>
  )
}

export default Error