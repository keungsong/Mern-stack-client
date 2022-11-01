import React,{useState,useEffect} from 'react'

export default function UseForm(initialFieldValues, setCurrentId) {
    const [values,setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e =>{
      const {name,value} = e.target 
      setValues({
        ...values,
        [name]:value
      }) 
    }

    const resetForm = () =>{
      setValues(initialFieldValues)
      setErrors({ })
      setCurrentId(0)
    }
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  }
}
