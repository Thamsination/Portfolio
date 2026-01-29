export interface ProjectImage {
  src?: string; // Image source (optional if video is provided)
  video?: string; // External video URL (e.g., hosted on one.com)
  caption?: string;
  position?: string; // CSS object-position value, e.g., 'top', 'bottom', 'center' (default)
  fit?: 'cover' | 'contain' | number; // 'cover' (default), 'contain', or number: 1 = full image, >1 zooms in
  bgColor?: string; // Background color when image doesn't fill container, e.g., '#ffffff', '#2d2d2d'
  halfWidth?: boolean; // If true, image takes 1/2 of row (2 images per row)
  thirdWidth?: boolean; // If true, image takes 1/3 of row (3 images per row)
  // Default is full width (1 image per row)
}

export interface Project {
  id: string;
  title: string;
  description: string;
  categories: string[]; // Multiple categories per project
  thumbnail: string;
  featured?: boolean;
  year: number; // For sorting: use start year of project, 0 for undated projects
  details: {
    role: string;
    timeline: string;
    company?: string;
    tools: string[];
    overview: string;
    overviewTitle?: string;  // Custom heading for overview section
    overviewImages?: ProjectImage[]; // Images for overview section
    challenges?: string;
    challengesTitle?: string; // Custom heading for challenges section
    challengesImages?: ProjectImage[]; // Images for challenges section
    outcome?: string;
    outcomeTitle?: string;   // Custom heading for outcome section
    outcomeImages?: ProjectImage[]; // Images for outcome section
  };
}

export const projects: Project[] = [
  {
    id: 'soundboks-3',
    title: 'SOUNDBOKS 3',
    description: 'Bringing the world\'s loudest portable Bluetooth speaker to market.',
    categories: ['Industrial design', 'Mechanical engineering'],
    thumbnail: '/projects/soundboks-3/thumbnail.jpg',
    featured: true,
    year: 2018,
    details: {
      role: 'Industrial Designer & Mechanical Engineer',
      timeline: '2018 – 2019',
      company: 'SOUNDBOKS',
      tools: ['Fusion 360', 'KeyShot', 'Adobe Creative Suite'],
      overview: 'Joined the SOUNDBOKS team to finalize "SOUNDBOKS 3" and bring it to market. Mechanical responsibilities included industrial design finalization, specifying product UX, mechanical design development, and overseeing supplier activities. These tasks were coordinated with the SOUNDBOKS marketing- and logistics team to ensure holistic development of the product, brand and quality control.',
      overviewTitle: 'Finalizing hardware and UX for market launch',
      overviewImages: [
        { src: '/projects/soundboks-3/image2.jpg', halfWidth: true },
      ],
      challenges: 'Developing the complete user experience including button feel, LED feedback animations, product print, App V1.0 workshops with customers, out-of-box experience design, and all print materials. Created DFMA, mechanical, and QC documentation for the entire product.',
      challengesTitle: 'Designing the complete user experience',
      challengesImages: [
        { src: '/projects/soundboks-3/image3.jpg', fit: 'contain', bgColor: '#2d2d2d', thirdWidth: true },
        { src: '/projects/soundboks-3/image4.jpg', thirdWidth: true, position: 'center 75%' },
      ],
      outcome: 'Successfully launched the SOUNDBOKS 3, now used by over 100,000 customers worldwide. Key contributions included industrial design of the signature grill pattern, branding elements, interface UX with LED animations, reflex port design, and dual-purpose packaging. The product achieved a 4.4-star rating on Google Reviews with customers praising its durability and user experience.',
      outcomeTitle: 'Launching with distinctive industrial design',
      outcomeImages: [
        { src: '/projects/soundboks-3/image1.jpg', position: 'top', fit: 'contain', bgColor: '#FFFFFF' },
        { src: '/projects/soundboks-3/image4.svg', fit: 'contain', bgColor: '#FFFFFF', halfWidth: true },
      ],
    },
  },
  {
    id: 'beocreate',
    title: 'Beocreate',
    description: 'Modular audio platform enabling upcycling of vintage loudspeakers.',
    categories: ['Concept design', 'Design research'],
    thumbnail: '/projects/beocreate/thumbnail.jpg',
    featured: false,
    year: 2015,
    details: {
      role: 'Concept Creator & Project Manager',
      timeline: '2015 – 2017',
      company: 'Bang & Olufsen',
      tools: ['Fusion 360', 'Raspberry Pi', 'Arduino', 'C++', 'Adobe Creative Suite'],
      overview: 'Bang & Olufsen was seeking to unlock new product categories through innovative approaches. As the creator of Beocreate, I championed open-source innovation tools and fostered close collaboration with the enthusiastic B&O and maker communities. Organizeing hackathons both within B&O and alongside external makers to drive early-phase ideation, identifying new opportunities for the company. This collaborative process laid the groundwork and blueprints for the tools needed to support this novel approach to innovation.',
      overviewTitle: 'Fostering innovation through collaborative ideation',
      overviewImages: [
        { src: '/projects/beocreate/image1.jpg', caption: 'B&O workshop for Beocreate possibilities', halfWidth: true },
      ],
      challenges: 'The culmination of the project was the Beocreate 4-channel amplifier, a versatile, all-in-one platform suitable for a wide range of loudspeaker projects. The most compelling use-case emerged when we leveraged the hardware to upcycle vintage loudspeakers, transforming them into modern, high-quality sound systems. To extend our reach beyond B&O enthusiasts and engage the wider maker community, we partnered with [HifiBerry](https://www.hifiberry.com/) to co-develop and distribute the board—accompanied by guides for upcycling not just B&O speakers, but virtually any passive loudspeaker.',
      challengesTitle: 'Creating a modular platform for vintage speakers',
      challengesImages: [
        { src: '/projects/beocreate/image5.jpg', halfWidth: true,caption: 'Product specifications for the Beocreate 4CA, a raspberry pi powered audio platform' },
        { src: '/projects/beocreate/image2.jpg', halfWidth: true, caption: 'An exploded view of an upcycled loudspeaker' },
      ],
      outcome: 'Launched in 2018, Beocreate empowered hobbyists worldwide to breathe new life into vintage speakers. The platform sold globally through HifiBerry partnership and spawned an active community of makers. The project\'s success directly influenced Bang & Olufsen\'s official Recreated and Reloved product lines, demonstrating the viability of sustainable audio products.',
      outcomeTitle: 'Successful launch and the legacy continues',
      outcomeImages: [
        { video: '/projects/beocreate/beocreate-video.mp4', caption: 'Product demo', fit: 'contain', bgColor: '#000000' },
        { src: '/projects/beocreate/image3.jpg', caption: 'A collection of upcycled loudspeakers showcased at TechBBQ', halfWidth: true },
        { src: '/projects/beocreate/image4.jpg', caption: 'An upcycled pink Bang & Olufsen CX50 loudspeaker', halfWidth: true },
      ],
    },
  },
  {
    id: 'pippi-baby-monitor',
    title: 'Pippi Baby Monitor',
    description: 'Concept baby monitor for design-conscious customers.',
    categories: ['Concept design', 'Industrial design'],
    thumbnail: '/projects/pippi-baby-monitor/thumbnail.jpg',
    featured: true,
    year: 2022,
    details: {
      role: 'Designer & Developer',
      timeline: '2022',
      tools: ['OnShape', 'KeyShot', 'Prototyping Tools'],
      overview: 'Pippi is a personal development project targeting design-conscious customers who want decorative electronics. The goal was to design Pippi with local manufacturing and circular materials in mind.',
      overviewTitle: 'Electronics for design-conscious parents',
      overviewImages: [
        { src: '/projects/pippi-baby-monitor/image1.png', bgColor: '#FFFFFF', caption: 'Exploration process of form', halfWidth: true },
      ],
      challenges: 'The goal was to create a design that invoked emotional ties with the customer while maintainging manufacturability. Colors differentiate between baby- and parent unit while saving costs using the same mechanical tooling. Uses ethical materials: durable medically graded silicone from Norway for the top and reclaimed ocean plastic for the bottom.',
      challengesTitle: 'Local manufacturing with ethical materials',
      challengesImages: [
        { src: '/projects/pippi-baby-monitor/image2.jpg', caption: 'Physical prototypes exploring size and proportions', halfWidth: true },
        { src: '/projects/pippi-baby-monitor/image4.jpg', caption: 'Acoustic models verifying sound- and signal quality', halfWidth: true },
      ],
      outcome: 'The concept was developed at Soundhub DK to ensure excellent sound quality using top-tier audio components. It was imperative that the final product conveyed a sense of premium craftsmanship and high quality.',
      outcomeTitle: 'Premium audio with a distinctive design language',
      outcomeImages: [
        { src: '/projects/pippi-baby-monitor/image5.jpg', caption: 'The color differentiation between baby- and parent unit' },
        { src: '/projects/pippi-baby-monitor/image3.png', caption: 'Exploded view of the assembly', halfWidth: true },
      ],
    },
  },
  {
    id: 'concept-kitchen-2025',
    title: 'Concept Kitchen 2025',
    description: 'In 2015 IKEA asked IDEO, how might kitchens look in 2025?',
    categories: ['Concept design', 'Design research'],
    thumbnail: '/projects/concept-kitchen-2025/thumbnail.jpg',
    featured: false,
    year: 2015,
    details: {
      role: 'Design Intern',
      timeline: '2015',
      company: 'IDEO London',
      tools: ['Prototyping Tools', 'Model Making', 'Ideation Methods'],
      overview: 'Chosen from a student project to collaborate with the IDEO London team on envisioning the future of IKEA kitchens. Together, we explored emerging trends and imagined how they would evolve over the next decade—conducting urban farm visits, home visits, and synthesizing our research into actionable design strategies.',
      overviewTitle: 'Exploring future kitchens for IKEA',
      overviewImages: [
        { src: '/projects/concept-kitchen-2025/image2.jpg', caption: 'Sketches ideating "doing more with less space"', halfWidth: true },
      ],
      challenges: 'Our objective was to design an engaging exhibition space for IKEA\'s Concept Kitchen 2025 at Expo 2015 in Milan. By employing lo-fi prototyping techniques—often with simple materials like post-its—we explored how the exhibition could be experienced by visitors and envision a future that fosters meaningful connections and sustainable actions through thoughtful interactions.',
      challengesTitle: 'Translating future trends into physical prototypes',
      challengesImages: [
        { src: '/projects/concept-kitchen-2025/image3.jpg', halfWidth: true },
        { src: '/projects/concept-kitchen-2025/image4.jpg', halfWidth: true },
      ],
      outcome: "The Concept Kitchen 2025 was exhibited at IKEA's #IKEATemporary showcase during Expo 2015 in Milan. The interactive table demonstration and sustainable kitchen concepts generated significant media coverage and influenced IKEA's subsequent product development direction toward smart, sustainable kitchen solutions.",
      outcomeTitle: 'Exhibited at Expo 2015 Milan',
      outcomeImages: [
        { src: '/projects/concept-kitchen-2025/image5.jpg', halfWidth: true },
        { src: '/projects/concept-kitchen-2025/image6.jpg', halfWidth: true },
        { src: '/projects/concept-kitchen-2025/image7.jpg', halfWidth: true },
        { src: '/projects/concept-kitchen-2025/image8.jpg', halfWidth: true },
      ],
    },
  },
  {
    id: 'pedral-watches',
    title: 'Pedral Watches',
    description: 'Watch face design for vintage-inspired timepieces with Scandinavian minimalism',
    categories: ['Industrial design'],
    thumbnail: '/projects/pedral-watches/thumbnail.jpg',
    featured: false,
    year: 2017,
    details: {
      role: 'Industrial Designer',
      timeline: '2017',
      company: 'Pedral',
      tools: ['Rhinoceros 3D', 'KeyShot', 'Adobe Illustrator'],
      overview: 'Collaborated with Pedral\'s founder to design the watch face for the Okapi, a 36mm cushion-shaped timepiece fusing 1970s charm with modern precision. The project focused on creating dial designs that honored vintage aesthetics while maintaining contemporary clarity.',
      overviewTitle: 'Designing the Okapi watch face',
      overviewImages: [
        { src: '/projects/pedral-watches/image1.png', fit: 0.5, bgColor: '#FFFFFF', caption: 'The Okapi blank canvas', thirdWidth: true },
        { src: '/projects/pedral-watches/image3.jpg', thirdWidth: true },
        { src: '/projects/pedral-watches/image4.jpg', thirdWidth: true },
      ],
      challenges: 'Developed CMF explorations for multiple dial variants with a carefully curated color palette. The palette balanced vibrancy with subtlety to create distinct options that complemented the cushion case while ensuring legibility.',
      challengesTitle: 'Creating distinctive dial variants',
      challengesImages: [
        { src: '/projects/pedral-watches/image6.jpg', fit: 1.15, bgColor: '#FFFFFF', thirdWidth: true },
        { src: '/projects/pedral-watches/image7.jpg', fit: 'contain', bgColor: '#FFFFFF', thirdWidth: true },
        { src: '/projects/pedral-watches/image8.jpg', fit: 'contain', bgColor: '#FFFFFF', thirdWidth: true },
      ],
      outcome: 'Delivered production-ready 3D models with CMF specificationsfor the Okapi collection, enabling Pedral to successfully launch their Kickstarter campaign. The design work contributed to 5 unique dial variants that captured 1970s watchmaking aesthetics for a new generation of collectors.',
      outcomeTitle: 'Enabling Pedral\'s debut collection',
      outcomeImages: [
        { video: '/projects/pedral-watches/Pedral-VideoLoop.mp4', caption: 'Product demo', fit: 'contain' },
        { src: '/projects/pedral-watches/image2.jpg', halfWidth: true },
        { src: '/projects/pedral-watches/image5.jpg', halfWidth: true },
      ],
    },
  },
  {
    id: 'wall-lamp',
    title: 'Wall Lamp',
    description: 'Personal project combining digital facets with strict geometry, where digital trends meet physical interactions.',
    categories: ['Industrial design'],
    thumbnail: '/projects/wall-lamp/thumbnail.jpg',
    featured: false,
    year: 2014,
    details: {
      role: 'Designer together with Martina Zbinden',
      timeline: '2014',
      tools: ['Rhinoceros 3D', 'Grasshopper', 'Arduino'],
      overview: 'A reimagining of what a grandfather clock could be in the 21st century. Exploring expressions of a digital form and minimalstic geometry to create a unique luminaire.',
      overviewTitle: 'Inspired by classic design to create modern expressions',
      overviewImages: [
        { src: '/projects/wall-lamp/image1.jpg', position: 'center 28%' },
      ],
      outcome: 'Using digital fabrication we can guide the light where we want reflections, combined with machined aluminium to mount and cool the LEDs. This allowed us to create a unique luminaire that is both functional and aesthetic.',
      outcomeTitle: 'Utilising materials and exploring manufacturing technologies',
      outcomeImages: [
        { src: '/projects/wall-lamp/image2.jpg', position: 'center' },
      ],
    },
  },
  {
    id: 'uvisa-medical-device',
    title: 'UVISA Fii',
    description: 'Treating vaginal infections using light instead of antibiotics.',
    categories: ['Industrial design', 'Mechanical engineering'],
    thumbnail: '/projects/uvisa-medical-device/thumbnail.jpg',
    featured: true,
    year: 2024,
    details: {
      role: 'Chief Product Officer',
      timeline: '2024 – Present',
      company: 'UVISA Health',
      tools: ['SolidWorks', 'FreeCAD', 'Gimp', 'Inkscape', 'Blender',],
      overview: 'Leading product development for UVISA\'s first-of-its-kind home-treatment device that uses light therapy to treat bacterial vaginosis (BV) and candidiasis. Coordinating cross-functional teams spanning embedded firmware, mobile app development, and mechanical engineering to deliver a drug-free alternative that empowers women to manage intimate health at home.',
      overviewTitle: 'Developing a non-pharmacological treatment for vaginal infections',
      overviewImages: [
        { src: '/projects/uvisa-medical-device/image5.jpg', caption: 'Form studies evaluating ergonomics and aesthetics', fit: 'contain', bgColor: '#FFFFFF', halfWidth: true },
        { src: '/projects/uvisa-medical-device/image6.png', caption: 'Rendering of the chosen concept', fit: 'contain', bgColor: '#FFFFFF', halfWidth: true },
        { src: '/projects/uvisa-medical-device/image2.jpg', caption: '3D printed prototype validating machanics and electronics', halfWidth: true },
        { src: '/projects/uvisa-medical-device/image7.jpg', halfWidth: true },
      ],
      challenges: 'Navigating Class IIa medical device regulations (ISO 13485, IEC 60601, ISO 62304) while driving design innovation. The core engineering challenge: optimizing light output for therapeutic effectiveness while managing heat dissipation within intimate body contact limits. Employed computational design generation and parametric evaluation to iterate rapidly on thermal-optical trade-offs, improving product economics through material and geometry optimization.',
      challengesTitle: 'Balancing thermal constraints with therapeutic efficacy',
      challengesImages: [
        { src: '/projects/uvisa-medical-device/image8.jpg', caption: 'DFM evaluation with oversea suppliers', halfWidth: true },
        { src: '/projects/uvisa-medical-device/image9.jpg', caption: 'Validating temperature at dosage radiation', halfWidth: true },
      ],
      outcome: 'Developed complete product architecture from concept through DFM-ready design, reducing BOM cost by 35% through parametric optimization (not shown here). Established comprehensive documentation frameworks meeting EU MDR Class IIa requirements across 50+ technical files. The device has successfully completed clinical trials at Odense University Hospital with 30+ participants, targeting a non-pharmacological solution for the 1 in 3 women affected by BV annually.',
      outcomeTitle: 'From concept to clinical validation',
      outcomeImages: [
        { src: '/projects/uvisa-medical-device/image4.jpg' },
      ],
    },
  },
];

// Helper function to get featured projects (sorted by year, newest first)
export const getFeaturedProjects = () => {
  return projects
    .filter(p => p.featured)
    .sort((a, b) => {
      if (a.year === 0 && b.year === 0) return 0;
      if (a.year === 0) return 1;
      if (b.year === 0) return -1;
      return b.year - a.year;
    });
};

// Helper function to get project by id
export const getProjectById = (id: string) => projects.find(p => p.id === id);

// Helper function to get projects sorted by year (newest first, undated projects at end)
export const getSortedProjects = () => {
  return [...projects].sort((a, b) => {
    // Projects with year 0 (undated) go to the end
    if (a.year === 0 && b.year === 0) return 0;
    if (a.year === 0) return 1;
    if (b.year === 0) return -1;
    // Sort by year descending (newest first)
    return b.year - a.year;
  });
};
