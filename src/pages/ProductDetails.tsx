
import { useParams, Link } from "react-router-dom";
import { PRODUCTS, Product, DurationOption } from "@/data/catalog";
import { Layout } from "@/components/layout/Layout";
import {
    Star,
    MapPin,
    Clock,
    Check,
    ShieldCheck,
    Smartphone,
    Calendar as CalendarIcon,
    ChevronRight,
    ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
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
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export default function ProductDetails() {
    const { slug } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [selectedDuration, setSelectedDuration] = useState<DurationOption | null>(null);

    useEffect(() => {
        const foundProduct = PRODUCTS.find((p) => p.slug === slug);
        if (foundProduct) {
            setProduct(foundProduct);
            if (foundProduct.durationOptions && foundProduct.durationOptions.length > 0) {
                // Default to the first option
                setSelectedDuration(foundProduct.durationOptions[0]);
            }
        }
    }, [slug]);

    if (!product) {
        return (
            <Layout>
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-3xl font-bold">Product Not Found</h1>
                    <p className="mt-4 text-gray-600">The product you are looking for does not exist.</p>
                    <Link to="/">
                        <Button className="mt-6">Go Home</Button>
                    </Link>
                </div>
            </Layout>
        );
    }

    const currentPrice = selectedDuration ? selectedDuration.price : 0;
    const currentOriginalPrice = selectedDuration?.originalPrice;
    const currentDiscount = selectedDuration?.discountPercent;

    const discountDisplay = currentDiscount ? (
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-md text-xs font-bold uppercase tracking-wide">
            {currentDiscount}% OFF
        </span>
    ) : null;

    return (
        <Layout>
            <div className="bg-white min-h-screen pb-20">
                {/* Breadcrumbs */}
                <div className="bg-gray-50 border-b">
                    <div className="container mx-auto px-4 py-3">
                        <div className="flex items-center text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
                            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                            <ChevronRight className="w-3 h-3 mx-2 text-gray-400" />
                            <Link to={`/${product.destination}`} className="hover:text-primary capitalize transition-colors">{product.destination}</Link>
                            <ChevronRight className="w-3 h-3 mx-2 text-gray-400" />
                            <Link to={`/experiences/${product.destination}/${product.category}`} className="hover:text-primary capitalize transition-colors">{product.category.replace(/-/g, ' ')}</Link>
                            <ChevronRight className="w-3 h-3 mx-2 text-gray-400" />
                            <span className="text-gray-900 font-medium truncate max-w-[200px]">{product.title}</span>
                        </div>
                    </div>
                </div>

                {/* Image Slider - Full Width Strip */}
                <div className="w-full relative group">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {product.images.map((img, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-[300px] md:h-[400px]">
                                    <div className="relative h-full w-full overflow-hidden">
                                        <img
                                            src={img}
                                            alt={`${product.title} - ${index + 1}`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CarouselNext className="right-4 bg-white/80 hover:bg-white border-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Carousel>
                </div>


                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Column - Content */}
                        <div className="flex-1 space-y-8">

                            {/* Header */}
                            <div className="space-y-4">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{product.title}</h1>
                                <p className="text-lg text-gray-600">{product.subtitle}</p>

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm font-bold">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span>{product.rating}</span>
                                    </div>
                                    <span className="text-gray-500 text-sm hover:underline cursor-pointer">{product.reviewCount} Reviews</span>
                                </div>

                                {/* Feature Pills */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {product.confirmationHours <= 24 && (
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md text-sm text-gray-700">
                                            <Clock className="w-4 h-4 text-gray-500" />
                                            <span>24 Hour Confirmation</span>
                                        </div>
                                    )}
                                    {product.mobileTicket && (
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md text-sm text-gray-700">
                                            <Smartphone className="w-4 h-4 text-gray-500" />
                                            <span>Mobile Tickets Accepted</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md text-sm text-gray-700">
                                        <ShieldCheck className="w-4 h-4 text-gray-500" />
                                        <span>{product.refundable ? "Flexible Cancellation" : "Non-refundable"}</span>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            {/* Details & Highlights Header */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Details & Highlights</h2>

                                {/* Accordions for Details */}
                                <Accordion type="single" collapsible className="w-full">
                                    {/* Overview */}
                                    <AccordionItem value="overview" className="border-b">
                                        <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">Overview</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-gray-600 leading-relaxed text-base pt-2 pb-4">
                                                {product.overview}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    {/* Highlights */}
                                    <AccordionItem value="highlights" className="border-b">
                                        <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">Highlights</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="grid grid-cols-1 gap-3 pt-2 pb-4">
                                                {product.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-600 text-base">
                                                        <div className="w-5 h-5 mt-0.5 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600">
                                                            <Check className="w-3 h-3" />
                                                        </div>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>

                                    {/* What to Bring */}
                                    <AccordionItem value="whatToBring" className="border-b">
                                        <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">What to Bring</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="list-disc list-inside space-y-2 text-gray-600 text-base pt-2 pb-4">
                                                {product.whatToBring.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>

                                    {/* Facilities */}
                                    <AccordionItem value="facilities" className="border-b">
                                        <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">Facilities</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-wrap gap-2 pt-2 pb-4">
                                                {product.facilities.map((item, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 border border-gray-200">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    {/* Cancellation Policy */}
                                    <AccordionItem value="cancellation" className="border-b-0">
                                        <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">Cancellation Policy</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-gray-600 text-base pt-2 pb-4">{product.cancellationPolicy}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                        </div>

                        {/* Right Column - Booking Card */}
                        <div className="w-full lg:w-[380px] shrink-0">
                            <div className="sticky top-24 bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-6 space-y-6">
                                {/* Price Header */}
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Total Price</p>
                                        <div className="flex flex-col">
                                            <span className="text-4xl font-bold text-gray-900">AED {currentPrice}</span>
                                            <div className="flex items-center gap-2 mt-1">
                                                {currentOriginalPrice && (
                                                    <span className="text-sm text-gray-400 line-through">AED {currentOriginalPrice}</span>
                                                )}
                                                {discountDisplay}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Date Selection */}
                                <div className="space-y-3">
                                    <label className="text-sm font-semibold text-gray-900 block">Select Date</label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full justify-start text-left font-normal h-12 border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-colors",
                                                    !selectedDate && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-3 h-4 w-4 text-gray-400" />
                                                {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={selectedDate}
                                                onSelect={setSelectedDate}
                                                initialFocus
                                                disabled={(date) => date < new Date()}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                {/* Duration Selection */}
                                {product.durationOptions.length > 0 && (
                                    <div className="space-y-3">
                                        <label className="text-sm font-semibold text-gray-900 block">Select Duration</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {product.durationOptions.map((option, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setSelectedDuration(option)}
                                                    className={cn(
                                                        "px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200",
                                                        selectedDuration?.label === option.label
                                                            ? "border-gray-900 bg-gray-900 text-white shadow-md"
                                                            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 active:scale-95"
                                                    )}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="pt-2">
                                    <Button className="w-full h-14 text-lg font-bold bg-[#E91E63] hover:bg-[#D81B60] text-white shadow-lg shadow-[#E91E63]/20 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                                        Get Ticket
                                    </Button>
                                    <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
                                        <ShieldCheck className="w-3 h-3" />
                                        <span>Secure Payment via Visa, Mastercard, ApplePay</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    {product.location && (
                        <div className="mt-16 pt-8 border-t border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
                            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-[400px] w-full bg-gray-100 relative">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(product.location)}`}
                                ></iframe>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border text-sm text-gray-500">
                                        Map view for {product.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
