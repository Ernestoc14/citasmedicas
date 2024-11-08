import React from 'react'

interface CitaCardProps {
  title: String,
  description: String,
  date: String
}

const CitaCard: React.FC<CitaCardProps> = ({title, description, date}) => {
  return (
    <div className='flex flex-col border 1px border-black w-52'>
      <h1 className='text-2xl justify-center'>CitaCard</h1>
      <p>Nombre: {title}</p>
      <p>Descripcion: {description}</p>
      <p>Fecha: {date}</p>
    </div>
  )
}

export default CitaCard