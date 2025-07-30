
export const caseStudies = [
  {
    title: "Citizen Portal for Ministry of Chittagong Hill Tracts Affairs",
    slug: "citizen-portal",
    description: "Designed a comprehensive Integrated Digital Service Delivery Platform to modernize government services through web and mobile applications, centralizing all services within a unified digital ecosystem.",
    image: "/images/IDSDP_Mock.jpg",
    hint: "government citizen portal",
    highlights: [
        { title: "User Research & Analysis", description: "Conducted extensive user research to understand citizen needs and pain points, driving the core design decisions." },
        { title: "Wireframing & Prototyping", description: "Developed detailed wireframes and interactive prototypes to visualize and test the user experience." },
        { title: "Usability Testing", description: "Performed multiple rounds of usability testing to refine the design and ensure an intuitive user journey." },
        { title: "Responsive Web & Mobile Design", description: "Created a seamless and consistent experience across both web and mobile platforms." }
    ],
    metrics: [
      { name: 'Processing Time', 'Reduction': 40 },
      { name: 'User Satisfaction', 'Increase': 60 },
      { name: 'Adoption Rate', 'Increase': 75 },
    ],
    chartType: 'bar',
  },
  {
    title: "Complaint Management with Case Management & Referral Stakeholders",
    slug: "complaint-management-system",
    description: "A comprehensive platform for managing complaints, with features for case management and seamless integration with referral stakeholders.",
    image: "https://placehold.co/800x600.png",
    hint: "dashboard analytics",
    highlights: [
      { title: "Stakeholder Integration", description: "Designed secure workflows for seamless collaboration with external referral partners." },
      { title: "End-to-End Case Management", description: "Built a complete system for tracking complaints from submission to resolution." },
      { title: "UX Research & System Design", description: "Mapped complex user journeys to create an intuitive and efficient system architecture." },
      { title: "Secure Data & Referral Handling", description: "Implemented robust security measures to protect sensitive complaint and user data." }
    ],
    metrics: [
      { name: 'Resolution Time', value: 35 },
      { name: 'Case Escalations', value: 40 },
      { name: 'Admin Efficiency', value: 60 },
    ],
    chartType: 'pie',
  },
  {
    title: "Queue Management System SaaS",
    slug: "queue-management-system",
    description: "A cloud-based SaaS platform designed to streamline customer flow and reduce wait times for businesses across various industries, from healthcare to retail.",
    image: "/images/quefeatures.jpeg",
    hint: "queue management",
    highlights: [
      { title: "Real-time Queue Tracking", description: "Allowed customers to monitor their position in line remotely via a mobile app." },
      { title: "SaaS Multi-tenant Architecture", description: "Designed a scalable and customizable platform for a wide range of business clients." },
      { title: "Dual User Journey Mapping", description: "Crafted distinct, optimized experiences for both customers and staff users." },
      { title: "Analytics & Performance Reporting", description: "Provided managers with dashboards to track wait times and service efficiency." }
    ],
    metrics: [
      { month: 'Jan', waitTime: 60 },
      { month: 'Feb', waitTime: 55 },
      { month: 'Mar', waitTime: 50 },
      { month: 'Apr', waitTime: 45 },
      { month: 'May', waitTime: 40 },
      { month: 'Jun', waitTime: 35 },
    ],
    chartType: 'line',
  },
  {
    title: "Court Management System",
    slug: "court-management-system",
    description: "A comprehensive system to digitize and streamline court proceedings, from case filing and scheduling to verdict delivery and records management.",
    image: "https://placehold.co/800x600.png",
    hint: "court management",
    highlights: [
      { title: "Digital Case Filing & Management", description: "Created an e-filing portal to eliminate paperwork and streamline case submission." },
      { title: "Automated Scheduling & Calendaring", description: "Developed an intelligent system to prevent scheduling conflicts and optimize dockets." },
      { title: "Secure Document & Evidence Handling", description: "Ensured the integrity and confidentiality of all legal documents and evidence." },
      { title: "Judicial Dashboards & Analytics", description: "Provided judges and administrators with data-driven insights into court performance." }
    ],
    metrics: [
        { name: 'Case Processing', value: 50 },
        { name: 'Filing Errors', value: 70 },
        { name: 'Doc Retrieval', value: 80 },
    ],
    chartType: 'bar',
  },
  {
    title: "Integrated Billing System SaaS",
    slug: "integrated-billing-system",
    description: "A multi-tenant SaaS platform to automate the entire billing lifecycle, from invoicing and subscriptions to payment processing and revenue recognition.",
    image: "https://placehold.co/800x600.png",
    hint: "billing dashboard",
    highlights: [
      { title: "Automated Recurring Billing", description: "Eliminated manual invoicing with a fully automated, schedule-based billing engine." },
      { title: "Subscription Management", description: "Offered a flexible system for creating and managing complex subscription plans and add-ons." },
      { title: "Payment Gateway Integration", description: "Seamlessly integrated with major payment gateways to automate payment collection." },
      { title: "Financial Reporting & Analytics", description: "Delivered real-time dashboards for tracking key metrics like MRR, churn, and LTV." }
    ],
    metrics: [
      { quarter: 'Q1', revenue: 2000 },
      { quarter: 'Q2', revenue: 2500 },
      { quarter: 'Q3', revenue: 3200 },
      { quarter: 'Q4', revenue: 4100 },
    ],
    chartType: 'area',
  },
];
