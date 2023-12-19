export interface Company {
  _id: string;
  companyName: string;
  companyTagline: string;
  companyEmail: string;
  phoneNumber: string;
  companyWebsite: string;
  socialLink: {
    linkedin: string;
    facebook: string;
    twitter: string;
  };
  logo: string;
}
