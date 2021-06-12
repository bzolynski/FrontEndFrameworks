import IUser from './IUser';

export interface IReview {
	id: string;
	name: string;
	entity: string;
	location: string;
	expertise: string;
	date: string;
}

export interface IFee {
	id: string;
	year: number;
	costCenter: string;
	totalAmount: string;
	firm: string;
}

export interface IProposal {
	id: string;
	name: string;
	entity: string;
	location: string;
	expertise: string;
	date: string;
	firm: string;
}

export interface IPanelInfo {
	hourlyFee: string;
	terms: {
		label: string;
		attachement: string;
	};
	correspondants: {
		id: string;
		value: string;
	}[];
}

export interface IDetail {
	id: string;
	value: string;
}

export interface IDetails {
	expertises: IDetail[];
	specialities: IDetail[];
	admissions: IDetail[];
	counties: IDetail[];
}

export default interface IProfile {
	details: IDetails;
	panelInformations: IPanelInfo;
	proposals: IProposal[];
	reviews: IReview[];
	fees: IFee[];
};
