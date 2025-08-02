
"use client"
import React from 'react';
import { Users, Clock, Target, CheckCircle, ExternalLink, TrendingUp, Search, Pencil, Users2, Bot, FileText, ShieldCheck, CheckSquare, XSquare } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
import { caseStudies } from '@/lib/case-studies';
import { notFound } from 'next/navigation';

const chartData = [
  { name: 'Processing Time', 'Reduction': 40 },
  { name: 'User Satisfaction', 'Increase': 60 },
  { name: 'Adoption Rate', 'Increase': 75 },
  { name: 'Admin Workload', 'Reduction': 30 },
];

const CaseStudyPage = () => {
  const study = caseStudies.find(cs => cs.slug === 'citizen-portal');

  if (!study) {
    notFound();
  }

  const painPoints = [
    {
      title: "Administrative Hurdles",
      description: "Administrative delays, ledger conflicts, and dependence on authorized letters pose communication obstacles, significantly hampering overall efficiency.",
      number: "01"
    },
    {
      title: "Complex Welfare Processes",
      description: "Users encounter bureaucratic hurdles, hierarchy issues, and complications with paper-based schemes, affecting their access to welfare benefits.",
      number: "02"
    },
    {
      title: "Skills Development Gap",
      description: "Limited training opportunities hinder public skill development, limiting personal and community growth.",
      number: "03"
    },
    {
      title: "Social Safety Struggles",
      description: "Difficulties in understanding ration schedules, distant distribution points, and decreasing ration quantities contribute to challenges in ensuring an adequate food supply.",
      number: "04"
    }
  ];

  const usabilityFindings = [
    {
      round: "Round 1",
      findings: [
        "User desires a focus on tracking features",
        "User wants interactive support assistance"
      ]
    },
    {
      round: "Round 2",
      findings: [
        "User wants to ensure secure payment confirmation",
        "User aims to minimize text and explore alternatives to icons or images",
        "User wants an easier registration/login process for improved accessibility",
        "User wants to navigate through services on both the web & apps"
      ]
    }
  ];
  
  const accessMatrixData = [
    {
      role: 'Service Recipient (Citizen)',
      permissions: [
        { feature: 'View Services', access: true },
        { feature: 'Submit Applications', access: true },
        { feature: 'Track Application Status', access: true },
        { feature: 'Manage Profile', access: true },
        { feature: 'View Admin Dashboard', access: false },
      ],
    },
    {
      role: 'Service Provider (Admin)',
      permissions: [
        { feature: 'Manage Service Listings', access: true },
        { feature: 'Process Applications', access: true },
        { feature: 'Communicate with Applicants', access: true },
        { feature: 'View Analytics', access: true },
        { feature: 'Change System Settings', access: false },
      ],
    },
    {
      role: 'Ministry Admin (Super Admin)',
      permissions: [
        { feature: 'Oversee All Services', access: true },
        { feature: 'Manage Provider Accounts', access: true },
        { feature: 'Access Full System Analytics', access: true },
        { feature: 'Configure System Settings', access: true },
        { feature: 'Process Individual Applications', access: false },
      ],
    },
  ];

  const accessibilityFeatures = [
    {
      title: "Screen Reader Compatibility",
      description: "Ensure the portal is compatible with screen readers to provide access for users with visual impairments.",
      icon: "1"
    },
    {
      title: "High Contrast Design",
      description: "Option for readable fonts and ensure high contrast between text and background colors to improve legibility, catering to users with visual challenges.",
      icon: "2"
    },
    {
      title: "Responsive Design",
      description: "Adopt a responsive design approach to ensure optimal user experience on various devices, providing accessibility on both web browsers and mobile devices.",
      icon: "3"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow" id="main-content">
      {/* Hero Section */}
      <section className="bg-card text-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-primary">
                UX Design
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight font-headline">
                {study.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {study.description}
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>April 2022 - August 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>55 Participants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span>UX/UI Designer</span>
                </div>
              </div>
            </div>
            <div className="relative">
                <Image 
                    src={study.image}
                    alt={study.title}
                    width={800}
                    height={600}
                    role="img"
                    data-ai-hint={study.hint}
                    className="rounded-lg shadow-xl"
                />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
            <section id="empathize" className="mb-20">
              <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full text-sm mb-4">
                  <Users2 className="w-5 h-5"/>
                  <span>EMPATHIZE</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground font-headline">Understanding the User</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">As a UX Researcher and Designer, my first step was to deeply understand the people I was designing for through comprehensive research.</p>
              </div>
              
              <div className="space-y-12">
                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                  <h3 className="text-xl font-bold text-foreground mb-4 font-headline text-center">Research Methodology</h3>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    Through 50-60 Qualitative and Quantitative Interviews, my user research aimed to uncover behaviors, needs, 
                    pain-points, and motivations. This foundational research challenged initial assumptions, revealing unexpected 
                    user challenges and guiding the project's direction.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                  <div className="rounded-lg shadow-lg overflow-hidden">
                    <Image 
                        src="/images/UX-Research.png"
                        alt="Research collaboration" 
                        width={1200} 
                        height={800} 
                        role="img"
                        data-ai-hint="research collaboration"
                        className="w-full h-auto object-cover" 
                    />
                  </div>
                </div>

              </div>
            </section>

            <section id="define" className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full text-sm mb-4">
                  <Pencil className="w-5 h-5"/>
                  <span>DEFINE</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground font-headline">Defining the Problem & Users</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">Based on the research, I clarified the core challenges and defined the key user groups and their specific pain points.</p>
              </div>

              <div className="space-y-12">
                  <h3 className="text-2xl font-bold text-foreground font-headline">Project Overview</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The Ministry of Chittagong Hill Tracts Affairs in Bangladesh was struggling with inefficient paper-based processes, 
                    scheduling delays, and approval backlogs. We designed a comprehensive Integrated Digital Service Delivery Platform that modernizes government services 
                    through web and mobile applications, centralizing all service provider organizations and recipients 
                    within a unified digital ecosystem.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-foreground font-headline">Problem Statement</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The core problem was the lack of a centralized, user-friendly digital system for citizens to access and manage government services. This resulted in significant administrative inefficiencies, long processing times, and a frustrating experience for the public, ultimately creating a barrier to accessing essential welfare and development schemes.
                  </p>
                  
                  <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                      <h3 className="text-xl font-bold text-foreground mb-6 font-headline text-center">User Personas</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                              <h4 className="font-bold text-foreground mb-2 text-center">Service Recipient</h4>
                              <p className="text-foreground italic text-center text-sm">
                                  "A citizen who needs easy, transparent access to government schemes and services without bureaucratic hurdles."
                              </p>
                          </div>
                          <div className="bg-secondary/20 rounded-lg p-6 border border-border/50">
                              <h4 className="font-bold text-foreground mb-2 text-center">Service Provider Admin</h4>
                              <p className="text-foreground italic text-center text-sm">
                                  "An administrator from a service-providing organization who needs to manage and deliver services efficiently through the platform."
                              </p>
                          </div>
                          <div className="bg-secondary/20 rounded-lg p-6 border border-border/50">
                              <h4 className="font-bold text-foreground mb-2 text-center">Service Specific Operator</h4>
                              <p className="text-foreground italic text-center text-sm">
                                  "An operator responsible for a specific service, needing tools to process applications and manage workflows effectively."
                              </p>
                          </div>
                          <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                              <h4 className="font-bold text-foreground mb-2 text-center">Ministry Admin</h4>
                              <p className="text-foreground italic text-center text-sm">
                                  "A high-level ministry official requiring a dashboard for oversight, performance tracking, and data-driven decision-making."
                              </p>
                          </div>
                      </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-8 font-headline text-center">Key Pain Points</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {painPoints.map((point, index) => (
                        <div key={index} className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-primary/20 transition-all">
                          <div className="flex items-start gap-4">
                            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                              {point.number}
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground mb-2">{point.title}</h4>
                              <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-foreground my-8 font-headline text-center">User Access Matrix</h3>
                     <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                        To ensure security and role clarity, a detailed access matrix was designed. This defines what each user type can see and do within the platform.
                    </p>
                    <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                        <div className="grid md:grid-cols-3 gap-8">
                        {accessMatrixData.map((roleData) => (
                            <div key={roleData.role} className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                            <h4 className="font-bold text-foreground mb-4 text-center font-headline">{roleData.role}</h4>
                            <ul className="space-y-3">
                                {roleData.permissions.map((perm) => (
                                <li key={perm.feature} className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">{perm.feature}</span>
                                    {perm.access ? (
                                    <CheckSquare className="w-5 h-5 text-green-500" />
                                    ) : (
                                    <XSquare className="w-5 h-5 text-destructive" />
                                    )}
                                </li>
                                ))}
                            </ul>
                            </div>
                        ))}
                        </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground my-8 font-headline text-center">User Journey Map</h3>
                    <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                      <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                        Mapping the user journey was critical to visualize the user's experience and identify key touchpoints for improvement. The journey map below illustrates the path of a service recipient, from awareness to application submission and tracking.
                      </p>
                      <div className="rounded-lg shadow-lg overflow-hidden">
                        <Image 
                            src="/images/User-Journey-Map-Template-2.jpg"
                            alt="User Journey Map" 
                            width={1200} 
                            height={400} 
                            role="img"
                            data-ai-hint="user journey map"
                            className="w-full h-auto object-cover" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-foreground my-8 font-headline text-center">Information Architecture</h3>
                    <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                      <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                        A well-defined information architecture was crucial for creating an intuitive and scalable platform. It organized the content and services logically, ensuring users could easily navigate the system and find what they need.
                      </p>
                      <div className="rounded-lg shadow-lg overflow-hidden">
                        <Image 
                            src="/images/MoCHTA-UX-Diagrams-4-1.png"
                            alt="Information Architecture Diagram" 
                            width={1200} 
                            height={800} 
                            role="img"
                            data-ai-hint="information architecture diagram"
                            className="w-full h-auto object-cover" 
                        />
                      </div>
                    </div>
                  </div>

              </div>
            </section>

            <section id="ideate" className="mb-20">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full text-sm mb-4">
                  <Bot className="w-5 h-5"/>
                  <span>IDEATE</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground font-headline">Brainstorming Solutions</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">Generating a wide range of creative ideas and design approaches to address the identified user needs.</p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Wireframing Approach</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I invested time in sketching multiple versions of both mobile app and web homepage designs on paper, 
                  ensuring that elements transitioning to digital wireframes were meticulously crafted to address user 
                  pain points effectively. This low-fidelity approach allowed for rapid iteration and exploration of various layouts and user flows before committing to digital designs.
                </p>
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                  <h4 className="font-semibold text-foreground mb-2">Key Design Decisions from Ideation</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• A prominent services menu should be at the top for swift access to core functions.</li>
                    <li>• A persistent left-side filtering system would be needed for easy navigation through complex service lists.</li>
                    <li>• A sticky action bar on the right side of the screen would improve mouse-friendly interaction on larger screens.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="prototype" className="mb-20">
              <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full text-sm mb-4">
                  <Search className="w-5 h-5"/>
                  <span>PROTOTYPE</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground font-headline">Building the Solution</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">Creating interactive, high-fidelity mockups to simulate the final product and prepare for user testing.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Prototype Development</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      The prototypes were developed for both mobile and web platforms, integrating with the primary user 
                      journey and encompassing creation and ordering processes within the citizen portal. These were not just static images but interactive models that allowed for realistic user flow testing.
                    </p>
                    <div className="space-y-4">
                      <a href="#" className="flex items-center gap-2 text-primary hover:underline font-medium">
                        <ExternalLink className="w-4 h-4" />
                        View Mobile Prototype
                      </a>
                      <a href="#" className="flex items-center gap-2 text-primary hover:underline font-medium">
                        <ExternalLink className="w-4 h-4" />
                        View Web Prototype
                      </a>
                    </div>
                  </div>
                  
                  <div>
                      <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Accessibility Considerations</h3>
                      <div className="space-y-4">
                          {accessibilityFeatures.map((feature, index) => (
                              <div key={index} className="flex items-start gap-3">
                                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1">
                                      {feature.icon}
                                  </div>
                                  <div>
                                      <h4 className="font-bold text-foreground">{feature.title}</h4>
                                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
            </section>

            <section id="test" className="mb-20">
              <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full text-sm mb-4">
                  <CheckCircle className="w-5 h-5"/>
                  <span>TEST</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground font-headline">Validating the Design</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">Gathering user feedback on the prototypes to identify usability issues and areas for refinement.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6 font-headline text-center">Usability Study Results</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {usabilityFindings.map((round, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-foreground mb-4">{round.round}</h4>
                      <ul className="space-y-3">
                        {round.findings.map((finding, findingIndex) => (
                          <li key={findingIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-sm">{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="impact" className="mb-20">
              <h2 className="text-3xl font-bold text-foreground mb-8 font-headline text-center">Impact & Results</h2>
              <div className="grid lg:grid-cols-2 gap-12 mb-12 items-center">
                <div className="bg-green-500/10 rounded-2xl p-8 border border-green-500/20">
                  <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Project Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The system brought about notable improvements, enhancing efficiency and user satisfaction through features 
                    like increased accessibility, streamlined workflows, and real-time data availability. Its scalability, 
                    flexibility, and commitment to best practices contribute to positive organizational impacts.
                  </p>
                </div>
                
                <div className="bg-blue-500/10 rounded-2xl p-8 border border-blue-500/20">
                  <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Key Learnings</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Key takeaways include prioritizing user-centric design, emphasizing accessibility, and embracing continuous 
                    improvement based on user feedback. Scalability and adherence to best practices emerged as crucial factors.
                  </p>
                </div>
              </div>

                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center justify-center gap-2"><TrendingUp className="w-6 h-6 text-primary"/> Key Metrics &amp; Impact</h3>
                  <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} unit="%" />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "hsl(var(--background))",
                                borderColor: "hsl(var(--border))",
                                color: "hsl(var(--foreground))"
                              }}
                            />
                            <Bar dataKey="Increase" fill="hsl(var(--primary))" name="Increase (%)" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="Reduction" fill="hsl(var(--accent))" name="Reduction (%)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                  </div>
              </div>
            </section>
            
            <section id="next">
              <h2 className="text-3xl font-bold text-foreground mb-8 font-headline text-center">Next Steps</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    step: "01",
                    title: "User Feedback Analysis",
                    description: "Conduct thorough analysis of gathered user feedback to identify specific areas for improvement and refinement."
                  },
                  {
                    step: "02", 
                    title: "Iterative Design Updates",
                    description: "Implement design updates based on insights gained from user feedback analysis, prioritizing usability improvements."
                  },
                  {
                    step: "03",
                    title: "Accessibility Testing",
                    description: "Perform comprehensive accessibility testing to ensure compliance with standards and inclusive user experience."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm mb-4 mx-auto">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
