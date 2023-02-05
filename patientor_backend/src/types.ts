export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: string;
  ssn: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  occupation: string;
}

export type SsnOmitedPatient = Omit<Patient, 'ssn'>;
