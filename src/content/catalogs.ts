export type CatalogCategory = {
  id: string;
  title: string;
  description: string;
  iconName: 'Wrench' | 'Droplets' | 'Factory';
};

export type CatalogItem = {
  slug: string;
  categoryId: string;
  name: string;
  description: string;
  pages: string;
  size: string;
  preview: string;
  pdfUrl?: string;
  videos?: string[]; // optional array of video URLs
  overviewText: string;
  contentsText: string;
  usageText: string;
  benefits: string[];
};

export const catalogCategories: CatalogCategory[] = [
  {
    id: 'composite-repair',
    title: 'Composite Repair',
    description: 'Advanced composite repair solutions for critical applications',
    iconName: 'Wrench',
  },
  {
    id: 'epoxy-putties',
    title: 'Epoxy Putties & Coatings',
    description: 'High-performance protective and repair coatings',
    iconName: 'Droplets',
  },
  {
    id: 'maintenance-products',
    title: 'Maintenance Products',
    description: 'Smart maintenance solutions for industrial operations',
    iconName: 'Factory',
  },
];

export const catalogs: CatalogItem[] = [
  {
    slug: 'composite-repair-systems-guide',
    categoryId: 'composite-repair',
    name: 'Composite Repair Systems Guide',
    description: 'Complete guide to composite repair methodologies and applications',
    pages: '48 pages',
    size: '12.5 MB',
    preview: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    pdfUrl: '/catalogs/composite-repair-systems.pdf',
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691076/Copy_of_100_0530_jmzalx.mov',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691999/Copy_of_MVI_6067_ofkjvp.avi'
    ],
    overviewText:
      'This guide explains the core principles of composite repair engineering in clear, field-ready language. It starts with fundamentals—load paths, laminate theory, resin behavior, and adhesion mechanics—then connects them to everyday decisions like fiber orientation, layup sequence, and consolidation pressure. Examples from pipelines, tanks, and complex geometries show how theory maps to the real world. Practical notes highlight common pitfalls (contamination, humidity, cure drift) and how to mitigate them without derailing the schedule. The guide also treats documentation as a first-class topic, walking through batch traceability, environmental logs, cure records, and acceptance criteria so your dossier stands up to audits and insurance reviews.\n\nTo help teams move fast, each chapter concludes with condensed checklists and photographic references. Sidebars summarize standards context and provide quick calculators for wrap length, termination zones, and minimum cure before handling. Whether you are planning a repair, training installers, or aligning expectations with stakeholders, this guide compresses experience into a usable, repeatable workflow.',
    contentsText:
      'Chapters include: (1) Design methodology—inputs, safety factors, and validation; (2) Materials selection—resins for temperature and media, fiber architectures for stiffness and drape; (3) Surface preparation—profile targets, cleanliness verification, and primers; (4) Defect assessment—UT mapping, geometry capture, and risk ranking; (5) Wrap scheduling—fiber orientation, layer count, and termination design; (6) Environmental controls—temperature, humidity, and cure management; (7) Special conditions—underwater, splash zone, and elevated temperature repairs; (8) Quality assurance—checklists, photographs, and records; (9) Case studies—onshore and offshore lessons learned; (10) Appendices—quick tables, calculators, and forms ready for photocopy or digital import.',
    usageText:
      'Use this guide during engineering review, job planning, toolbox talks, and post-job closeout. Build local procedures from the provided templates, and embed the checklists into your CMMS or digital forms so QA becomes habit rather than overhead. For new crews, pair the chapter checklists with hands-on demos; for experienced crews, treat the calculators and appendices as a pocket reference that speeds up safe, consistent execution.',
    benefits: [
      'Accelerates training and onboarding',
      'Standardizes engineering and QA',
      'Improves safety and repeatability',
      'Supports audits and documentation',
    ],
  },
  {
    slug: 'marine-composite-repairs',
    categoryId: 'composite-repair',
    name: 'Marine Composite Repairs',
    description: 'Specialized solutions for marine and offshore applications',
    pages: '32 pages',
    size: '8.2 MB',
    preview: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    pdfUrl: '/catalogs/marine-composite-repairs.pdf',
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691076/Copy_of_foam_100_0511_dryspot_fompw3.mov',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691992/Copy_of_MVI_6059_vfe1as.avi'
    ],
    overviewText:
      'Focused on splash‑zone and subsea repairs, this compact guide addresses the realities of current, visibility, and limited access. It compares wet‑service resins and primers, outlines diver‑friendly surface prep techniques, and offers fixtures and consolidation approaches that work below the waterline. Diagrams show optimal fiber paths around fillets, nozzles, and brackets where geometry creates stress raisers. A special section covers coordinating with ROVs for inspection and post‑repair verification when diver time is constrained.',
    contentsText:
      'Sections cover: wet‑service material chemistry; hydrodynamic load cases and laminate design; underwater surface cleaning and profiling; consolidation with wraps, bands, and clamps; cure control with ambient and exotherm management; acceptance criteria for offshore class and flag interactions; and documentation practices suitable for vessels and platforms. Quick worksheets help translate site constraints into procedure adjustments without compromising quality.',
    usageText:
      'Use during offshore planning, dive plan development, and pre‑job briefings. Keep the checklists laminated in the dive shack and attach the acceptance tables to work packs. After the job, use the documentation templates to standardize reporting and speed up stakeholder sign‑off.',
    benefits: ['Cuts offshore downtime', 'Improves subsea QA', 'Consistent procedures', 'Compact best-practice set'],
  },
  {
    slug: 'protective-coatings-handbook',
    categoryId: 'epoxy-putties',
    name: 'Protective Coatings Handbook',
    description: 'Comprehensive guide to industrial protective coatings',
    pages: '64 pages',
    size: '15.8 MB',
    preview: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&h=300&fit=crop',
    pdfUrl: '/catalogs/protective-coatings-handbook.pdf',
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691652/Copy_of_Hydrokinetic_Demo_Heat_Exchanger_Cleaning_df0qck.mp4',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691127/Copy_of_foam_100_0504_oucdgw.mov'
    ],
    overviewText:
      'A practical manual for selecting, specifying, and applying protective coatings. It balances chemistry fundamentals with hands‑on advice that reduces rework. You will find guidance on matching systems to immersion media and temperature, designing stripe coats and film builds, and planning cure windows that work with real outage constraints. Rich photo sequences illustrate surface preparation standards and common defects so teams can align quickly in the field.',
    contentsText:
      'Coverage includes: resin families and their trade‑offs; barrier and sacrificial mechanisms; surface prep grades and cleanliness verification; application methods (airless, plural component, brush/roller) with pros and cons; thickness targets, holiday testing, and adhesion checks; failure modes and root causes; and specification templates with acceptance criteria. Appendices provide DFT calculators, wet‑film checks, and cure schedules.',
    usageText:
      'Ideal for applicators, inspectors, and asset owners. Use it to brief crews, build project‑specific specs, and standardize QA steps. Keep the defect photo atlas on hand for rapid troubleshooting when conditions change.',
    benefits: ['Reduces rework', 'Extends service life', 'Improves inspection quality', 'Clear specifications'],
  },
  {
    slug: 'epoxy-putty-applications',
    categoryId: 'epoxy-putties',
    name: 'Epoxy Putty Applications',
    description: 'Technical specifications and application guidelines',
    pages: '28 pages',
    size: '6.4 MB',
    preview: 'https://images.unsplash.com/photo-1581093458791-9d42cc0a6b8f?w=400&h=300&fit=crop',
    pdfUrl: '/catalogs/epoxy-putty-applications.pdf',
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691539/Copy_of_Foulant-Removal-Technologies_2_i9fho7.mp4',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760692030/Copy_of_MOV01932_ip308t.mpeg'
    ],
    overviewText:
      'Detailed guidance on epoxy putties for rebuilding, sealing, and profile restoration. It explains filler systems, thixotropy, and how to achieve high adhesion on marginal substrates. Step‑by‑step sequences cover vertical and overhead application, feathering edges, and machining or sanding to final dimensions. Illustrated examples demonstrate shape reconstruction on pump casings, flanges, and housings.',
    contentsText:
      'Topics: selecting the right putty for temperature and chemicals; surface preparation and profiling; mixing and pot life management; staged application and consolidation; finishing methods (machining, sanding, top‑coating); and QA checks. Quick tables translate service conditions into product and process choices.',
    usageText:
      'Keep this booklet at maintenance shops and service trucks. Consult it before selecting materials, and follow the step lists during application to ensure consistent geometry and adhesion.',
    benefits: ['Faster repairs', 'Better adhesion outcomes', 'Consistent finishing', 'Less waste'],
  },
  {
    slug: 'smart-maintenance-systems',
    categoryId: 'maintenance-products',
    name: 'Smart Maintenance Systems',
    description: 'AI-powered predictive maintenance solutions catalog',
    pages: '56 pages',
    size: '18.2 MB',
    preview: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop',
    pdfUrl: '/catalogs/smart-maintenance-systems.pdf',
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691214/Copy_of_foam_100_0509_dryspot_with_breakthru_wrsew8.mov',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760692006/Copy_of_MVI_6434_kdr73v.avi'
    ],
    overviewText:
      'A curated catalog of sensors, gateways, and analytics bundles used to stand up predictive maintenance quickly. It explains when to choose vibration, temperature, or process sensing, how to combine them, and how to scale from a pilot to fleet coverage without vendor lock‑in. Example architectures show secure data paths from edge to cloud, with options for on‑prem historians.',
    contentsText:
      'Includes hardware specs, mounting and cabling guidance, wireless options, data models, dashboard examples, and CMMS connectors. Case studies quantify avoided downtime and demonstrate practical alert playbooks. Procurement checklists help teams compare packages beyond headline specs.',
    usageText:
      'Use during solution selection and rollout planning. Map your asset classes to reference architectures, then copy the provided BoMs and deployment checklists to accelerate execution.',
    benefits: ['Right-size deployments', 'Speed up ROI', 'Reduce downtime', 'Improve asset health tracking'],
  },
  {
    slug: 'industrial-cleaning-solutions',
    categoryId: 'maintenance-products',
    name: 'Industrial Cleaning Solutions',
    description: 'Hydroblasting and surface preparation equipment',
    pages: '40 pages',
    size: '11.6 MB',
    preview: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop',
    pdfUrl: '/catalogs/industrial-cleaning-solutions.pdf',
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691091/Copy_of_foam_100_0514_sdv33g.mov',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691350/Copy_of_Copy_of_AIMM_Premise_Demo_1_gzhwad.3gp'
    ],
    overviewText:
      'Equipment catalog covering automated cleaning heads, pumping skids, hoses, and safety systems for tanks and vessels. It explains how to size equipment to balance impact energy with flow, and how to select materials for various residues. Setup diagrams show nozzle paths and coverage patterns to reduce blind spots.',
    contentsText:
      'Performance curves, pressure‑flow envelopes, compatibility charts, interlock schemes, remote operation options, and recommended spares. Example layouts illustrate compact rig‑ups for constrained sites.',
    usageText:
      'Reference for turnaround planners and contractors. Use it to prepare bids, stage spares, and select configurations that shorten setup time while improving cleaning outcomes.',
    benefits: ['Better equipment matching', 'Safer operations', 'Faster setup', 'Improved cleaning outcomes'],
  },
];

export const getCatalogBySlug = (slug: string): CatalogItem | undefined =>
  catalogs.find((c) => c.slug === slug);


