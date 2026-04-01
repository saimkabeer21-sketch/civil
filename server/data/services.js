const services = [
  {
    id: 1,
    title: "Structural Design",
    description: "Safe, efficient, and innovative structural solutions for buildings and infrastructure.",
    icon: "Building",
    details: {
      summary: "We design resilient structural systems optimized for safety, economy, and constructability across residential, commercial, and industrial projects.",
      bullets: [
        "Concept-to-GFC structural framing and load path design",
        "Seismic & wind design with code-compliant detailing",
        "Value engineering to optimize material usage"
      ],
      images: [
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  },
  {
    id: 2,
    title: "Construction Consultancy",
    description: "Expert advice on construction methods, materials, and project management.",
    icon: "Users",
    details: {
      summary: "We guide project teams with practical construction strategies, risk planning, and quality control to keep delivery on track.",
      bullets: [
        "Method statements and construction sequencing",
        "QA/QC plans, checklists, and site audits",
        "Contractor coordination and technical submittals"
      ],
      images: [
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  },
  {
    id: 3,
    title: "Planning & Estimation",
    description: "Detailed project planning, cost estimation, and feasibility studies.",
    icon: "Clipboard",
    details: {
      summary: "We develop realistic schedules and accurate cost estimates to support feasibility and informed decision-making.",
      bullets: [
        "BOQ preparation and rate analysis",
        "Feasibility studies and risk buffers",
        "Timeline and resource planning"
      ],
      images: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  },
  {
    id: 4,
    title: "Site Supervision",
    description: "Rigorous site inspections to ensure compliance with designs and safety standards.",
    icon: "HardHat",
    details: {
      summary: "We provide on-site engineering oversight to ensure workmanship, safety, and adherence to approved drawings.",
      bullets: [
        "Daily site inspection and progress tracking",
        "Workmanship checks and compliance reporting",
        "Safety observation and corrective actions"
      ],
      images: [
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  },
  {
    id: 5,
    title: "Reference IS Code",
    description: "Access standard IS code documents for structural and steel design reference.",
    icon: "BookOpen",
    details: {
      summary: "Quick access to essential IS code documents used for concrete and steel design.",
      bullets: [
        "IS 456:2000 for plain and reinforced concrete",
        "IS 800:2007 for steel structures",
        "Download and open PDFs directly"
      ],
      images: [
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80"
      ],
      pdfs: [
        { label: "IS 456:2000 (Plain & Reinforced Concrete)", href: "/is.456.2000.pdf" },
        { label: "IS 800:2007 (General Construction in Steel)", href: "/IS-8002007.pdf" }
      ]
    }
  }
];

export default services;
