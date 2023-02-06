export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

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
  gender: Gender;
  occupation: string;
}

export type SsnOmitedPatient = Omit<Patient, 'ssn'>;

export type NewPatient = Omit<Patient, 'id'>;
