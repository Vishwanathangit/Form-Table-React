import React from 'react'

const Form = ({formdata, handleformdatachange, handlesumbit, editindex}) => {
  return (
 <div className='p-6 mx-auto max-w-2xl'>
 <h1 className='text-2xl font-semibold mb-4'>Form and Table Example</h1>
 <form className='border rounded-lg p-4'onSubmit={handlesumbit}>
   <input className='w-full p-2 border rounded mb-2' type="text" placeholder='Name' onChange={(event)=>{
    const{value} = event.target; handleformdatachange("name",value)
   }} required value={formdata.name} />
   <input className='w-full p-2 border rounded mb-2' type="email" placeholder='Email' onChange={(event)=>{
    const{value} = event.target; handleformdatachange("email",value)
   }} required value={formdata.email}/>
   <button className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer' type='sumbit'>{editindex === null?"Add":"Update"}</button>
 </form>
 </div>
  )
}

export default Form
