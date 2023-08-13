type Range = 1 | 2 | 3 | 4 | 5;

export interface Cat {
  weight: string;
  id: string;
  name: string;
  temperament: string;
  origin: string;
  description: string;
  life_span: string;
  alt_names: string;
  adaptability: Range;
  affection_level: Range;
  child_friendly: Range;
  energy_level: Range;
  grooming: Range;
  health_issues: Range;
  intelligence: Range;
  shedding_level: Range;
  social_needs: Range;
  stranger_friendly: Range;
  wikipedia_url: string;
  reference_image_id: string;
}
