import IProfile, { IDetails, IFee, IProposal, IReview } from '../../interfaces/IProfile';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_DETAILS = 'UPDATE_DETAILS';
export const UPDATE_PROPOSALS = 'UPDATE_PROPOSALS';
export const UPDATE_REVIEWS = 'UPDATE_REVIEWS';
export const UPDATE_FEES = 'UPDATE_FEES';

export interface IProfileTypes {
	UPDATE_PROFILE: {
		profile: IProfile;
	};
	UPDATE_DETAILS: {
		details: IDetails;
	};
	UPDATE_PROPOSALS: {
		proposals: IProposal[];
	};
	UPDATE_REVIEWS: {
		reviews: IReview[];
	};
	UPDATE_FEES: {
		fees: IFee[];
	};
}
