import React, {useState, useEffect} from 'react'
import patientsdata from "../MOCK_DATA"

const PatientsList = () => {
    const[patients, setPatients]=useState(patientsdata);

  return (
    <div>
        <h4>Patients</h4>
        {patients.map((patient) => {
            return (
                
            )
        })}
        
        
        
        </div>
  )
}

export default PatientsList