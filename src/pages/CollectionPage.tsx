import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Loader2 } from "lucide-react";

const filterMapping: Record<string, { filter: string; title: string; subtitle: string }> = {
    "popular": { filter: "is_most_booked", title: "Most Popular", subtitle: "Discover our most loved experiences." },
    "luxury": { filter: "is_luxury", title: "Luxury Collections", subtitle: "Curated high-end experiences." },
    "romantic": { filter: "is_romantic", title: "Lifestyle & Romance", subtitle: "Celebrate life's moments." },
    "featured": { filter: "is_featured", title: "Featured Experiences", subtitle: "Hand-picked for you." },
    "events": { filter: "is_event", title: "Events & Entertainment", subtitle: "Live the moment." },
};

const CollectionPage = () => {
    const { slug } = useParams();
    const config = filterMapping[slug || ""] || { filter: "", title: "Collection", subtitle: "" };

    const { data: products, isLoading } = useQuery({
        queryKey: ["collection", config.filter],
        queryFn: async () => {
            if (!config.filter) return [];
            const { data, error } = await supabase
                .from("products")
                .select(`
                    id,
                    title,
                    slug,
                    rating,
                    review_count,
                    destinations ( slug ),
                    product_images ( image_url, position ),
                    product_pricing ( price, original_price )
                `)
                // @ts-ignore
                .eq(config.filter, true);

            if (error) throw error;

            return data.map((product: any) => ({
                ...product,
                product_images: product.product_images?.sort((a: any, b: any) => a.position - b.position) || [],
                destinations: product.destinations || { slug: '' }
            }));
        },
        enabled: !!config.filter
    });

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">{config.title}</h1>
                        <p className="text-slate-500 text-lg font-light max-w-2xl">{config.subtitle}</p>
                    </div>

                    {products && products.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {products.map((product: any) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    image={product.product_images?.[0]?.image_url}
                                    rating={product.rating}
                                    review_count={product.review_count}
                                    minPrice={Math.min(...(product.product_pricing?.map((p: any) => p.price) || [0]))}
                                    originalPrice={product.product_pricing?.[0]?.original_price}
                                    destinationSlug={product.destinations?.slug || "dubai"}
                                    productSlug={product.slug}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-slate-400">
                            <p>No products found in this collection.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CollectionPage;
