import IProfile, { IProposal } from '../../interfaces/IProfile';
import * as actionTypes from '../actionTypes/profileTypes';
import * as fakeDataService from '../../services/FakeDataService';

export interface IProfileState {
	profile: IProfile;
}

const defaultState = (): IProfileState => ({
	profile: fakeDataService.getFakeProfile()
});

const profileReducer = (state = defaultState(), action: any) => {
	switch (action.type) {
		case actionTypes.UPDATE_PROFILE: {
			const data: actionTypes.IProfileTypes['UPDATE_PROFILE'] = action;
			return {
				...state,
				profile: data.profile
			};
		}
		case actionTypes.UPDATE_DETAILS: {
			const data: actionTypes.IProfileTypes['UPDATE_DETAILS'] = action;
			const profile: IProfile = {
				...state.profile,
				details: { ...data.details }
			};
			return {
				...state,
				profile: profile
			};
		}
		case actionTypes.UPDATE_PROPOSALS: {
			const data: actionTypes.IProfileTypes['UPDATE_PROPOSALS'] = action;

			const profile: IProfile = {
				...state.profile,
				proposals: [ ...data.proposals ]
			};

			return {
				...state,
				profile: profile
			};
		}
		case actionTypes.UPDATE_REVIEWS: {
			const data: actionTypes.IProfileTypes['UPDATE_REVIEWS'] = action;

			const profile: IProfile = {
				...state.profile,
				reviews: [ ...data.reviews ]
			};
			return {
				...state,
				profile: profile
			};
		}
		case actionTypes.UPDATE_FEES: {
			const data: actionTypes.IProfileTypes['UPDATE_FEES'] = action;

			const profile: IProfile = {
				...state.profile,
				fees: [ ...data.fees ]
			};

			return {
				...state,
				profile: profile
			};
		}
		default:
			return { ...state };
	}
};

export default profileReducer;
