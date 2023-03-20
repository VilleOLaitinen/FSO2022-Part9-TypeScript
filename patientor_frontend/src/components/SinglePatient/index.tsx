import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import patientService from '../../services/patients';
import { Diagnosis, Gender, Patient } from '../../types';
import { Box } from '@mui/material';
import TransgenderIcon from '@mui/icons-material/Transgender';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

interface Props {
  diagnoses: Diagnosis[];
}

const SinglePatient = ({ diagnoses }: Props) => {
  const { id } = useParams();
  const [patient, setPatient] = useState<Patient>();

  useEffect(() => {
    const fetchPatient = async (id: string) => {
      const result = await patientService.getById(id);
      if (result) {
        setPatient(result);
      }
    };

    if (id) {
      fetchPatient(id);
    }
  }, [id]);

  const findDiagnosisName = (diagnoses: Diagnosis[], code: string) => {
    const match = diagnoses.find((diagnosis) => diagnosis.code === code);
    return match ? match.name : null;
  };

  const GenderIcon = (gender: Gender) => {
    if (gender === 'female') {
      return <FemaleIcon />;
    } else if (gender === 'male') {
      return <MaleIcon />;
    } else {
      return <TransgenderIcon />;
    }
  };

  return (
    <div>
      <Box>
        {patient ? (
          <>
            <h2>
              {patient?.name} {GenderIcon(patient.gender)}
            </h2>
            <p>ssh: {patient.ssn}</p>
            <p>occupation: {patient.occupation}</p>
            <h3>entries:</h3>
            {patient.entries?.map((entry) => (
              <div key={entry.id}>
                <p>
                  {entry.date} <i>{entry.description}</i>
                </p>{' '}
                <ul>
                  {entry.diagnosisCodes?.map((code) => (
                    <li key={code}>
                      {code} {findDiagnosisName(diagnoses, code)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        ) : (
          <p>Patient not found</p>
        )}
      </Box>
    </div>
  );
};

export default SinglePatient;
