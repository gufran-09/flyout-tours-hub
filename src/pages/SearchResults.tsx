import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ProductCard } from "@/components/ui/ProductCard";
import { motion } from "framer-motion";
import { Search, MapPin, Tag, Compass, Star, Filter, X, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { CurrencySymbol } from "@/components/ui/CurrencySymbol";
import { PriceDisplay } from "@/components/ui/PriceDisplay";

interface SearchResult {
  id: string;
  title: string;
  slug: string;
  type: "tour" | "destination" | "category";
  city: string;
  category: string;
  categorySlug?: string;
  image: string;
  price?: number;
  originalPrice?: number;
  rating?: number;
  badge?: string;
  description?: string;
  redirectUrl: string;
}

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [cityFilter, setCityFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("relevance");

  // Fetch search results
  useEffect(() => {
    const fetchResults = async () => {
      if (!initialQuery.trim()) {
        setResults([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/search?q=${encodeURIComponent(initialQuery)}&limit=50`,
          {
            headers: {
              "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) throw new Error("Search failed");

        const data = await response.json();
        setResults(data.results || []);
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [initialQuery]);

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...results];

    // Type filter
    if (typeFilter !== "all") {
      filtered = filtered.filter((r) => r.type === typeFilter);
    }

    // City filter
    if (cityFilter !== "all") {
      filtered = filtered.filter((r) => r.city === cityFilter);
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "price-high":
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // Keep relevance order
        break;
    }

    setFilteredResults(filtered);
  }, [results, typeFilter, cityFilter, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  const handleResultClick = (result: SearchResult) => {
    navigate(result.redirectUrl);
  };

  const clearFilters = () => {
    setTypeFilter("all");
    setCityFilter("all");
    setSortBy("relevance");
  };

  const uniqueCities = [...new Set(results.map((r) => r.city))];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "destination":
        return <MapPin className="h-4 w-4" />;
      case "category":
        return <Tag className="h-4 w-4" />;
      default:
        return <Compass className="h-4 w-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "destination":
        return "Destination";
      case "category":
        return "Category";
      default:
        return "Tour";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Search Header */}
        <div className="bg-gradient-to-b from-primary/10 to-background py-8 md:py-12">
          <div className="section-container">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Search Results
            </h1>

            <form onSubmit={handleSearch} className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tours, destinations, activities..."
                className="pl-12 pr-28 h-14 text-lg"
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10"
              >
                Search
              </Button>
            </form>

            {initialQuery && (
              <p className="text-muted-foreground mt-4">
                {isLoading ? (
                  "Searching..."
                ) : (
                  <>
                    Found <span className="font-semibold text-foreground">{filteredResults.length}</span> results for "
                    <span className="font-semibold text-foreground">{initialQuery}</span>"
                  </>
                )}
              </p>
            )}
          </div>
        </div>

        {/* Filters */}
        {results.length > 0 && (
          <div className="border-b border-border sticky top-20 bg-background/95 backdrop-blur z-40">
            <div className="section-container py-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Filter className="h-4 w-4" />
                  Filters:
                </div>

                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="tour">Tours</SelectItem>
                    <SelectItem value="destination">Destinations</SelectItem>
                    <SelectItem value="category">Categories</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={cityFilter} onValueChange={setCityFilter}>
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cities</SelectItem>
                    {uniqueCities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))
                    }
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>

                {(typeFilter !== "all" || cityFilter !== "all" || sortBy !== "relevance") && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <X className="h-4 w-4 mr-1" />
                    Clear
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        <div className="section-container py-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <CardContent className="p-4 space-y-3">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                  </CardContent>
                </Card>
              ))
              }
            </div>
          ) : filteredResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ProductCard
                    id={result.id}
                    title={result.title}
                    image={result.image}
                    price={result.price || "Check Price"}
                    originalPrice={result.originalPrice}
                    rating={result.rating || 4.5}
                    reviews="100+"
                    location={result.city}
                    category={result.category}
                    tag={result.badge}
                    link={result.redirectUrl}
                    duration="See details"
                    booked="Popular"
                    className="h-full"
                  />
                </motion.div>
              ))}
            </div>
          ) : initialQuery ? (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">No results found</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                We couldn't find any tours, destinations, or categories matching "{initialQuery}".
                Try different keywords or browse our categories.
              </p>
              <Button className="mt-6" onClick={() => navigate("/")}>
                Browse All Tours
              </Button>
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Search for tours & experiences</h2>
              <p className="text-muted-foreground">
                Enter keywords to find tours, destinations, and activities
              </p>
            </div>
          )
          }
        </div >
      </div >
    </Layout >
  );
}
