import IWork from '../../interfaces/IWork';

export const GET_WORKS = 'GET_WORKS';

export interface IWorkTypes {
	GET_WORKS: {
		works: IWork[];
	};
}
