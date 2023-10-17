export interface Emission {
  report_from_utc: string;
  report_to_utc: string;
  co2_emissions: number;
  sox_emissions: number;
  nox_emissions: number;
  pm_emissions: number;
  ch4_emissions: number;
}

export interface EmmisionEntry {
  id: number;
  timeSeries: Emission[];
}

export const EmissionType = [
  'co2_emissions',
  'sox_emissions',
  'nox_emissions',
  'pm_emissions',
  'ch4_emissions',
];
