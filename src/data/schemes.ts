
export interface Scheme {
  id: string;
  title: string;
  description: string;
  ministry: string;
  eligibility: string;
  benefits: string;
  category: string;
  applicationLink: string;
  lastUpdated: string;
}

export const schemes: Scheme[] = [
  {
    id: "edu-1",
    title: "National Scholarship Portal",
    description: "A one-stop solution for all scholarship needs of students.",
    ministry: "Ministry of Education",
    eligibility: "Students with family income less than 6 lakhs per annum",
    benefits: "Financial assistance for education expenses",
    category: "education",
    applicationLink: "https://scholarships.gov.in",
    lastUpdated: "2023-12-15"
  },
  {
    id: "edu-2",
    title: "Prime Minister's Research Fellowship",
    description: "Fellowship program to attract talented students for doctoral studies in premier institutions.",
    ministry: "Ministry of Education",
    eligibility: "Students pursuing PhD in IITs, IISc, IISERs, NITs",
    benefits: "Fellowship of ₹70,000 to ₹80,000 per month with research grant",
    category: "education",
    applicationLink: "https://pmrf.in",
    lastUpdated: "2024-01-10"
  },
  {
    id: "health-1",
    title: "Ayushman Bharat",
    description: "Health insurance scheme providing coverage for hospitalization expenses.",
    ministry: "Ministry of Health and Family Welfare",
    eligibility: "Economically disadvantaged families as per SECC data",
    benefits: "Health coverage up to ₹5 lakh per family per year",
    category: "health",
    applicationLink: "https://pmjay.gov.in",
    lastUpdated: "2024-02-28"
  },
  {
    id: "health-2",
    title: "PM Jan Aushadhi Yojana",
    description: "Provides quality medicines at affordable prices through dedicated outlets.",
    ministry: "Ministry of Chemicals and Fertilizers",
    eligibility: "All citizens",
    benefits: "50-90% lower prices on medicines",
    category: "health",
    applicationLink: "https://janaushadhi.gov.in",
    lastUpdated: "2023-11-20"
  },
  {
    id: "agri-1",
    title: "PM Kisan Samman Nidhi",
    description: "Direct income support to all landholding farmers.",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    eligibility: "All small and marginal farmers with cultivable land",
    benefits: "₹6,000 per year in three equal installments",
    category: "agriculture",
    applicationLink: "https://pmkisan.gov.in",
    lastUpdated: "2024-03-05"
  },
  {
    id: "agri-2",
    title: "Kisan Credit Card",
    description: "Provides farmers with affordable credit for their agricultural needs.",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    eligibility: "All farmers, sharecroppers, and tenant farmers",
    benefits: "Access to short-term loans at reduced interest rates",
    category: "agriculture",
    applicationLink: "https://pmkisan.gov.in/kcc",
    lastUpdated: "2023-10-12"
  },
  {
    id: "emp-1",
    title: "PM SVANIDHI",
    description: "Micro-credit facility for street vendors affected by the pandemic.",
    ministry: "Ministry of Housing and Urban Affairs",
    eligibility: "Street vendors operating before March 24, 2020",
    benefits: "Working capital loan up to ₹10,000",
    category: "employment",
    applicationLink: "https://pmsvanidhi.mohua.gov.in",
    lastUpdated: "2023-09-18"
  },
  {
    id: "emp-2",
    title: "PM Rozgar Yojana",
    description: "Employment generation program providing subsidy to small businesses.",
    ministry: "Ministry of Labour and Employment",
    eligibility: "Educated unemployed youth to set up self-employment ventures",
    benefits: "Subsidized loans for setting up small businesses",
    category: "employment",
    applicationLink: "https://labour.gov.in",
    lastUpdated: "2024-01-25"
  }
];

export const getSchemesByCategory = (category: string): Scheme[] => {
  return schemes.filter(scheme => scheme.category === category);
};

export const getAllMinistries = (): string[] => {
  const ministries = schemes.map(scheme => scheme.ministry);
  return Array.from(new Set(ministries));
};
