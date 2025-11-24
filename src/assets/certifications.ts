import AWSCloudPractitioner from '../assets/images/Cert_Cloud_Practitioner.png';
import AWSDeveloperAssociate from '../assets/images/Cert_Developer.png';

export const PORTFOLIO_CERTIFICATIONS = [
  {
    src: AWSCloudPractitioner,
    alt: 'AWS Cloud Practitioner',
    url: 'https://www.credly.com/badges/3b237b28-d064-4c7a-a2be-7951f26cb70d/public_url',
    issued: 'Sep 2024',
  },
  {
    src: AWSDeveloperAssociate,
    alt: 'AWS Developer Associate',
    url: 'https://www.credly.com/badges/bd7774ec-a9b4-44e8-9b15-8bdf49d9128f/public_url',
    issued: 'Mar 2025',
  },
] as const;

export type PortfolioCert = (typeof PORTFOLIO_CERTIFICATIONS)[number];
