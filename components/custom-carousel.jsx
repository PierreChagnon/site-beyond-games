import * as React from "react"

import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    ChevronRight,
} from "lucide-react"
import Image from "next/image"

const projects = [
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
]

export function CustomCarousel() {
    return (
        <Carousel className="">
            <CarouselContent>
                {projects.map((project, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="overflow-hidden bg-card h-full hover:shadow-lg transition-shadow duration-300 group border-primary/40">
                                <div className="aspect-video relative overflow-hidden">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
