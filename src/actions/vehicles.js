import staticData from '../data/vehicles';
import { FETCH_VEHICLES } from './types';

export const fetchVehicles = () => (
  {
    type: FETCH_VEHICLES,
    payload: staticData.vehicles,
  }
);
