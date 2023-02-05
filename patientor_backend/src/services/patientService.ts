import patients from '../../data/patients';
import { SsnOmitedPatient } from '../types';

const getPatients = (): Array<SsnOmitedPatient> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default { getPatients };
