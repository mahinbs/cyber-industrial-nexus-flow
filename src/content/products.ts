export type ProductItem = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  price: string;
  applications: string[];
  features: string[];
  videos: string[]; // array of video URLs
  overviewText: string; // long plain text (~500+ words)
  specificationsText: string; // long plain text (~500+ words)
  benefitsText: string; // long plain text (~500+ words)
  benefits: string[]; // concise bullet points for quick scan
  usageText: string; // long plain text (~500+ words)
};

export const products: ProductItem[] = [
  {
    slug: 'sealxpert-pro',
    name: 'SealXpert Pro',
    category: 'composite-repair',
    description:
      'Revolutionary smart sealing system with IoT monitoring for critical infrastructure. Real-time leak detection and automated response capabilities.',
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    price: 'Contact for Quote',
    applications: ['Pipelines', 'Pressure Vessels', 'Critical Infrastructure'],
    features: ['IoT Monitoring', 'Smart Alerts', 'Auto Response'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760692064/Copy_of_Partially_Plugged_8inch_Pipe_wxc2zr.avi',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760692030/Copy_of_MOV01932_ip308t.mpeg'
    ],
    overviewText: `SealXpert Pro is a next-generation sealing platform that blends composite repair science with real-time telemetry to deliver durable, auditable performance in demanding industrial settings. Unlike conventional seals that are installed, documented, and effectively forgotten until the next outage, SealXpert Pro remains observant throughout its lifecycle. Embedded sensors track temperature, strain, vibration, and ambient conditions, feeding edge analytics that flag anomalies early and guide targeted intervention before minor degradation becomes a disruptive event. The result is a sealing solution that behaves like a living part of the asset, continuously aligning with operational realities.

At the core of the system is a chemically resistant resin formulated to deliver predictable adhesion and mechanical properties across a wide temperature and pressure envelope. Reinforcement architectures are engineered to distribute loads efficiently and to accommodate thermal cycling, start–stop regimes, and incidental misalignment. The sealing system installs without hot work, minimizes downtime, and is compatible with typical surface preparation standards, allowing reliable application in the constrained windows common to turnarounds and corrective maintenance. Documentation is first-class: materials are fully traceable and installation records capture environmental conditions, cure logs, and QA checkpoints.

The digital layer makes the difference. A compact telemetry module aggregates sensor signals and runs lightweight diagnostics on-device, reporting health indicators over secure channels to a central dashboard or the plant historian. Operators can review baselines and alerts, correlate patterns to process conditions, and export summaries for compliance. Over time, the dataset strengthens confidence in inspection intervals and helps maintenance teams shift effort from reactive firefighting to a stable, predictive rhythm. For organizations pursuing reliability-centered maintenance, SealXpert Pro becomes a simple, pragmatic step that moves the needle on availability, safety, and cost with minimal change management.`,
    specificationsText: `Mechanical envelope: SealXpert Pro supports operating pressures up to 100 bar and temperatures from −20°C to 180°C, subject to engineered layup schedules and substrate conditions. Mechanical performance is tuned through fiber orientation and layer count to balance hoop strength, axial reinforcement, and localized stiffening near flanges, tees, or geometrical transitions. Cure profiles are optimized for field practicality while delivering high glass transition temperatures and low creep in service.

Materials and compatibility: The resin matrix offers excellent resistance to water, hydrocarbons, and typical refinery and petrochemical media. Accelerated aging tests and solvent immersion studies guide selection for outlier chemistries. Reinforcements use high-modulus fibers with controlled areal weight and fabric architecture to ensure repeatable wet-out and consolidation. Surface preparation requirements follow well-known standards; primers are available for challenging substrates or marginal conditions.

Instrumentation: Sensor suites can include temperature, strain, and triaxial vibration, selected per risk profile. The telemetry module features secure connectivity options and local buffering to tolerate network interruptions. Power can be line-fed or battery-backed depending on installation constraints. Firmware supports health scoring and configurable thresholds so teams can start simple and iterate.

Quality and documentation: Traceability spans batch numbers, shelf life records, application logs, and curing data. Optional photographs and site notes are attached within the digital record. A concise data export provides the evidence base for audits, insurance requirements, and internal governance. The specification balances rigor with field practicality so crews can execute consistently under real-world constraints.`,
    benefitsText: `Downtime reduction is the most visible benefit: by detecting emerging issues earlier, SealXpert Pro reduces the frequency and severity of unplanned outages. Repairs are executed on your schedule, often during normal shifts, rather than in the middle of the night under production pressure. Safety improves because fewer reactive interventions mean fewer rushed operations, fewer exposure hours, and better control of the job site. The telemetry record also makes it easier to communicate with stakeholders—operations, management, and regulators—about asset condition and decision rationale.

Cost performance follows. Materials are competitive with high-quality composite repair systems, but the value compounding comes from the avoided downtime, the improved allocation of craft labor, and the evidence-based lengthening of inspection intervals. Because the system installs without hot work, permitting is simpler and conflicts with operations are reduced. Standardized procedures shorten training curves and support regional replication across multiple sites.

Finally, SealXpert Pro strengthens organizational learning. Each installation adds data that helps teams understand how assets age under local conditions. Over time the fleet-level view highlights patterns—by equipment class, medium, or operating mode—that inform procurement choices and design standards. The solution is therefore not only a seal; it is a capability that steadily improves the predictability and economics of the maintenance function.`,
    benefits: [
      'Cuts unplanned downtime with predictive alerts',
      'Improves safety by reducing reactive interventions',
      'Installs without hot work and shortens permits',
      'Enhances audit readiness with digital traceability',
      'Scales across sites with standardized procedures'
    ],
    usageText: `SealXpert Pro is best applied where leakage risk or structural degradation has material consequences for safety, environment, or production. Typical use cases include pipelines and pressure vessels in midstream and downstream plants, separators and exchangers subject to thermal cycling, and ancillary systems where access is constrained and hot work is undesirable. The workflow is straightforward: assess the defect, engineer the wrap schedule, prepare the surface, apply and consolidate the composite, initiate cure, and commission the telemetry. Commissioning includes establishing a baseline under normal operation and setting initial alert thresholds based on experience and risk tolerance.

Integrating the dashboard into the plant’s daily rhythm is simple: a quick glance during the shift handover highlights any deviations, and weekly reviews surface long-trend insights. When alerts occur, the record shows context—temperature excursions, vibration spikes, or unusual strain growth—so teams can right-size response. In most organizations, adoption is quick because the solution does not force major process changes; it augments current practice with timely, actionable information. As more units are added, the reliability program gains momentum and the payback accelerates.`
  },
  {
    slug: 'carbonwrap-pro-x1',
    name: 'CarbonWrap Pro X1',
    category: 'composite-repair',
    description: 'Advanced carbon fiber composite repair system for high-pressure pipelines and structural reinforcement.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    price: 'Contact for Quote',
    applications: ['Pipelines', 'Pressure Vessels', 'Structural Repair'],
    features: ['High Strength', 'Chemical Resistant', 'Quick Cure'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760692019/Copy_of_Hydrokinetic_Demo_3_acqs91.mp4',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760692011/Copy_of_MVI_6391_rsmx7o.avi'
    ],
    overviewText: `CarbonWrap Pro X1 is an engineered composite repair system designed to restore structural performance to pressurized and non-pressurized assets without welding. The system combines high-modulus carbon fibers with a toughened resin matrix to deliver exceptional strength-to-weight while conforming to complex geometries. By transferring loads through bonded layers and oriented fibers, the wrap bridges defects, redistributes stresses, and arrests crack growth, often returning equipment to safe operation in a single shift.

Because installation avoids hot work, CarbonWrap Pro X1 is particularly effective where ignition risk, permitting complexity, or production constraints make welding impractical. Surface preparation and layup are executed under controlled conditions with consistent consolidation and cure verification. The resulting laminate exhibits predictable mechanical properties validated by testing and by years of field use across pipelines, vessels, and structural members. Documentation and traceability match the expectations of modern integrity programs, enabling confident audit and insurance interactions.`,
    specificationsText: `Design methodology: Repairs are engineered from first principles. Input data includes defect geometry, wall loss maps, design pressure and temperature, substrate material, and load cases. From these, engineers determine fiber orientations, layer counts, wrap length, and termination details. Calculations follow recognized composite repair standards and incorporate safety factors suited to the service.

Materials: The system offers multiple resin options to match service temperature and chemical environment. Carbon fabrics are selected for modulus and drape; glass or hybrid options are available when electrical isolation or impact resistance is a priority. Primers and surface conditioners are specified for challenging substrates or where moisture control is limited.

Quality: Application controls include environmental monitoring, mixing and pot-life tracking, consolidation methods, and cure confirmation via hardness or temperature-time records. The documentation bundle ties together material batch numbers, installer credentials, photos, and inspection reports to create a defensible record.

Performance envelope: Typical service temperatures reach up to 150°C depending on formulation; pressure capability is a function of the engineered schedule. The installed wrap adds minimal thickness and weight, making it ideal where clearance is tight or supports are lightly loaded.`,
    benefitsText: `Operationally, CarbonWrap Pro X1 reduces downtime by enabling planned, cold-work execution that often coincides with normal operating schedules. The absence of hot work streamlines permitting and reduces conflicts with operations, improving overall site productivity. Because the composite is light and conformable, access solutions are simpler and less intrusive than those required for metal replacement.

From a lifecycle perspective, the repair stabilizes defects and slows further degradation, buying time until replacement is convenient or, in many cases, serving as a durable long-term solution. The cost profile is attractive when factoring scaffolding, isolation, and production impacts avoided by not cutting and welding. For teams measured on safety and reliability KPIs, the approach lowers risk exposure while producing thorough, auditable outcomes that align with corporate governance.`,
    benefits: [
      'No hot work—safer and simpler permitting',
      'Rapid return-to-service with cold application',
      'High strength-to-weight; minimal added mass',
      'Engineered to standards with full QA traceability',
      'Conforms to complex geometries and tight access'
    ],
    usageText: `Use CarbonWrap Pro X1 on piping, elbows, tees, reducers, small vessels, and structural members experiencing corrosion thinning, dents, gouges, or crack-like flaws. Underwater and splash-zone variants enable offshore application with trained dive teams. The field workflow emphasizes cleanliness, profile, and proper consolidation; once cured, the repair returns the item to service with a clearly documented capacity. Integrating the method into integrity programs is straightforward: define selection criteria, standardize data capture, and train crews. Over time, organizations build a repeatable capability that shortens response time and increases on-stream reliability.`
  },
  {
    slug: 'hydroclean-5000',
    name: 'HydroClean 5000',
    category: 'cleaning-systems',
    description: 'Hydroblasting system for industrial tank cleaning with automated debris removal and filtration.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    price: 'Contact for Quote',
    applications: ['Tank Cleaning', 'Surface Preparation', 'Hydroblasting'],
    features: ['40,000 PSI', 'Automated System', 'Water Recycling'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760692006/Copy_of_MVI_6434_kdr73v.avi',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760692007/Copy_of_MVI_6482_vywd2n.avi'
    ],
    overviewText: `HydroClean 5000 is an automated hydroblasting platform purpose-built for tanks and process vessels. The system integrates high-pressure water delivery with programmable motion, enabling repeatable coverage patterns that mobilize sludge, scale, and residues with fewer confined-space entries. Compared to manual lance methods, the automation delivers uniform cleaning, shorter durations, and better documentation while keeping personnel at a safer distance from hazards.

The platform is modular. Nozzle heads are selected for geometry and foulant type; traversing mechanisms adapt to access points and internal structures. Water recycling options reduce total consumption and minimize haulage volumes, and integrated filtration prevents re-deposition. The result is a compact, field-proven solution that aligns with modern expectations for safety, environmental stewardship, and turnaround efficiency.`,
    specificationsText: `Pressure and flow: HydroClean 5000 supports operating pressures up to 40,000 PSI with configurable flow to balance impact energy and coverage. Motion control allows linear, orbital, and custom paths that conform to vessel diameter, height, and internals. Control software records patterns, dwell times, and passes for QA.

Compatibility: The platform addresses petroleum sludges, polymerized residues, mineral scale, and typical process deposits. Heating and chemical assist options are available when viscosity or tenacity require preconditioning. Materials are selected for corrosion resistance and longevity in aggressive environments.

Safety and instrumentation: The system emphasizes remote operation, pressure interlocks, and real-time monitoring. Cameras, flow and pressure sensors, and optional turbidity measurement support active QA and post-job verification. Documentation outputs—a combination of logs and images—simplify acceptance and lessons learned.

Deployment: The modular kit fits through standard manways and assembles quickly. Crews can replicate best practices across assets, flattening the learning curve and improving predictability from project to project.`,
    benefitsText: `Automating cleaning reduces exposure hours, scaffolding, and manned entry, immediately improving safety outcomes. Schedules compress because coverage is consistent and repeatable; crews spend less time troubleshooting blind spots and more time progressing the plan. Water use drops with recycling and efficient circulation, and waste volumes decline because deposits are mobilized effectively with fewer passes.

From an operational perspective, vessels return to service cleaner, which stabilizes heat transfer, flow, and downstream quality. The QA record strengthens confidence in inspection intervals and provides tangible evidence for regulators and stakeholders. Over time, facilities that standardize on HydroClean 5000 see a step-change in turnaround predictability, freeing resources for higher-value work.`,
    benefits: [
      'Fewer confined-space entries and exposure hours',
      'Faster, repeatable cleaning with automation',
      'Lower water consumption and waste volumes',
      'Better QA evidence with logged coverage and sensors',
      'Stabilizes throughput and heat transfer post-clean'
    ],
    usageText: `HydroClean 5000 excels on storage tanks, separators, and process vessels across refining, petrochemical, and power generation. It is also effective as a surface preparation tool ahead of coating or inspection, where consistent cleanliness reduces rework. Implementing the system is straightforward: define target coverage, specify access and isolation, stage utilities and waste handling, and execute under a documented method statement. The approach scales from small vessels to large tanks and integrates cleanly with site permits and lockout/tagout. With each deployment, the team’s library of patterns grows, making subsequent campaigns faster and more predictable.`
  },
  {
    slug: 'flexseal-composite',
    name: 'FlexSeal Composite',
    category: 'composite-repair',
    description: 'Flexible composite repair solution for underwater and marine applications with superior adhesion.',
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    price: 'Contact for Quote',
    applications: ['Underwater Repair', 'Marine Vessels', 'Offshore Platforms'],
    features: ['Underwater Cure', 'Flexible', 'Salt Water Resistant'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760692002/Copy_of_MVI_6273_o1wuw0.avi',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691999/Copy_of_MVI_6067_ofkjvp.avi'
    ],
    overviewText: `FlexSeal Composite is tuned for wet and splash-zone environments where conventional repairs struggle. Its resin chemistry maintains adhesion and strength in the presence of moisture, while the reinforcement architecture balances flexibility and toughness to tolerate hydrodynamic loads.`,
    specificationsText: `Formulations support underwater application windows, controlled cure profiles, and compatibility with common marine substrates. Kits include primers and consolidation tools optimized for dive teams and topside crews.`,
    benefitsText: `Enables rapid, cold-work restoration of integrity offshore, reducing downtime and vessel stays. The conformable laminate wraps complex shapes and returns equipment to service quickly.`,
    benefits: [
      'Underwater-capable workflow and cure',
      'Conformable laminate tolerates movement',
      'High adhesion in wet and splash zones',
      'Cuts offshore downtime and costs',
      'Dive-team friendly procedures and tools'
    ],
    usageText: `Use on splash-zone steel, pilings, hull penetrations, and topside features subject to salt spray and impact. Follow surface prep best practices and verify cure per procedure.`
  },
  {
    slug: 'rapidfix-emergency-kit',
    name: 'RapidFix Emergency Kit',
    category: 'composite-repair',
    description: 'Emergency composite repair kit for immediate leak sealing and temporary structural repairs.',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    price: 'Contact for Quote',
    applications: ['Emergency Repair', 'Leak Sealing', 'Temporary Fix'],
    features: ['Quick Application', 'Portable Kit', '5-Min Cure'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691996/Copy_of_MOV01939_g6fvxk.mpeg',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691992/Copy_of_MVI_6059_vfe1as.avi'
    ],
    overviewText: `RapidFix is a field-ready kit designed to stop leaks and stabilize components fast. Pre-measured materials and intuitive steps allow crews to act within minutes.`,
    specificationsText: `Fast-cure resin, moisture-tolerant surface prep, and universal tools included. Suitable for a broad temperature range and common plant fluids.`,
    benefitsText: `Minimizes spill risk and production losses by turning uncontrolled leaks into orderly, planned repairs. Portable and easy to store across sites.`,
    benefits: [
      'Stops leaks fast with 5-minute cure options',
      'Simple, portable kit for first responders',
      'Works across common pipe sizes and media',
      'Bridges to permanent repair with traceable record',
      'Reduces environmental and safety impact'
    ],
    usageText: `Ideal for piping pinholes, weeps, and small through-wall defects. Use as a bridge to permanent repair; document application for follow-up planning.`
  },
  {
    slug: 'epoxyshield-industrial',
    name: 'EpoxyShield Industrial',
    category: 'epoxy-coatings',
    description: 'Premium epoxy coating system providing superior protection against chemical corrosion and extreme temperatures.',
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    price: 'Contact for Quote',
    applications: ['Tank Lining', 'Floor Coating', 'Marine Protection'],
    features: ['Chemical Resistant', '200°C Service', 'VOC Free'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691979/Copy_of_Hydrokinetic_Demo_1_nktx1f.mp4',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691652/Copy_of_Hydrokinetic_Demo_Heat_Exchanger_Cleaning_df0qck.mp4'
    ],
    overviewText: `EpoxyShield Industrial is a high-performance barrier system that resists chemical attack and abrasion, extending the life of assets in harsh duty.`,
    specificationsText: `High-build lining capability, novolac variants for solvents and temperature, and additives for slip resistance or conductivity.`,
    benefitsText: `Improves reliability and reduces maintenance frequency by protecting substrates from corrosion mechanisms and erosion.`,
    benefits: [
      'High chemical and abrasion resistance',
      'High-build protection reduces recoat frequency',
      'Options for high temp and solvents (novolac)',
      'Supports slip resistance and ESD needs',
      'Robust QA with DFT/holiday testing'
    ],
    usageText: `Apply to properly prepared steel or concrete; follow film-build targets, cure schedules, and QA steps including DFT and holiday testing.`
  },
  {
    slug: 'thermoseal-pro',
    name: 'ThermoSeal Pro',
    category: 'epoxy-coatings',
    description: 'High-temperature resistant putty system for extreme heat applications up to 300°C continuous service.',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    price: 'Contact for Quote',
    applications: ['Furnace Repair', 'Exhaust Systems', 'Heat Exchangers'],
    features: ['300°C Service', 'Thermal Shock Resistant', 'Fast Repair'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691650/Copy_of_Hydrokinetic_Demo_Partial_Plugged_Pipeline_plbzgd.mp4',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691539/Copy_of_Foulant-Removal-Technologies_2_i9fho7.mp4'
    ],
    overviewText: `ThermoSeal Pro repairs eroded or damaged surfaces in high-temperature service, rebuilding profiles and protecting against further degradation.`,
    specificationsText: `Formulated for thermal shock resistance and high glass transition temperature; adheres to ferrous alloys under proper prep.`,
    benefitsText: `Reduces energy losses, stabilizes performance, and avoids costly replacements by restoring geometry quickly.`,
    benefits: [
      'Withstands up to 300°C continuous service',
      'Resists thermal shock and cycling',
      'Rebuilds geometry to recover efficiency',
      'Fast return-to-service during outages',
      'Excellent adhesion on ferrous alloys'
    ],
    usageText: `Use on hot-side components during outages; follow cure and post-cure instructions for maximum temperature rating.`
  },
  {
    slug: 'chemguard-coating',
    name: 'ChemGuard Coating',
    category: 'epoxy-coatings',
    description: 'Chemical resistant protective coating for aggressive chemical environments and acid exposure.',
    image:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    price: 'Contact for Quote',
    applications: ['Chemical Plants', 'Acid Storage', 'Process Equipment'],
    features: ['Acid Resistant', 'Long Lasting', 'Easy Application'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691491/Copy_of_Foulant-Removal-Technologies_e4qdhp.mp4',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691475/Copy_of_Foulant-Removal-Technologies_3_kvwly2.mp4'
    ],
    overviewText: `ChemGuard delivers durable chemical protection in immersion and splash zones, resisting acids and solvents common to processing facilities.`,
    specificationsText: `Two- and three-coat systems tailored to media and temperature; compatible with steel and concrete under defined prep.`,
    benefitsText: `Extends inspection intervals and reduces leak paths by arresting underfilm corrosion and chemical attack.`,
    benefits: [
      'Strong resistance to acids and solvents',
      'Protects in immersion and splash zones',
      'Long service life reduces maintenance',
      'Compatible with steel and concrete',
      'Supports compliance and environmental goals'
    ],
    usageText: `Deploy after thorough surface prep; verify film thickness and perform holiday testing prior to service.`
  },
  {
    slug: 'chemclean-advanced',
    name: 'ChemClean Advanced',
    category: 'cleaning-systems',
    description: 'Environmentally safe chemical cleaning system for removing scale, rust, and chemical deposits.',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    price: 'Contact for Quote',
    applications: ['Chemical Cleaning', 'Scale Removal', 'Decontamination'],
    features: ['Eco-Friendly', 'Fast Acting', 'Safe Formula'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691350/Copy_of_Copy_of_AIMM_Premise_Demo_1_gzhwad.3gp',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691304/Copy_of_Copy_of_AIMM_Premise_Demo_2_w99aiy.3gp'
    ],
    overviewText: `ChemClean Advanced dissolves mineral scales and process residues using environmentally considerate chemistries that protect metallurgy.`,
    specificationsText: `Blended acids, inhibitors, and surfactants selected per metallurgy and foulant; monitoring ensures controlled dissolution.`,
    benefitsText: `Restores heat transfer and flow with predictable timelines and minimal waste; reduces manual intervention.`,
    benefits: [
      'Eco-forward formulations and inhibitors',
      'Predictable timelines and outcomes',
      'Protects metallurgy while dissolving scale',
      'Reduces manual cleaning and exposure',
      'Lower waste with controlled chemistry'
    ],
    usageText: `Apply via circulation or soak, neutralize and passivate as required, and document results with temperature and DP trends.`
  },
  {
    slug: 'inspectpro-digital',
    name: 'InspectPro Digital',
    category: 'maintenance-tools',
    description: 'Digital inspection toolkit with advanced sensors and AI-powered analysis for predictive maintenance.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    price: 'Contact for Quote',
    applications: ['NDT Inspection', 'Predictive Maintenance', 'Quality Control'],
    features: ['AI Analysis', 'Digital Reports', 'Cloud Sync'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691214/Copy_of_foam_100_0509_dryspot_with_breakthru_wrsew8.mov',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691127/Copy_of_foam_100_0504_oucdgw.mov'
    ],
    overviewText: `InspectPro Digital fuses modern sensors with intuitive software to accelerate inspections and enable predictive insights.`,
    specificationsText: `Modular probes for vibration, temperature, and thickness; secure data sync; analytics tuned for industrial assets.`,
    benefitsText: `Improves reliability KPIs by turning raw signals into prioritized recommendations and clear, exportable reports.`,
    benefits: [
      'Faster inspections with modular sensors',
      'AI insights that prioritize maintenance',
      'Secure syncing and shareable reports',
      'Integrates with CMMS for action tracking',
      'Improves availability and quality KPIs'
    ],
    usageText: `Deploy for rounds, outages, and acceptance testing; integrate alerts into existing CMMS workflows for action tracking.`
  },
  {
    slug: 'maintenancekit-pro',
    name: 'MaintenanceKit Pro',
    category: 'maintenance-tools',
    description: 'Comprehensive maintenance toolkit with specialized tools for industrial equipment servicing.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    price: 'Contact for Quote',
    applications: ['Equipment Maintenance', 'Field Service', 'Emergency Repair'],
    features: ['Complete Set', 'Portable Case', 'Industrial Grade'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691109/Copy_of_foam_100_0516_acpvsm.mov',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691108/Copy_of_100_0534_lvtbk3.mov'
    ],
    overviewText: `MaintenanceKit Pro consolidates essential industrial tools into a rugged, portable kit to support field crews.`,
    specificationsText: `Impact-rated components, corrosion-resistant finishes, and layout optimized for quick access and inventory control.`,
    benefitsText: `Shortens response times, reduces multiple trips to the tool room, and increases first-time fix rates.`,
    benefits: [
      'All-in-one kit accelerates field work',
      'Rugged, portable case for harsh sites',
      'Improves first-time fix rates',
      'Simple restock with checklists',
      'Reduces idle time and repeat trips'
    ],
    usageText: `Stage kits at critical units and dispatch with work orders; replenish via simple checklists after each use.`
  },
  {
    slug: 'marineseal-ultimate',
    name: 'MarineSeal Ultimate',
    category: 'marine-offshore',
    description: 'Ultimate marine sealing solution for offshore platforms and subsea applications with extreme durability.',
    image:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    price: 'Contact for Quote',
    applications: ['Offshore Platforms', 'Subsea Equipment', 'Marine Vessels'],
    features: ['Subsea Rated', 'Extreme Durability', 'Saltwater Proof'],
    videos: [
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691095/Copy_of_foam_100_0512_dryspot_cont_kescnm.mov',
      'https://res.cloudinary.com/dfkv6sjaz/video/upload/v1760691094/Copy_of_foam_100_0507_f2qfne.mov'
    ],
    overviewText: `MarineSeal Ultimate provides robust sealing performance in subsea and offshore conditions, resisting pressure, saltwater, and biofouling.`,
    specificationsText: `Engineered elastomers and composite backers tuned for compression set and long-term marine exposure across temperatures.`,
    benefitsText: `Extends service intervals and reduces intervention costs by maintaining seal integrity in harsh marine duty.`,
    benefits: [
      'Subsea-rated sealing performance',
      'Resists saltwater, pressure, biofouling',
      'Long service life lowers intervention costs',
      'Suitable for platforms, vessels, and ports',
      'Backed by rigorous marine QA'
    ],
    usageText: `Use in subsea connections, platform utilities, and deck equipment; follow torque and assembly specs for lasting results.`
  }
];

export const getProductBySlug = (slug: string): ProductItem | undefined =>
  products.find((p) => p.slug === slug);


