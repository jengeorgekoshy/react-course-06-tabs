import { useState } from 'react'

const Button = ({ personInfo, handleClick }) => {
  const tempNames = new Set()
  personInfo.map((person) => {
    tempNames.add(person.company)
  })
  const names = [...tempNames]
  const [currentPerson, setCurrentPerson] = useState(0)
  return (
    <div className="btn-container">
      {names.map((com, i) => {
        return (
          <button
            type="button"
            className={currentPerson === i ? 'job-btn active-btn' : 'job-btn'}
            key={i}
            onClick={() => {
              handleClick(com)
              setCurrentPerson(i)
            }}
          >
            {com}
          </button>
        )
      })}
    </div>
  )
}
export default Button
