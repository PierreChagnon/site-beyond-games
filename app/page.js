import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Braces,
  Brain,
  ChevronDown,
  ChevronRight,
  Clock,
  FileText,
  Gamepad,
  Globe,
  LineChart,
  Users,
} from "lucide-react"
import { Suspense } from "react"
import Spline from "@splinetool/react-spline/next"
import { AnimationWrapper } from "@/components/animation-wrapper"
import SectionBadge from "@/components/section-badge"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden dark">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 flex items-center justify-center px-4 md:px-0">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-9 w-9">
              <Image src="/owl.svg" alt="Beyond Games Logo" fill className="object-contain" priority />
            </div>
            <span className="text-xl font-semibold text-primary">Beyond Games</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#solutions"
              className="text-sm font-medium text-primary hover:text-muted-foreground transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium text-primary hover:text-muted-foreground transition-colors"
            >
              Benefits
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-primary hover:text-muted-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-primary hover:text-muted-foreground transition-colors"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button type="button" className="">Contact Us</Button>
          </div>
        </div>
      </header>

      <main className="">
        {/* Hero Section with Spline Background*/}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Spline Background */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Suspense fallback={<div className="w-full h-full bg-primary"></div>}>
              <Spline scene="https://prod.spline.design/t-eJ9f4iaDPRBwVZ/scene.splinecode" className="w-full h-full" />
              {/* <Spline scene="https://prod.spline.design/q-D3s6DrAfEDjpyP/scene.splinecode" className="w-full h-full" /> */}
              {/* Overlay to hide "Built with Spline" watermark */}
              <div className="absolute bottom-0 right-0 w-[200px] h-[60px] bg-black z-10"></div>
            </Suspense>
          </div>
          <div className="container relative px-4 md:px-0 z-20 pointer-events-none flex items-center justify-center">
            <div className="max-w-2xl md:max-w-3xl pointer-events-none">
              <AnimationWrapper direction="up" duration={0.8} delay={0.2}>
                <div className="space-y-6">
                  <h1
                    className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md"
                    style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "-0.02em" }}
                  >
                    Creating <span className="text-orange">captivating</span> digital experiences
                    <span
                      className="block mt-2 text-primary/80"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "300",
                      }}
                    >
                      Dedicated to behavioral sciences
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-white text-lg drop-shadow-md">
                    We transform experimental tasks into engaging experiences, helping researchers collect better data
                    while maintaining scientific rigor.
                  </p>
                </div>
              </AnimationWrapper>
              <AnimationWrapper direction="up" duration={0.8} delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pointer-events-none">
                  <Button
                    size="lg"
                    className="pointer-events-auto"
                    type="button"
                  >
                    Start Your Project
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </AnimationWrapper>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce pointer-events-none">
            <span className="text-white text-sm mb-2 drop-shadow-md">Scroll to discover</span>
            <ChevronDown className="h-6 w-6 text-white drop-shadow-md" />
          </div>
        </section>

        {/* Quote Section - Moved outside hero */}
        <section className="py-24 mt-20 bg-background flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <AnimationWrapper direction="up" duration={0.6}>
              <div className="max-w-4xl mx-auto">
                <blockquote className="relative pl-6 py-2 italic text-foreground/80 text-2xl border-l-4 border-orange">
                  &quot;Scientists should try out <span className="text-primary">gamification</span> on their most creative,
                  pressing, and exciting research questions.&quot;
                  <footer className="mt-2 text-base text-muted-foreground not-italic">
                    — Science Magazine, &quot;How games can make behavioural science better?&quot; (2023)
                  </footer>
                </blockquote>
              </div>
            </AnimationWrapper>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-24 md:py-36 bg-background relative flex items-center justify-center">
          <div className="container px-4 md:px-6 relative">
            <AnimationWrapper direction="up" duration={0.6}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <SectionBadge>Our Solutions</SectionBadge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  Comprehensive <span className="text-primary">Research Solutions</span>
                </h2>
                <p className="max-w-[800px] text-muted-foreground text-lg">
                  From concept to deployment, we provide end-to-end solutions for behavioral science research.
                </p>
              </div>
            </AnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="h-10 w-10 text-orange" />,
                  title: "Scientific Communication Sites",
                  description:
                    "Engaging websites to showcase your research findings and make complex concepts accessible to a wider audience.",
                },
                {
                  icon: <FileText className="h-10 w-10 text-orange" />,
                  title: "Online Questionnaires",
                  description:
                    "Interactive and engaging questionnaires that increase completion rates and improve data quality.",
                },
                {
                  icon: <Brain className="h-10 w-10 text-orange" />,
                  title: "Behavioral Tasks Online",
                  description:
                    "Transform traditional behavioral tasks into digital experiences that maintain scientific validity.",
                },
                {
                  icon: <Clock className="h-10 w-10 text-orange" />,
                  title: "Longitudinal Studies",
                  description:
                    "Platforms designed to maintain participant engagement over extended periods, reducing dropout rates.",
                },
                {
                  icon: <Gamepad className="h-10 w-10 text-orange" />,
                  title: "Gamified Experiments",
                  description:
                    "Full-fledged mini-games that transform experimental paradigms into enjoyable experiences.",
                },
                {
                  icon: <Braces className="h-10 w-10 text-orange" />,
                  title: "Custom Research Platforms",
                  description:
                    "Tailored platforms that give researchers complete control over experimental parameters and data collection.",
                },
              ].map((solution, index) => (
                <AnimationWrapper key={index} direction="up" delay={0.1 + index * 0.1}>
                  <Card className="hover:shadow-md transition-all duration-300 h-full group border-primary/40 bg-gradient-to-r from-primary/10 to-primary/5 hover:bg-primary/10 hover:cursor-pointer">
                    <CardHeader className="pb-2">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 bg-primary/10">
                        {solution.icon}
                      </div>
                      <CardTitle className="text-xl font-semibold text-card-foreground">
                        <span className="text-primary">{solution.title.split(" ")[0]}</span>{" "}
                        {solution.title.split(" ").slice(1).join(" ")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{solution.description}</p>
                      <div className="mt-4 flex items-center transition-colors text-primary">
                        <span className="text-sm font-medium text-orange/50">Learn more</span>
                        <ChevronRight className="ml-1 h-4 w-4 text-orange/50" />
                      </div>
                    </CardContent>
                  </Card>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 md:py-36 relative overflow-hidden bg-secondary flex items-center justify-center">
          <div className="container px-4 md:px-6 relative z-10">
            <AnimationWrapper direction="up" duration={0.6}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <SectionBadge>Benefits</SectionBadge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary-foreground">
                  Why <span className="text-primary">Gamify</span> Your Research?
                </h2>
                <p className="max-w-[800px] text-lg text-muted-foreground">
                  Gamification offers <span className="text-primary font-medium">significant advantages</span> for
                  behavioral science research.
                </p>
              </div>
            </AnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Maintains participant engagement",
                  description:
                    "Gamification revitalizes participant engagement. This sustained interest over the long term also improves the quality of longitudinal studies.",
                  icon: <Users className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Ensures sample diversity",
                  description:
                    "Thanks to digital outreach, gamification allows access to a large number of participants leading to a more diverse panel.",
                  icon: <Globe className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Improves ecological validity",
                  description: "Gamification makes the study setting less distant from the participants' daily lives.",
                  icon: <LineChart className="h-6 w-6 text-primary" />,
                },
                {
                  title: "Enhances public accessibility",
                  description: "Gamification makes science and its understanding accessible to a wider audience.",
                  icon: <Brain className="h-6 w-6 text-primary" />,
                },
              ].map((benefit, index) => (
                <AnimationWrapper key={index} direction="up" delay={0.2 + index * 0.15}>
                  <div className="flex gap-4 group p-6 bg-secondary/50 rounded-xl hover:bg-secondary/80 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 bg-primary/10">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">
                        <span className="text-primary">{benefit.title.split(" ")[0]}</span>{" "}
                        {benefit.title.split(" ").slice(1).join(" ")}
                      </h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-36 bg-background flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <AnimationWrapper direction="up" duration={0.6}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <SectionBadge>Our Projects</SectionBadge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  Our <span className="text-primary">Research Projects</span>
                </h2>
                <p className="max-w-[800px] text-muted-foreground text-lg">
                  Discover how we&apos;ve helped researchers <span className="text-primary font-medium">transform</span>{" "}
                  their experimental tasks.
                </p>
              </div>
            </AnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "The Deep Model",
                  institution: "ENS",
                  description:
                    "A gamified platform to study video game preferences, providing users with personalized player profiles and targeted recommendations.",
                  image: "/deep.png",
                },
                {
                  title: "Metachoix",
                  institution: "Institut Jean Nicod, Paris",
                  description:
                    "An online platform for administering metachoice tasks, allowing researchers to study decision-making processes.",
                  image: "/metachoix.png",
                },
                {
                  title: "Cognitive Flexibility Assessment",
                  institution: "CNRS",
                  description:
                    "A gamified task measuring cognitive flexibility, transforming traditional switch-cost paradigms into an engaging experience.",
                  image: "/recipe.png",
                },
              ].map((project, index) => (
                <AnimationWrapper key={index} direction="up" delay={0.2 + index * 0.15}>
                  <Card className="overflow-hidden bg-card h-full hover:shadow-lg transition-shadow duration-300 group border-primary/40">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-semibold text-card-foreground">
                          <span className="text-primary">{project.title.split(" ")[0]}</span>{" "}
                          {project.title.split(" ").slice(1).join(" ")}
                        </CardTitle>
                        <div className="text-xs px-2 py-1 rounded-full text-primary bg-primary/10">
                          {project.institution}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                      <div className="mt-4 flex items-center transition-colors text-primary">
                        <span className="text-sm font-medium">View case study</span>
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 md:py-36 bg-secondary flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <AnimationWrapper direction="up" duration={0.6}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <SectionBadge>FAQ</SectionBadge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary-foreground">
                  <span className="text-primary">Frequently</span> Asked Questions
                </h2>
                <p className="max-w-[800px] text-lg text-muted-foreground">
                  Get answers to common questions about our{" "}
                  <span className="text-primary font-medium">research gamification</span> services.
                </p>
              </div>
            </AnimationWrapper>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Do I need to prepare a specification document?",
                  answer:
                    "Not necessarily. If you don't have one, we offer support to create it together. We can help you define your research objectives and translate them into technical specifications.",
                },
                {
                  question: "What about research data?",
                  answer:
                    "The collected data will be accessible at any time via a secure interface adaptable to your work habits. We ensure data security and compliance with privacy regulations.",
                },
                {
                  question: "How do I know what budget to allocate to my project?",
                  answer:
                    "The budget depends on the project's complexity, the volume of features, and the desired timeline. It will be estimated after the specification document is validated. We work with various budget ranges and can adapt our solutions accordingly.",
                },
                {
                  question: "Do I need to take care of validation with an ethics committee?",
                  answer:
                    "Yes, it is imperative for researchers to seek approval from an ethics committee for their research projects. Beyond Games offers a free consultation, specifically focused on the ethical aspects of online data collection.",
                },
                {
                  question: "Can I contact you during the preparation of an ERC/ANR budget?",
                  answer:
                    "Absolutely. We are very enthusiastic to help you complete your budget. This support is crucial to justifiably integrate the forecasted costs into your ERC/ANR funding request. You can contact us again after the research grants are awarded.",
                },
              ].map((faq, index) => (
                <AnimationWrapper key={index} direction="up" delay={0.2 + index * 0.1}>
                  <Card className="bg-card hover:shadow-md transition-all duration-300 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-card-foreground">
                        <span className="text-orange">{faq.question.split(" ")[0]}</span>{" "}
                        {faq.question.split(" ").slice(1).join(" ")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-36 bg-background relative overflow-hidden flex items-center justify-center">
          <div className="container px-4 md:px-6 relative z-10">
            <AnimationWrapper direction="up" duration={0.7}>
              <div className="max-w-4xl mx-auto rounded-2xl p-8 md:p-12 text-center shadow-sm border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Ready to <span className="text-primary">transform</span> your research experience?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Let&apos;s collaborate to create <span className="text-primary font-medium">engaging</span>, scientifically
                  rigorous digital experiences for your research projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="btn-primary px-8 py-6 text-base">
                    Start a Project
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-base border-primary text-primary hover:bg-primary/10"
                  >
                    Schedule a Consultation
                  </Button>
                </div>
                <p className="text-muted-foreground text-sm mt-6">No commitment required for initial consultations.</p>
              </div>
            </AnimationWrapper>
          </div>
        </section>

        {/* Trusted By Section - Moved here from hero */}
        <section className="py-20 bg-secondary flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <AnimationWrapper direction="up" duration={0.6}>
              <div className="text-center">
                <p className="text-center text-sm mb-8 uppercase tracking-wider font-medium text-muted-foreground">
                  TRUSTED BY <span className="text-primary">LEADING INSTITUTIONS</span>
                </p>
                <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
                  <div className="text-secondary-foreground font-medium text-xl">ENS</div>
                  <div className="text-secondary-foreground font-medium text-xl">Institut Jean Nicod</div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-background border-t border-border flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8">
                  <Image src="/owl.svg" alt="Beyond Games Logo" fill className="object-contain" />
                </div>
                <span className="text-xl font-semibold text-foreground">Beyond Games</span>
              </div>
              <p className="text-muted-foreground">
                Transforming experimental tasks into engaging experiences for behavioral sciences.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Scientific Communication
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Online Questionnaires
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Behavioral Tasks
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Longitudinal Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Gamified Experiments
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Research Papers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Gamification Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    info@beyondgames.com
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    +33 (0)1 23 45 67 89
                  </Link>
                </li>
                <li>
                  <p className="text-muted-foreground">Paris, France</p>
                </li>
              </ul>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Beyond Games. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
