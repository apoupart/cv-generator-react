export interface IExperience {
    company: string;
    title: string;
    description: string;
    startDate: Date,
    EndDate?: Date,
    isCurrentJob: boolean;
    skillList?: string;
}

export interface IExperiencesList {
    attributes: IExperience;
    id: number;
}

