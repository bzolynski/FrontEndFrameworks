import IProfile from '../interfaces/IProfile';
import { v4 as uuidv4 } from 'uuid';

export const getFakeProfile = (): IProfile => {
	const profile: IProfile = {
		details: {
			expertises: [
				{
					id: uuidv4(),
					value: 'Merges and acquisition'
				}
			],
			specialities: [
				{
					id: uuidv4(),
					value: 'Cross border'
				},
				{
					id: uuidv4(),
					value: 'Transaction over 500kk'
				}
			],
			admissions: [
				{
					id: uuidv4(),
					value: 'Paris bar'
				},
				{
					id: uuidv4(),
					value: 'Tunisian bar'
				}
			],
			counties: [
				{
					id: uuidv4(),
					value: 'Tunisia'
				}
			]
		},
		panelInformations: {
			hourlyFee: '610$ (Negociated)',
			terms: {
				label: 'Monthly 10k$ retainer',
				attachement: 'some_attachement.jpg'
			},
			projects: 'Corporate M&A and international acq',
			correspondants: [
				{
					id: uuidv4(),
					value: 'Name Surname'
				},
				{
					id: uuidv4(),
					value: 'Name Surname'
				}
			]
		},
		proposals: [
			{
				id: uuidv4(),
				name: 'Operation Timamama',
				entity: 'Renault Blablabal',
				location: 'Italia',
				expertise: 'tax',
				date: '20/01/2020',
				firm: 'JP'
			},
			{
				id: uuidv4(),
				name: 'Op. Timp',
				entity: 'Opel Blablabal',
				location: 'Brasil',
				expertise: 'M&A',
				date: '20/01/2020',
				firm: 'Clifford'
			},
			{
				id: uuidv4(),
				name: 'Op. Blabla',
				entity: 'BMW Blablabal',
				location: 'Honolulu',
				expertise: 'Social',
				date: '20/01/2020',
				firm: 'SVZ'
			}
		],
		reviews: [
			{
				id: uuidv4(),
				name: 'Operation Timamama',
				entity: 'Renault Blablabal',
				location: 'Italia',
				expertise: 'tax',
				date: '20/01/2020'
			},
			{
				id: uuidv4(),
				name: 'Op. Timp',
				entity: 'Opel Blablabal',
				location: 'Brasil',
				expertise: 'M&A',
				date: '20/01/2020'
			},
			{
				id: uuidv4(),
				name: 'Op. Blabla',
				entity: 'BMW Blablabal',
				location: 'Honolulu',
				expertise: 'Social',
				date: '20/01/2020'
			}
		],
		fees: [
			{
				id: uuidv4(),
				year: 2020,
				costCenter: 'CS 2137',
				totalAmount: '2137',
				firm: 'Clifford'
			},
			{
				id: uuidv4(),
				year: 2021,
				costCenter: 'CS 2021',
				totalAmount: '2021',
				firm: 'Lullaby'
			},
			{
				id: uuidv4(),
				year: 2022,
				costCenter: 'CS 2022',
				totalAmount: '2022',
				firm: 'Lullaby'
			},
			{
				id: uuidv4(),
				year: 1990,
				costCenter: 'CS 1990',
				totalAmount: '1990',
				firm: 'Lullaby'
			}
		]
	};

	return profile;
};
