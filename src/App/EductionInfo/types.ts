export type EductionType = {
	startTime: string;
	endTime: string;
	school: string;
	major: string;
	ranking?: number;
	awards: {
		startTime: string;
		endTime: string;
		name: string;
		image?: string;
	}[];
};
