import { Dispatch } from 'redux';
import IProfile, { IDetails, IFee, IProposal, IReview } from '../../interfaces/IProfile';
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

export const updateProposals = (proposals: IProposal[]): IProposal[] =>
	((dispatch: Dispatch) => {
		dispatch({
			type: actionTypes.UPDATE_PROPOSALS,
			proposals: proposals
		});
	}) as any;

export const updateReviews = (reviews: IReview[]): IReview[] =>
	((dispatch: Dispatch) => {
		dispatch({
			type: actionTypes.UPDATE_REVIEWS,
			reviews: reviews
		});
	}) as any;

export const updateFees = (fees: IFee[]): IFee[] =>
	((dispatch: Dispatch) => {
		dispatch({
			type: actionTypes.UPDATE_FEES,
			fees: fees
		});
	}) as any;
