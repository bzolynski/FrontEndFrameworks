import IPublication from '../../interfaces/IPublication';

export const GET_PUBLICATIONS = 'GET_PUBLICATIONS';

export interface IPublicationTypes {
	GET_PUBLICATIONS: {
		publications: IPublication[];
	};
}

