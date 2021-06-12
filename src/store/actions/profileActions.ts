import { Dispatch } from 'redux';
import IProfile, { IDetails } from '../../interfaces/IProfile';
import * as actionTypes from '../actionTypes/profileTypes';

export const updateProfile = (profile: IProfile): IProfile =>
	((dispatch: Dispatch) => {
		dispatch({
			type: actionTypes.UPDATE_PROFILE,
			profile: profile
		});
	}) as any;

	export const updateDetails = (details: IDetails): IDetails =>
	((dispatch: Dispatch) => {
		dispatch({
			type: actionTypes.UPDATE_DETAILS,
			details: details
		});
	}) as any;

