import IAddress from './IAddress';
import IPhoto from './IPhoto';

export default interface ICompany {
	id: number;
	userId: number;
	name: string;
	adress: string;
	photo: IPhoto;
};
