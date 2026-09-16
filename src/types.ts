export interface Course {
  id: string;
  name: string;
  category: 'Mathematics' | 'Sciences' | 'Computer' | 'Business';
  level: string;
  examBoards: ('Cambridge' | 'Edexcel')[];
  description: string;
  features: string[];
  instructor: string;
  badge?: string;
  monthlyFee?: string;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  role: string;
  subject: string;
  curriculum: string;
  photo: string;
  bio: string;
  experience?: string;
  highlights: string[];
  quote: string;
  isFounder?: boolean;
}

export interface CampusFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CampusImage {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: string;
}

export interface AcademyEvent {
  id: string;
  title: string;
  season: string;
  category: string;
  date: string;
  location: string;
  status: 'Upcoming' | 'Completed' | 'Annual Highlight';
  description: string;
  activities?: string[];
  bannerImage?: string;
  rules?: string[];
  highlights?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  subject: string;
  grade?: string;
  quote: string;
  initials: string;
  verified: boolean;
}
