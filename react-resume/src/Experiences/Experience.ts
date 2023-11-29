export type Experience = {
    jobTitle: string;
    companyName: string;
    startDate: string;
    endDate: string;
    shortDescription: {[key: string]: string;};
    description?: {[key: string]: string;};
  };