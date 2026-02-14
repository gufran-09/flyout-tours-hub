// src/data/products.ts

export type DurationOption = {
    label: string;
    minutes: number;
    price: number;
    originalPrice?: number;
    discountPercent?: number; // Optional, can be calculated
};

export type Product = {
    id: string;
    slug: string;
    title: string;
    subtitle: string;

    category: string;
    destination: string;
    location: string;

    rating: number;
    reviewCount: number;

    // Pricing moved to durationOptions
    durationOptions: DurationOption[];

    // ADD NEW IMAGE URLS HERE in this array
    images: string[];

    // Marketing badges only (Best Seller, Popular, Premium)
    badges: string[];

    overview: string;
    highlights: string[];
    whatToBring: string[];
    facilities: string[];
    cancellationPolicy: string;

    // Booking rules
    confirmationHours: number;
    mobileTicket: boolean;
    refundable: boolean; // false if conditions apply
    maxPeople?: number;
    Supplier_Code: string;
};

export const PRODUCTS: Product[] = [
    /* ---------------------------------------------------
       JUMEIRAH LUXURY JET SKI
    --------------------------------------------------- */
    {
        id: "jet-ski-jumeirah",
        Supplier_Code: "LUXYHT",
        slug: "jumeirah-luxury-jet-ski",
        title: "Jumeirah Luxury Jet Ski",
        subtitle: "Experience the thrill of the sea with premium jet skis",

        category: "water-sports",
        destination: "dubai",
        location: "Jumeirah, Dubai",

        rating: 4.8,
        reviewCount: 1500,

        durationOptions: [
            { label: "30 Minutes", minutes: 30, price: 225, originalPrice: 250, discountPercent: 10 },
            { label: "1 Hour", minutes: 60, price: 450, originalPrice: 480, discountPercent: 7 },
        ],

        images: [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski/jetski-1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski/jetski-2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski/jetski-3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski/jetski-4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski/jetski-5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski/jetski-6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski/jetski-7.webp",
        ],

        badges: ["Best Seller"],

        overview:
            "Get ready for an adrenaline-pumping experience as you ride the waves on our top-of-the-line jet skis. Enjoy stunning views of the Dubai skyline, including the Burj Al Arab and Palm Jumeirah.",

        highlights: [
            "Ride the latest model Yamaha Jet Skis",
            "Stunning views of Burj Al Arab & Palm Jumeirah",
            "Professional instructors & safety briefing",
            "Free photos & videos of your ride",
        ],

        whatToBring: [
            "Passport or Emirates ID",
            "Swimwear",
            "Towel",
            "Sunscreen",
        ],

        facilities: [
            "Changing Rooms",
            "Showers",
            "Free Parking",
            "Lockers",
            "Refreshments",
        ],

        cancellationPolicy:
            "Cancel up to 24 hours in advance for a full refund. No-shows will be charged fully.",

        confirmationHours: 24,
        mobileTicket: true,
        refundable: false,
        maxPeople: 2,
    },
    {
        id: "banana-boat-dubai",
        Supplier_Code: "LUXYHT",
        slug: "banana-boat-ride-dubai",
        title: "Banana Boat Ride",
        subtitle: "Fun-filled group water ride with thrilling speed",

        category: "water-sports",
        destination: "dubai",
        location: "Dubai Marina",

        rating: 4.6,
        reviewCount: 980,

        durationOptions: [
            { label: "30 Minutes", minutes: 30, price: 300, originalPrice: 350, discountPercent: 14 },
        ],

        images: [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/banana-boat/banana-boat-1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/banana-boat/banana-boat-2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/banana-boat/banana-boat-3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/banana-boat/banana-boat-4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/banana-boat/banana-boat-5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/banana-boat/banana-boat-6.webp",
        ],

        badges: ["Family Friendly"],

        overview:
            "Enjoy a fun-filled banana boat ride over the Arabian Sea as you are pulled at thrilling speeds by a speedboat. Perfect for families, friends, and group adventures.",

        highlights: [
            "Group ride for up to 6 people",
            "High-speed adventure over waves",
            "Professional safety briefing",
            "Life jackets provided",
        ],

        whatToBring: ["Swimwear", "Towel", "Sunscreen"],

        facilities: ["Changing Rooms", "Lockers", "Free Parking"],

        cancellationPolicy:
            "Cancel up to 24 hours in advance for a full refund.",

        confirmationHours: 24,
        mobileTicket: true,
        refundable: false,
        maxPeople: 6,
    },

    {
        id: "flyboard-dubai",
        Supplier_Code: "LUXYHT",
        slug: "flyboard-experience-dubai",
        title: "Flyboard Experience",
        subtitle: "Fly above the sea using high-powered water jets",

        category: "water-sports",
        destination: "dubai",
        location: "JBR Beach",

        rating: 4.7,
        reviewCount: 640,

        durationOptions: [
            { label: "30 Minutes", minutes: 30, price: 330, originalPrice: 350, discountPercent: 6 },
        ],

        images: [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/flyboard/flyboard-1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/flyboard/flyboard-2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/flyboard/flyboard-3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/flyboard/flyboard-4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/flyboard/flyboard-5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/flyboard/flyboard-6.webp",
        ],

        badges: ["Thrilling"],

        overview:
            "Experience the thrill of flying above water using powerful jet propulsion. Learn to hover, dive, and perform tricks under expert supervision.",

        highlights: [
            "Fly up to 10 meters above water",
            "Professional instructor guidance",
            "Safety gear included",
            "Photo & video assistance available",
        ],

        whatToBring: ["Swimwear", "Towel", "Extra clothes"],

        facilities: ["Changing Rooms", "Showers", "Lockers"],

        cancellationPolicy:
            "Cancel at least 24 hours prior for a full refund.",

        confirmationHours: 24,
        mobileTicket: true,
        refundable: false,
    },

    {
        id: "jet-car-dubai",
        Supplier_Code: "LUXYHT",
        slug: "jet-car-experience-dubai",
        title: "Jet Car Experience ",
        subtitle: "Luxury supercar-style water adventure",

        category: "water-sports",
        destination: "dubai",
        location: "Dubai Harbor",

        rating: 4.9,
        reviewCount: 420,

        durationOptions: [
            { label: "20 Minutes", minutes: 20, price: 499, originalPrice: 550, discountPercent: 6 },
            { label: "30 Minutes", minutes: 30, price: 599, originalPrice: 650, discountPercent: 6 },
        ],

        images: [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-car/Jet%20Car-1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-car/Jet%20Car-2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-car/Jet%20Car-4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-car/Jet%20Car-5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-car/Jet%20Car-6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-car/Jet%20Car-8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-car/Jet%20Car-9.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-car/Jet%20Car-10.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-car/Jet%20Car-11.webp",
        ],

        badges: ["Luxury"],

        overview:
            "Drive a luxury supercar-shaped watercraft on the sea while enjoying stunning views of Dubai’s skyline. A perfect blend of speed, style, and comfort.",

        highlights: [
            "Luxury sports car design",
            "Easy-to-drive water vehicle",
            "Perfect for photos & couples",
            "Scenic skyline views",
        ],

        whatToBring: ["Passport or Emirates ID", "Sunglasses", "Sunscreen"],

        facilities: ["Valet Parking", "Lounge Access", "Changing Rooms"],

        cancellationPolicy:
            "Non-refundable once booked.",

        confirmationHours: 24,
        mobileTicket: true,
        refundable: false,
    },
    {
        id: "speed-boat-dubai",
        Supplier_Code: "LUXYHT",
        slug: "speed-boat-tour-dubai",
        title: "Speed Boat Tour ",
        subtitle: "High-speed sightseeing on the Arabian Sea",

        category: "water-sports",
        destination: "dubai",
        location: "Dubai Marina",

        rating: 4.6,
        reviewCount: 690,

        durationOptions: [
            { label: "30 Minutes", minutes: 30, price: 300, originalPrice: 330, discountPercent: 6 },
            { label: "1 Hour", minutes: 60, price: 400, originalPrice: 450, discountPercent: 6 },
        ],

        images: [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/speed-boat/Red%20JetBoat-1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/speed-boat/Red%20JetBoat-2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/speed-boat/Red%20JetBoat-3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/speed-boat/Red%20JetBoat-4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/speed-boat/Red%20JetBoat-5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/speed-boat/Red%20JetBoat-6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/speed-boat/Red%20JetBoat-7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/speed-boat/Red%20JetBoat-8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/speed-boat/speedboat-1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/speed-boat/speedboat-2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/speed-boat/speedboat-3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/speed-boat/speedboat-4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/speed-boat/speedboat-5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/speed-boat/speedboat-6.webp",

        ],

        badges: ["Sightseeing"],

        overview:
            "Take a high-speed sightseeing tour while cruising past Dubai’s iconic landmarks on water.",

        highlights: [
            "High-speed coastal cruise",
            "Photo stops included",
            "Group & private options",
            "Safety equipment provided",
        ],

        whatToBring: ["Sunglasses", "Light jacket", "Sunscreen"],

        facilities: ["Seating Area", "Safety Gear", "Parking"],

        cancellationPolicy:
            "Cancel 24 hours in advance for a full refund.",

        confirmationHours: 24,
        mobileTicket: true,
        refundable: false,
        maxPeople: 5,
    },
    {
        id: "wakeboard-dubai",
        Supplier_Code: "LUXYHT",
        slug: "wakeboard-experience-dubai",
        title: "Wakeboard Experience",
        subtitle: "Surf, ski, and ride the waves with professional guidance",

        category: "water-sports",
        destination: "dubai",
        location: "Dubai Marina",

        rating: 4.6,
        reviewCount: 540,

        durationOptions: [
            { label: "30 Minutes", minutes: 30, price: 280, originalPrice: 350, discountPercent: 6 },
        ],

        images: [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/wakeboard/wakeboard-1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/wakeboard/wakeboard-2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/wakeboard/wakeboard-3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/wakeboard/wakeboard-4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/wakeboard/wakeboard-5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/wakeboard/wakeboard-6.webp",
        ],

        badges: ["Sporty"],

        overview:
            "Wakeboarding combines surfing, snowboarding, and water skiing for an exciting water sport adventure.",

        highlights: [
            "Beginner-friendly instructions",
            "High-quality wakeboard equipment",
            "Safe & supervised activity",
            "Skill progression possible",
        ],

        whatToBring: ["Swimwear", "Towel", "Water shoes (optional)"],

        facilities: ["Changing Rooms", "Lockers", "Showers"],

        cancellationPolicy:
            "Free cancellation up to 24 hours before the session.",

        confirmationHours: 24,
        mobileTicket: true,
        refundable: false,
    },

    /* ---------------------------------------------------
       DONUT BOAT RIDE
    --------------------------------------------------- */
    {
        id: "donut-boat-dubai",
        Supplier_Code: "LUXYHT",
        slug: "donut-boat-ride-dubai",
        title: "Donut Boat Ride ",
        subtitle: "Fun-filled water activity for friends and family",

        category: "water-sports",
        destination: "dubai",
        location: "Dubai Marina",

        rating: 4.6,
        reviewCount: 350,

        durationOptions: [
            { label: "30 Minutes", minutes: 30, price: 300, originalPrice: 350, discountPercent: 14 },
        ],

        images: [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/donut-boat/dount-boat-1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/donut-boat/dount-boat-2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/donut-boat/dount-boat-3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/donut-boat/dount-boat-4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/donut-boat/dount-boat-5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/donut-boat/dount-boat-6.webp",
        ],

        badges: ["Group Fun"],

        overview:
            "Hold on tight as you glide across the water on an inflatable donut-shaped tube being pulled by a high-speed boat. A thrilling experience perfect for groups!",

        highlights: [
            "Thrilling tube ride",
            "Safe for children & adults",
            "Life jackets provided",
            "Professional crew",
        ],

        whatToBring: ["Swimwear", "Towel", "Sunscreen"],

        facilities: ["Changing Rooms", "Lockers", "Showers"],

        cancellationPolicy:
            "Cancel up to 24 hours in advance for a full refund.",

        confirmationHours: 24,
        mobileTicket: true,
        refundable: true,
        maxPeople: 4,
    },

    /* ---------------------------------------------------
       PARASAILING ADVENTURE
    --------------------------------------------------- */
    {
        id: "parasailing-dubai",
        Supplier_Code: "LUXYHT",
        slug: "parasailing-adventure-dubai",
        title: "Parasailing Adventure",
        subtitle: "Soar high above the JBR beach and enjoy panoramic views",

        category: "water-sports",
        destination: "dubai",
        location: "JBR Beach",

        rating: 4.7,
        reviewCount: 890,

        durationOptions: [
            { label: "30 Minutes", minutes: 30, price: 250, originalPrice: 280, discountPercent: 10 },
        ],

        images: [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing/parasailing-1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing/parasailing-2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing/parasailing-3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing/parasailing-4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing/parasailing-5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing/parasailing-6.webp",
        ],

        badges: ["Sky High"],

        overview:
            "Experience the thrill of flying 150 meters above the Arabian Gulf while being towed by a boat. Enjoy breathtaking views of JBR, Dubai Marina, and Palm Jumeirah.",

        highlights: [
            "Fly up to 150m high",
            "Single, double, or triple flights",
            "Take off & land on the boat",
            "Spectacular aerial views",
        ],

        whatToBring: ["Passport or Emirates ID", "Comfortable Clothes", "Sunscreen"],

        facilities: ["Lockers", "Safety Gear", "Changing Rooms"],

        cancellationPolicy:
            "Cancel up to 24 hours in advance for a full refund.",

        confirmationHours: 24,
        mobileTicket: true,
        refundable: true,
    },
    {
        id: "parasailing-nemo-dubai",
        Supplier_Code: "NEMO",
        slug: "parasailing-dubai-nemo",
        title: "Parasailing Adventure",
        subtitle: "Soar 40–50 meters above the Arabian Gulf",

        category: "water-sports",
        destination: "dubai",
        location: "Umm Suqeim 2, Jumeirah Road",

        rating: 4.8,
        reviewCount: 0,

        durationOptions: [
            { label: "15 Minutes Flight", minutes: 15, price: 0 },
        ],

        images: [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing2/parasailing1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing2/parasailing11.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing2/parasailing2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing2/parasailing22.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing2/parasailing3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing2/parasailing4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing2/parasailing5.webp",
        ],

        badges: ["Sky Adventure"],

        overview:
            "Enjoy breathtaking aerial views of Dubai while parasailing high above the Arabian Gulf. Supervised by fully trained captain and instructor for maximum safety.",

        highlights: [
            "Fly 40–50 meters above water",
            "150m rope length",
            "Professional captain & instructor",
            "Locker & changing room facilities",
        ],

        whatToBring: [
            "Original Emirates ID or Passport",
            "Comfortable clothes",
            "Sunscreen",
        ],

        facilities: [
            "Lockers",
            "Changing Rooms",
            "Instructor",
            "Life Jackets",
        ],

        cancellationPolicy:
            "Cancel 24 hours before activity for full refund. Late cancellations and no-shows are non-refundable.",

        confirmationHours: 24,
        mobileTicket: true,
        refundable: true,
    },
    {
        id: "jet-ski-30-nemo",
        Supplier_Code: "NEMST",
        slug: "30-min-jet-ski-burj-al-arab-nemo",
        title: "Jet Ski Tour - Burj Al Arab",
        subtitle: "Guided tour to Dubai’s iconic 7-star hotel",

        category: "water-sports",
        destination: "dubai",
        location: "Umm Suqeim 2, Jumeirah Road",

        rating: 4.9,
        reviewCount: 0,

        durationOptions: [
            { label: "30 Minutes", minutes: 30, price: 280, originalPrice: 300, discountPercent: 7 },
            { label: "60 Minutes", minutes: 60, price: 450, originalPrice: 500, discountPercent: 10 },
        ],

        images: [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski2/jet-ski1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski2/jet-ski2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski2/jet-ski3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski2/jet-ski4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski2/jet-ski5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski2/jet-ski6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski2/jet-ski7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski2/jet-ski8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/jet-ski2/jet-ski9.webp",
        ],

        badges: ["Guided Tour"],

        overview:
            "Ride your jet ski from the marina to the iconic Burj Al Arab with a professional instructor guiding the group. Includes photo opportunities at the landmark.",

        highlights: [
            "Burj Al Arab photo stop",
            "Guided group tour",
            "Up to 2 riders per jet ski",
            "Complimentary photos & videos",
        ],

        whatToBring: [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Towel",
        ],

        facilities: [
            "Changing Rooms",
            "Lockers",
            "Life Jackets",
            "Instructor",
        ],

        cancellationPolicy:
            "Cancel 24 hours before activity for full refund. Late cancellations and no-shows are non-refundable.",

        confirmationHours: 24,
        mobileTicket: true,
        refundable: true,
        maxPeople: 2,
    },
    {
        id: "tubing-nemo-dubai",
        Supplier_Code: "NEMST",
        slug: "tubing-dubai-nemo",
        title: "Tubing Experience ",
        subtitle: "High-speed inflatable sofa ride on the sea",

        category: "water-sports",
        destination: "dubai",
        location: "Umm Suqeim 2, Jumeirah Road",

        rating: 4.7,
        reviewCount: 0,

        durationOptions: [
            { label: "30 Minutes", minutes: 30, price: 550, originalPrice: 600, discountPercent: 8 },
        ],

        images: ["https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Tubing/Tubing.webp"],

        badges: ["Group Fun"],

        overview:
            "Ride a sofa-shaped inflatable tube pulled by a high-speed boat while enjoying the scenic Dubai coastline in an exciting way.",

        highlights: [
            "Up to 4 people per tube",
            "Private session only",
            "High-speed thrill ride",
            "Instructor supervised",
        ],

        whatToBring: [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Towel",
        ],

        facilities: [
            "Changing Rooms",
            "Lockers",
            "Instructor",
            "Life Jackets",
        ],

        cancellationPolicy:
            "Cancel 24 hours before activity for full refund.",

        confirmationHours: 24,
        mobileTicket: true,
        refundable: true,
        maxPeople: 4,
    },
    {
        id: "wakeboard-nemo-dubai",
        Supplier_Code: "NEMST",
        slug: "wakeboard-dubai-nemo",
        title: "Wakeboard Experience ",
        subtitle: "Extreme water sport near Burj Al Arab",

        category: "water-sports",
        destination: "dubai",
        location: "Umm Suqeim 2, Jumeirah Road",

        rating: 4.7,
        reviewCount: 0,

        durationOptions: [
            { label: "30 Minutes", minutes: 30, price: 500, originalPrice: 550, discountPercent: 9 },
        ],

        images: [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/wakeboard2/wakeboard1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/wakeboard2/wakeboard2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/wakeboard2/wakeboard3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/wakeboard2/wakeboard4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/wakeboard2/wakeboard5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/wakeboard2/wakeboard6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/wakeboard2/wakeboard7.webp",
        ],

        badges: ["Extreme Sport"],

        overview:
            "Ride behind a speedboat at 50 km/h and experience the thrill of wakeboarding near Burj Al Arab. Suitable for beginners and experienced riders.",

        highlights: [
            "50 KM/H towing speed",
            "Beginner-friendly",
            "Instructor supervised",
            "Photo opportunities",
        ],

        whatToBring: [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Towel",
        ],

        facilities: [
            "Changing Rooms",
            "Lockers",
            "Instructor",
            "Life Jackets",
        ],

        cancellationPolicy:
            "Cancel 24 hours before activity for full refund.",

        confirmationHours: 24,
        mobileTicket: true,
        refundable: true,
    },
    {
        id: "flyboard-nemo-dubai",
        Supplier_Code: "NEMST",
        slug: "flyboard-dubai-nemo",
        title: "Flyboard ",
        subtitle: "Adrenaline-packed hover experience over water",

        category: "water-sports",
        destination: "dubai",
        location: "Umm Suqeim 2, Jumeirah Road",

        rating: 4.8,
        reviewCount: 0,

        durationOptions: [
            { label: "30 Minutes", minutes: 30, price: 320, originalPrice: 350, discountPercent: 8 },
        ],

        images: [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/flyboard2/FlyBoard2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/flyboard2/FlyBoard3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/flyboard2/FlyBoard5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/flyboard2/FlyBoard6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/flyboard2/FlyBoard7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/flyboard2/FlyBoard8.webp",
        ],

        badges: ["Adrenaline"],

        overview:
            "Experience flyboarding 50 meters from the beach with professional instruction. Hover, dive, and enjoy a thrilling water-powered adventure.",

        highlights: [
            "Beginner-friendly",
            "Minimum weight 45kg",
            "Instructor supervised",
            "Photo opportunities",
        ],

        whatToBring: [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Towel",
        ],

        facilities: [
            "Changing Rooms",
            "Lockers",
            "Instructor",
            "Life Jackets",
        ],

        cancellationPolicy:
            "Cancel 24 hours before activity for full refund.",

        confirmationHours: 24,
        mobileTicket: true,
        refundable: true,
    },

];


