import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-neutral-800 flex justify-between px-20 py-4'>

      <Link className='text-white font-bold' to="/">
        <h1>React MySQL</h1>
      </Link>

      <ul className='flex gap-x-1'>
          <li>
              <Link className='bg-slate-200 px-2 py-1' to="/">Home</Link>
          </li>
          <li>
              <Link className='bg-slate-200 px-2 py-1' to="/new">Create task</Link>
          </li>
      </ul>
    </div>
  )
}

export default Navbar