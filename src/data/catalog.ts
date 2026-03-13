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
        Supplier_Code: "DOJOIN",
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
        Supplier_Code: "DOJOIN",
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
        Supplier_Code: "DOJOIN",
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
        Supplier_Code: "DOJOIN",
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
        Supplier_Code: "DOJOIN",
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
        Supplier_Code: "DOJOIN",
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
        Supplier_Code: "DOJOIN",
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
        Supplier_Code: "DOJOIN",
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
        Supplier_Code: "NEMST",
        slug: "parasailing-dubai-nemo",
        title: "Parasailing Adventure",
        subtitle: "Soar 40–50 meters above the Arabian Gulf",

        category: "water-sports",
        destination: "dubai",
        location: "Umm Suqeim 2, Jumeirah Road",

        rating: 4.8,
        reviewCount: 0,

        durationOptions: [
            { label: "15 Minutes", minutes: 15, price: 380, originalPrice: 400, discountPercent: 5 },
        ],

        images: [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing2/parasailing3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing2/parasailing1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing2/parasailing11.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing2/parasailing2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/parasailing2/parasailing22.webp",
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
        maxPeople: 2,
    },
    {
        id: "parasailing-nemo-dubai",
        Supplier_Code: "NEMST",
        slug: "parasailing-dubai-nemo",
        title: "Parasailing Adventure",
        subtitle: "Soar 40–50 meters above the Arabian Gulf",

        category: "water-sports",
        destination: "dubai",
        location: "Umm Suqeim 2, Jumeirah Road",

        rating: 4.8,
        reviewCount: 150,

        durationOptions: [
            { label: "15 Minutes", minutes: 15, price: 650, originalPrice: 700, discountPercent: 5 },
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
    {
        id: "seabob-dubai-dojoin",
        Supplier_Code: "DOJOIN",
        slug: "renting-seabob-dubai",
        title: "Renting SeaBob In Dubai",
        subtitle: "Rent and get it delivered to your location",

        category: "water-sports",
        destination: "dubai",
        location: "Al Nahda Park, Dubai",

        rating: 5.0,
        reviewCount: 1,

        durationOptions: [
            { label: "1 Hour", minutes: 60, price: 500, originalPrice: 600, discountPercent: 17 },
        ],

        images: [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Renting%20SeaBob/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Renting%20SeaBob/2.jpeg",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Renting%20SeaBob/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Renting%20SeaBob/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Renting%20SeaBob/5.webp",
        ],

        badges: ["Luxury"],

        overview:
            "If you want to have the ultimate water sports, now DoJoin is renting SeaBob in Dubai for one hour. Wherever you want to experience a great sea activity and see the underwater world, just make a phone call, and the DoJoin team will deliver SeaBob to you. Along with our Seabob, you can have a safety life jacket. You should order your rental Seabob at least 12 hours before delivery, but in emergencies, we also accept last-minute orders.",

        highlights: [
            "A thrilling underwater and surface riding experience",
            "Perfect for explorers, adventure lovers, and anyone curious about the sea.",
            "Cruise on the surface or dive below with full control of your SeaBob unit, ideal for both beginners and experienced riders.",
            "Enjoy a 1-hour rental with delivery directly to your location without any need to transportation",
            "Your rental includes safety gear (life jackets) for a secure and comfortable ride.",
        ],

        whatToBring: [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Towel",
        ],

        facilities: [
            "Life Jacket",
            "Delivery Service",
        ],

        cancellationPolicy:
            "Cancel 24 hours before activity for full refund.",

        confirmationHours: 24,
        mobileTicket: true,
        refundable: true,
    },
    {
        "id": "deep-dive-dubai-sunken-city-walk",
        "Supplier_Code": "DOJOIN",
        "slug": "deep-dive-dubai-sunken-city-walk-experience",
        "title": "Deep Dive Dubai Sunken City Walk Experience",
        "subtitle": "Underwater walking adventure in the world’s deepest pool",

        "category": "water-sports",
        "destination": "dubai",
        "location": "Deep Dive Dubai, Nad Al Sheba",

        "rating": 0,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Standard Experience",
                "minutes": 30,
                "price": 600,
                "originalPrice": 600,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Sunken%20City%20Walk/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Sunken%20City%20Walk/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Sunken%20City%20Walk/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Sunken%20City%20Walk/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Sunken%20City%20Walk/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Sunken%20City%20Walk/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Sunken%20City%20Walk/7.webp",
        ],

        "badges": ["Luxury"],

        "overview": "The Sunken City Walk at Deep Dive Dubai is a fun and easy way to experience the magic of being underwater — no swimming skills or certification required. In just 30 minutes, you'll gear up and step onto a balcony-style platform 4 meters below the surface, where expert guides will help you explore a unique underwater world. Whether you're taking in the views, posing with a vintage motorcycle, flipping a parking meter, or sitting at a coffee table, this immersive experience offers unforgettable moments beneath the surface.",

        "highlights": [
            "No swimming skills required",
            "Guided underwater walk",
            "Explore the sunken city",
            "Unique underwater photo opportunities"
        ],

        "whatToBring": [
            "Original Emirates ID or Passport",
            "Comfortable swimwear",
            "Towel"
        ],

        "facilities": [
            "Professional Instructor",
            "Safety Equipment",
            "Changing Rooms",
            "Lockers"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "palm-jumeirah-splish-splash-inflatable-park",
        "Supplier_Code": "DOJOIN",
        "slug": "palm-jumeirah-splish-splash-inflatable-park",
        "title": "Palm Jumeirah Splish Splash Inflatable Park",
        "subtitle": "Fun-filled floating water park adventure for all ages",

        "category": "water-sports",
        "destination": "dubai",
        "location": "Palm Jumeirah, Dubai",

        "rating": 0,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Standard Entry",
                "minutes": 60,
                "price": 150,
                "originalPrice": 150,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Splish%20Splash%20Inflatable%20Park/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Splish%20Splash%20Inflatable%20Park/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Splish%20Splash%20Inflatable%20Park/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Splish%20Splash%20Inflatable%20Park/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Splish%20Splash%20Inflatable%20Park/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Splish%20Splash%20Inflatable%20Park/6.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Seawake Water Sports Inflatable Park is more than just a water attraction; it's a paradise where memories are made. Laughter is shared, and the allure of the ocean's depths is brought to life. Come join us and experience the magic of this aquatic haven, where every moment is an opportunity to create cherished memories and embark on an aquatic adventure like no other. Dive in, let your cares float away, and make a splash at Seawake Water Sports Inflatable Park.",

        "highlights": [
            "Exciting inflatable water park",
            "Family-friendly activity",
            "Perfect for groups and kids",
            "Safe and supervised environment"
        ],

        "whatToBring": [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Towel"
        ],

        "facilities": [
            "Life Jackets",
            "Safety Staff",
            "Changing Rooms",
            "Lockers"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "palm-jumeirah-flyfish-ride",
        "Supplier_Code": "DOJOIN",
        "slug": "palm-jumeirah-flyfish-ride",
        "title": "Palm Jumeirah Flyfish Ride",
        "subtitle": "Seawake Water Sports",

        "category": "water-sports",
        "destination": "dubai",
        "location": "Palm Jumeirah, Dubai",

        "rating": 0,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Standard Ride",
                "minutes": 15,
                "price": 200,
                "originalPrice": 200,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Flyfish%20Ride/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Flyfish%20Ride/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Flyfish%20Ride/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Flyfish%20Ride/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Flyfish%20Ride/5.webp",
        ],

        "badges": [
            "Luxury"
        ],

        "overview": "Get ready for an exhilarating adventure like no other as you hop on board the thrilling Flyfish! It's not just a water sled; it's an aerial inflatable water sled that's towed by a powerful boat. As you hold on tight, you'll experience the rush of high speeds that the Flyfish can achieve, and here's the twist: these incredible speeds cause this wide watercraft to literally take flight!",

        "highlights": [
            "High-speed inflatable ride",
            "Towed by powerful speedboat",
            "Adrenaline-filled water activity",
            "Perfect for thrill seekers"
        ],

        "whatToBring": [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Towel"
        ],

        "facilities": [
            "Life Jackets",
            "Professional Staff",
            "Safety Briefing"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "fujairah-snorkeling-adventure",
        "Supplier_Code": "DOJOIN",
        "slug": "fujairah-snorkeling-adventure",
        "title": "Fujairah Snorkeling Adventure",
        "subtitle": "Seawake Water Sports",

        "category": "water-sports",
        "destination": "fujairah",
        "location": "Snoopy Island, Fujairah",

        "rating": 0,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Standard Experience",
                "minutes": 120,
                "price": 350,
                "originalPrice": 350,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Snorkeling%20Experience/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Snorkeling%20Experience/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Snorkeling%20Experience/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Snorkeling%20Experience/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Snorkeling%20Experience/5.webp",
        ],

        "badges": [
            "Luxury"
        ],

        "overview": "Fujairah is one of the parts of the UAE that still needs to be correctly discovered by many tourists. The underwater world of Fujairah is so pristine that many tourists consider it one of the best areas for snorkeling. Now we at Dojoin have decided to provide conditions in cooperation with Sea Wake entertainment company so that you can experience snorkeling in the best way in the waters of Fujairah. Fujairah Snorkeling Adventure gives you the opportunity to swim and explore vibrant marine life in crystal-clear waters.",

        "highlights": [
            "Snorkel in pristine Fujairah waters",
            "Explore vibrant marine life",
            "Guided snorkeling experience",
            "Suitable for beginners"
        ],

        "whatToBring": [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Towel",
            "Sunscreen"
        ],

        "facilities": [
            "Snorkeling Gear",
            "Professional Guide",
            "Life Jackets",
            "Boat Support"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "cha-cha-boats-rental",
        "Supplier_Code": "DOJOIN",
        "slug": "cha-cha-boats-rental",
        "title": "Cha Cha Boats Rental",
        "subtitle": "Luxury modern gozzo boat experience in Dubai waters",

        "category": "water-adventures",
        "destination": "dubai",
        "location": "Dubai Creek, Dubai",

        "rating": 0,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "1 Hour",
                "minutes": 60,
                "price": 400,
                "originalPrice": 459,
                "discountPercent": 13
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Cha%20Cha%20Boats%20Rental/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Cha%20Cha%20Boats%20Rental/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Cha%20Cha%20Boats%20Rental/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Cha%20Cha%20Boats%20Rental/4.webp",
        ],

        "badges": [
            "Luxury"
        ],

        "overview": "Explore Dubai's waterways in style aboard our modern gozzos, seamlessly blending cityscapes with cultural heritage. Indulge in leisure on water or step ashore for immersive experiences, all while enjoying the freedom and opulence our gozzos offer. Book now for a Dubai odyssey like no other! Ready to make a splash? Embrace the thrill of water adventure with Cha Cha Boats — where the sea meets unforgettable experiences! Book your voyage now and dive into luxury on the water.",

        "highlights": [
            "Luxury modern gozzo boat",
            "Scenic Dubai water cruise",
            "Private and comfortable ride",
            "Perfect for couples and groups"
        ],

        "whatToBring": [
            "Original Emirates ID or Passport",
            "Sunglasses",
            "Camera"
        ],

        "facilities": [
            "Professional Captain",
            "Comfortable Seating",
            "Safety Equipment",
            "Life Jackets"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "deep-dive-dubai-snorkeling-experience",
        "Supplier_Code": "DOJOIN",
        "slug": "deep-dive-dubai-snorkeling-experience",
        "title": "Deep Dive Dubai Snorkeling Experience",
        "subtitle": "Explore the world's deepest pool snorkeling adventure",

        "category": "water-sports",
        "destination": "dubai",
        "location": "Deep Dive Dubai, Nad Al Sheba",

        "rating": 5.0,
        "reviewCount": 2,

        "durationOptions": [
            {
                "label": "Standard Experience",
                "minutes": 60,
                "price": 400,
                "originalPrice": 400,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Deep%20Dive%20Dubai%20Snorkeling%20Experience/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Deep%20Dive%20Dubai%20Snorkeling%20Experience/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Deep%20Dive%20Dubai%20Snorkeling%20Experience/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Deep%20Dive%20Dubai%20Snorkeling%20Experience/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Deep%20Dive%20Dubai%20Snorkeling%20Experience/5.webp",
        ],

        "badges": [
            "Luxury"
        ],

        "overview": "An exciting new world of opportunities is accessible to thrill seekers at Deep Dive Dubai. Everyone can explore an underwater world full of adventure and wonder thanks to the world's deepest pool, which is 60 meters deep. Deep Dive Dubai's 1,500 square meter facility is situated in the Nad Al Sheba district of Dubai and offers the most cutting-edge equipment for filming, as well as an amazing 'sunken city' for divers to explore.",

        "highlights": [
            "Snorkel in the world's deepest pool",
            "Explore the unique sunken city",
            "State-of-the-art diving facility",
            "Suitable for beginners"
        ],

        "whatToBring": [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Towel"
        ],

        "facilities": [
            "Professional Instructor",
            "Snorkeling Gear",
            "Changing Rooms",
            "Lockers"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "jumeirah-3-jet-car-rentals",
        "Supplier_Code": "DOJOIN",
        "slug": "jumeirah-3-jet-car-rentals",
        "title": "Jumeirah 3 Jet Car Rentals",
        "subtitle": "Luxury jet car driving experience on Dubai waters",

        "category": "water-sports",
        "destination": "dubai",
        "location": "Jumeirah 3, Umm Suqeim Beach, Dubai",

        "rating": 4.5,
        "reviewCount": 2,

        "durationOptions": [
            {
                "label": "20 Minutes",
                "minutes": 20,
                "price": 499,
                "originalPrice": 499,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Jumeirah%203%20Jet%20Car%20Rentals/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Jumeirah%203%20Jet%20Car%20Rentals/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Jumeirah%203%20Jet%20Car%20Rentals/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Jumeirah%203%20Jet%20Car%20Rentals/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Jumeirah%203%20Jet%20Car%20Rentals/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "If you are looking for a memorable experience in Dubai, you may want to consider renting a jet car. With a jet car, you can explore the city in a way that is both thrilling and unique. Whether you want to drive alone or share the experience with friends or family, there are options available. One of the main advantages of renting a jet car in Dubai is that you can experience driving a luxury car on water for a truly unforgettable adventure.",

        "highlights": [
            "Drive a luxury jet car on water",
            "Unique high-speed water experience",
            "Perfect for thrill seekers",
            "Great for friends and families"
        ],

        "whatToBring": [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Sunglasses"
        ],

        "facilities": [
            "Life Jackets",
            "Safety Briefing",
            "Professional Staff"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "deep-dive-dubai-scuba-dive-experience",
        "Supplier_Code": "DOJOIN",
        "slug": "deep-dive-dubai-scuba-dive-experience",
        "title": "Deep Dive Dubai Scuba Dive Experience",
        "subtitle": "Diving inside the world's deepest pool",

        "category": "water-sports",
        "destination": "dubai",
        "location": "Deep Dive Dubai, Nad Al Sheba",

        "rating": 0,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Standard Experience",
                "minutes": 60,
                "price": 1800,
                "originalPrice": 1800,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Scuba%20Dive%20Experience/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Scuba%20Dive%20Experience/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Scuba%20Dive%20Experience/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Scuba%20Dive%20Experience/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Scuba%20Dive%20Experience/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Scuba%20Dive%20Experience/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Scuba%20Dive%20Experience/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Scuba%20Dive%20Experience/8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Scuba%20Dive%20Experience/9.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Deep Dive Dubai is the ultimate destination for adventure seekers ready to explore the world's deepest pool. Located within the NAS Sports Complex, this record-breaking facility invites you to dive into an incredible underwater experience. Whether you're a beginner or just curious, you'll be guided by professional instructors who will walk you through everything you need to know — no prior experience required.",

        "highlights": [
            "Dive in the world's deepest pool",
            "Explore the unique sunken city",
            "Professional instructor guidance",
            "Suitable for beginners"
        ],

        "whatToBring": [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Towel"
        ],

        "facilities": [
            "Professional Instructor",
            "Scuba Equipment",
            "Changing Rooms",
            "Lockers"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "marina-love-boats",
        "Supplier_Code": "DOJOIN",
        "slug": "marina-love-boats",
        "title": "Marina Love Boats",
        "subtitle": "Exciting Dubai Marina speed boat sightseeing experience",

        "category": "water-adventures",
        "destination": "dubai",
        "location": "Dubai Marina, Dubai",

        "rating": 4.8,
        "reviewCount": 8,

        "durationOptions": [
            {
                "label": "Standard Experience",
                "minutes": 60,
                "price": 99,
                "originalPrice": 150,
                "discountPercent": 34
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Marina%20Love%20Boats/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Marina%20Love%20Boats/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Marina%20Love%20Boats/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Marina%20Love%20Boats/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Marina%20Love%20Boats/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "This amazing journey, which starts from Dubai Marina, will provide a chance to see Palm Jumeirah, Atlantis, and Burj Al Arab. These boats may not be the most luxurious offers in the market; however, they will provide you with the opportunity to see all the best parts of the city. This company offers you four distinct ways to visit different parts of the city.",

        "highlights": [
            "Speed boat sightseeing tour",
            "Views of Palm Jumeirah and Atlantis",
            "See Burj Al Arab from the water",
            "Fun group boat experience"
        ],

        "whatToBring": [
            "Original Emirates ID or Passport",
            "Sunglasses",
            "Camera"
        ],

        "facilities": [
            "Professional Captain",
            "Life Jackets",
            "Safety Briefing",
            "Comfortable Seating"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "luxury-dibba-fujairah-yacht-escape",
        "Supplier_Code": "DOJOIN",
        "slug": "luxury-dibba-fujairah-yacht-escape",
        "title": "Luxury Dibba Fujairah Yacht Escape",
        "subtitle": "A premium 5-hour yacht experience filled with adventure, relaxation, and unforgettable coastal moments.",

        "category": "water-adventures",
        "destination": "fujairah",
        "location": "Dibba, Fujairah",

        "rating": 0,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "5 Hours",
                "minutes": 300,
                "price": 169,
                "originalPrice": 169,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Luxury%20Dibba%20Fujeirah%20Yacht%20Escape/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Luxury%20Dibba%20Fujeirah%20Yacht%20Escape/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Luxury%20Dibba%20Fujeirah%20Yacht%20Escape/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Luxury%20Dibba%20Fujeirah%20Yacht%20Escape/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Luxury%20Dibba%20Fujeirah%20Yacht%20Escape/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Luxury%20Dibba%20Fujeirah%20Yacht%20Escape/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Luxury%20Dibba%20Fujeirah%20Yacht%20Escape/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Luxury%20Dibba%20Fujeirah%20Yacht%20Escape/8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Luxury%20Dibba%20Fujeirah%20Yacht%20Escape/9.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Luxury%20Dibba%20Fujeirah%20Yacht%20Escape/10.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "All great moments begin by the sea and this luxury yacht experience in Dibba, Fujairah is crafted to create memories that last a lifetime. Sail across breathtaking waters surrounded by rugged mountain views while enjoying top-tier hospitality, delicious cuisine, and a complete range of exciting water activities. Whether you're celebrating a birthday, gathering with friends, enjoying a corporate outing, or simply taking a day off, this premium yacht escape promises relaxation and adventure in equal measure.",

        "highlights": [
            "Premium 5-hour yacht cruise",
            "Scenic Dibba Fujairah coastline",
            "Water activities and swimming",
            "Ideal for groups and celebrations"
        ],

        "whatToBring": [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Sunscreen",
            "Towel"
        ],

        "facilities": [
            "Professional Crew",
            "Life Jackets",
            "Comfortable Seating",
            "Onboard Amenities"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "palm-jumeirah-stand-up-paddle",
        "Supplier_Code": "DOJOIN",
        "slug": "palm-jumeirah-stand-up-paddle",
        "title": "Palm Jumeirah Stand Up Paddle",
        "subtitle": "Hydro Water Sports",

        "category": "water-sports",
        "destination": "dubai",
        "location": "Palm Jumeirah, Dubai",

        "rating": 0,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Standard Experience",
                "minutes": 60,
                "price": 99,
                "originalPrice": 198,
                "discountPercent": 50
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Palm%20Jumeirah%20Stand%20Up%20Paddle/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Palm%20Jumeirah%20Stand%20Up%20Paddle/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Palm%20Jumeirah%20Stand%20Up%20Paddle/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Palm%20Jumeirah%20Stand%20Up%20Paddle/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Palm%20Jumeirah%20Stand%20Up%20Paddle/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Picture yourself gliding effortlessly across the glassy surface of pristine waters, the world around you painted in the soft hues of a rising sun or the gentle glow of a setting one. As you stand tall on your paddleboard, you become one with the tranquil rhythm of the water, feeling the gentle sway beneath your feet and basking in the serenity that only stand-up paddleboarding can offer. Our boards are your magic carpets to explore hidden coves and winding waterways.",

        "highlights": [
            "Relaxing stand-up paddle experience",
            "Scenic Palm Jumeirah waters",
            "Suitable for beginners",
            "Great solo or group activity"
        ],

        "whatToBring": [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Sunscreen",
            "Towel"
        ],

        "facilities": [
            "Paddle Board",
            "Life Jacket",
            "Safety Briefing",
            "Professional Staff"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "jbr-stand-up-paddle-board",
        "Supplier_Code": "DOJOIN",
        "slug": "jbr-stand-up-paddle-board",
        "title": "JBR Stand Up Paddle Board",
        "subtitle": "Stand-up paddleboarding experience at JBR Beach",

        "category": "water-sports",
        "destination": "dubai",
        "location": "JBR Beach, Dubai",

        "rating": 0,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "60 Minutes",
                "minutes": 60,
                "price": 100,
                "originalPrice": 100,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/JBR%20Stand%20Up%20Paddle%20Board/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/JBR%20Stand%20Up%20Paddle%20Board/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/JBR%20Stand%20Up%20Paddle%20Board/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/JBR%20Stand%20Up%20Paddle%20Board/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/JBR%20Stand%20Up%20Paddle%20Board/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/JBR%20Stand%20Up%20Paddle%20Board/6.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Stand up paddle boarding (SUP) is the ultimate way to experience the beauty of the great outdoors while also getting an incredible full-body workout. Imagine gliding along the crystal-clear water with the wind in your hair, the sun on your skin, and the peaceful sound of water lapping against your board. Stand up paddle boarding is the perfect activity for anyone who loves adventure, relaxation, and the great outdoors.",

        "highlights": [
            "Full-body paddleboarding workout",
            "Scenic JBR Beach experience",
            "Suitable for beginners",
            "Relaxing water activity"
        ],

        "whatToBring": [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Sunscreen",
            "Towel"
        ],

        "facilities": [
            "Paddle Board",
            "Life Jacket",
            "Safety Briefing",
            "Professional Staff"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-harbour-signature-boat-tour",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-harbour-signature-boat-tour",
        "title": "Dubai Harbour Signature Boat Tour",
        "subtitle": "Self-drive inflatable boat adventure in Dubai waters",

        "category": "water-adventures",
        "destination": "dubai",
        "location": "Dubai Harbour, Dubai",

        "rating": 0,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Standard Tour",
                "minutes": 60,
                "price": 695,
                "originalPrice": 695,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Dubai%20Harbour%20Signature%20Boat%20Tour/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Dubai%20Harbour%20Signature%20Boat%20Tour/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Dubai%20Harbour%20Signature%20Boat%20Tour/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Dubai%20Harbour%20Signature%20Boat%20Tour/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Dubai%20Harbour%20Signature%20Boat%20Tour/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Dubai%20Harbour%20Signature%20Boat%20Tour/6.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Have you ever imagined riding an inflatable boat with your loved ones? Undoubtedly, driving a boat on the blue shores of the Arabian Gulf is one of the entertainments that not only you but many tourists who have traveled to Dubai have not had such a special experience yet. Dubai Harbour Signature Boat Tour is a one-time opportunity where you can ride on inflatable boats without any guide and enjoy a unique new entertainer in Dubai.",

        "highlights": [
            "Self-drive inflatable boat experience",
            "Cruise along Dubai Harbour waters",
            "Perfect for couples and families",
            "Unique sightseeing adventure"
        ],

        "whatToBring": [
            "Original Emirates ID or Passport",
            "Sunglasses",
            "Camera"
        ],

        "facilities": [
            "Safety Briefing",
            "Life Jackets",
            "Professional Support Staff"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "escape-to-musandam",
        "Supplier_Code": "DOJOIN",
        "slug": "escape-to-musandam",
        "title": "Escape to Musandam",
        "subtitle": "Scenic Musandam coastal cruise and adventure experience",

        "category": "water-adventures",
        "destination": "musandam",
        "location": "Musandam, Oman",

        "rating": 4.6,
        "reviewCount": 105,

        "durationOptions": [
            {
                "label": "Standard Experience",
                "minutes": 600,
                "price": 195,
                "originalPrice": 195,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Escape%20to%20Musandam/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Escape%20to%20Musandam/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Escape%20to%20Musandam/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Escape%20to%20Musandam/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "All the parts around the Arabian Gulf are unique places to spend free time. But when we speak of Musandam, it is a piece of heaven where you can find all the interesting watery activities all at once. This heaven is placed inside the borders of Oman, and whoever wants to escape from crowded metropolises can choose it as an ideal place. Whether you want to experience the ski jet or see wild dolphins in the water, Musandam is what you are looking for.",

        "highlights": [
            "Scenic Musandam dhow cruise",
            "Crystal-clear waters and mountains",
            "Chance to spot dolphins",
            "Perfect day escape from the city"
        ],

        "whatToBring": [
            "Original Passport",
            "Swimwear",
            "Sunscreen",
            "Towel"
        ],

        "facilities": [
            "Traditional Dhow Boat",
            "Life Jackets",
            "Professional Crew",
            "Onboard Refreshments"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "palm-jumeirah-kayak-experience",
        "Supplier_Code": "DOJOIN",
        "slug": "palm-jumeirah-kayak-experience",
        "title": "Palm Jumeirah Kayak Experience",
        "subtitle": "Hydro Water Sports",

        "category": "water-sports",
        "destination": "dubai",
        "location": "Palm Jumeirah, Dubai",

        "rating": 5.0,
        "reviewCount": 2,

        "durationOptions": [
            {
                "label": "Standard Experience",
                "minutes": 60,
                "price": 99,
                "originalPrice": 198,
                "discountPercent": 50
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Palm%20Jumeirah%20Kayak%20Experience/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Palm%20Jumeirah%20Kayak%20Experience/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Palm%20Jumeirah%20Kayak%20Experience/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Palm%20Jumeirah%20Kayak%20Experience/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Palm%20Jumeirah%20Kayak%20Experience/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Imagine the excitement of Olympic-style paddling, where a solo or duo of paddlers navigates the challenging river. Now, in Dubai, you can have a similar experience, but with a twist—it's not a competition; it's pure entertainment. Thanks to the inventive concept from Hydro Water Sports Corporation, you can paddle single or double kayaks on the Arabian Gulf and bask in the radiant sun. Picture yourself paddling around Palm Jumeirah with the stunning skyline as your backdrop.",

        "highlights": [
            "Single or double kayak options",
            "Scenic Palm Jumeirah views",
            "Beginner-friendly activity",
            "Great outdoor water workout"
        ],

        "whatToBring": [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Sunscreen",
            "Towel"
        ],

        "facilities": [
            "Kayak Equipment",
            "Life Jacket",
            "Safety Briefing",
            "Professional Staff"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "jumeirah-3-bermuda-scuba-diving",
        "Supplier_Code": "DOJOIN",
        "slug": "jumeirah-3-bermuda-scuba-diving",
        "title": "Jumeirah 3 Bermuda Scuba Diving",
        "subtitle": "Try Scuba Diving in Dubai",

        "category": "water-sports",
        "destination": "dubai",
        "location": "Jumeirah 3, Dubai",

        "rating": 4.7,
        "reviewCount": 6,

        "durationOptions": [
            {
                "label": "Standard Experience",
                "minutes": 60,
                "price": 284,
                "originalPrice": 356,
                "discountPercent": 20
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Jumeirah%203%20Bermuda%20Scuba%20Diving/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Jumeirah%203%20Bermuda%20Scuba%20Diving/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Jumeirah%203%20Bermuda%20Scuba%20Diving/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Jumeirah%203%20Bermuda%20Scuba%20Diving/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Water-Sports/Jumeirah%203%20Bermuda%20Scuba%20Diving/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Dubai is one of those places where visitors can enjoy all types of activities. While most inland entertainment is well-advertised, one specific place, Bermuda Diving Center, remains unknown, and it can allow you to see the city's underwater world. Bermuda Diving Center, established in 2017, is one of the rarest places to explore the deepest part of the Arabian Gulf and see its biodiversity. At Bermuda Diving Center, you may scuba dive and feed fish under professional supervision.",

        "highlights": [
            "Try scuba diving in Dubai waters",
            "Professional instructor guidance",
            "Explore Arabian Gulf marine life",
            "Suitable for beginners"
        ],

        "whatToBring": [
            "Original Emirates ID or Passport",
            "Swimwear",
            "Towel"
        ],

        "facilities": [
            "Scuba Equipment",
            "Professional Instructor",
            "Safety Briefing",
            "Changing Rooms"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "3d-blacklight-minigolf-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "3d-blacklight-minigolf-dubai",
        "title": "3D Blacklight Minigolf Dubai",
        "subtitle": "Immersive indoor glow-in-the-dark mini golf experience",

        "category": "attraction",
        "destination": "dubai",
        "location": "JBR, Dubai",

        "rating": 5.0,
        "reviewCount": 1,

        "durationOptions": [
            {
                "label": "Standard Entry",
                "minutes": 60,
                "price": 110,
                "originalPrice": 110,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/3D%20Blacklight%20Minigolf%20Dubai/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/3D%20Blacklight%20Minigolf%20Dubai/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/3D%20Blacklight%20Minigolf%20Dubai/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/3D%20Blacklight%20Minigolf%20Dubai/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/3D%20Blacklight%20Minigolf%20Dubai/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/3D%20Blacklight%20Minigolf%20Dubai/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/3D%20Blacklight%20Minigolf%20Dubai/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/3D%20Blacklight%20Minigolf%20Dubai/8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/3D%20Blacklight%20Minigolf%20Dubai/9.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Embark on a thrilling adventure as you step into a one-of-a-kind blacklight indoor minigolf experience. The floors, walls, and ceilings of the entire course come alive with vibrant and breathtaking artwork created by talented 3D artists. This immersive environment transforms a traditional mini golf game into a visually stunning adventure. Perfect for families, friends, and groups, the glowing course offers a fun and unique activity in the heart of Dubai where entertainment meets creativity.",

        "highlights": [
            "Glow-in-the-dark mini golf experience",
            "Immersive 3D hand-painted artwork throughout the course",
            "Family-friendly indoor attraction",
            "Perfect activity for friends, families, and groups"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Comfortable walking shoes",
            "Camera"
        ],

        "facilities": [
            "Indoor Mini Golf Course",
            "Glow Equipment",
            "Air Conditioned Venue"
        ],

        "cancellationPolicy": "Non-refundable.",

        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "burj-khalifa-dubai-aquarium",
        "Supplier_Code": "DOJOIN",
        "slug": "burj-khalifa-dubai-aquarium",
        "title": "Burj Khalifa + Dubai Aquarium",
        "subtitle": "Combo Offers",

        "category": "attraction",
        "destination": "dubai",
        "location": "Downtown Dubai",

        "rating": 4.8,
        "reviewCount": 21,

        "durationOptions": [
            {
                "label": "Combo Entry",
                "minutes": 180,
                "price": 378,
                "originalPrice": 378,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa%20+%20Dubai%20Aquarium/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa%20+%20Dubai%20Aquarium/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa%20+%20Dubai%20Aquarium/3.jpeg",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa%20+%20Dubai%20Aquarium/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa%20+%20Dubai%20Aquarium/5.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Enjoy two of Dubai’s most iconic attractions in one unforgettable combo ticket. Visit the observation decks of Burj Khalifa and explore the Dubai Aquarium, home to thousands of marine creatures and a stunning underwater tunnel experience.",

        "highlights": [
            "Access Burj Khalifa observation decks",
            "Explore Dubai Aquarium underwater tunnel",
            "Panoramic views of Dubai skyline",
            "Perfect combo attraction for visitors"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Comfortable walking shoes",
            "Camera"
        ],

        "facilities": [
            "Observation Deck",
            "Aquarium Tunnel",
            "Elevators",
            "Visitor Services"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-fountain-lake-ride",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-fountain-lake-ride",
        "title": "Dubai Fountain Lake Ride",
        "subtitle": "Traditional boat ride at Dubai Fountain",

        "category": "attraction",
        "destination": "dubai",
        "location": "Burj Lake, Downtown Dubai",

        "rating": 5.0,
        "reviewCount": 6,

        "durationOptions": [
            {
                "label": "Lake Ride",
                "minutes": 30,
                "price": 75,
                "originalPrice": 75,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Fountain%20Lake%20Ride/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Fountain%20Lake%20Ride/2.jpeg",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Fountain%20Lake%20Ride/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Fountain%20Lake%20Ride/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Fountain%20Lake%20Ride/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Fountain%20Lake%20Ride/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Fountain%20Lake%20Ride/7.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "The Dubai Fountain is a spectacular display of water, music, and light that should not be missed. Enjoy a unique experience with a traditional abra boat ride on Burj Lake and watch the iconic fountain show from the water.",

        "highlights": [
            "Traditional abra boat ride",
            "Up-close fountain show experience",
            "Unique perspective of Burj Lake",
            "Perfect evening activity"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Comfortable walking shoes",
            "Camera"
        ],

        "facilities": [
            "Boat Ride",
            "Life Jackets",
            "Professional Boat Operators"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-fountain-walk-bridge",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-fountain-walk-bridge",
        "title": "Dubai Fountain Walk Bridge",
        "subtitle": "Close-up view of the Dubai Fountain show",

        "category": "attraction",
        "destination": "dubai",
        "location": "Downtown Dubai",

        "rating": 4.6,
        "reviewCount": 57,

        "durationOptions": [
            {
                "label": "Walk Bridge Access",
                "minutes": 30,
                "price": 25,
                "originalPrice": 25,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Fountain%20Walk%20Bridge/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Fountain%20Walk%20Bridge/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Fountain%20Walk%20Bridge/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Fountain%20Walk%20Bridge/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Fountain%20Walk%20Bridge/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Fountain%20Walk%20Bridge/6.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Dubai Fountain Walk Bridge is a pedestrian platform that offers a close-up view of the iconic Dubai Fountain show. Located in Downtown Dubai near Burj Khalifa and Dubai Mall, it provides visitors with an unforgettable experience of the world’s largest choreographed fountain performance.",

        "highlights": [
            "Closest view of Dubai Fountain",
            "Great photo opportunity",
            "Short immersive experience",
            "Located near Burj Khalifa"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Comfortable walking shoes",
            "Camera"
        ],

        "facilities": [
            "Pedestrian Bridge",
            "Viewing Platform",
            "Security & Staff"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "lost-chambers-aquarium",
        "Supplier_Code": "DOJOIN",
        "slug": "lost-chambers-aquarium",
        "title": "The Lost Chambers Aquarium",
        "subtitle": "Explore the mythical ruins of Atlantis",

        "category": "attraction",
        "destination": "dubai",
        "location": "Atlantis The Palm, Dubai",

        "rating": 4.7,
        "reviewCount": 32,

        "durationOptions": [
            {
                "label": "Standard Entry",
                "minutes": 120,
                "price": 99,
                "originalPrice": 99,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Lost%20Chambers%20Aquarium/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Lost%20Chambers%20Aquarium/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Lost%20Chambers%20Aquarium/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Lost%20Chambers%20Aquarium/4.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Enjoy an amazing underwater adventure at The Lost Chambers Aquarium. Explore themed ruins inspired by Atlantis and discover thousands of marine animals in beautifully designed exhibits.",

        "highlights": [
            "Explore Atlantis-themed aquarium",
            "View thousands of marine animals",
            "Family-friendly attraction",
            "Great educational experience"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Camera",
            "Comfortable walking shoes"
        ],

        "facilities": [
            "Aquarium Exhibits",
            "Interactive Displays",
            "Visitor Services"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "qasr-al-watan",
        "Supplier_Code": "DOJOIN",
        "slug": "qasr-al-watan",
        "title": "Qasr Al Watan",
        "subtitle": "Presidential Palace Cultural Experience",

        "category": "attraction",
        "destination": "abu-dhabi",
        "location": "Abu Dhabi Presidential Palace",

        "rating": 4.9,
        "reviewCount": 19,

        "durationOptions": [
            {
                "label": "General Admission",
                "minutes": 120,
                "price": 65,
                "originalPrice": 65,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Qasr%20Al%20Watan/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Qasr%20Al%20Watan/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Qasr%20Al%20Watan/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Qasr%20Al%20Watan/4.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Qasr Al Watan is a working presidential palace in Abu Dhabi that invites visitors to explore the heritage, governance, and culture of the UAE through breathtaking architecture and exhibitions.",

        "highlights": [
            "Visit a working presidential palace",
            "Explore UAE history and governance",
            "Marvel at stunning Arabian architecture",
            "Cultural and educational attraction"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Camera",
            "Comfortable walking shoes"
        ],

        "facilities": [
            "Visitor Center",
            "Guided Tours",
            "Cultural Exhibitions"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "madame-tussauds-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "madame-tussauds-dubai",
        "title": "Madame Tussauds Dubai",
        "subtitle": "Have photos with famous faces",

        "category": "attraction",
        "destination": "dubai",
        "location": "Bluewaters Island, Dubai",

        "rating": 4.8,
        "reviewCount": 8,

        "durationOptions": [
            {
                "label": "Standard Entry",
                "minutes": 90,
                "price": 95,
                "originalPrice": 95,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Madame%20Tussauds%20Dubai/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Madame%20Tussauds%20Dubai/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Madame%20Tussauds%20Dubai/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Madame%20Tussauds%20Dubai/8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Madame%20Tussauds%20Dubai/9.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Madame%20Tussauds%20Dubai/10.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Madame%20Tussauds%20Dubai/11.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Madame%20Tussauds%20Dubai/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Madame%20Tussauds%20Dubai/12.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Madame%20Tussauds%20Dubai/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Madame%20Tussauds%20Dubai/13.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Madame%20Tussauds%20Dubai/14.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Madame%20Tussauds%20Dubai/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Madame%20Tussauds%20Dubai/2.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Madame Tussauds Dubai features lifelike wax figures of celebrities, athletes, world leaders, and cultural icons. Visitors can take photos and interact with these realistic exhibits.",

        "highlights": [
            "Meet lifelike celebrity wax figures",
            "Interactive photo opportunities",
            "Located on Bluewaters Island",
            "Fun attraction for families and friends"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Camera"
        ],

        "facilities": [
            "Wax Exhibits",
            "Photo Zones",
            "Air Conditioned Venue"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-aquarium-underwater-zoo",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-aquarium-underwater-zoo",
        "title": "Dubai Aquarium & Underwater Zoo",
        "subtitle": "Explore one of the world’s largest indoor aquariums",

        "category": "attraction",
        "destination": "dubai",
        "location": "Dubai Mall",

        "rating": 4.5,
        "reviewCount": 80,

        "durationOptions": [
            {
                "label": "Standard Entry",
                "minutes": 120,
                "price": 169,
                "originalPrice": 209,
                "discountPercent": 19
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Aquarium%20&%20Underwater%20Zoo/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Aquarium%20&%20Underwater%20Zoo/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Aquarium%20&%20Underwater%20Zoo/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Aquarium%20&%20Underwater%20Zoo/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Aquarium%20&%20Underwater%20Zoo/5.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Dubai Aquarium & Underwater Zoo is one of the largest indoor aquariums in the world. Located inside Dubai Mall, it houses thousands of marine animals including sharks, rays, and exotic species.",

        "highlights": [
            "Walk through underwater tunnel",
            "See thousands of marine creatures",
            "Educational exhibits for families",
            "Located inside Dubai Mall"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Camera",
            "Comfortable walking shoes"
        ],

        "facilities": [
            "Aquarium Tunnel",
            "Underwater Zoo",
            "Educational Displays"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "louvre-abu-dhabi",
        "Supplier_Code": "DOJOIN",
        "slug": "louvre-abu-dhabi",
        "title": "Louvre Abu Dhabi",
        "subtitle": "World-class art museum on Saadiyat Island",

        "category": "attraction",
        "destination": "abu-dhabi",
        "location": "Saadiyat Island, Abu Dhabi",

        "rating": 4.8,
        "reviewCount": 28,

        "durationOptions": [
            {
                "label": "General Admission",
                "minutes": 120,
                "price": 70,
                "originalPrice": 70,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Louvre%20Abu%20Dhabi/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Louvre%20Abu%20Dhabi/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Louvre%20Abu%20Dhabi/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Louvre%20Abu%20Dhabi/4.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Step inside the iconic Louvre Abu Dhabi, the first universal museum in the Arab world. Located in the Saadiyat Cultural District, it showcases masterpieces from ancient civilizations to contemporary works under its stunning architectural dome.",

        "highlights": [
            "Visit the famous Louvre Abu Dhabi museum",
            "Explore global art and cultural exhibits",
            "Unique architectural dome design",
            "Located in Saadiyat Cultural District"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Camera",
            "Comfortable walking shoes"
        ],

        "facilities": [
            "Art Galleries",
            "Visitor Center",
            "Gift Shop",
            "Restaurants & Cafes"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "national-aquarium-abu-dhabi",
        "Supplier_Code": "DOJOIN",
        "slug": "national-aquarium-abu-dhabi",
        "title": "The National Aquarium Abu Dhabi",
        "subtitle": "Largest aquarium in the Middle East",

        "category": "attraction",
        "destination": "abu-dhabi",
        "location": "Al Qana, Abu Dhabi",

        "rating": 4.5,
        "reviewCount": 21,

        "durationOptions": [
            {
                "label": "Standard Entry",
                "minutes": 120,
                "price": 90,
                "originalPrice": 99,
                "discountPercent": 9
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20National%20Aquarium%20Abu%20Dhabi/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20National%20Aquarium%20Abu%20Dhabi/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20National%20Aquarium%20Abu%20Dhabi/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20National%20Aquarium%20Abu%20Dhabi/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20National%20Aquarium%20Abu%20Dhabi/5.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Discover the underwater world at The National Aquarium Abu Dhabi, the largest aquarium in the Middle East. Located in Al Qana, the attraction features thousands of marine species across immersive themed zones.",

        "highlights": [
            "Largest aquarium in the Middle East",
            "Thousands of marine animals",
            "Immersive themed exhibits",
            "Family-friendly attraction"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Camera",
            "Comfortable walking shoes"
        ],

        "facilities": [
            "Aquarium Exhibits",
            "Educational Displays",
            "Interactive Experiences"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "museum-of-illusions-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "museum-of-illusions-dubai",
        "title": "Museum of Illusions",
        "subtitle": "Enter the world of fascinating illusions",

        "category": "attraction",
        "destination": "dubai",
        "location": "Al Seef, Dubai",

        "rating": 4.3,
        "reviewCount": 64,

        "durationOptions": [
            {
                "label": "Standard Entry",
                "minutes": 90,
                "price": 90,
                "originalPrice": 90,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20of%20Illusions/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20of%20Illusions/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20of%20Illusions/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20of%20Illusions/4.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Museum of Illusions Dubai is an interactive attraction filled with mind-bending optical illusions and immersive installations. Visitors can capture incredible photos while exploring more than sixty exhibits.",

        "highlights": [
            "Interactive illusion exhibits",
            "Perfect place for creative photos",
            "Family-friendly attraction",
            "Located in historic Al Seef"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Camera"
        ],

        "facilities": [
            "Interactive Exhibits",
            "Photo Zones",
            "Air Conditioned Venue"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "qasr-al-hosn",
        "Supplier_Code": "DOJOIN",
        "slug": "qasr-al-hosn",
        "title": "Qasr Al Hosn",
        "subtitle": "Historic landmark of Abu Dhabi",

        "category": "attraction",
        "destination": "abu-dhabi",
        "location": "Abu Dhabi",

        "rating": 5.0,
        "reviewCount": 2,

        "durationOptions": [
            {
                "label": "General Admission",
                "minutes": 90,
                "price": 30,
                "originalPrice": 30,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Qasr%20Al%20Hosn/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Qasr%20Al%20Hosn/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Qasr%20Al%20Hosn/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Qasr%20Al%20Hosn/4.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Qasr Al Hosn is the oldest historic building in Abu Dhabi and a symbol of the city’s heritage. The fort showcases the history and culture of the UAE through exhibitions, artifacts, and restored architecture.",

        "highlights": [
            "Visit Abu Dhabi’s oldest historic building",
            "Explore Emirati heritage and culture",
            "Museum exhibits and restored fort",
            "Important cultural landmark"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Camera",
            "Comfortable walking shoes"
        ],

        "facilities": [
            "Museum Exhibits",
            "Visitor Center",
            "Cultural Displays"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "burj-al-arab-inside-tour",
        "Supplier_Code": "DOJOIN",
        "slug": "burj-al-arab-inside-tour",
        "title": "Burj Al Arab",
        "subtitle": "Inside Tour",

        "category": "attraction",
        "destination": "dubai",
        "location": "Jumeirah Beach, Dubai",

        "rating": 4.6,
        "reviewCount": 16,

        "durationOptions": [
            {
                "label": "Inside Tour Experience",
                "minutes": 90,
                "price": 209,
                "originalPrice": 249,
                "discountPercent": 16
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Al%20Arab/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Al%20Arab/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Al%20Arab/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Al%20Arab/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Burj Al Arab is one of Dubai’s most iconic architectural landmarks and a symbol of luxury. With the Inside Burj Al Arab tour, visitors can explore the famous hotel’s lavish interiors and learn about its history and design.",

        "highlights": [
            "Visit the iconic Burj Al Arab hotel",
            "Explore luxurious interiors",
            "Guided inside tour experience",
            "Learn about the history of the landmark"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Camera",
            "Smart casual attire"
        ],

        "facilities": [
            "Guided Tour",
            "Visitor Lounge",
            "Photo Opportunities"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "museum-of-the-future",
        "Supplier_Code": "DOJOIN",
        "slug": "museum-of-the-future",
        "title": "Museum Of The Future",
        "subtitle": "Explore the future of innovation",

        "category": "attraction",
        "destination": "dubai",
        "location": "Sheikh Zayed Road, Dubai",

        "rating": 4.7,
        "reviewCount": 173,

        "durationOptions": [
            {
                "label": "General Admission",
                "minutes": 120,
                "price": 169,
                "originalPrice": 169,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20Of%20The%20Future/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20Of%20The%20Future/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20Of%20The%20Future/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20Of%20The%20Future/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Museum of the Future is one of Dubai’s most futuristic attractions showcasing cutting-edge technology and innovations that shape the future. The museum features immersive exhibitions exploring science, technology, and space exploration.",

        "highlights": [
            "Visit Dubai’s most futuristic museum",
            "Immersive technology exhibits",
            "Iconic architectural landmark",
            "Explore innovations shaping the future"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Camera"
        ],

        "facilities": [
            "Interactive Exhibits",
            "Visitor Center",
            "Gift Shop"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dinner-in-the-sky",
        "Supplier_Code": "DOJOIN",
        "slug": "dinner-in-the-sky",
        "title": "Dinner in the Sky",
        "subtitle": "A Flying Dinner Table",

        "category": "attraction",
        "destination": "dubai",
        "location": "Skydive Dubai, Dubai Marina",

        "rating": 4.9,
        "reviewCount": 8,

        "durationOptions": [
            {
                "label": "Dining Experience",
                "minutes": 90,
                "price": 699,
                "originalPrice": 699,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dinner%20in%20the%20Sky/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dinner%20in%20the%20Sky/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dinner%20in%20the%20Sky/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dinner%20in%20the%20Sky/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Dinner in the Sky offers a unique dining experience where guests enjoy gourmet meals while suspended high above the ground. The dining platform is lifted by a crane, offering stunning views of Dubai.",

        "highlights": [
            "Unique dining experience in the sky",
            "Panoramic views of Dubai skyline",
            "Professional chef prepared meals",
            "Safe and secure aerial dining platform"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Smart casual attire"
        ],

        "facilities": [
            "Dining Platform",
            "Professional Chef",
            "Safety Equipment"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "burj-khalifa-at-the-top",
        "Supplier_Code": "DOJOIN",
        "slug": "burj-khalifa-at-the-top",
        "title": "Burj Khalifa, At The Top Silver (Level 125, 124)",
        "subtitle": "Observation Deck Experience",

        "category": "attraction",
        "destination": "dubai",
        "location": "Downtown Dubai",

        "rating": 4.6,
        "reviewCount": 192,

        "durationOptions": [
            {
                "label": "At The Top Experience",
                "minutes": 90,
                "price": 159,
                "originalPrice": 159,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Silver%20(Level%20125,%20124)/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Silver%20(Level%20125,%20124)/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Silver%20(Level%20125,%20124)/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Silver%20(Level%20125,%20124)/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Silver%20(Level%20125,%20124)/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Silver%20(Level%20125,%20124)/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Silver%20(Level%20125,%20124)/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Silver%20(Level%20125,%20124)/8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Silver%20(Level%20125,%20124)/9.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Burj Khalifa is the tallest building in the world standing at 828 meters. Visitors can enjoy breathtaking panoramic views of Dubai from the observation decks located on levels 124 and 125.",

        "highlights": [
            "Visit the world’s tallest building",
            "Panoramic views of Dubai skyline",
            "Access levels 124 and 125",
            "High-speed elevator experience"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Camera"
        ],

        "facilities": [
            "Observation Deck",
            "High-Speed Elevators",
            "Gift Shop"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "chillout-ice-lounge",
        "Supplier_Code": "DOJOIN",
        "slug": "chillout-ice-lounge",
        "title": "Chillout Ice Lounge",
        "subtitle": "Coolest Place in Dubai -6°C",

        "category": "attraction",
        "destination": "dubai",
        "location": "Times Square Center, Dubai",

        "rating": 4.6,
        "reviewCount": 41,

        "durationOptions": [
            {
                "label": "Standard Entry",
                "minutes": 60,
                "price": 75,
                "originalPrice": 75,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Chillout%20Ice%20Lounge/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Chillout%20Ice%20Lounge/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Chillout%20Ice%20Lounge/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Chillout%20Ice%20Lounge/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Chillout%20Ice%20Lounge/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Chillout Ice Lounge is a unique ice-themed attraction where visitors experience freezing temperatures and admire ice sculptures while enjoying hot beverages.",

        "highlights": [
            "Sub-zero ice lounge experience",
            "Unique ice sculptures",
            "Perfect indoor attraction",
            "Hot drinks included"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Warm clothing"
        ],

        "facilities": [
            "Ice Sculptures",
            "Winter Jackets",
            "Cafe Area"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "sky-views-observatory",
        "Supplier_Code": "DOJOIN",
        "slug": "sky-views-observatory",
        "title": "Sky Views Observatory",
        "subtitle": "Glass walkway observation experience",

        "category": "attraction",
        "destination": "dubai",
        "location": "Address Sky View, Downtown Dubai",

        "rating": 4.6,
        "reviewCount": 200,

        "durationOptions": [
            {
                "label": "Observation Deck Entry",
                "minutes": 60,
                "price": 99,
                "originalPrice": 99,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Sky%20Views%20Observatory/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Sky%20Views%20Observatory/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Sky%20Views%20Observatory/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Sky%20Views%20Observatory/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Sky%20Views%20Observatory/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Sky%20Views%20Observatory/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Sky%20Views%20Observatory/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Sky%20Views%20Observatory/8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Sky%20Views%20Observatory/9.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Sky Views Observatory offers breathtaking views of Downtown Dubai from a glass observation deck located in the Address Sky View towers.",

        "highlights": [
            "Glass walkway observation deck",
            "Panoramic views of Burj Khalifa",
            "Thrilling transparent floor experience",
            "Located in Downtown Dubai"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Camera"
        ],

        "facilities": [
            "Observation Deck",
            "Glass Walkway",
            "Cafe"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "ain-dubai-observation-wheel",
        "Supplier_Code": "DOJOIN",
        "slug": "ain-dubai-worlds-tallest-observation-wheel",
        "title": "Ain Dubai - World's Tallest Observation Wheel",
        "subtitle": "Ascend 250 meters & witness panoramic views of Dubai",

        "category": "attraction",
        "destination": "dubai",
        "location": "Bluewaters Island, Dubai",

        "rating": 4.7,
        "reviewCount": 12,

        "durationOptions": [
            {
                "label": "Observation Wheel Ticket",
                "minutes": 38,
                "price": 145,
                "originalPrice": 145,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Ain%20Dubai%20-%20World's%20Tallest%20Observation%20Wheel/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Ain%20Dubai%20-%20World's%20Tallest%20Observation%20Wheel/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Ain%20Dubai%20-%20World's%20Tallest%20Observation%20Wheel/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Ain%20Dubai%20-%20World's%20Tallest%20Observation%20Wheel/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Ain%20Dubai%20-%20World's%20Tallest%20Observation%20Wheel/5.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Ain Dubai is the world's tallest observation wheel located on Bluewaters Island. Visitors can enjoy stunning panoramic views of Dubai’s skyline, coastline and landmarks from air-conditioned cabins.",

        "highlights": [
            "Ride the world's tallest observation wheel",
            "360 degree panoramic views of Dubai",
            "Air conditioned cabins",
            "Located on Bluewaters Island"
        ],

        "whatToBring": [
            "Valid ID",
            "Camera"
        ],

        "facilities": [
            "Observation Cabins",
            "Viewing Deck",
            "Air Conditioning"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "the-view-at-the-palm",
        "Supplier_Code": "DOJOIN",
        "slug": "the-view-at-the-palm",
        "title": "The View At The Palm",
        "subtitle": "360° Observation Deck Experience",

        "category": "attraction",
        "destination": "dubai",
        "location": "Palm Tower, Palm Jumeirah, Dubai",

        "rating": 4.8,
        "reviewCount": 140,

        "durationOptions": [
            {
                "label": "Observation Deck Ticket",
                "minutes": 60,
                "price": 110,
                "originalPrice": 110,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20View%20At%20The%20Palm/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20View%20At%20The%20Palm/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20View%20At%20The%20Palm/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20View%20At%20The%20Palm/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20View%20At%20The%20Palm/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20View%20At%20The%20Palm/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20View%20At%20The%20Palm/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20View%20At%20The%20Palm/8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20View%20At%20The%20Palm/9.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "The View at The Palm offers breathtaking 360 degree views of Palm Jumeirah from the Palm Tower observation deck. Visitors can see the iconic palm shaped island, Arabian Gulf and Dubai skyline.",

        "highlights": [
            "360 degree panoramic observation deck",
            "Spectacular views of Palm Jumeirah",
            "Located at Palm Tower",
            "Perfect photography spot"
        ],

        "whatToBring": [
            "Camera",
            "Valid ID"
        ],

        "facilities": [
            "Observation Deck",
            "Viewing Lounge",
            "Gift Shop"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "la-perle-by-dragone",
        "Supplier_Code": "DOJOIN",
        "slug": "la-perle-by-dragone-show",
        "title": "La Perle by Dragone Show",
        "subtitle": "A spectacular show only at Al Habtoor City, Dubai",

        "category": "attraction",
        "destination": "dubai",
        "location": "Al Habtoor City, Dubai",

        "rating": 5.0,
        "reviewCount": 2,

        "durationOptions": [
            {
                "label": "Show Ticket",
                "minutes": 90,
                "price": 269,
                "originalPrice": 269,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/La%20Perle%20by%20Dragone%20Show/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/La%20Perle%20by%20Dragone%20Show/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/La%20Perle%20by%20Dragone%20Show/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/La%20Perle%20by%20Dragone%20Show/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "La Perle by Dragone is Dubai’s most spectacular live show combining acrobatics, aerial stunts and visual effects. The immersive performance takes place in a custom built theatre in Al Habtoor City.",

        "highlights": [
            "World class live entertainment show",
            "Acrobatics and aerial performances",
            "Immersive theatre experience",
            "Located in Al Habtoor City"
        ],

        "whatToBring": [
            "Valid ID",
            "Camera"
        ],

        "facilities": [
            "Theatre Seating",
            "Air Conditioned Venue",
            "Snack Counters"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-ultimate-combo-ain-dubai-real-madrid-world",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-ultimate-combo-ain-dubai-real-madrid-world",
        "title": "Dubai's Ultimate Combo: Ain Dubai and Real Madrid World",
        "subtitle": "Enjoy the best of both worlds with two iconic Dubai attractions",

        "category": "attraction",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.7,
        "reviewCount": 20,

        "durationOptions": [
            {
                "label": "Combo Ticket",
                "minutes": 180,
                "price": 299,
                "originalPrice": 440,
                "discountPercent": 32
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai's%20Ultimate%20Combo%20Ain%20Dubai%20and%20Real%20Madrid%20World/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai's%20Ultimate%20Combo%20Ain%20Dubai%20and%20Real%20Madrid%20World/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai's%20Ultimate%20Combo%20Ain%20Dubai%20and%20Real%20Madrid%20World/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai's%20Ultimate%20Combo%20Ain%20Dubai%20and%20Real%20Madrid%20World/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai's%20Ultimate%20Combo%20Ain%20Dubai%20and%20Real%20Madrid%20World/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai's%20Ultimate%20Combo%20Ain%20Dubai%20and%20Real%20Madrid%20World/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai's%20Ultimate%20Combo%20Ain%20Dubai%20and%20Real%20Madrid%20World/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai's%20Ultimate%20Combo%20Ain%20Dubai%20and%20Real%20Madrid%20World/8.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Enjoy two of Dubai’s top attractions with one ticket. This combo ticket includes access to Ain Dubai and Real Madrid World for an unforgettable day of entertainment, views and sports themed attractions.",

        "highlights": [
            "Visit Ain Dubai observation wheel",
            "Explore Real Madrid World theme park",
            "Great value combo ticket",
            "Perfect family entertainment experience"
        ],

        "whatToBring": [
            "Valid ID",
            "Camera"
        ],

        "facilities": [
            "Observation Wheel",
            "Theme Park Attractions",
            "Food Courts"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "teamlab-phenomena-abu-dhabi",
        "Supplier_Code": "DOJOIN",
        "slug": "teamlab-phenomena-abu-dhabi",
        "title": "teamLab Phenomena Abu Dhabi",
        "subtitle": "Discover the UAE's Most Advanced Interactive Museum Where Technology Creates Personalized Artistic Journeys",

        "category": "attraction",
        "destination": "abu-dhabi",
        "location": "Saadiyat Cultural District, Abu Dhabi",

        "rating": 5.0,
        "reviewCount": 6,

        "durationOptions": [
            {
                "label": "General Admission",
                "minutes": 120,
                "price": 150,
                "originalPrice": 150,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/TeamLab%20Phenomena%20Abu%20Dhabi/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/TeamLab%20Phenomena%20Abu%20Dhabi/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/TeamLab%20Phenomena%20Abu%20Dhabi/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/TeamLab%20Phenomena%20Abu%20Dhabi/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/TeamLab%20Phenomena%20Abu%20Dhabi/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/TeamLab%20Phenomena%20Abu%20Dhabi/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/TeamLab%20Phenomena%20Abu%20Dhabi/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/TeamLab%20Phenomena%20Abu%20Dhabi/8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/TeamLab%20Phenomena%20Abu%20Dhabi/9.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/TeamLab%20Phenomena%20Abu%20Dhabi/10.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "teamLab Phenomena Abu Dhabi is an immersive digital art museum where technology, nature, and human perception merge into interactive artistic environments.",

        "highlights": [
            "Interactive digital art installations",
            "Immersive multi-sensory experiences",
            "Cutting-edge technology exhibitions",
            "Located in Saadiyat Cultural District"
        ],

        "whatToBring": [
            "Camera",
            "Comfortable clothing"
        ],

        "facilities": [
            "Interactive Exhibits",
            "Visitor Center",
            "Gift Shop"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "house-of-hype-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "house-of-hype-dubai",
        "title": "House of Hype Dubai",
        "subtitle": "Dubai's Most Social Media-Worthy Destination",

        "category": "attraction",
        "destination": "dubai",
        "location": "Dubai Mall Chinatown, Dubai",

        "rating": 5.0,
        "reviewCount": 1,

        "durationOptions": [
            {
                "label": "General Admission",
                "minutes": 120,
                "price": 119,
                "originalPrice": 119,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/House%20of%20Hype%20Dubai/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/House%20of%20Hype%20Dubai/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/House%20of%20Hype%20Dubai/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/House%20of%20Hype%20Dubai/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/House%20of%20Hype%20Dubai/5.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "House of Hype is a vibrant entertainment venue designed for content creators, families and social media lovers featuring immersive installations and entertainment zones.",

        "highlights": [
            "Over 120 interactive experiences",
            "Perfect social media photo spots",
            "Gaming and entertainment zones",
            "Located in Dubai Mall Chinatown"
        ],

        "whatToBring": [
            "Camera",
            "Smartphone"
        ],

        "facilities": [
            "Interactive Zones",
            "Photo Studios",
            "Retail Stores",
            "Food & Beverage"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "aya-universe",
        "Supplier_Code": "DOJOIN",
        "slug": "aya-universe",
        "title": "AYA Universe",
        "subtitle": "Discover the world beyond imagination",

        "category": "attraction",
        "destination": "dubai",
        "location": "Wafi Mall, Dubai",

        "rating": 4.6,
        "reviewCount": 116,

        "durationOptions": [
            {
                "label": "Standard Entry",
                "minutes": 90,
                "price": 99,
                "originalPrice": 125,
                "discountPercent": 21
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/AYA%20Universe/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/AYA%20Universe/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/AYA%20Universe/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/AYA%20Universe/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/AYA%20Universe/5.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "AYA Universe is an immersive entertainment park combining digital art, light shows and interactive technology to create a futuristic experience.",

        "highlights": [
            "Immersive digital worlds",
            "Interactive light shows",
            "12 unique themed zones",
            "Located in Wafi Mall"
        ],

        "whatToBring": [
            "Camera",
            "Comfortable clothing"
        ],

        "facilities": [
            "Immersive Zones",
            "Interactive Exhibits",
            "Visitor Center"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-dolphinarium",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-dolphinarium-dubai-dolphin-show",
        "title": "Dubai Dolphinarium (Dubai Dolphin Show)",
        "subtitle": "World of Aquatic Wonder",

        "category": "attraction",
        "destination": "dubai",
        "location": "Creek Park, Dubai",

        "rating": 4.7,
        "reviewCount": 174,

        "durationOptions": [
            {
                "label": "Dolphin Show Ticket",
                "minutes": 90,
                "price": 95,
                "originalPrice": 115,
                "discountPercent": 17
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Dolphinarium%20(Dubai%20Dolphin%20Show)/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Dolphinarium%20(Dubai%20Dolphin%20Show)/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Dolphinarium%20(Dubai%20Dolphin%20Show)/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Dolphinarium%20(Dubai%20Dolphin%20Show)/4.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Dubai Dolphinarium offers entertaining dolphin and seal shows where visitors can watch trained marine animals perform incredible tricks.",

        "highlights": [
            "Live dolphin and seal performances",
            "Family friendly entertainment",
            "Located in Creek Park",
            "Educational marine experience"
        ],

        "whatToBring": [
            "Camera",
            "Valid ID"
        ],

        "facilities": [
            "Indoor Theatre",
            "Food Court",
            "Gift Shop"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "3d-world-selfie-museum",
        "Supplier_Code": "DOJOIN",
        "slug": "3d-world-selfie-museum",
        "title": "3D World Selfie Museum In Dubai",
        "subtitle": "First and Only 3D Selfie Museum in the Middle East",

        "category": "attraction",
        "destination": "dubai",
        "location": "Al Quoz, Dubai",

        "rating": 5.0,
        "reviewCount": 1,

        "durationOptions": [
            {
                "label": "Standard Entry",
                "minutes": 90,
                "price": 89,
                "originalPrice": 89,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/3D%20World%20Selfie%20Museum%20In%20Dubai/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/3D%20World%20Selfie%20Museum%20In%20Dubai/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/3D%20World%20Selfie%20Museum%20In%20Dubai/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/3D%20World%20Selfie%20Museum%20In%20Dubai/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/3D%20World%20Selfie%20Museum%20In%20Dubai/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Refundable"
        ],

        "overview": "3D World Selfie Museum is an interactive attraction where visitors can take creative photos using illusion-based artworks and immersive 3D environments.",

        "highlights": [
            "Interactive 3D illusion artworks",
            "Perfect for photography",
            "Family-friendly attraction",
            "First 3D selfie museum in the Middle East"
        ],

        "whatToBring": [
            "Camera",
            "Smartphone"
        ],

        "facilities": [
            "Photo Zones",
            "Interactive Art Exhibits"
        ],

        "cancellationPolicy": "Refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": true
    },
    {
        "id": "zayed-national-museum",
        "Supplier_Code": "DOJOIN",
        "slug": "zayed-national-museum",
        "title": "Zayed National Museum",
        "subtitle": "Celebrating the heritage and culture of the UAE",

        "category": "attraction",
        "destination": "abu-dhabi",
        "location": "Saadiyat Island, Abu Dhabi",

        "rating": 4.8,
        "reviewCount": 25,

        "durationOptions": [
            {
                "label": "General Admission",
                "minutes": 120,
                "price": 70,
                "originalPrice": 70,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Zayed%20National%20Museum/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Zayed%20National%20Museum/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Zayed%20National%20Museum/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Zayed%20National%20Museum/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Zayed%20National%20Museum/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Zayed%20National%20Museum/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Zayed%20National%20Museum/7.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Zayed National Museum celebrates the life and legacy of Sheikh Zayed bin Sultan Al Nahyan and showcases the heritage and culture of the United Arab Emirates.",

        "highlights": [
            "Learn about UAE history and culture",
            "Interactive museum exhibitions",
            "Located in Saadiyat Cultural District",
            "Architectural landmark"
        ],

        "whatToBring": [
            "Camera",
            "Valid ID"
        ],

        "facilities": [
            "Museum Galleries",
            "Visitor Center",
            "Gift Shop"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "global-village-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "global-village-dubai",
        "title": "Global Village Dubai",
        "subtitle": "Explore cultures from around the world",

        "category": "attraction",
        "destination": "dubai",
        "location": "Global Village, Dubai",

        "rating": 4.6,
        "reviewCount": 1567,

        "durationOptions": [
            {
                "label": "General Entry",
                "minutes": 240,
                "price": 25,
                "originalPrice": 30,
                "discountPercent": 17
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Global%20Village%20Dubai/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Global%20Village%20Dubai/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Global%20Village%20Dubai/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Global%20Village%20Dubai/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Global%20Village%20Dubai/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Global%20Village%20Dubai/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Global%20Village%20Dubai/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Global%20Village%20Dubai/8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Global%20Village%20Dubai/9.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Global%20Village%20Dubai/10.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Global%20Village%20Dubai/11.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Global Village is a multicultural festival park featuring pavilions, international cuisine, live entertainment and shopping.",

        "highlights": [
            "Explore 90+ cultural pavilions",
            "International street food",
            "Live shows and entertainment",
            "Family-friendly attractions"
        ],

        "whatToBring": [
            "Camera",
            "Comfortable shoes"
        ],

        "facilities": [
            "Food Courts",
            "Shopping Pavilions",
            "Amusement Rides"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "the-messi-experience-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "the-messi-experience-dubai",
        "title": "The Messi Experience Dubai",
        "subtitle": "Where every football fan's dream becomes an interactive reality",

        "category": "attraction",
        "destination": "dubai",
        "location": "Dubai Festival City Mall, Dubai",

        "rating": 4.7,
        "reviewCount": 35,

        "durationOptions": [
            {
                "label": "Experience Ticket",
                "minutes": 75,
                "price": 129,
                "originalPrice": 129,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Messi%20Experience%20Dubai/1.jpeg",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Messi%20Experience%20Dubai/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Messi%20Experience%20Dubai/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Messi%20Experience%20Dubai/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Messi%20Experience%20Dubai/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Messi%20Experience%20Dubai/6.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "The Messi Experience is an immersive attraction that takes visitors through the life and career of football legend Lionel Messi using interactive technology, games and projections.",

        "highlights": [
            "Interactive football themed experience",
            "Learn about Lionel Messi's career",
            "Immersive digital technology exhibits",
            "Perfect for football fans"
        ],

        "whatToBring": [
            "Camera",
            "Comfortable clothing"
        ],

        "facilities": [
            "Interactive Zones",
            "Gaming Areas",
            "Merchandise Store"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "ski-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "ski-dubai",
        "title": "Ski Dubai",
        "subtitle": "Indoor Ski Resort Experience",

        "category": "attraction",
        "destination": "dubai",
        "location": "Mall of the Emirates, Dubai",

        "rating": 4.8,
        "reviewCount": 56,

        "durationOptions": [
            {
                "label": "Snow Park Pass",
                "minutes": 180,
                "price": 215,
                "originalPrice": 250,
                "discountPercent": 14
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Ski%20Dubai/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Ski%20Dubai/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Ski%20Dubai/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Ski%20Dubai/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Ski%20Dubai/5.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Ski Dubai is the Middle East’s first indoor ski resort offering skiing, snowboarding and snow park experiences inside Mall of the Emirates.",

        "highlights": [
            "Indoor skiing experience",
            "Meet and interact with penguins",
            "Snow park attractions",
            "Located inside Mall of the Emirates"
        ],

        "whatToBring": [
            "Warm clothing",
            "Camera"
        ],

        "facilities": [
            "Snow Park",
            "Ski Slopes",
            "Equipment Rental"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "the-palm-monorail",
        "Supplier_Code": "DOJOIN",
        "slug": "the-palm-monorail",
        "title": "The Palm Monorail",
        "subtitle": "Gateway to Atlantis",

        "category": "attraction",
        "destination": "dubai",
        "location": "Palm Jumeirah, Dubai",

        "rating": 4.7,
        "reviewCount": 29,

        "durationOptions": [
            {
                "label": "Monorail Ride Ticket",
                "minutes": 20,
                "price": 15,
                "originalPrice": 15,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Palm%20Monorail/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Palm%20Monorail/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Palm%20Monorail/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Palm%20Monorail/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Palm%20Monorail/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Palm%20Monorail/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Palm%20Monorail/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/The%20Palm%20Monorail/8.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "The Palm Monorail is a scenic transportation system connecting Palm Jumeirah to Atlantis The Palm. It offers panoramic views of the island and Dubai skyline while traveling across the iconic palm-shaped island.",

        "highlights": [
            "Scenic monorail ride across Palm Jumeirah",
            "Views of Atlantis The Palm and Arabian Gulf",
            "Convenient transport between Palm attractions",
            "First monorail system in the Middle East"
        ],

        "whatToBring": [
            "Camera",
            "Mobile Ticket"
        ],

        "facilities": [
            "Monorail Stations",
            "Observation Windows",
            "Ticket Counters"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-frame",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-frame",
        "title": "Dubai Frame",
        "subtitle": "Dubai's Iconic Architectural Landmark",

        "category": "attraction",
        "destination": "dubai",
        "location": "Zabeel Park, Dubai",

        "rating": 4.6,
        "reviewCount": 517,

        "durationOptions": [
            {
                "label": "General Admission",
                "minutes": 60,
                "price": 46,
                "originalPrice": 60,
                "discountPercent": 23
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Frame/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Frame/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Frame/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Frame/4.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Dubai Frame is a famous landmark offering panoramic views of both old and new Dubai from its glass sky bridge located 150 meters above ground.",

        "highlights": [
            "Panoramic views of Dubai skyline",
            "Glass floor sky bridge",
            "Interactive museum exhibitions",
            "Located in Zabeel Park"
        ],

        "whatToBring": [
            "Valid ID",
            "Camera"
        ],

        "facilities": [
            "Observation Deck",
            "Glass Walkway",
            "Museum Gallery"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },

    {
        "id": "arte-museum-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "arte-museum-dubai",
        "title": "ARTE MUSEUM DUBAI",
        "subtitle": "Feel, Hear and Sense the Digital Art",

        "category": "attraction",
        "destination": "dubai",
        "location": "Dubai Mall, Level 2, Dubai",

        "rating": 4.5,
        "reviewCount": 6,

        "durationOptions": [
            {
                "label": "General Entry",
                "minutes": 90,
                "price": 149,
                "originalPrice": 149,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/ARTE%20MUSEUM%20DUBAI/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/ARTE%20MUSEUM%20DUBAI/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/ARTE%20MUSEUM%20DUBAI/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/ARTE%20MUSEUM%20DUBAI/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/ARTE%20MUSEUM%20DUBAI/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/ARTE%20MUSEUM%20DUBAI/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/ARTE%20MUSEUM%20DUBAI/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/ARTE%20MUSEUM%20DUBAI/8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/ARTE%20MUSEUM%20DUBAI/9.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/ARTE%20MUSEUM%20DUBAI/10.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/ARTE%20MUSEUM%20DUBAI/11.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/ARTE%20MUSEUM%20DUBAI/12.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "ARTE MUSEUM DUBAI is an immersive digital art museum where art and technology blend together through interactive exhibitions using sound, aroma, light and visuals.",

        "highlights": [
            "Immersive digital art exhibitions",
            "Multi-sensory installations using light and sound",
            "14 themed exhibition zones",
            "Located inside Dubai Mall"
        ],

        "whatToBring": [
            "Camera",
            "Comfortable clothing"
        ],

        "facilities": [
            "Digital Exhibits",
            "Interactive Art Installations",
            "Cafe"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-aquarium-otter-encounter",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-aquarium-and-underwater-zoo-otter-encounter",
        "title": "Dubai Aquarium and Underwater Zoo Otter Encounter",
        "subtitle": "Meet playful otters up close",

        "category": "attraction",
        "destination": "dubai",
        "location": "Dubai Mall Aquarium, Dubai",

        "rating": 4.7,
        "reviewCount": 50,

        "durationOptions": [
            {
                "label": "Otter Encounter Experience",
                "minutes": 60,
                "price": 300,
                "originalPrice": 300,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Aquarium%20&%20Underwater%20Zoo/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Aquarium%20&%20Underwater%20Zoo/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Aquarium%20&%20Underwater%20Zoo/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Aquarium%20&%20Underwater%20Zoo/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Dubai%20Aquarium%20&%20Underwater%20Zoo/5.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Enjoy an unforgettable wildlife encounter with playful otters at Dubai Aquarium and Underwater Zoo inside Dubai Mall.",

        "highlights": [
            "Meet adorable otters up close",
            "Guided wildlife experience",
            "Educational animal interaction",
            "Located in Dubai Aquarium"
        ],

        "whatToBring": [
            "Camera",
            "Valid ID"
        ],

        "facilities": [
            "Aquarium",
            "Animal Interaction Area",
            "Gift Shop"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "burj-khalifa-at-the-top-gold",
        "Supplier_Code": "DOJOIN",
        "slug": "burj-khalifa-at-the-top-gold-level-148",
        "title": "Burj Khalifa, At The Top Gold (Level 148)",
        "subtitle": "Premium observation deck experience",

        "category": "attraction",
        "destination": "dubai",
        "location": "Burj Khalifa, Downtown Dubai",

        "rating": 4.2,
        "reviewCount": 5,

        "durationOptions": [
            {
                "label": "Premium Observation Deck",
                "minutes": 90,
                "price": 535,
                "originalPrice": 535,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Gold%20(Level%20148)/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Gold%20(Level%20148)/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Gold%20(Level%20148)/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Gold%20(Level%20148)/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Gold%20(Level%20148)/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Gold%20(Level%20148)/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Gold%20(Level%20148)/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Gold%20(Level%20148)/8.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Visit the exclusive Level 148 observation deck at Burj Khalifa and enjoy luxury lounge access with breathtaking skyline views.",

        "highlights": [
            "Access to Level 148 Sky Lounge",
            "Premium observation deck experience",
            "Panoramic Dubai skyline views",
            "Access to Levels 124 and 125"
        ],

        "whatToBring": [
            "Valid ID",
            "Camera"
        ],

        "facilities": [
            "Sky Lounge",
            "Observation Deck",
            "Refreshments"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "burj-khalifa-the-lounge",
        "Supplier_Code": "DOJOIN",
        "slug": "burj-khalifa-the-lounge-level-154-153-152",
        "title": "Burj Khalifa, At The Top Platinum - The Lounge",
        "subtitle": "Luxury lounge experience at the highest floors",

        "category": "attraction",
        "destination": "dubai",
        "location": "Burj Khalifa, Downtown Dubai",

        "rating": 5.0,
        "reviewCount": 1,

        "durationOptions": [
            {
                "label": "Luxury Lounge Experience",
                "minutes": 120,
                "price": 760,
                "originalPrice": 760,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Platinum%20-%20The%20Lounge/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Platinum%20-%20The%20Lounge/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Platinum%20-%20The%20Lounge/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Platinum%20-%20The%20Lounge/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Platinum%20-%20The%20Lounge/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Platinum%20-%20The%20Lounge/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Platinum%20-%20The%20Lounge/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Platinum%20-%20The%20Lounge/8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Platinum%20-%20The%20Lounge/9.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Burj%20Khalifa,%20At%20The%20Top%20Platinum%20-%20The%20Lounge/10.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Experience the highest lounge in the world at Burj Khalifa levels 152, 153 and 154 with luxury seating and premium refreshments.",

        "highlights": [
            "World’s highest lounge experience",
            "Luxury seating and refreshments",
            "Exclusive observation deck access",
            "Premium sunset views"
        ],

        "whatToBring": [
            "Valid ID",
            "Camera"
        ],

        "facilities": [
            "Luxury Lounge",
            "Premium Dining",
            "Observation Deck"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "snow-abu-dhabi",
        "Supplier_Code": "DOJOIN",
        "slug": "snow-abu-dhabi",
        "title": "Snow Abu Dhabi",
        "subtitle": "Indoor snow park adventure",

        "category": "attraction",
        "destination": "abu-dhabi",
        "location": "Reem Mall, Abu Dhabi",

        "rating": 5.0,
        "reviewCount": 2,

        "durationOptions": [
            {
                "label": "Snow Park Entry",
                "minutes": 180,
                "price": 199,
                "originalPrice": 199,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Snow%20Abu%20Dhabi/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Snow%20Abu%20Dhabi/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Snow%20Abu%20Dhabi/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Snow%20Abu%20Dhabi/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Snow%20Abu%20Dhabi/5.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Snow Abu Dhabi is an indoor snow park featuring winter-themed attractions and activities in a snowy environment.",

        "highlights": [
            "Indoor snow adventure park",
            "Snow slides and rides",
            "Family-friendly winter activities",
            "Located in Reem Mall"
        ],

        "whatToBring": [
            "Warm clothing",
            "Camera"
        ],

        "facilities": [
            "Snow Park",
            "Winter Rides",
            "Equipment Rental"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "emirates-park-zoo-resort",
        "Supplier_Code": "DOJOIN",
        "slug": "emirates-park-zoo-resort",
        "title": "Emirates Park Zoo & Resort",
        "subtitle": "Wildlife experience in Abu Dhabi",

        "category": "attraction",
        "destination": "abu-dhabi",
        "location": "Al Bahia, Abu Dhabi",

        "rating": 4.3,
        "reviewCount": 6,

        "durationOptions": [
            {
                "label": "Zoo Entry Ticket",
                "minutes": 180,
                "price": 65,
                "originalPrice": 65,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Emirates%20Park%20Zoo%20&%20Resort/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Emirates%20Park%20Zoo%20&%20Resort/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Emirates%20Park%20Zoo%20&%20Resort/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Emirates%20Park%20Zoo%20&%20Resort/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Emirates%20Park%20Zoo%20&%20Resort/5.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Emirates Park Zoo & Resort allows visitors to interact with animals and explore a variety of wildlife exhibits.",

        "highlights": [
            "See over 1700 animals",
            "Animal feeding experiences",
            "Family friendly wildlife attraction",
            "Educational programs"
        ],

        "whatToBring": [
            "Camera",
            "Comfortable clothing"
        ],

        "facilities": [
            "Animal Exhibits",
            "Resort Stay",
            "Restaurants"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "museum-of-candy",
        "Supplier_Code": "DOJOIN",
        "slug": "museum-of-candy",
        "title": "Museum of Candy",
        "subtitle": "Uncover A Vibrant Wonderland Of Sweetness",

        "category": "attraction",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 20,

        "durationOptions": [
            {
                "label": "General Admission",
                "minutes": 90,
                "price": 119,
                "originalPrice": 119,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20of%20Candy/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20of%20Candy/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20of%20Candy/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20of%20Candy/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20of%20Candy/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20of%20Candy/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20of%20Candy/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Attractions/Museum%20of%20Candy/8.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Step into a colorful world of sweets and creativity at the Museum of Candy in Dubai. This immersive attraction features candy-themed rooms, artistic installations, and interactive spaces perfect for photos and fun experiences.",

        "highlights": [
            "Explore immersive candy themed rooms",
            "Take creative photos with candy installations",
            "Enjoy interactive sweet themed attractions",
            "Perfect family friendly attraction"
        ],

        "whatToBring": [
            "Camera",
            "Smartphone",
            "Valid ID"
        ],

        "facilities": [
            "Photo Zones",
            "Interactive Exhibits",
            "Gift Shop"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },

]

