"use client"

import { useState } from "react"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [formState, setFormState] = useState({
        loading: false,
        success: false,
        error: null,
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.message) {
            setFormState({
                loading: false,
                success: false,
                error: "Please fill in all required fields.",
            })
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            setFormState({
                loading: false,
                success: false,
                error: "Please enter a valid email address.",
            })
            return
        }

        setFormState({
            loading: true,
            success: false,
            error: null,
        })

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || "Failed to send message")
            }

            setFormState({
                loading: false,
                success: true,
                error: null,
            })

            setFormData({
                name: "",
                email: "",
                message: "",
            })

            setTimeout(() => {
                setFormState((prev) => ({
                    ...prev,
                    success: false,
                }))
            }, 5000)
        } catch (error) {
            setFormState({
                loading: false,
                success: false,
                error: error.message || "An error occurred while sending your message.",
            })
        }
    }

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            message: "",
        })
        setFormState({
            loading: false,
            success: false,
            error: null,
        })
    }

    return (
        <Card className="mx-auto bg-transparent border-0 shadow-none">
            <CardHeader>
                <CardTitle className={"text-3xl md:text-4xl font-bold mb-6 text-foreground"}>Contact Us</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    {formState.error && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{formState.error}</AlertDescription>
                        </Alert>
                    )}
                    {formState.success && (
                        <Alert variant="success" className="bg-green-100 dark:bg-green-900 border-green-500 text-green-700 dark:text-green-200">
                            <CheckCircle2 className="h-4 w-4" />
                            <AlertDescription>
                                Your message has been sent successfully! We'll get back to you soon.
                            </AlertDescription>
                        </Alert>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">
                                Name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                className="bg-background"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete="name"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">
                                Email <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                className="bg-background"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your.email@example.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">
                            Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Tell us about your research project and how we can help"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="resize-none bg-background"
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                    <Button
                        type="submit"
                        disabled={formState.loading}
                        className="w-full sm:w-auto"
                    >
                        {formState.loading ? (
                            <>
                                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
