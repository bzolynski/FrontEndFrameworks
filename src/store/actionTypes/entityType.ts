import ICompany from '../../interfaces/ICompany';

export const GET_ENTITIES = 'GET_ENTITIES';

export interface IEntityType {
	GET_ENTITIES: {
		entities: ICompany[];
	};
}
