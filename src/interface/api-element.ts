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

export interface IContactInformation {
    name: string;
    jobTitle: string;
    email: string;
    phoneNumber: string;
    about: string;
}

export interface IScholarship {
    diploma: string;
    school: string;
    description: string;
    startDate: string,
    endDate?: string,
}

export interface IScholarshipList {
    attributes: IScholarship;
    id: number;
}