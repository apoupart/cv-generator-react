export interface IExperience {
    company: string;
    title: string;
    description: string;
    startDate: string,
    endDate?: string,
    isCurrentJob: boolean;
    skillList?: string;
}

export interface IExperiencesList {
    attributes: IExperience;
    id: number;
}

