import IUser from './IUser';

export default interface IWork {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
	user: IUser;
};
