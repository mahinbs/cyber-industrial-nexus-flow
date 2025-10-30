export type ServiceItem = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  industries: string[];
  videos: string[]; // video URLs
  overviewText: string;
  scopeText: string; // like specifications/scope of work
  benefitsText: string;
  benefits: string[];
  processText: string; // like usage/process
};

export const services: ServiceItem[] = [
  {
    slug: 'quick-sealing-solutions',
    name: 'Quick Sealing Solutions',
    category: 'repair',
    description:
      'Advanced composite repair solutions for pipelines, tanks, and pressure vessels with minimal downtime.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['24/7 Emergency Response', 'Certified Technicians', 'Hot Tapping Available', 'No Production Shutdown'],
    industries: ['Oil & Gas', 'Petrochemical', 'Marine', 'Power Generation'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691095/Copy_of_foam_100_0512_dryspot_cont_kescnm.mov',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760692030/Copy_of_MOV01932_ip308t.mpeg'
    ],
    overviewText:
      'Rapid composite sealing for leaks and wall-loss, executed without hot work. Our team stabilizes defects quickly, restoring integrity and reducing environmental and safety risk while preserving production commitments.',
    scopeText:
      'Scope includes defect assessment, engineered wrap schedule, surface preparation, composite layup, consolidation and cure, followed by verification and documentation. Options include temporary clamps, line freezing, and hot tapping coordination as required.',
    benefitsText:
      'Organizations gain safer, faster interventions that avoid prolonged shutdowns. Traceable QA, standardized procedures, and trained crews ensure predictable results across assets and regions.',
    benefits: [
      'No hot work; simpler permitting',
      'Return-to-service in hours',
      'Traceable QA and documentation',
      'Reduced spill and emission risk',
      'Applicable across pipe sizes and materials'
    ],
    processText:
      'Typical process: isolate and make safe, prepare surface, apply engineered composite, cure per specification, verify with adhesion/hardness checks, and baseline operating parameters after commissioning.'
  },
  {
    slug: 'predictive-maintenance',
    name: 'Predictive Maintenance',
    category: 'maintenance',
    description: 'AI-powered predictive maintenance solutions to prevent failures before they occur.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['IoT Monitoring', 'AI Analytics', 'Real-time Alerts', 'Custom Dashboards'],
    industries: ['Manufacturing', 'Oil & Gas', 'Mining', 'Utilities'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691091/Copy_of_foam_100_0514_sdv33g.mov',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691127/Copy_of_foam_100_0504_oucdgw.mov'
    ],
    overviewText:
      'Sensor-driven insights convert unplanned failures into scheduled maintenance. We deploy modular IoT and analytics that fit brownfield constraints and deliver actionable signals, not noise.',
    scopeText:
      'Program definition, sensor selection, connectivity and storage, model training, alert playbooks, and change management. Integrations with CMMS and historian streamline operations.',
    benefitsText:
      'Teams focus effort where it matters most, improving availability while reducing overtime and spare consumption. The data trail strengthens audits and cross-site learning.',
    benefits: [
      'Earlier detection of failure modes',
      'Targeted work orders and spares',
      'Integrates with existing CMMS',
      'Lightweight to deploy and scale',
      'Fleet-wide insights over time'
    ],
    processText:
      'Pilot on a critical asset class, validate value, then scale. Establish baselines, thresholds, and review cadence in shift handovers and weekly reliability meetings.'
  },
  {
    slug: 'industrial-cleaning-services',
    name: 'Industrial Cleaning Services',
    category: 'maintenance',
    description: 'Comprehensive industrial cleaning services including hydroblasting and chemical cleaning.',
    image:
      'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['High-Pressure Cleaning', 'Chemical Cleaning', 'Waste Management', 'Environmental Compliance'],
    industries: ['Refineries', 'Chemical Plants', 'Food Processing', 'Marine'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691076/Copy_of_100_0530_jmzalx.mov',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760692007/Copy_of_MVI_6482_vywd2n.avi'
    ],
    overviewText:
      'End-to-end tank and equipment cleaning using automation, hydroblasting, and optimized chemistry to reduce exposure hours and durations while improving QA.',
    scopeText:
      'Method statements, isolation and gas testing, automated head deployment, flow/pressure monitoring, waste classification and disposal, and acceptance documentation.',
    benefitsText:
      'Cleaner outcomes in less time with fewer manned entries. Documentation builds confidence for inspection intervals and regulator interactions.',
    benefits: [
      'Reduced confined-space entry',
      'Repeatable coverage with automation',
      'Lower water and waste volumes',
      'Robust evidence for acceptance',
      'Faster return-to-service'
    ],
    processText:
      'Plan → isolate → deploy automated cleaning → verify clarity/cleanliness → final rinse → waste handling → acceptance with logs and photos.'
  },
  {
    slug: 'ndt-inspection-services',
    name: 'NDT Inspection Services',
    category: 'inspection',
    description: 'Non-destructive testing services for structural integrity and safety compliance.',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Ultrasonic Testing', 'Radiographic Testing', 'Magnetic Particle Testing', 'Dye Penetrant Testing'],
    industries: ['Aerospace', 'Oil & Gas', 'Construction', 'Manufacturing'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691076/Copy_of_foam_100_0511_dryspot_fompw3.mov',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760692011/Copy_of_MVI_6391_rsmx7o.avi'
    ],
    overviewText:
      'Certified technicians deliver UT, RT, MT, and PT to verify wall thickness, detect discontinuities, and support compliance across critical assets.',
    scopeText:
      'Procedure selection and approvals, inspection execution, data capture and reporting, recommendations and repair validation support.',
    benefitsText:
      'Actionable findings reduce uncertainty and enable better planning of repairs and outages while strengthening regulatory posture.',
    benefits: [
      'Accurate, standards-aligned results',
      'Clear, audit-ready reporting',
      'Supports risk-based inspections',
      'Rapid mobilization to site',
      'Verification after repair'
    ],
    processText:
      'Scope definition → access and safety → execute NDT → analyze and report → review with stakeholders and close findings.'
  }
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined =>
  services.find((s) => s.slug === slug);


