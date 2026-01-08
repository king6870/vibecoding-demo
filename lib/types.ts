// Homepage Data Types
export interface HomePageData {
  companyName: string;
  tagline: string;
  description: string;
  highlights: Highlight[];
  ctaButtons: CTAButton[];
}

export interface Highlight {
  id: string;
  title: string;
  value: string;
  icon?: string;
}

export interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

// Team/People Page Types
export interface TeamMember {
  id: string;
  name: string;
  title: string;
  department: string;
  bio: string;
  photo?: string;
  email?: string;
  linkedin?: string;
}

export interface PeoplePageData {
  departments: string[];
  teamMembers: TeamMember[];
}

// Contact Page Types
export interface ContactInfo {
  address: Address;
  phone: string;
  email: string;
  socialMedia: SocialMediaLinks;
  businessHours: BusinessHours[];
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface SocialMediaLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
