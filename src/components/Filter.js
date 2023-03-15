import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortByChanged, statusChanged } from '../features/filter/fliterSlice'

const Filter = () => {
  const { status, sortBy } = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const handleChangeStatus = (value) => {
    dispatch(statusChanged(value))
  }
  const handleChangeSortBy = (value) => {
    dispatch(sortByChanged(value))
  }

  return (
    <aside>
      <div className='sidebar-items'>
        <div className='sidebar-content'>
          <h4>Sort</h4>
          <select
            name='sort'
            id='lws-sort'
            className='w-full max-w-[150px] border-2 rounded-md text-gray-500'
            value={sortBy}
            onChange={(e) => handleChangeSortBy(e.target.value)}
          >
            <option value=''>Default</option>
            <option value='newest'>Newest</option>
            <option value='most_liked'>Most Liked</option>
          </select>
        </div>
        <div className='sidebar-content'>
          <h4>Filter</h4>
          <div className='radio-group'>
            {/* <!-- handle filter on button click --> */}
            <div>
              <input
                type='radio'
                name='filter'
                id='lws-all'
                checked={status === 'All'}
                onChange={(e) => e.target.checked && handleChangeStatus('All')}
                className='radio'
              />
              <label htmlFor='lws-all'>All</label>
            </div>
            <div>
              <input
                type='radio'
                name='filter'
                id='lws-saved'
                checked={status === 'Saved'}
                onChange={(e) =>
                  e.target.checked && handleChangeStatus('Saved')
                }
                className='radio'
              />
              <label htmlFor='lws-saved'>Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Filter
