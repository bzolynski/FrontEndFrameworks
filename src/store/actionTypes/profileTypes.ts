import IProfile, { IDetails } from '../../interfaces/IProfile';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_DETAILS = 'UPDATE_DETAILS';
export const UPDATE_ADMISSIONS = 'UPDATE_ADMISSIONS';
export const UPDATE_SPECIALITIES = 'UPDATE_SPECIALITIES';
export const UPDATE_COUNTIES = 'UPDATE_COUNTIES';

export interface IProfileTypes {
	UPDATE_PROFILE: {
		profile: IProfile;
	};
	UPDATE_DETAILS: {
		details: IDetails;
	};
}
