import IAddress from './IAddress';
import ICompany from './ICompany';
import IPhoto from './IPhoto';
import IProfile from './IProfile';

export default interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IAddress;
	phone: string;
	website: string;
	company: ICompany;
	photo: IPhoto;
};
