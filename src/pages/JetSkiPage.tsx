
import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
    Star,
    MapPin,
    ShieldCheck,
    Ticket,
    AlertCircle,
    ChevronRight,
    Heart,
    CheckCircle2,
    Calendar as CalendarIcon
} from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { CurrencySymbol } from "@/components/ui/CurrencySymbol";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function JetSkiPage() {
    const [isSaved, setIsSaved] = useState(false);
    const [duration, setDuration] = useState("60"); // Default 1 Hour
    const [date, setDate] = useState<Date | undefined>(new Date());

    // Pricing Logic
    const prices = {
        "30": { current: 150, original: 180, label: "30 Minutes" },
        "60": { current: 230, original: 250, label: "1 Hour" }
    };

    const currentPrice = prices[duration as keyof typeof prices];
    const discount = Math.round(((currentPrice.original - currentPrice.current) / currentPrice.original) * 100);

    const images = [
        "https://res.cloudinary.com/dhtpnparf/image/upload/v1769929045/jetski_page-0002_aan30q.jpg",
        "https://res.cloudinary.com/dhtpnparf/image/upload/v1769929045/jetski_page-0001_msizqm.jpg",
        "https://res.cloudinary.com/dhtpnparf/image/upload/v1769929045/jetski_page-0005_l0xr2s.jpg",
        "https://res.cloudinary.com/dhtpnparf/image/upload/v1769929043/jetski_page-0004_v78zty.jpg",
        "https://res.cloudinary.com/dhtpnparf/image/upload/v1769929045/jetski_page-0006_ljt36x.jpg",
        "https://res.cloudinary.com/dhtpnparf/image/upload/v1769929046/jetski_page-0007_r8n5sb.jpg",
        "https://res.cloudinary.com/dhtpnparf/image/upload/v1769929044/jetski_page-0003_akburf.jpg"
    ];

    const highlights = [
        "30-minute or 1-hour Jet Ski rental in Dubai",
        "Admire the Burj Al Arab from the water",
        "High-speed thrill ride on the Arabian Gulf",
        "Professional instructors and safety gear included",
        "Perfect for beginners and experienced riders"
    ];

    return (
        <Layout>
            {/* Top Navigation Bar */}
            <div className="border-b border-gray-100 bg-white sticky top-16 z-30">
                <div className="section-container py-3 flex items-center justify-between">
                    <nav className="flex items-center text-sm text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
                        <Link to="/dubai" className="hover:text-primary transition-colors">Dubai</Link>
                        <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
                        <Link to="/dubai/water-adventures" className="hover:text-primary transition-colors">Water Adventures</Link>
                        <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
                        <span className="text-foreground font-medium truncate">Jumeirah Luxury Jet Ski</span>
                    </nav>
                </div>
            </div>

            {/* Full Width Slider */}
            <div className="w-full relative bg-gray-100">
                <Carousel opts={{ align: "start", loop: true }} className="w-full">
                    <CarouselContent className="-ml-0">
                        {images.map((img, index) => (
                            <CarouselItem key={index} className="pl-0 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 min-w-0">
                                <div className="relative aspect-[16/10] md:aspect-[4/3] group cursor-pointer overflow-hidden border-r border-white/20">
                                    <img
                                        src={img}
                                        alt={`Slide ${index}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-6 !bg-black/40 !text-white hover:!bg-black/60 border-none h-12 w-12 [&>svg]:h-6 [&>svg]:w-6 shadow-lg backdrop-blur-md transition-all scale-100 hover:scale-110" />
                    <CarouselNext className="right-6 !bg-black/40 !text-white hover:!bg-black/60 border-none h-12 w-12 [&>svg]:h-6 [&>svg]:w-6 shadow-lg backdrop-blur-md transition-all scale-100 hover:scale-110" />
                </Carousel>
            </div>

            <div className="section-container py-8 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Header Section */}
                        <div className="border-b border-gray-100 pb-8">
                            <h1 className="text-3xl md:text-5xl font-bold text-[#0A1F44] mb-4">Jumeirah Luxury Jet Ski</h1>
                            <p className="text-lg text-muted-foreground mb-6">Experience the thrill of the sea with premium jet skis</p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center bg-[#FFF9E5] px-3 py-1.5 rounded-lg text-sm font-bold text-[#B88E2F]">
                                    <Star className="h-4 w-4 fill-current mr-1.5" />
                                    4.8
                                    <span className="ml-1.5 font-normal text-[#B88E2F]/80">150 Reviews</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-gray-700">
                                    <ShieldCheck className="h-3.5 w-3.5" /> 24-Hour Confirmation
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-gray-700">
                                    <Ticket className="h-3.5 w-3.5" /> Mobile Tickets Accepted
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-gray-700">
                                    <AlertCircle className="h-3.5 w-3.5" /> Non-refundable
                                </span>
                            </div>
                        </div>

                        {/* Details Accordion */}
                        <div>
                            <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">Details & Highlights</h2>
                            <Accordion type="single" collapsible defaultValue="overview" className="w-full">

                                <AccordionItem value="overview">
                                    <AccordionTrigger className="text-lg font-semibold">Overview</AccordionTrigger>
                                    <AccordionContent className="text-gray-600 leading-relaxed">
                                        Enjoy your day out in the sea with your friends & family with Number 1 best Yacht charter & boat rental company in Dubai.
                                        Over 20 yachts to choose from. Xclusive offers a luxurious experience on board from our well maintained luxurious fleet to
                                        its quality yacht crew & professional guest relations staff. Looking for an unforgettable way to experience the beauty
                                        and luxury of Dubai?
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="highlights">
                                    <AccordionTrigger className="text-lg font-semibold">Highlights</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="grid sm:grid-cols-1 gap-3">
                                            {highlights.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-600">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="bring">
                                    <AccordionTrigger className="text-lg font-semibold">What to Bring</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                            <li>Original Passport or Emirates ID (Mandatory)</li>
                                            <li>Swimwear and towel</li>
                                            <li>Sunscreen and sunglasses</li>
                                            <li>Change of clothes</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="facilities">
                                    <AccordionTrigger className="text-lg font-semibold">Facilities</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                            <li>Changing rooms</li>
                                            <li>Shower facilities</li>
                                            <li>Lockers available</li>
                                            <li>Life jackets provided</li>
                                            <li>Free parking</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="policy">
                                    <AccordionTrigger className="text-lg font-semibold">Cancellation Policy</AccordionTrigger>
                                    <AccordionContent className="text-gray-600">
                                        <p>Cancel up to 24 hours in advance for a full refund. Cancellations made within 24 hours of the booking time are non-refundable. No-shows will be charged the full amount.</p>
                                    </AccordionContent>
                                </AccordionItem>

                            </Accordion>
                        </div>
                    </div>

                    {/* Right Column: Sticky Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg bg-white">

                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Total Price</p>
                                    <div className="flex items-baseline gap-2">
                                        <div className="flex items-baseline font-bold text-4xl text-[#0A1F44]">
                                            <CurrencySymbol className="w-6 h-6 mr-1" />
                                            {currentPrice.current}.00
                                        </div>
                                    </div>
                                    <div className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                                        <span className="line-through flex items-center">
                                            <CurrencySymbol className="w-3 h-3 mr-0.5" />
                                            {currentPrice.original}.00
                                        </span>
                                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                                            {discount}% OFF
                                        </span>
                                        <span className="text-gray-400">/ Person</span>
                                    </div>
                                </div>
                                <Button variant="outline" size="icon" className="rounded-full" onClick={() => setIsSaved(!isSaved)}>
                                    <Heart className={`h-5 w-5 ${isSaved ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
                                </Button>
                            </div>

                            <div className="space-y-6">
                                {/* Date Selector */}
                                <div className="space-y-3">
                                    <Label className="text-sm font-semibold text-gray-900">Select Date</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full justify-start text-left font-normal h-12 border-gray-200 hover:border-gray-300 hover:bg-white hover:text-gray-900",
                                                    !date && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                {/* Duration Selector */}
                                <div className="space-y-3">
                                    <Label className="text-sm font-semibold text-gray-900">Select Duration</Label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${duration === "30" ? "border-[#0A1F44] bg-[#0A1F44]/5 text-[#0A1F44]" : "border-gray-200 hover:border-gray-300 text-gray-600"}`}
                                            onClick={() => setDuration("30")}
                                        >
                                            30 Minutes
                                        </button>
                                        <button
                                            className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${duration === "60" ? "border-[#0A1F44] bg-[#0A1F44]/5 text-[#0A1F44]" : "border-gray-200 hover:border-gray-300 text-gray-600"}`}
                                            onClick={() => setDuration("60")}
                                        >
                                            1 Hour
                                        </button>
                                    </div>
                                </div>

                                <Button className="w-full bg-[#E31E53] hover:bg-[#C11542] text-white font-bold h-14 text-lg shadow-md transition-all hover:shadow-xl">
                                    Get Ticket
                                </Button>

                                <div className="text-center">
                                    <p className="text-xs text-gray-400 mb-2">Secure Payment via</p>
                                    <div className="flex justify-center gap-2 grayscale opacity-70">
                                        {/* Simple placeholders or icons for payment methods could go here */}
                                        <span className="font-bold text-gray-300 italic">VISA</span>
                                        <span className="font-bold text-gray-300 italic">Mastercard</span>
                                        <span className="font-bold text-gray-300 italic">ApplePay</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-[400px] mb-[-4rem] grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178523317923!2d55.22802677610636!3d25.13964513169871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6a005c2f30b9%3A0xc0c427300c253018!2sJumeirah%20Beach!5e0!3m2!1sen!2sae!4v1703666666666!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Activity Location"
                ></iframe>
            </div>
        </Layout>
    );
}
