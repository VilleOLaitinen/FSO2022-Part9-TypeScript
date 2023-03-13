import patients from '../../data/patients';
import { NewPatient, Patient, SsnOmitedPatient, NonSensitivePatient } from '../types';
import { v1 as uuid } from 'uuid';

const getPatients = (): Array<SsnOmitedPatient> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries,
  }));
};

const getPatientById = (id: string): NonSensitivePatient | null => {
  const patient = patients.find((patient) => patient.id === id);
  if (patient) {
    const returnedPatient: NonSensitivePatient = patient;
    return returnedPatient;
  } else {
    return null;
  }
};

const addPatient = (patient: NewPatient): Patient => {
  const newId = uuid();
  const newPatient = {
    id: newId,
    ...patient,
  };

  patients.push(newPatient);
  return newPatient;
};

export default { getPatients, getPatientById, addPatient };
