import React, { useState } from 'react'
import './styleFormDescricao.css'

const formDescricao = ({onChange, type, placeholder}) => {

const [textarea, setTextArea] = useState()

const handleChange = (e) => {
  
}

if (type == 'descricao') {
  return (
    <>
        <form>
            <textarea className='formulario_descricao' value={textarea} type={type} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}></textarea>
        </form>
    </>
  )
} else {
  return (
    <>
        <form>
            <textarea className='formulario' value={textarea} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}></textarea>
        </form>
    </>
  )
}

  
}

export default formDescricao