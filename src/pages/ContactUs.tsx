import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
    return (
        <Layout>
            <div className="bg-background min-h-screen">
                <div className="bg-primary/5 py-12 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">Contact Us</h1>
                    <p className="mt-4 text-xl text-muted-foreground">We'd love to hear from you. Get in touch with us.</p>
                </div>

                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-foreground">Office Address</h3>
                                        <p className="mt-1 text-muted-foreground">
                                            Dubai, United Arab Emirates<br />
                                            Business Bay, Office 123
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="h-6 w-6 text-primary mt-1" />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-foreground">Phone</h3>
                                        <p className="mt-1 text-muted-foreground">+971 50 123 4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="h-6 w-6 text-primary mt-1" />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-foreground">Email</h3>
                                        <p className="mt-1 text-muted-foreground">info@flyouttours.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="h-6 w-6 text-primary mt-1" />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-foreground">Working Hours</h3>
                                        <p className="mt-1 text-muted-foreground">
                                            Monday - Sunday: 9:00 AM - 9:00 PM<br />
                                            Support: 24/7
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-card shadow-lg rounded-lg p-8 border">
                            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                                        Name
                                    </label>
                                    <Input id="name" type="text" placeholder="Your Name" className="mt-1" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                                        Email
                                    </label>
                                    <Input id="email" type="email" placeholder="you@example.com" className="mt-1" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                                        Message
                                    </label>
                                    <Textarea id="message" placeholder="How can we help you?" className="mt-1 h-32" />
                                </div>

                                <Button type="submit" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
