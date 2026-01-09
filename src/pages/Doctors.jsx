import React from 'react'
import { useEffect, useState } from 'react'

const Doctors = () => {
   axios.get('/http://localhost:3700/doctor/getUsers')


 const Patients = () => {
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getAllPatients()
      .then(res => {
        setPatients(res.data.patients)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to load patients')
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h2>Patients</h2>

      {patients.length === 0 ? (
        <p>No patients found</p>
      ) : (
        <ul>
          {patients.map(patient => (
            <li key={patient._id}>
              <strong>{patient.firstName}</strong> — {patient.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
}

export default Doctors