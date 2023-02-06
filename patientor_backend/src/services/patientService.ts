import patients from '../../data/patients';
import { NewPatient, Patient, SsnOmitedPatient } from '../types';
import { v1 as uuid } from 'uuid';

const getPatients = (): Array<SsnOmitedPatient> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
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

export default { getPatients, addPatient };
