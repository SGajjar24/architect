export enum ServiceType {
  ARCHITECTURE = 'Architecture',
  INTERIOR = 'Interior Design',
  EXTERIOR = 'Exterior & Facade',
  AI_TRANSFORMATION = 'AI-Powered Transformation',
  CONSTRUCTION = 'Construction',
  VASTU = 'Vastu Consulting'
}

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Mixed Development' | string;
  typology?: string;
  city: string;
  location: string;
  developer?: string;
  description: string;
  imageUrl: string;
  evidenceTier?: 'Direct' | 'RERA Statutory' | string;
  portfolioTreatment?: string;
  constructionStage?: string;
  gujreraTarget?: string;
  verificationLink: string;
  linkStatus?: string;
  flagship?: boolean;
  coaRegistration?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  strengths: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}