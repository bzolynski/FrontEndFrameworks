import IPublication from '../interfaces/IPublication';
import IUser from '../interfaces/IUser';
import IPhoto from '../interfaces/IPhoto';
//import IComment from '../interfaces/Icomment';
import IWork from '../interfaces/IWork';

export default class RestService {
	private _uri = 'https://jsonplaceholder.typicode.com';

	public async getPublications(limit?: number): Promise<IPublication[]> {
		const pubUri = limit ? `${this._uri}/posts/?_limit=${limit}` : `${this._uri}/posts/`;
		const publications: IPublication[] = await fetch(pubUri).then((resp) => resp.json());
		const newPublications = Promise.all(
			publications.map(async (pub) => {
				pub.user = await this.getUser(pub.userId).then((resp) => resp);
				pub.photo = await this.getPhoto(pub.id).then((resp) => resp);

				return pub;
			})
		);

		return newPublications;
	}

	public async getPhoto(id: number): Promise<IPhoto> {
		const photo: IPhoto = await fetch(`${this._uri}/photos/${id}`).then((resp) => resp.json());

		return photo;
	}

	public async getUser(id: number): Promise<IUser> {
		const user: IUser = await fetch(`${this._uri}/users/${id}`).then((resp) => resp.json());
		user.photo = await this.getPhoto(user.id);

		return user;
	}

	public async getWorks(): Promise<IWork[]> {
		const works: IWork[] = await fetch(`${this._uri}/works/`).then((resp) => resp.json());
		const worksWithUser = Promise.all(
			works.map(async (work) => {
				work.user = await this.getUser(1).then((resp) => resp);

				return work;
			})
		);

		return worksWithUser;
	}
}
