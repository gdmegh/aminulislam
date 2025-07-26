"use client"
import React, { useState } from 'react';
import { Users, Clock, Target, CheckCircle, ExternalLink, TrendingUp } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const chartData = [
  { name: 'Processing Time', 'Reduction': 40 },
  { name: 'User Satisfaction', 'Increase': 60 },
  { name: 'Adoption Rate', 'Increase': 75 },
  { name: 'Admin Workload', 'Reduction': 30 },
];

const CaseStudyPage = () => {

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
      <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-card text-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-primary">
                Government Digital Transformation
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight font-headline">
                Citizen Portal
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Integrated Digital Service Delivery Platform for Ministry of Chittagong Hill Tracts Affairs
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
                    src="/images/placeholder-800x600.png"
                    alt="Citizen Portal Mockup"
                    width={800}
                    height={600}
                    data-ai-hint="citizen portal app"
                    className="rounded-lg shadow-xl"
                />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
              {/* Overview Section */}
              <section id="overview" className="mb-20">
                <div className="grid lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">The Challenge</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      The Ministry of Chittagong Hill Tracts Affairs in Bangladesh was struggling with inefficient paper-based processes, 
                      scheduling delays, and approval backlogs. The absence of a streamlined digital platform was creating communication 
                      gaps and hindering the ministry's ability to serve citizens effectively.
                    </p>
                    
                    <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">The Solution</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We designed a comprehensive Integrated Digital Service Delivery Platform that modernizes government services 
                      through web and mobile applications. The platform centralizes all service provider organizations and recipients 
                      within a unified digital ecosystem, featuring scheme management, registrations, and streamlined communication.
                    </p>
                  </div>
                  
                  <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                    <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Project Details</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Role</p>
                        <p className="font-semibold">Sr. UX/UI Designer</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Duration</p>
                        <p className="font-semibold">4 months</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Responsibilities</p>
                        <ul className="text-sm space-y-1">
                          <li>• User Research</li>
                          <li>• Wireframing</li>
                          <li>• Prototyping</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Research Section */}
              <section id="research" className="mb-20">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground font-headline">User Research & Insights</h2>
                </div>
                
                <div className="space-y-12">
                  <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                    <h3 className="text-xl font-bold text-foreground mb-4 font-headline text-center">Research Methodology</h3>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      Through 50-60 Qualitative and Quantitative Interviews, our user research aimed to uncover behavior, needs, 
                      pain-points, and motivations. Initial assumptions were challenged, revealing unexpected pain-points and diverse 
                      user motivations. Quantitative data validated certain assumptions, guiding feature prioritization.
                    </p>
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

                  <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                    <h3 className="text-xl font-bold text-foreground mb-6 font-headline text-center">User Persona: Lokkhi Chandro</h3>
                    <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                      <p className="text-foreground italic text-center">
                        "Lokkhi Chandro is a service recipient who needs easy and user-friendly online software for applying 
                        and tracking government schemes and services because he is socially welfare-aware."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Design Process Section */}
              <section id="design" className="mb-20">
                 <div className="text-center mb-8">
                   <h2 className="text-2xl font-bold text-foreground font-headline">Design Process</h2>
                 </div>

                <div className="space-y-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Wireframing Approach</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        I invested time in sketching multiple versions of both mobile app and web homepage designs on paper, 
                        ensuring that elements transitioning to digital wireframes were meticulously crafted to address user 
                        pain points effectively.
                      </p>
                      <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                        <h4 className="font-semibold text-foreground mb-2">Key Design Decisions</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Services menu positioned at the top for swift access</li>
                          <li>• Left-side filtering for easy navigation</li>
                          <li>• Sticky bar on right side for mouse-friendly interaction</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Prototype Development</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        The prototypes were developed for both mobile and web platforms, integrating with the primary user 
                        journey and encompassing creation and ordering processes within the citizen portal.
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
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-8 font-headline text-center">Usability Study Results</h3>
                    <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
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
                  </div>
                </div>
              </section>

              {/* Accessibility Section */}
              <section id="accessibility" className="mb-20">
                <h2 className="text-2xl font-bold text-foreground mb-8 font-headline text-center">Accessibility Considerations</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {accessibilityFeatures.map((feature, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-primary/20 transition-all">
                      <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mb-4 mx-auto">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-foreground mb-3 text-center">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed text-center">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Impact & Results */}
              <section id="impact" className="mb-20">
                <h2 className="text-2xl font-bold text-foreground mb-8 font-headline text-center">Impact & Results</h2>
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
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2 justify-center"><TrendingUp className="w-6 h-6 text-primary"/> Key Metrics &amp; Impact</h3>
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

              {/* Next Steps */}
              <section id="next" className="mb-20">
                <h2 className="text-2xl font-bold text-foreground mb-8 font-headline text-center">Next Steps</h2>
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

              {/* Contact Section */}
              <section className="bg-card rounded-2xl p-12 text-center border border-primary/20">
                <h2 className="text-3xl font-bold mb-4 font-headline">Let's Connect!</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  I'm eager to connect, share insights, and explore collaborations. Whether you have questions or ideas, 
                  feel free to reach out.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                   <Button>Contact Me</Button>
                   <Button variant="outline">View My Portfolio</Button>
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
