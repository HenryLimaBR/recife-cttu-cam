import React, { useContext } from 'react'
import { PointsContext } from '../../contexts/pointsContext'

export const Navbar: React.FC = () => {
  const [search, setSearch] = useContext(PointsContext).searchState

  return (
    <nav className='h-[3.5rem] bg-emerald-500 flex justify-center items-center'>
      <input
        type="text"
        className='px-4 py-1 rounded-md bg-emerald-700 text-white font-mono placeholder:text-emerald-100 placeholder:text-center outline-none focus:ring-2 ring-emerald-200'
        placeholder='Pesquise aqui!'
        value={search}
        onInput={(e) => setSearch(e.currentTarget.value.toLowerCase())}
        spellCheck={false}
      />
    </nav>
  )
}