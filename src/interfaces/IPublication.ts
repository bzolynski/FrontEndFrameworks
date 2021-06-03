import IPhoto from './IPhoto';
import IUser from './IUser';

export default interface IPublication {
	id: number;
	userId: number;
	title: string;
	body: string;
	photo: IPhoto;
	user: IUser;
};
