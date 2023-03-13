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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {}

export interface Patient {
  id: string;
  ssn: string;
  name: string;
  dateOfBirth: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
}

export type SsnOmitedPatient = Omit<Patient, 'ssn'>;

export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries'>;

export type NewPatient = Omit<Patient, 'id'>;
