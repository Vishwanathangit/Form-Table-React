import React from 'react'

const Table = ({ tableData, handleedit, handledelete }) => {
  return (
    <div>
      <table className='w-full border mt-6'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border p-2'>Name</th>
            <th className='border p-2'>Email</th>
            <th className='border p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {

            return (
              <tr key={index}>
                <td className='border border-gray-300 px-4 py-2'>{data.name}</td>
                <td className='border border-gray-300 px-4 py-2'>{data.email}</td>
                <td className='border border-gray-300 px-4 py-2'>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer' onClick={() => {
                    handleedit(index)
                  }}>Edit</button>
                  <button className='bg-red-500 text-white px-4 py-2 rounded cursor-pointer' onClick={() => {
                    handledelete(index)
                  }}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
