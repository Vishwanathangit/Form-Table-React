import React, { useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'

const App = () => {
  const initialformdata = {
    name: "",
    email: ""
  }
  const [formdata, setformdata] = useState(initialformdata)

  const [tableData, settableData] = useState([])

  const [editindex, seteditindex] = useState(null)

  const handleformdatachange = (key, value) => {
    console.log({ key, value })

    setformdata({
      ...formdata,
      [key]: value,

    })
  }


  const handlesumbit = (event) => {
    event.preventDefault()
    console.log("FormSumbitted", formdata)

    if (editindex === null) {
      settableData([...tableData, formdata])
      setformdata(initialformdata)
    }
    else{
      tableData[editindex] = formdata
      setformdata(initialformdata)
      settableData([...tableData, formdata])
      settableData(tableData)
      seteditindex(null)
    }
  }
  console.log("Formdata", formdata)

  const handleedit = (index) => {
    console.log("edit", index)

    const clickeditem = tableData[index]
    setformdata(clickeditem)
    seteditindex(index)
  }

  const handledelete = (index) => {
      tableData.splice(index,1)
      settableData([...tableData])
  }
  return (
    <div>
      <Form formdata={formdata} handleformdatachange={handleformdatachange} handlesumbit={handlesumbit} editindex={editindex} />
      <Table tableData={tableData} handleedit={handleedit} handledelete={handledelete} />
    </div>
  )
}

export default App
