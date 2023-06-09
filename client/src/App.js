import React from 'react'
import { useGetCourseQuery, useGetCourseByIdQuery, useCreateCourseMutation, useUpdateCourseMutation } from './services/course'

function App() {
  const { data: dataAll } = useGetCourseQuery()
  const { data: dataById, error, isLoading } = useGetCourseByIdQuery('65a7b4b0-fec7-11ed-8f80-e1b52ec428ac')
  const [createCourse] = useCreateCourseMutation()
  const [updateCourse] = useUpdateCourseMutation()

  if (isLoading) {
    console.log('loadind');
  }

  return (
    <div>
      {dataAll ? <h1>{JSON.stringify(dataAll)}</h1> : null}
      ----
      {dataById ? <h1>{JSON.stringify(dataById)}</h1> : null}
      ---
      <button onClick={() => createCourse({ test: 'MYTESTIK' })}>SEND DATA TO SERVER CREATE</button>
      ---
      <button onClick={() => updateCourse('65a7b4b0-fec7-11ed-8f80-e1b52ec428ac', { test: 'TEST' })}>SEND DATA TO SERVER UPDATE</button>

    </div>
  )
}

export default App
