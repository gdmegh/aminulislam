
"use client"
import React from 'react';
import { Users, Clock, Target, CheckCircle, ExternalLink, TrendingUp, Search, Pencil, Users2, Bot, FileText, Landmark, Handshake, Filter, FileSignature, CheckSquare, XSquare } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
import { caseStudies } from '@/lib/case-studies';
import { notFound } from 'next/navigation';

const chartData = [
  { name: 'Fund Clearance Time', 'Reduction': 50 },
  { name: 'Reporting Errors', 'Reduction': 65 },
  { name: 'User Satisfaction', 'Increase': 70 },
  { name: 'Manual Workload', 'Reduction': 40 },
];

const NGOABPage = () => {
  const study = caseStudies.find(cs => cs.slug === 'ngoab-digital-service-system');

  if (!study) {
    notFound();
  }

  const painPoints = [
    {
      title: "Outdated Digital Infrastructure",
      description: "The existing system was slow, difficult to navigate, and lacked the features needed to manage complex NGO operations efficiently.",
      number: "01"
    },
    {
      title: "Inefficient Workflows",
      description: "Manual and paper-based processes for registration, fund clearance, and reporting led to significant delays and administrative burden.",
      number: "02"
    },
    {
      title: "Lack of Transparency",
      description: "NGO representatives had no clear visibility into the status of their applications, leading to frustration and frequent follow-ups.",
      number: "03"
    },
    {
      title: "Limited Reporting Capabilities",
      description: "The bureau struggled to generate timely and accurate reports on NGO activities and foreign donations, hindering strategic planning.",
      number: "04"
    }
  ];

  const usabilityFindings = [
    {
      round: "Round 1 (NGO Representatives)",
      findings: [
        "Users need a centralized dashboard to view all their applications and reports.",
        "A simplified, multi-step form for project proposals is crucial."
      ]
    },
    {
      round: "Round 2 (NGOAB Officials)",
      findings: [
        "Officials require a robust filtering and search system to find specific NGO projects.",
        "An automated notification system for application status changes is highly requested.",
        "A clear, visual representation of data is needed for internal reporting.",
        "The approval workflow needs to be configurable with multiple stages."
      ]
    }
  ];

  const accessMatrixData = [
      { feature: 'View Services', ngo: true, ngoabOfficial: true, pmoAdmin: true },
      { feature: 'Submit Project Proposals', ngo: true, ngoabOfficial: false, pmoAdmin: false },
      { feature: 'Track Application Status', ngo: true, ngoabOfficial: true, pmoAdmin: true },
      { feature: 'Manage NGO Profile', ngo: true, ngoabOfficial: false, pmoAdmin: false },
      { feature: 'Process Applications', ngo: false, ngoabOfficial: true, pmoAdmin: false },
      { feature: 'Communicate with NGOs', ngo: false, ngoabOfficial: true, pmoAdmin: false },
      { feature: 'Manage System Settings', ngo: false, ngoabOfficial: false, pmoAdmin: true },
      { feature: 'View Analytics & Reports', ngo: false, ngoabOfficial: true, pmoAdmin: true },
  ];

  const designSolutions = [
    {
      icon: Landmark,
      title: "Unified Service Portal",
      description: "A centralized platform for NGOs to access all services, from registration and project proposals to annual reporting."
    },
    {
      icon: Handshake,
      title: "Streamlined Approval Workflows",
      description: "A digital, multi-stage approval process with clear status tracking for both NGOAB officials and NGO users."
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting Dashboard",
      description: "Powerful dashboards for NGOAB to monitor activities, track foreign funding, and generate insightful reports."
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
                UX/UI for Government
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
                  <span>Timeline Placeholder</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Stakeholder Interviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Senior UX Designer</span>
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
                <h2 className="text-3xl font-bold text-foreground font-headline">Understanding the Stakeholders</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">The process began with deep engagement with both NGO representatives and NGOAB officials through interviews, focus groups, and contextual inquiries to understand their day-to-day challenges.</p>
              </div>
              
              <div className="space-y-12">
                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                  <h3 className="text-xl font-bold text-foreground mb-4 font-headline text-center">Research Methodology</h3>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    A human-centered design approach was employed, involving extensive qualitative research to map existing workflows, identify bottlenecks, and uncover the needs and frustrations of all user groups involved in the NGO service delivery lifecycle. This involved user interviews, contextual inquiries, and focus group discussions.
                  </p>
                </div>
              </div>
            </section>

            <section id="define" className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full text-sm mb-4">
                  <Pencil className="w-5 h-5"/>
                  <span>DEFINE</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground font-headline">Defining the Core Problem & Users</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">The research crystalized the core problem: a fragmented and inefficient system was hindering NGOAB's ability to regulate and support NGOs effectively, impacting national development goals.</p>
              </div>

              <div className="space-y-12">
                  <h3 className="text-2xl font-bold text-foreground font-headline">Project Background</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The NGO Affairs Bureau (NGOAB), operating under the Prime Minister’s Office, regulates and supports more than 2,600 registered NGOs across Bangladesh. Despite its vital role, the bureau faces challenges due to limited human resources and an outdated digital infrastructure. The UNDP, in collaboration with DFAT and NGOAB, initiated the ISPAT Project to modernize service delivery, improve transparency, and ensure accountability in managing foreign-funded development initiatives.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-foreground font-headline">Problem Statement</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The NGO Affairs Bureau's reliance on an outdated and manual digital system created significant operational hurdles, making it difficult for NGOs to get timely approvals for foreign donations and for the bureau to maintain transparent oversight. This inefficiency directly affected the implementation of critical development projects across Bangladesh.
                  </p>
                  
                  <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                      <h3 className="text-xl font-bold text-foreground mb-6 font-headline text-center">User Personas</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                              <h4 className="font-bold text-foreground mb-2 text-center">NGO Representative</h4>
                              <p className="text-foreground italic text-center text-sm">
                                "I need a simple way to submit my project proposals and get updates without calling the office."
                              </p>
                          </div>
                          <div className="bg-secondary/20 rounded-lg p-6 border border-border/50">
                              <h4 className="font-bold text-foreground mb-2 text-center">NGOAB Official</h4>
                              <p className="text-foreground italic text-center text-sm">
                                "I need to review and approve applications efficiently and see a clear history of each NGO's projects."
                              </p>
                          </div>
                           <div className="bg-secondary/20 rounded-lg p-6 border border-border/50">
                              <h4 className="font-bold text-foreground mb-2 text-center">PMO Administrator</h4>
                              <p className="text-foreground italic text-center text-sm">
                                "I need high-level reports on foreign funding and NGO performance to inform national policy."
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
                        A detailed access matrix was designed to ensure security and role clarity within the platform.
                    </p>
                    <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px] text-sm text-left">
                                <thead className="text-xs text-muted-foreground uppercase bg-secondary">
                                    <tr>
                                        <th className="px-6 py-3 rounded-tl-lg">Feature</th>
                                        <th className="px-6 py-3 text-center">NGO User</th>
                                        <th className="px-6 py-3 text-center">NGOAB Official</th>
                                        <th className="px-6 py-3 text-center rounded-tr-lg">PMO Admin</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {accessMatrixData.map((row, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">{row.feature}</td>
                                        <td className="px-6 py-4 text-center">
                                            {row.ngo ? <CheckSquare className="w-5 h-5 text-green-500 mx-auto" /> : <XSquare className="w-5 h-5 text-destructive mx-auto" />}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {row.ngoabOfficial ? <CheckSquare className="w-5 h-5 text-green-500 mx-auto" /> : <XSquare className="w-5 h-5 text-destructive mx-auto" />}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {row.pmoAdmin ? <CheckSquare className="w-5 h-5 text-green-500 mx-auto" /> : <XSquare className="w-5 h-5 text-destructive mx-auto" />}
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
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
                <h2 className="text-3xl font-bold text-foreground font-headline">Co-Creating Digital Solutions</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">Through participatory workshops with stakeholders, we brainstormed and co-designed solutions focused on efficiency, transparency, and user-friendliness.</p>
              </div>

               <div>
                    <h3 className="text-2xl font-bold text-foreground mb-8 font-headline text-center">Key Design Solutions</h3>
                    <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">The ideation phase produced three core pillars for the new system, each designed to address specific pain points identified during research.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {designSolutions.map((solution, index) => (
                            <div key={index} className="bg-card rounded-xl p-6 shadow-lg border border-border text-center flex flex-col items-center">
                                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                    <solution.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="font-bold text-foreground mb-2 text-lg font-headline">{solution.title}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="prototype-test" className="mb-20">
              <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full text-sm mb-4">
                  <FileSignature className="w-5 h-5"/>
                  <span>PROTOTYPE & TEST</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground font-headline">Building & Validating the Vision</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">High-fidelity, interactive prototypes were developed and put into the hands of real users to gather feedback on usability, accessibility, and overall performance.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Prototype Highlights</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Prototypes simulated the end-to-end workflow, from an NGO submitting a new project proposal to an NGOAB official reviewing and approving the fund release.
                    </p>
                    <div className="space-y-4">
                      <a href="#" className="flex items-center gap-2 text-primary hover:underline font-medium">
                        <ExternalLink className="w-4 h-4" />
                        View Interactive Prototype
                      </a>
                    </div>
                  </div>
                  <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                    <h3 className="text-xl font-bold text-foreground mb-6 font-headline text-center">Usability Study Findings</h3>
                    <div className="grid md:grid-cols-1 gap-4">
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
            </section>

            <section id="impact" className="mb-20">
              <h2 className="text-3xl font-bold text-foreground mb-8 font-headline text-center">Projected Impact</h2>
              <div className="grid lg:grid-cols-2 gap-12 mb-12 items-center">
                <div className="bg-green-500/10 rounded-2xl p-8 border border-green-500/20">
                  <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Project Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The redesigned system is projected to significantly reduce processing times for NGO project approvals, enhance transparency in foreign fund management, and provide robust data for national development planning.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-2xl p-8 border border-blue-500/20">
                  <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Key Learnings</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This project underscored the importance of stakeholder alignment in complex government projects. A participatory design process was critical to building consensus and ensuring the final product met the diverse needs of both regulators and service users.
                  </p>
                </div>
              </div>
                 <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center justify-center gap-2"><TrendingUp className="w-6 h-6 text-primary"/> Key Performance Indicators</h3>
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
                    title: "Phased Rollout",
                    description: "Begin a phased implementation, starting with a pilot group of NGOs to gather real-world feedback."
                  },
                  {
                    step: "02", 
                    title: "Capacity Building",
                    description: "Conduct training sessions for NGOAB officials and NGO users to ensure smooth adoption of the new system."
                  },
                  {
                    step: "03",
                    title: "Continuous Iteration",
                    description: "Establish a feedback loop for continuous improvement and addition of new features based on user needs."
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

export default NGOABPage;

    