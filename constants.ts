import { ServiceType, Project, TeamMember } from './types';

// ==============================================================================
// IMAGE MANAGEMENT GUIDE
// ==============================================================================
// When replacing images, try to match the recommended resolution & aspect ratio
// to ensure the best layout stability and performance.
// ==============================================================================

// Fallback images (Professional Placeholders)
const FALLBACK_VIDHI = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800';
const FALLBACK_SWETANG = 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800';

export const IMAGES = {
  // TEAM PHOTOS (Recommended: 800x800px, 1:1 Aspect Ratio)
  VIDHI: '/vidhi.jpg', 
  SWETANG: '/swetang.jpg',
  FALLBACK_VIDHI,
  FALLBACK_SWETANG,

  // HERO BANNERS (Recommended: 1920x1080px, 16:9 Aspect Ratio)
  HERO_ARCH: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
  HERO_AI: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
  HERO_CONTACT: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',

  // PROJECT THUMBNAILS (Recommended: 800x600px, 4:3 Aspect Ratio)
  PROJECT_1: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
  PROJECT_2: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800',
  PROJECT_3: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&q=80&w=800',
  PROJECT_4: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',

  // BLOG COVERS (Recommended: 800x500px, 16:10 Aspect Ratio)
  BLOG_1: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800', 
  BLOG_2: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800', 
  BLOG_3: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800', 
  BLOG_4: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', 
  BLOG_5: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800', 
};

// ==============================================================================
// CONTACT & SOCIAL MANAGEMENT
// ==============================================================================
export const CONTACT_INFO = {
  ADDRESS_LINE_1: "Science City Road",
  ADDRESS_LINE_2: "Ahmedabad, Gujarat 380060",
  PHONE: "+91-9104518311",
  PHONE_DISPLAY: "+91-9104518311",
  WHATSAPP_LINK: "https://wa.me/919104518311",
  EMAIL: "hello@vastucraftai.com",
};

export const SOCIAL_LINKS = {
  INSTAGRAM: "https://www.instagram.com/vastucraftai",
  LINKEDIN: "https://www.linkedin.com/company/vastucraftai",
  TWITTER: "https://twitter.com/vastucraftai",
};

export const FOUNDERS: TeamMember[] = [
  {
    name: 'Ar. Vidhi Satishbhai Gajjar',
    role: 'Principal Architect & Certifying Architect of Record',
    imageUrl: IMAGES.VIDHI,
    bio: 'CoA-registered architect (CA/2018/103740) with 8+ years experience as Certifying Architect of Record for 48+ RERA-registered developments across Gujarat (Shilp, Shaligram, Swati Procon, Goyal & Co., Ratnaakar). Graduated First Class with Distinction from Anant National University.',
    strengths: ['RERA Form 1 Statutory Compliance', 'Vastu-led space planning', 'High-density residential towers', 'Corporate commercial headquarters']
  },
  {
    name: 'Swetang Gajjar',
    role: 'Co-founder, AI & Smart Systems Lead',
    imageUrl: IMAGES.SWETANG,
    bio: 'Senior software engineer & AI/ML specialist with 8+ years in industrial automation and computer vision. Transforms traditional construction into data-driven, intelligent environments.',
    strengths: ['AI & ML model development', 'Computer vision site safety & defect monitoring', 'Smart building IoT', 'Full-stack cloud systems']
  }
];

import { ALL_VERIFIED_PROJECTS } from './data/projectsData';

export const PROJECTS: Project[] = ALL_VERIFIED_PROJECTS;

export const SERVICES_LIST = [
  {
    title: ServiceType.ARCHITECTURE,
    desc: 'Massing, planning, statutory approvals, RERA-ready documentation, and on-ground coordination.',
    icon: 'Building'
  },
  {
    title: ServiceType.INTERIOR,
    desc: 'Turnkey interiors for homes, offices and lifestyle spaces.',
    icon: 'Sofa'
  },
  {
    title: ServiceType.EXTERIOR,
    desc: 'Facade concepts, elevation refinement, lighting and landscape.',
    icon: 'Frame'
  },
  {
    title: ServiceType.AI_TRANSFORMATION,
    desc: 'AI models for quality control, safety, material tracking and smart monitoring.',
    icon: 'Cpu'
  },
  {
    title: ServiceType.CONSTRUCTION,
    desc: 'On-site execution, vendor coordination, quality checks.',
    icon: 'HardHat'
  },
  {
    title: ServiceType.VASTU,
    desc: 'Layout audits, remedies and AI-assisted orientation checks.',
    icon: 'Compass'
  }
];