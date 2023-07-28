import { useState } from 'react'
import { useEffect } from 'react'
import JobInfo from './JobInfo'
import Button from './Button'

const url = 'https://course-api.com/react-tabs-project'

let company = []

const App = () => {
  const [personInfo, setPersonInfo] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currentPerson, setCurrentPerson] = useState([0])

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPersonInfo(data)
      setIsLoading(false)
      setCurrentPerson(data[0])
      company = data
    } catch (err) {
      setError(true)
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  if (error) {
    return <h2>Something went wrong...</h2>
  }

  const handleClick = (name) => {
    const newPersonInfo = personInfo.filter((person) => {
      return person.company === name
    })
    setCurrentPerson(newPersonInfo[0])
  }

  return (
    <section className="jobs-center">
      <Button personInfo={company} handleClick={handleClick} />
      <JobInfo jobs={currentPerson} />
    </section>
  )
}
export default App
