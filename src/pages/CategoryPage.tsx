import { useParams } from "react-router-dom";
import { MapPin, Star, Clock, ArrowRight, SlidersHorizontal, X, ShoppingCart } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  dubaiThemeParks,
  dubaiWaterParks,
  dubaiAttractions,
  dubaiWaterSports,
  dubaiDinnerCruise,
  dubaiYacht,
  abuDhabiExperiences,
  sharjahExperiences,
  ajmanExperiences,
  rasAlKhaimahExperiences,
  staycations,
} from "@/data/tours";
import { Tour } from "@/components/home/ExperienceSection";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { PremiumCard } from "@/components/ui/PremiumCard";

// Limousine data (not in tours.ts yet)
const dubaiLimousine: Tour[] = [
  { id: "lm-1", name: "Luxury Limousine City Tour", location: "Dubai", category: "Limousine", price: 599, originalPrice: 750, rating: 4.9, reviewCount: 340, duration: "4 Hours", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80", badge: "Luxury" },
  { id: "lm-2", name: "Airport Transfer Limousine", location: "Dubai", category: "Limousine", price: 299, rating: 4.8, reviewCount: 890, duration: "1 Hour", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&q=80" },
  { id: "lm-3", name: "Wedding Limousine Package", location: "Dubai", category: "Limousine", price: 999, rating: 5.0, reviewCount: 120, duration: "6 Hours", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80", badge: "Premium" },
  { id: "lm-4", name: "Night Out Limousine", location: "Dubai", category: "Limousine", price: 449, originalPrice: 550, rating: 4.7, reviewCount: 230, duration: "5 Hours", image: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?w=600&q=80" },
];

const categoryData: Record<string, { title: string; subtitle: string; tours: Tour[] }> = {
  "theme-parks": {
    title: "Dubai Theme Parks",
    subtitle: "Experience world-class theme parks with thrilling rides and entertainment",
    tours: dubaiThemeParks,
  },
  "water-parks": {
    title: "Dubai Water Parks",
    subtitle: "Beat the heat with exciting water slides and splash attractions",
    tours: dubaiWaterParks,
  },
  "attractions": {
    title: "Dubai Attractions",
    subtitle: "Discover iconic landmarks and must-see destinations in Dubai",
    tours: dubaiAttractions,
  },
  "water-sports": {
    title: "Dubai Water Sports",
    subtitle: "Adrenaline-pumping water adventures for thrill seekers",
    tours: dubaiWaterSports,
  },
  "dinner-cruise": {
    title: "Dubai Dinner Cruise",
    subtitle: "Romantic dining experiences on the beautiful Dubai waters",
    tours: dubaiDinnerCruise,
  },
  "yacht": {
    title: "Dubai Yacht Tours",
    subtitle: "Luxury sailing and yacht charter experiences",
    tours: dubaiYacht,
  },
  "limousine": {
    title: "Dubai Limousine",
    subtitle: "Travel in style with luxury limousine services",
    tours: dubaiLimousine,
  },
};

const abuDhabiData = {
  title: "Abu Dhabi Experiences",
  subtitle: "Explore the capital's finest attractions and cultural landmarks",
  tours: abuDhabiExperiences,
};

const staycationsData = {
  title: "Staycations",
  subtitle: "Luxurious getaways and resort experiences in the UAE",
  tours: staycations,
};

export default function CategoryPage() {
  const { city, category } = useParams();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  // Determine which data to show
  let pageData;
  if (city === "abu-dhabi") {
    pageData = abuDhabiData;
  } else if (city === "sharjah") {
    pageData = {
      title: "Sharjah Experiences",
      subtitle: "Discover the cultural capital of the UAE",
      tours: sharjahExperiences // You need to import this!
    };
  } else if (city === "ajman") {
    pageData = {
      title: "Ajman Experiences",
      subtitle: "Explore the scenic beauty and heritage of Ajman",
      tours: ajmanExperiences // You need to import this!
    };
  } else if (city === "ras-al-khaimah") {
    pageData = {
      title: "Ras Al Khaimah Experiences",
      subtitle: "Adventure and nature in RAK",
      tours: rasAlKhaimahExperiences // You need to import this!
    };
  } else if (category === "staycations" || (!city && !category)) {
    pageData = staycationsData;
  } else if (city === "dubai" && category) {
    pageData = categoryData[category];
  } else {
    pageData = null;
  }

  if (!pageData) {
    return (
      <Layout>
        <div className="section-container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The category you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Filter and sort tours
  let filteredTours = [...pageData.tours];

  // Price filter
  filteredTours = filteredTours.filter(
    (tour) => tour.price >= priceRange[0] && tour.price <= priceRange[1]
  );

  // Rating filter
  if (selectedRatings.length > 0) {
    filteredTours = filteredTours.filter((tour) =>
      selectedRatings.some((rating) => tour.rating >= rating)
    );
  }

  // Sort
  switch (sortBy) {
    case "price-low":
      filteredTours.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filteredTours.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filteredTours.sort((a, b) => b.rating - a.rating);
      break;
    default:
      filteredTours.sort((a, b) => b.reviewCount - a.reviewCount);
  }

  const toggleRating = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="section-container relative h-full flex flex-col justify-end pb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {pageData.title}
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              {pageData.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container py-8">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <p className="text-muted-foreground">
            Showing {filteredTours.length} experiences
          </p>

          <div className="flex items-center gap-3">
            {/* Mobile Filter */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="sm:hidden">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  {/* Price Range */}
                  <div>
                    <Label className="text-sm font-medium">Price Range (AED)</Label>
                    <div className="mt-4 px-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        min={0}
                        max={3000}
                        step={50}
                      />
                      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                        <span>{priceRange[0]}</span>
                        <span>{priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <Label className="text-sm font-medium">Minimum Rating</Label>
                    <div className="mt-3 space-y-2">
                      {[4.5, 4.0, 3.5].map((rating) => (
                        <div key={rating} className="flex items-center gap-2">
                          <Checkbox
                            id={`rating-${rating}`}
                            checked={selectedRatings.includes(rating)}
                            onCheckedChange={() => toggleRating(rating)}
                          />
                          <label
                            htmlFor={`rating-${rating}`}
                            className="flex items-center gap-1 text-sm cursor-pointer"
                          >
                            <Star className="h-4 w-4 fill-gold text-gold" />
                            {rating}+
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden sm:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-semibold mb-4">Filters</h3>

                {/* Price Range */}
                <div className="mb-6">
                  <Label className="text-sm font-medium">Price Range (AED)</Label>
                  <div className="mt-4 px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={0}
                      max={3000}
                      step={50}
                    />
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                      <span>{priceRange[0]}</span>
                      <span>{priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <Label className="text-sm font-medium">Minimum Rating</Label>
                  <div className="mt-3 space-y-2">
                    {[4.5, 4.0, 3.5].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <Checkbox
                          id={`desktop-rating-${rating}`}
                          checked={selectedRatings.includes(rating)}
                          onCheckedChange={() => toggleRating(rating)}
                        />
                        <label
                          htmlFor={`desktop-rating-${rating}`}
                          className="flex items-center gap-1 text-sm cursor-pointer"
                        >
                          <Star className="h-4 w-4 fill-gold text-gold" />
                          {rating}+
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedRatings.length > 0 || priceRange[0] > 0 || priceRange[1] < 3000) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedRatings([]);
                      setPriceRange([0, 3000]);
                    }}
                    className="w-full mt-4"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>
          </aside>

          {/* Tours Grid */}
          <div className="flex-1">
            {filteredTours.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No tours found matching your filters.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedRatings([]);
                    setPriceRange([0, 3000]);
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTours.map((tour, index) => (
                  <div
                    key={tour.id}
                  >
                    <PremiumCard
                      id={tour.id}
                      title={tour.name}
                      image={tour.image}
                      price={tour.price}
                      originalPrice={tour.originalPrice}
                      rating={tour.rating}
                      category={tour.category}
                      subtitle={tour.duration} // Using duration as subtitle 
                      badge={tour.badge}
                      location={tour.location}
                      link={`/tour/${tour.id}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
