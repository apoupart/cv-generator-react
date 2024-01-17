export interface IExperience {
    company: string;
    title: string;
    description: string;
    startDate: string,
    endDate?: string,
    isCurrentJob: boolean;
    skillList?: string;
}
export interface ICardAttribute {
    [x: string]: ICardAttribute;
    title: string;
    location: string;
    description: string;
    startDate: string,
    endDate?: string,
    skillList?: string;
    isCurrent: boolean;
}

export interface IExperiencesList {
    attributes: ICardAttribute;
    id: number;
}

export interface IContactInformation {
    name: string;
    jobTitle: string;
    email: string;
    phoneNumber: string;
    about: string;
    websiteUrl?: string;
    githubUrl?: string;
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