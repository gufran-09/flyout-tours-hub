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
                "originalPrice": 138,
                "discountPercent": 20
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
                "originalPrice": 473,
                "discountPercent": 20
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
                "originalPrice": 94,
                "discountPercent": 20
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
                "originalPrice": 31,
                "discountPercent": 19
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
                "originalPrice": 124,
                "discountPercent": 20
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
    {
        "id": "skydive-dubai-tandem-skydiving-palm-drop-zone",
        "Supplier_Code": "DOJOIN",
        "slug": "skydive-dubai-experience-tandem-skydiving-at-the-palm-drop-zone",
        "title": "Skydive Dubai: Experience Tandem Skydiving at The Palm Drop Zone",
        "subtitle": "Photos and Videos Included",

        "category": "sky adventure",
        "destination": "dubai",
        "location": "Palm Drop Zone, Dubai",

        "rating": 5.0,
        "reviewCount": 20,

        "durationOptions": [
            {
                "label": "Tandem Skydive Experience",
                "minutes": 180,
                "price": 2749,
                "originalPrice": 2749,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Skydive%20Dubai%20Experience/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Skydive%20Dubai%20Experience/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Skydive%20Dubai%20Experience/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Skydive%20Dubai%20Experience/4.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Experience one of the most thrilling adventure sports in Dubai with tandem skydiving over the Palm Jumeirah. Enjoy breathtaking aerial views while securely harnessed to an experienced instructor.",

        "highlights": [
            "Tandem skydiving experience over Palm Jumeirah",
            "Freefall at over 120 miles per hour",
            "Professional instructors",
            "Photos and videos included"
        ],

        "whatToBring": [
            "Valid Passport or ID",
            "Comfortable Clothing",
            "Sports Shoes"
        ],

        "facilities": [
            "Professional Instructors",
            "Safety Equipment",
            "Photo & Video Package"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "abu-dhabi-helicopter-tour",
        "Supplier_Code": "DOJOIN",
        "slug": "abu-dhabi-helicopter-tour",
        "title": "Abu Dhabi Helicopter Tour",
        "subtitle": "See the City's Wonders from a New Angle",

        "category": "sky adventure",
        "destination": "abu dhabi",
        "location": "Abu Dhabi, UAE",

        "rating": 4.8,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Helicopter City Tour",
                "minutes": 30,
                "price": 700,
                "originalPrice": 700,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Abu%20Dhabi%20Helicopter%20Tour/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Abu%20Dhabi%20Helicopter%20Tour/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Abu%20Dhabi%20Helicopter%20Tour/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Abu%20Dhabi%20Helicopter%20Tour/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Abu%20Dhabi%20Helicopter%20Tour/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Abu%20Dhabi%20Helicopter%20Tour/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Abu%20Dhabi%20Helicopter%20Tour/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Abu%20Dhabi%20Helicopter%20Tour/8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Abu%20Dhabi%20Helicopter%20Tour/9.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Abu%20Dhabi%20Helicopter%20Tour/10.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Abu%20Dhabi%20Helicopter%20Tour/11.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Experience Abu Dhabi like never before with breathtaking aerial views of the city's iconic landmarks including Sheikh Zayed Grand Mosque, Emirates Palace, and Etihad Towers.",

        "highlights": [
            "Helicopter ride over Abu Dhabi skyline",
            "View Sheikh Zayed Grand Mosque",
            "See Emirates Palace and Etihad Towers",
            "Aerial sightseeing experience"
        ],

        "whatToBring": [
            "Passport or ID",
            "Camera"
        ],

        "facilities": [
            "Helicopter Flight",
            "Professional Pilot",
            "Safety Equipment"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-balloon-at-atlantis",
        "Supplier_Code": "DOJOIN",
        "slug": "the-dubai-balloon-at-atlantis",
        "title": "The Dubai Balloon at Atlantis",
        "subtitle": "Tethered Balloon Experience",

        "category": "sky adventure",
        "destination": "dubai",
        "location": "Atlantis, The Palm, Dubai",

        "rating": 4.2,
        "reviewCount": 6,

        "durationOptions": [
            {
                "label": "Balloon Ride",
                "minutes": 20,
                "price": 175,
                "originalPrice": 195,
                "discountPercent": 10
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/The%20Dubai%20Balloon%20at%20Atlantis/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/The%20Dubai%20Balloon%20at%20Atlantis/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/The%20Dubai%20Balloon%20at%20Atlantis/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/The%20Dubai%20Balloon%20at%20Atlantis/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/The%20Dubai%20Balloon%20at%20Atlantis/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/The%20Dubai%20Balloon%20at%20Atlantis/6.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "The Dubai Balloon offers stunning 300-meter-high aerial views of Dubai's shoreline and skyline near Atlantis The Palm.",

        "highlights": [
            "Tethered helium balloon ride",
            "300 meter aerial views",
            "Views of Palm Jumeirah",
            "Located near Atlantis Aquaventure"
        ],

        "whatToBring": [
            "Camera",
            "Passport or ID"
        ],

        "facilities": [
            "Balloon Ride",
            "Viewing Deck",
            "Safety Equipment"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "hot-air-balloon-flights-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "hot-air-balloon-flights-dubai",
        "title": "Hot Air Balloon Flights Dubai",
        "subtitle": "Beginning of A New Season",

        "category": "sky adventure",
        "destination": "dubai",
        "location": "Dubai Desert Conservation Reserve",

        "rating": 5.0,
        "reviewCount": 5,

        "durationOptions": [
            {
                "label": "Hot Air Balloon Ride",
                "minutes": 60,
                "price": 799,
                "originalPrice": 799,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Hot%20Air%20Balloon%20Flights%20Dubai/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Hot%20Air%20Balloon%20Flights%20Dubai/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Hot%20Air%20Balloon%20Flights%20Dubai/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Hot%20Air%20Balloon%20Flights%20Dubai/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Hot%20Air%20Balloon%20Flights%20Dubai/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Hot%20Air%20Balloon%20Flights%20Dubai/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Hot%20Air%20Balloon%20Flights%20Dubai/7.webp",
        ],

        "badges": [
            "24-hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Enjoy a scenic hot air balloon flight over Dubai’s desert landscape and witness breathtaking sunrise views from the sky.",

        "highlights": [
            "Sunrise balloon flight",
            "Views of Dubai desert",
            "Professional balloon operators",
            "Unique aerial desert experience"
        ],

        "whatToBring": [
            "Warm clothing",
            "Camera"
        ],

        "facilities": [
            "Balloon Flight",
            "Pilot Guide",
            "Safety Equipment"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "helicopter-dubai-tour",
        "Supplier_Code": "DOJOIN",
        "slug": "helicopter-dubai-tour",
        "title": "Helicopter Dubai Tour",
        "subtitle": "Aerial Sightseeing Tour",

        "category": "sky adventure",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.5,
        "reviewCount": 24,

        "durationOptions": [
            {
                "label": "Dubai Helicopter Tour",
                "minutes": 30,
                "price": 710,
                "originalPrice": 800,
                "discountPercent": 11
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Helicopter%20Dubai%20Tour/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Helicopter%20Dubai%20Tour/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Helicopter%20Dubai%20Tour/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Helicopter%20Dubai%20Tour/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Helicopter%20Dubai%20Tour/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Helicopter%20Dubai%20Tour/6.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Explore Dubai from the sky with an unforgettable helicopter sightseeing tour covering iconic landmarks and coastline views.",

        "highlights": [
            "Dubai skyline helicopter tour",
            "Views of Burj Al Arab",
            "Palm Jumeirah aerial views",
            "Professional helicopter pilots"
        ],

        "whatToBring": [
            "Passport",
            "Camera"
        ],

        "facilities": [
            "Helicopter Flight",
            "Safety Equipment",
            "Pilot Guide"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "private-helicopter-tour-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "private-helicopter-tour-dubai",
        "title": "Private Helicopter Tour Dubai",
        "subtitle": "6 seater and 7 seater helicopter tour",

        "category": "sky adventure",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 5.0,
        "reviewCount": 1,

        "durationOptions": [
            {
                "label": "Private Helicopter Tour",
                "minutes": 60,
                "price": 3145,
                "originalPrice": 3145,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Private%20Helicopter%20Tour%20Dubai/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Private%20Helicopter%20Tour%20Dubai/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Private%20Helicopter%20Tour%20Dubai/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Private%20Helicopter%20Tour%20Dubai/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Private%20Helicopter%20Tour%20Dubai/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Private%20Helicopter%20Tour%20Dubai/6.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Enjoy a luxurious private helicopter tour over Dubai with premium aerial views of the city skyline.",

        "highlights": [
            "Private helicopter experience",
            "Luxury aerial sightseeing",
            "Perfect for celebrations",
            "Professional pilots"
        ],

        "whatToBring": [
            "Passport",
            "Camera"
        ],

        "facilities": [
            "Private Helicopter",
            "Pilot Guide",
            "Luxury Seating"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "xline-dubai-marina-zip-line",
        "Supplier_Code": "DOJOIN",
        "slug": "xline-dubai-marina-zip-line-tickets-with-photos-videos",
        "title": "Dubai Marina Zip Line Tickets with Photos & Videos",
        "subtitle": "World’s Longest Urban Zipline",

        "category": "sky adventure",
        "destination": "dubai",
        "location": "Dubai Marina",

        "rating": 4.9,
        "reviewCount": 7,

        "durationOptions": [
            {
                "label": "Zipline Experience",
                "minutes": 60,
                "price": 699,
                "originalPrice": 699,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Dubai%20Marina%20Zip%20Line/1.jpeg",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Dubai%20Marina%20Zip%20Line/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Dubai%20Marina%20Zip%20Line/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Dubai%20Marina%20Zip%20Line/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Dubai%20Marina%20Zip%20Line/5.webp",
        ],

        "badges": [
            "24-hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Experience the longest urban zipline in the world at Dubai Marina with speeds up to 80 km/h and spectacular skyline views.",

        "highlights": [
            "World’s longest urban zipline",
            "80 km/h thrilling ride",
            "Dubai Marina skyline views",
            "Photos and videos included"
        ],

        "whatToBring": [
            "Passport",
            "Sports shoes"
        ],

        "facilities": [
            "Safety Equipment",
            "Zipline Harness",
            "Photo & Video Package"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "maha-hot-air-balloons",
        "Supplier_Code": "DOJOIN",
        "slug": "maha-hot-air-balloons",
        "title": "Maha Hot Air Balloons",
        "subtitle": "Dubai Desert Balloon Experience",

        "category": "sky adventure",
        "destination": "dubai",
        "location": "Dubai Desert",

        "rating": 4.0,
        "reviewCount": 4,

        "durationOptions": [
            {
                "label": "Hot Air Balloon Ride",
                "minutes": 60,
                "price": 650,
                "originalPrice": 850,
                "discountPercent": 24
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Maha%20Hot%20Air%20Balloons/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Maha%20Hot%20Air%20Balloons/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Maha%20Hot%20Air%20Balloons/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Maha%20Hot%20Air%20Balloons/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Maha%20Hot%20Air%20Balloons/5.webp",
        ],

        "badges": [
            "24-hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Enjoy a peaceful hot air balloon ride above Dubai’s desert landscape with panoramic sunrise views.",

        "highlights": [
            "Sunrise balloon flight",
            "Dubai desert scenery",
            "Unique aerial experience",
            "Professional balloon pilots"
        ],

        "whatToBring": [
            "Warm clothing",
            "Camera"
        ],

        "facilities": [
            "Balloon Ride",
            "Pilot Guide",
            "Safety Equipment"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "gyrocopter-flight-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "gyrocopter-flight-in-dubai",
        "title": "Gyrocopter Flight in Dubai",
        "subtitle": "Unique Aerial Flight Experience",

        "category": "sky adventure",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 5.0,
        "reviewCount": 1,

        "durationOptions": [
            {
                "label": "Gyrocopter Flight",
                "minutes": 30,
                "price": 1199,
                "originalPrice": 1199,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Gyrocopter%20Flight%20in%20Dubai/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Gyrocopter%20Flight%20in%20Dubai/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Gyrocopter%20Flight%20in%20Dubai/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Gyrocopter%20Flight%20in%20Dubai/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Sky-Adventure/Gyrocopter%20Flight%20in%20Dubai/5.webp",
        ],

        "badges": [
            "24-hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Experience a unique gyrocopter flight above Dubai coastline and skyline for breathtaking aerial views.",

        "highlights": [
            "Gyrocopter flight experience",
            "Dubai coastline views",
            "Open cockpit adventure",
            "Professional pilot guidance"
        ],

        "whatToBring": [
            "Passport",
            "Camera"
        ],

        "facilities": [
            "Gyrocopter Flight",
            "Safety Equipment",
            "Pilot Guide"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "action-park-target-shooting-archery-axe-throwing",
        "Supplier_Code": "DOJOIN",
        "slug": "action-park-target-shooting-archery-axe-throwing",
        "title": "Action Park Target Shooting, Archery, Axe Throwing",
        "subtitle": "Experience a thrilling range of target activities, perfect for all skill levels",

        "category": "games",
        "destination": "dubai",
        "location": "Action Park, Dubai",

        "rating": 5.0,
        "reviewCount": 1,

        "durationOptions": [
            {
                "label": "Target Shooting & Archery Experience",
                "minutes": 60,
                "price": 89,
                "originalPrice": 89,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/Action%20Park%20Target%20Shooting,%20Archery,%20Axe%20Throwing/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/Action%20Park%20Target%20Shooting,%20Archery,%20Axe%20Throwing/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/Action%20Park%20Target%20Shooting,%20Archery,%20Axe%20Throwing/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/Action%20Park%20Target%20Shooting,%20Archery,%20Axe%20Throwing/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/Action%20Park%20Target%20Shooting,%20Archery,%20Axe%20Throwing/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/Action%20Park%20Target%20Shooting,%20Archery,%20Axe%20Throwing/6.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Archery has been an integral part of Gulf traditions for centuries and Action Park modernizes this experience with a range of thrilling activities including archery, axe throwing, and target shooting for beginners and experts alike.",

        "highlights": [
            "Archery experience with professional equipment",
            "Axe throwing activity",
            "Target shooting range",
            "Indoor adventure experience suitable for all skill levels"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Comfortable Clothing",
            "Closed Toe Shoes"
        ],

        "facilities": [
            "Indoor Shooting Range",
            "Archery Lanes",
            "Axe Throwing Arena",
            "Safety Equipment"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "olioli-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "olioli-interactive-play-centre",
        "title": "OliOli® Dubai",
        "subtitle": "Best Experiential Children's Play Museum",

        "category": "games",
        "destination": "dubai",
        "location": "Al Quoz, Dubai",

        "rating": 4.8,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "General Entry Ticket",
                "minutes": 120,
                "price": 45,
                "originalPrice": 45,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/OliOli%20Dubai/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/OliOli%20Dubai/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/OliOli%20Dubai/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/OliOli%20Dubai/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/OliOli%20Dubai/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "OliOli® is the first experiential children’s museum where kids can explore, play, and learn through creative and interactive exhibits. The museum features indoor play zones and hands-on galleries designed to stimulate imagination and curiosity.",

        "highlights": [
            "Interactive children's play museum",
            "Multiple themed galleries across two floors",
            "Creative learning activities for kids",
            "Hands-on educational exhibits"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Comfortable Clothing"
        ],

        "facilities": [
            "Interactive Galleries",
            "Indoor Play Areas",
            "Educational Exhibits",
            "Family Facilities"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "vr-wonderland-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "vr-wonderland-dubai",
        "title": "VR Wonderland",
        "subtitle": "7D VR Games",

        "category": "games",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.7,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "VR Gaming Experience",
                "minutes": 60,
                "price": 70,
                "originalPrice": 70,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/VR%20Wonderland/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/VR%20Wonderland/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/VR%20Wonderland/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/VR%20Wonderland/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/VR%20Wonderland/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/VR%20Wonderland/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/VR%20Wonderland/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/VR%20Wonderland/8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/VR%20Wonderland/9.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/VR%20Wonderland/10.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/VR%20Wonderland/11.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/VR%20Wonderland/12.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Games/VR%20Wonderland/13.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "VR Wonderland is an immersive entertainment destination offering advanced 7D virtual reality experiences with motion seats and multi-sensory effects, allowing visitors to explore new virtual worlds beyond imagination.",

        "highlights": [
            "7D virtual reality gaming experience",
            "Motion seats and immersive effects",
            "Family friendly entertainment",
            "Multiple VR games and simulations"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Comfortable Clothing"
        ],

        "facilities": [
            "VR Gaming Stations",
            "Motion Simulator Seats",
            "Interactive Gaming Arena"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "sky-high-delights-dinner-the-view-the-palm",
        "Supplier_Code": "DOJOIN",
        "slug": "sky-high-delights-dinner-the-view-the-palm",
        "title": "Sky High Delights: Dinner at The View at The Palm",
        "subtitle": "Dining experience with panoramic views of Palm Jumeirah",

        "category": "restaurants",
        "destination": "dubai",
        "location": "The View at The Palm, Palm Jumeirah, Dubai",

        "rating": 4.7,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Dinner Experience",
                "minutes": 90,
                "price": 230,
                "originalPrice": 230,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Restaurants/Sky%20High%20Delights%20Dinner%20at%20The%20View%20at%20The%20Palm/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Restaurants/Sky%20High%20Delights%20Dinner%20at%20The%20View%20at%20The%20Palm/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Restaurants/Sky%20High%20Delights%20Dinner%20at%20The%20View%20at%20The%20Palm/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Restaurants/Sky%20High%20Delights%20Dinner%20at%20The%20View%20at%20The%20Palm/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Restaurants/Sky%20High%20Delights%20Dinner%20at%20The%20View%20at%20The%20Palm/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Restaurants/Sky%20High%20Delights%20Dinner%20at%20The%20View%20at%20The%20Palm/6.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Discover an extraordinary dining experience at The View at The Palm, where you can enjoy delicious food while admiring some of Dubai’s most iconic landmarks. Located 240 meters above ground, the observation deck provides breathtaking 360-degree views of Palm Jumeirah, the Arabian Gulf, and Dubai’s skyline.",

        "highlights": [
            "Dinner experience at The View at The Palm",
            "Spectacular 360-degree views of Palm Jumeirah",
            "Located 240 meters above ground",
            "Perfect for couples and special occasions"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Smart Casual Dress",
            "Camera"
        ],

        "facilities": [
            "Observation Deck",
            "Fine Dining Restaurant",
            "Panoramic Viewing Area"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "hatta-wadi-hub-adventure-paradise-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "hatta-wadi-hub-adventure-paradise-dubai",
        "title": "Hatta Wadi Hub: Your Adventure Paradise Near Dubai, UAE",
        "subtitle": "Explore Hiking, Canyoning, Rock Climbing, and More in Hatta's Breathtaking Wadis",

        "category": "adventure",
        "destination": "dubai",
        "location": "Hatta Wadi Hub, Hatta, Dubai, UAE",

        "rating": 4.7,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Adventure Activity Pass",
                "minutes": 240,
                "price": 469,
                "originalPrice": 469,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Adventures/Hatta%20Wadi%20Hub/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Adventures/Hatta%20Wadi%20Hub/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Adventures/Hatta%20Wadi%20Hub/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Adventures/Hatta%20Wadi%20Hub/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Adventures/Hatta%20Wadi%20Hub/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Adventures/Hatta%20Wadi%20Hub/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Adventures/Hatta%20Wadi%20Hub/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Adventures/Hatta%20Wadi%20Hub/8.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Hatta Wadi Hub is the ultimate adventure destination near Dubai where multiple outdoor activities come together in one place. Visitors can experience thrilling adventures such as hiking, ziplining, rock climbing, canyoning, archery, rope courses, and more. Located about 135 km from Dubai, Hatta offers a stunning mountainous landscape and a refreshing escape from city life.",

        "highlights": [
            "Outdoor adventure activities in Hatta mountains",
            "Rock climbing and canyoning experiences",
            "Zipline and rope course adventures",
            "Archery and adrenaline-packed challenges",
            "Beautiful mountain landscapes and nature trails"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Comfortable Sportswear",
            "Closed-toe Shoes",
            "Water Bottle",
            "Camera"
        ],

        "facilities": [
            "Adventure Activity Zones",
            "Climbing Walls",
            "Zipline Courses",
            "Safety Equipment",
            "Visitor Facilities"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-marina-2-hour-catamaran-dinner-cruise",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-marina-2-hour-catamaran-dinner-cruise",
        "title": "Dubai Marina 2 Hour Catamaran Dinner Cruise",
        "subtitle": "International Buffet, Live Entertainment onboard, Refreshments and Welcome Drink",

        "category": "dinner cruise",
        "destination": "dubai",
        "location": "Dubai Marina, Dubai",

        "rating": 2.6,
        "reviewCount": 15,

        "durationOptions": [
            {
                "label": "2 Hour Dinner Cruise",
                "minutes": 120,
                "price": 99,
                "originalPrice": 99,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%202%20hour%20Catamaran%20Dinner%20Cruise/1.jpeg",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%202%20hour%20Catamaran%20Dinner%20Cruise/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%202%20hour%20Catamaran%20Dinner%20Cruise/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%202%20hour%20Catamaran%20Dinner%20Cruise/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%202%20hour%20Catamaran%20Dinner%20Cruise/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Enjoy a relaxing 2-hour catamaran dinner cruise in Dubai Marina featuring an international buffet, live entertainment, and beautiful views of the illuminated skyline.",

        "highlights": [
            "2-hour catamaran cruise at Dubai Marina",
            "International buffet dinner",
            "Live entertainment onboard",
            "Panoramic views of Dubai Marina skyline"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Camera"
        ],

        "facilities": [
            "Indoor & Outdoor Seating",
            "Buffet Dining Area",
            "Live Entertainment Stage"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-marina-dinner-cruise-lotus-mega-yacht",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-marina-dinner-cruise-at-lotus-mega-yacht",
        "title": "Dubai Marina Dinner Cruise at Lotus Mega Yacht",
        "subtitle": "3hr Cruise with 5-star buffet and refreshments",

        "category": "dinner cruise",
        "destination": "dubai",
        "location": "Dubai Marina, Dubai",

        "rating": 4.3,
        "reviewCount": 23,

        "durationOptions": [
            {
                "label": "3 Hour Mega Yacht Dinner Cruise",
                "minutes": 180,
                "price": 395,
                "originalPrice": 395,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%20Dinner%20Cruise%20at%20Lotus%20Mega%20Yacht/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%20Dinner%20Cruise%20at%20Lotus%20Mega%20Yacht/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%20Dinner%20Cruise%20at%20Lotus%20Mega%20Yacht/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%20Dinner%20Cruise%20at%20Lotus%20Mega%20Yacht/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%20Dinner%20Cruise%20at%20Lotus%20Mega%20Yacht/5.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Sail aboard the luxurious Lotus Mega Yacht and enjoy a premium dining cruise with buffet cuisine, music, and stunning views of Dubai Marina landmarks.",

        "highlights": [
            "Luxury mega yacht cruise",
            "International buffet dinner",
            "Live DJ and entertainment",
            "Views of Ain Dubai, JBR, and Palm Jumeirah"
        ],

        "whatToBring": [
            "Passport or ID",
            "Camera"
        ],

        "facilities": [
            "Luxury Yacht Deck",
            "Buffet Restaurant",
            "Live DJ Entertainment"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-harbour-dhow-cruise-dinner",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-harbour-dhow-cruise-dinner",
        "title": "Dubai Harbour Dhow Cruise Dinner",
        "subtitle": "2hr Cruising with Live Entertainment and Refreshments",

        "category": "dinner cruise",
        "destination": "dubai",
        "location": "Dubai Harbour, Dubai",

        "rating": 5.0,
        "reviewCount": 2,

        "durationOptions": [
            {
                "label": "2 Hour Dhow Dinner Cruise",
                "minutes": 120,
                "price": 95,
                "originalPrice": 95,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Harbour%20Dhow%20Cruise%20Dinner/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Harbour%20Dhow%20Cruise%20Dinner/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Harbour%20Dhow%20Cruise%20Dinner/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Harbour%20Dhow%20Cruise%20Dinner/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Enjoy a traditional wooden dhow dinner cruise at Dubai Harbour with buffet dining and live entertainment while sailing across the Arabian Gulf.",

        "highlights": [
            "Traditional dhow cruise",
            "International buffet dinner",
            "Live entertainment",
            "Dubai skyline views"
        ],

        "whatToBring": [
            "Passport or ID",
            "Camera"
        ],

        "facilities": [
            "Traditional Dhow Boat",
            "Buffet Dining",
            "Live Entertainment"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-creek-dinner-oberoi-dhow-cruise",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-creek-dinner-oberoi-dhow-cruise",
        "title": "Dubai Creek Dinner Oberoi Dhow Cruise",
        "subtitle": "2-hr Cruise, Full Course Buffet, Live Show, and Welcome Drinks",

        "category": "dinner cruise",
        "destination": "dubai",
        "location": "Dubai Creek, Dubai",

        "rating": 3.4,
        "reviewCount": 18,

        "durationOptions": [
            {
                "label": "2 Hour Dinner Cruise",
                "minutes": 120,
                "price": 45,
                "originalPrice": 45,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Creek%20Dinner%20Oberoi%20Dhow%20Cruise/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Creek%20Dinner%20Oberoi%20Dhow%20Cruise/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Creek%20Dinner%20Oberoi%20Dhow%20Cruise/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Creek%20Dinner%20Oberoi%20Dhow%20Cruise/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Creek%20Dinner%20Oberoi%20Dhow%20Cruise/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Enjoy a relaxing evening cruise along Dubai Creek with buffet dinner, cultural entertainment, and views of the historic waterfront.",

        "highlights": [
            "2-hour dhow cruise on Dubai Creek",
            "Full course buffet dinner",
            "Live entertainment show",
            "Traditional Arabian ambiance"
        ],

        "whatToBring": [
            "Passport or ID",
            "Camera"
        ],

        "facilities": [
            "Traditional Dhow Boat",
            "Buffet Dining Area",
            "Entertainment Stage"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-marina-xclusive-yacht-sunset-dinner-cruise",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-marina-xclusive-yacht-dinner-cruise",
        "title": "Dubai Marina Xclusive Yacht Sunset & Dinner Cruise",
        "subtitle": "Live Cooking Station, Musician on board and International Dinner",

        "category": "dinner cruise",
        "destination": "dubai",
        "location": "Dubai Marina, Dubai",

        "rating": 4.9,
        "reviewCount": 8,

        "durationOptions": [
            {
                "label": "Sunset Dinner Yacht Cruise",
                "minutes": 150,
                "price": 199,
                "originalPrice": 210,
                "discountPercent": 5
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%20Xclusive%20Yacht%20Sunset%20&%20Dinner%20Cruise/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%20Xclusive%20Yacht%20Sunset%20&%20Dinner%20Cruise/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%20Xclusive%20Yacht%20Sunset%20&%20Dinner%20Cruise/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%20Xclusive%20Yacht%20Sunset%20&%20Dinner%20Cruise/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%20Xclusive%20Yacht%20Sunset%20&%20Dinner%20Cruise/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Experience a luxury sunset yacht cruise in Dubai Marina with gourmet dining, live cooking stations, and beautiful skyline views.",

        "highlights": [
            "Luxury yacht sunset cruise",
            "Live cooking stations",
            "International dinner buffet",
            "Views of Ain Dubai and Marina skyline"
        ],

        "whatToBring": [
            "Passport or ID",
            "Camera"
        ],

        "facilities": [
            "Luxury Yacht",
            "Buffet Dining",
            "Live Music"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-creek-2-hour-dinner-dhow-cruise",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-creek-2-hour-dinner-at-dhow-cruise",
        "title": "Dubai Creek 2 Hour Dinner at Dhow Cruise",
        "subtitle": "Standard Dinner Buffet, Live Entertainment on Board, Water and Softdrinks",

        "category": "dinner cruise",
        "destination": "dubai",
        "location": "Dubai Creek, Dubai",

        "rating": 3.6,
        "reviewCount": 25,

        "durationOptions": [
            {
                "label": "2 Hour Dinner Cruise",
                "minutes": 120,
                "price": 45,
                "originalPrice": 50,
                "discountPercent": 10
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Creek%202%20hour%20Dinner%20at%20Dhow%20Cruise/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Creek%202%20hour%20Dinner%20at%20Dhow%20Cruise/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Creek%202%20hour%20Dinner%20at%20Dhow%20Cruise/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Creek%202%20hour%20Dinner%20at%20Dhow%20Cruise/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Enjoy a traditional dhow cruise along Dubai Creek featuring buffet dining, live entertainment, and views of historic Dubai landmarks.",

        "highlights": [
            "Traditional dhow cruise experience",
            "International buffet dinner",
            "Live cultural entertainment",
            "Dubai Creek skyline views"
        ],

        "whatToBring": [
            "Passport or ID",
            "Camera"
        ],

        "facilities": [
            "Dhow Cruise Boat",
            "Dining Area",
            "Entertainment Stage"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "abu-dhabi-dinner-cruise",
        "Supplier_Code": "DOJOIN",
        "slug": "abu-dhabi-dinner-cruise",
        "title": "Abu Dhabi Dinner Cruise",
        "subtitle": "Open Buffet Dinner with Water and Softdrinks",

        "category": "dinner cruise",
        "destination": "abu dhabi",
        "location": "Abu Dhabi Marina, UAE",

        "rating": 4.5,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Dinner Cruise",
                "minutes": 120,
                "price": 159,
                "originalPrice": 159,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Abu%20Dhabi%20Dinner%20Cruise/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Abu%20Dhabi%20Dinner%20Cruise/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Abu%20Dhabi%20Dinner%20Cruise/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Abu%20Dhabi%20Dinner%20Cruise/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Enjoy a relaxing evening dinner cruise in Abu Dhabi with buffet dining, soft drinks, and scenic waterfront views.",

        "highlights": [
            "Buffet dinner cruise",
            "Views of Abu Dhabi skyline",
            "Live entertainment",
            "Family friendly experience"
        ],

        "whatToBring": [
            "Passport or ID",
            "Camera"
        ],

        "facilities": [
            "Dining Deck",
            "Buffet Area",
            "Entertainment"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "al-mansour-mega-dhow-dubai-cultural-cruise",
        "Supplier_Code": "DOJOIN",
        "slug": "al-mansour-mega-dhow-dubai-cultural-cruise-reimagined",
        "title": "Al Mansour Mega Dhow – Dubai’s Cultural Cruise Reimagined",
        "subtitle": "Experience dining, culture, and coastal views aboard one of the largest traditional dhows",

        "category": "dinner cruise",
        "destination": "dubai",
        "location": "Dubai Marina / Dubai Harbour",

        "rating": 4.5,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Mega Dhow Dinner Cruise",
                "minutes": 120,
                "price": 99,
                "originalPrice": 99,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Al%20Mansour%20Mega%20Dhow/1.jpeg",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Al%20Mansour%20Mega%20Dhow/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Al%20Mansour%20Mega%20Dhow/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Al%20Mansour%20Mega%20Dhow/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Al%20Mansour%20Mega%20Dhow/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Al%20Mansour%20Mega%20Dhow/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Al%20Mansour%20Mega%20Dhow/7.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Al Mansour Mega Dhow offers a memorable cultural dining cruise with international buffet, entertainment, and stunning views of Dubai’s coastline.",

        "highlights": [
            "One of the largest traditional dhows",
            "International buffet dinner",
            "Cultural entertainment",
            "Dubai waterfront views"
        ],

        "whatToBring": [
            "Passport or ID",
            "Camera"
        ],

        "facilities": [
            "Mega Dhow Vessel",
            "Dining Hall",
            "Entertainment Area"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-harbour-2-hour-dhow-cruise-blue-water",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-harbour-2-hour-dhow-cruise-in-blue-water",
        "title": "Dubai Harbour 2 Hour Dhow Cruise in Blue Water",
        "subtitle": "Open Buffet, Unlimited Softdrinks and Live Entertainment",

        "category": "dinner cruise",
        "destination": "dubai",
        "location": "Dubai Harbour, Dubai",

        "rating": 3.7,
        "reviewCount": 36,

        "durationOptions": [
            {
                "label": "2 Hour Dinner Cruise",
                "minutes": 120,
                "price": 89,
                "originalPrice": 98,
                "discountPercent": 10
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Harbour%202%20Hour%20Dhow%20Cruise%20in%20Blue%20Water/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Harbour%202%20Hour%20Dhow%20Cruise%20in%20Blue%20Water/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Harbour%202%20Hour%20Dhow%20Cruise%20in%20Blue%20Water/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Harbour%202%20Hour%20Dhow%20Cruise%20in%20Blue%20Water/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Enjoy a traditional dhow dinner cruise at Dubai Harbour featuring buffet dining, live entertainment, and views of Dubai’s illuminated skyline.",

        "highlights": [
            "2-hour dhow cruise",
            "Buffet dinner with unlimited soft drinks",
            "Live entertainment onboard",
            "Night skyline views of Dubai Harbour"
        ],

        "whatToBring": [
            "Passport or ID",
            "Camera"
        ],

        "facilities": [
            "Traditional Dhow Boat",
            "Dining Deck",
            "Entertainment Stage"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-marina-dinner-dhow-cruise-ocean-express",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-marina-dinner-dhow-cruise-ocean-express",
        "title": "Dubai Marina Dinner Dhow Cruise at Ocean Express",
        "subtitle": "2hr Cruising, Traditional Performers, International Buffet and Refreshments",

        "category": "dinner cruise",
        "destination": "dubai",
        "location": "Dubai Marina, Dubai, UAE",

        "rating": 4.0,
        "reviewCount": 7,

        "durationOptions": [
            {
                "label": "2 Hour Dinner Dhow Cruise",
                "minutes": 120,
                "price": 295,
                "originalPrice": 295,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%20Dinner%20Dhow%20Cruise%20at%20Ocean%20Empress/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%20Dinner%20Dhow%20Cruise%20at%20Ocean%20Empress/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%20Dinner%20Dhow%20Cruise%20at%20Ocean%20Empress/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Dinner%20Cruise/Dubai%20Marina%20Dinner%20Dhow%20Cruise%20at%20Ocean%20Empress/4.webp",
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Empress Dinner Cruise Dubai offers a luxurious traditional dhow cruise experience along Dubai Marina. Guests can enjoy international buffet dining, traditional entertainment performances, and spectacular views of Dubai landmarks such as Dubai Harbour, Palm Jumeirah, Ain Dubai, Bluewaters Island, and JBR while sailing through the illuminated marina.",

        "highlights": [
            "2-hour dhow cruise through Dubai Marina",
            "International buffet dinner onboard",
            "Traditional live entertainment performances",
            "Views of Ain Dubai, Palm Jumeirah and JBR skyline",
            "Luxury dhow with indoor dining area"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Camera",
            "Comfortable evening attire"
        ],

        "facilities": [
            "Luxury Traditional Dhow",
            "Air-conditioned Dining Area",
            "Buffet Restaurant",
            "Entertainment Stage",
            "Panoramic Marina Views"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "2-nights-3-days-seoul-complete-korea-city-tour-airport-transfers",
        "Supplier_Code": "DOJOIN",
        "slug": "2-nights-3-days-seoul-complete-korea-city-tour-airport-transfers",
        "title": "2 Nights 3 Days Seoul - Complete Korea City Tour with Airport Transfers",
        "subtitle": "Seoul Highlights: Palaces, Temples & Markets Tour",

        "category": "holiday packages",
        "destination": "south korea",
        "location": "Seoul, South Korea",

        "rating": 4.5,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "3 Day Seoul City Tour Package",
                "minutes": 4320,
                "price": 1249,
                "originalPrice": 1249,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Ultimate%20Korea%20City%20Tour%20with%20Extended%20Free%20Time/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Ultimate%20Korea%20City%20Tour%20with%20Extended%20Free%20Time/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Ultimate%20Korea%20City%20Tour%20with%20Extended%20Free%20Time/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Ultimate%20Korea%20City%20Tour%20with%20Extended%20Free%20Time/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Ultimate%20Korea%20City%20Tour%20with%20Extended%20Free%20Time/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Explore Seoul with a 3-day guided city tour covering famous landmarks including Gyeongbokgung Palace, Jogyesa Temple, N Seoul Tower and traditional markets. The tour includes airport transfers and guided experiences across the cultural highlights of South Korea’s capital.",

        "highlights": [
            "Visit Gyeongbokgung Palace",
            "Explore Jogyesa Buddhist Temple",
            "Panoramic views from N Seoul Tower",
            "Traditional markets like Insadong & Namdaemun",
            "Airport transfer included"
        ],

        "whatToBring": [
            "Valid Passport",
            "Comfortable Walking Shoes",
            "Camera"
        ],

        "facilities": [
            "Airport Transfers",
            "Guided City Tour",
            "Transport Included",
            "Hotel Accommodation"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "complete-greece-classical-experience-7-day-athens-archaeological-sites-tour",
        "Supplier_Code": "DOJOIN",
        "slug": "7-day-athens-archaeological-sites-tour-with-olympia-delphi-meteora-4-star-luxury",
        "title": "Complete Greece Classical Experience: 7-Day Athens & Archaeological Sites Tour with Olympia, Delphi & Meteora - 4-Star Luxury",
        "subtitle": "Discover Ancient Greece's Greatest Treasures",

        "category": "holiday packages",
        "destination": "greece",
        "location": "Athens, Greece",

        "rating": 4.5,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "7 Day Greece Cultural Tour",
                "minutes": 10080,
                "price": 3770,
                "originalPrice": 4000,
                "discountPercent": 6
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Complete%20Greece%20Classical%20Experience/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Complete%20Greece%20Classical%20Experience/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Complete%20Greece%20Classical%20Experience/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Complete%20Greece%20Classical%20Experience/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Experience a 7-day cultural journey across Greece visiting Athens, Olympia, Delphi, and Meteora. Enjoy guided tours of historical sites including the Acropolis and Parthenon while staying in premium 4-star accommodations.",

        "highlights": [
            "Guided tour of the Acropolis & Parthenon",
            "Visit Olympia archaeological site",
            "Explore Delphi Temple of Apollo",
            "Discover Meteora monasteries",
            "4-Star luxury accommodation"
        ],

        "whatToBring": [
            "Passport",
            "Comfortable Walking Shoes",
            "Camera"
        ],

        "facilities": [
            "4-Star Hotel Accommodation",
            "Guided Tours",
            "Transportation Included",
            "Cultural Experiences"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "5-nights-6-days-seoul-ultimate-korea-city-tour-with-extended-free-time",
        "Supplier_Code": "DOJOIN",
        "slug": "5-nights-6-days-seoul-ultimate-korea-city-tour-with-extended-free-time",
        "title": "5 Nights 6 Days Seoul - Ultimate Korea City Tour with Extended Free Time",
        "subtitle": "Immerse in Seoul's Culture including Gyeongbok Palace, N Seoul Tower & Traditional Markets",

        "category": "holiday packages",
        "destination": "south korea",
        "location": "Seoul, South Korea",

        "rating": 4.5,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "6 Day Seoul Cultural Tour",
                "minutes": 8640,
                "price": 2138,
                "originalPrice": 2138,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Ultimate%20Korea%20City%20Tour%20with%20Extended%20Free%20Time/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Ultimate%20Korea%20City%20Tour%20with%20Extended%20Free%20Time/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Ultimate%20Korea%20City%20Tour%20with%20Extended%20Free%20Time/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Ultimate%20Korea%20City%20Tour%20with%20Extended%20Free%20Time/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Ultimate%20Korea%20City%20Tour%20with%20Extended%20Free%20Time/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Discover Seoul through a well-planned 6-day tour including guided visits to cultural landmarks, traditional markets and modern attractions with additional free time for personal exploration.",

        "highlights": [
            "Visit Gyeongbokgung Palace",
            "Explore Bukchon Hanok Village",
            "Visit N Seoul Tower",
            "Shop in Insadong and Namdaemun markets",
            "Free days for city exploration"
        ],

        "whatToBring": [
            "Passport",
            "Comfortable Shoes",
            "Camera"
        ],

        "facilities": [
            "Hotel Accommodation",
            "Guided Tours",
            "Transport Included",
            "Airport Transfers"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "seoul-discovery-4-night-5-day-tour",
        "Supplier_Code": "DOJOIN",
        "slug": "seoul-discovery-4-night-5-day-tour",
        "title": "4-Night Seoul Discovery Tour",
        "subtitle": "City Views, Cultural Highlights & Optional Wellness Experiences",

        "category": "holiday packages",
        "destination": "south korea",
        "location": "Seoul, South Korea",

        "rating": 4.5,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "5 Day Seoul Discovery Tour",
                "minutes": 7200,
                "price": 5731,
                "originalPrice": 6731,
                "discountPercent": 15
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/4-Night%20Seoul%20Discovery%20Tour/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/4-Night%20Seoul%20Discovery%20Tour/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/4-Night%20Seoul%20Discovery%20Tour/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/4-Night%20Seoul%20Discovery%20Tour/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/4-Night%20Seoul%20Discovery%20Tour/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/4-Night%20Seoul%20Discovery%20Tour/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/4-Night%20Seoul%20Discovery%20Tour/7.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Experience Seoul’s vibrant culture through a 5-day discovery tour including palace visits, traditional markets, modern city landmarks and optional wellness experiences.",

        "highlights": [
            "Explore Gyeongbokgung Palace",
            "Visit N Seoul Tower",
            "Walk through Bukchon Hanok Village",
            "Experience local markets and cuisine",
            "Optional wellness and cultural experiences"
        ],

        "whatToBring": [
            "Passport",
            "Comfortable Shoes",
            "Camera"
        ],

        "facilities": [
            "Hotel Accommodation",
            "Guided Tours",
            "Transport Services"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "flight-tickets",
        "Supplier_Code": "DOJOIN",
        "slug": "flight-tickets",
        "title": "Flight Tickets",
        "subtitle": "Your Gateway to Affordable Airfare",

        "category": "Holiday Packages",
        "destination": "global",
        "location": "Worldwide",

        "rating": 4.9,
        "reviewCount": 44,

        "durationOptions": [
            {
                "label": "Air Ticket Booking",
                "minutes": 0,
                "price": 300,
                "originalPrice": 300,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Flight%20Tickets/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Flight%20Tickets/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Flight%20Tickets/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Flight%20Tickets/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Holiday%20Packages/Flight%20Tickets/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Book affordable flight tickets worldwide through our platform. Whether planning a spontaneous trip or a well-planned vacation, we provide easy booking and competitive airfare options.",

        "highlights": [
            "Affordable international flight bookings",
            "Easy online reservation process",
            "Flexible travel options",
            "Worldwide destinations"
        ],

        "whatToBring": [
            "Passport",
            "Valid Visa (if required)",
            "Travel Documents"
        ],

        "facilities": [
            "Online Booking",
            "Customer Support",
            "Digital Ticketing"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-sharjah-half-day-dubai-city-tour",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-sharjah-half-day-dubai-city-tour",
        "title": "Dubai/Sharjah: Half Day Dubai City Tour",
        "subtitle": "with Pick Up and Drop Off",

        "category": "city tour",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 1.0,
        "reviewCount": 1,

        "durationOptions": [
            {
                "label": "Half Day Dubai City Tour",
                "minutes": 240,
                "price": 450,
                "originalPrice": 450,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Dubai%20Sharjah/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Dubai%20Sharjah/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Dubai%20Sharjah/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Dubai%20Sharjah/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Dubai%20Sharjah/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Discover Dubai’s incredible mix of modern luxury and cultural heritage with this half-day guided city tour. Visit iconic landmarks and explore traditional markets while learning about the city's fascinating transformation.",

        "highlights": [
            "Visit iconic Dubai landmarks",
            "Explore traditional souks and markets",
            "Professional city guide",
            "Hotel pick-up and drop-off included"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Comfortable Shoes",
            "Camera"
        ],

        "facilities": [
            "Air-conditioned transport",
            "Professional guide",
            "Pick-up and drop-off service"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-abu-dhabi-half-day-dubai-city-tour-from-abu-dhabi",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-abu-dhabi-half-day-dubai-city-tour-from-abu-dhabi",
        "title": "Dubai/Abu Dhabi : Half Day Dubai City Tour from Abu Dhabi",
        "subtitle": "with Pick Up and Drop Off",

        "category": "city tour",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 5.0,
        "reviewCount": 1,

        "durationOptions": [
            {
                "label": "Half Day Dubai City Tour",
                "minutes": 240,
                "price": 549,
                "originalPrice": 549,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Dubai%20Abu%20Dhabi/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Dubai%20Abu%20Dhabi/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Dubai%20Abu%20Dhabi/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Dubai%20Abu%20Dhabi/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Travel from Abu Dhabi to Dubai and experience the city's famous landmarks including historic sites and modern architectural wonders. The tour includes roundtrip hotel transfers and guided sightseeing.",

        "highlights": [
            "Visit Burj Al Arab and Palm Jumeirah",
            "Explore Dubai Marina and city skyline",
            "Roundtrip transfers from Abu Dhabi",
            "Professional guided tour"
        ],

        "whatToBring": [
            "Passport",
            "Comfortable Shoes",
            "Camera"
        ],

        "facilities": [
            "Air-conditioned vehicle",
            "Professional guide",
            "Pick-up and drop-off"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-city-highlights-tour",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-city-highlights-tour",
        "title": "Dubai City Tour",
        "subtitle": "Full-Day Dubai Tour – Iconic Landmarks, Comfortable Ride, and Pickup Included",

        "category": "city tour",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.8,
        "reviewCount": 8,

        "durationOptions": [
            {
                "label": "Full Day Dubai City Tour",
                "minutes": 480,
                "price": 650,
                "originalPrice": 650,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Dubai%20City%20Tour/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Dubai%20City%20Tour/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Dubai%20City%20Tour/3.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Explore Dubai’s most famous landmarks on a full-day guided tour including Burj Al Arab, Palm Jumeirah, Atlantis The Palm, Dubai Marina, and the Museum of the Future.",

        "highlights": [
            "Visit Burj Khalifa area and Downtown Dubai",
            "Photo stop at Burj Al Arab",
            "Drive through Palm Jumeirah",
            "Visit Atlantis The Palm",
            "Explore Dubai Marina"
        ],

        "whatToBring": [
            "Passport or ID",
            "Comfortable Shoes",
            "Camera"
        ],

        "facilities": [
            "Private vehicle",
            "Professional driver",
            "Air-conditioned transport"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-city-highlights-tour",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-city-highlights-tour",
        "title": "Dubai City Tour",
        "subtitle": "Full-Day Dubai Tour – Iconic Landmarks, Comfortable Ride, and Pickup Included",

        "category": "city tour",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.8,
        "reviewCount": 8,

        "durationOptions": [
            {
                "label": "Full Day Dubai City Tour",
                "minutes": 480,
                "price": 650,
                "originalPrice": 650,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Over%20Night%20Camping%20in%20Hatta/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Over%20Night%20Camping%20in%20Hatta/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Over%20Night%20Camping%20in%20Hatta/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Over%20Night%20Camping%20in%20Hatta/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Over%20Night%20Camping%20in%20Hatta/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Over%20Night%20Camping%20in%20Hatta/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Over%20Night%20Camping%20in%20Hatta/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Over%20Night%20Camping%20in%20Hatta/8.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Over%20Night%20Camping%20in%20Hatta/9.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Over%20Night%20Camping%20in%20Hatta/10.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Over%20Night%20Camping%20in%20Hatta/11.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/City%20Tours/Over%20Night%20Camping%20in%20Hatta/12.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Explore Dubai’s most famous landmarks on a full-day guided tour including Burj Al Arab, Palm Jumeirah, Atlantis The Palm, Dubai Marina, and the Museum of the Future.",

        "highlights": [
            "Visit Burj Khalifa area and Downtown Dubai",
            "Photo stop at Burj Al Arab",
            "Drive through Palm Jumeirah",
            "Visit Atlantis The Palm",
            "Explore Dubai Marina"
        ],

        "whatToBring": [
            "Passport or ID",
            "Comfortable Shoes",
            "Camera"
        ],

        "facilities": [
            "Private vehicle",
            "Professional driver",
            "Air-conditioned transport"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-wants-drama-private-luxury-limousine",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-wants-drama-private-luxury-limousine",
        "title": "Dubai wants Drama - Private Luxury Limousine",
        "subtitle": "Experience Luxury",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.5,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Luxury Limousine Experience",
                "minutes": 120,
                "price": 750,
                "originalPrice": 750,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Private%20Luxury%20Limousine/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Private%20Luxury%20Limousine/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Private%20Luxury%20Limousine/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Private%20Luxury%20Limousine/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Private%20Luxury%20Limousine/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Private%20Luxury%20Limousine/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Private%20Luxury%20Limousine/7.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Experience unparalleled luxury with a private limousine rental in Dubai. Enjoy spacious interiors, premium entertainment systems, and professional chauffeur service for an unforgettable luxury ride.",

        "highlights": [
            "Private luxury limousine experience",
            "Premium interior lighting and entertainment",
            "Professional chauffeur service",
            "Ideal for special events and VIP transport"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Booking confirmation"
        ],

        "facilities": [
            "Luxury limousine vehicle",
            "Professional chauffeur",
            "Premium sound system",
            "Luxury seating"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "premium-audi-rentals",
        "Supplier_Code": "DOJOIN",
        "slug": "premium-audi-rentals",
        "title": "Premium Audi Rentals in Dubai",
        "subtitle": "Experience German precision engineering with our premium Audi rentals",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Audi Rental",
                "minutes": 1440,
                "price": 1349,
                "originalPrice": 1349,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Premium%20Audi/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Premium%20Audi/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Premium%20Audi/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Premium%20Audi/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Premium%20Audi/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Drive through Dubai in style with a premium Audi rental. Combining German engineering, luxury interiors, and high performance, Audi vehicles provide a smooth and powerful driving experience.",

        "highlights": [
            "Premium Audi luxury vehicles",
            "High performance and comfort",
            "Ideal for business or leisure travel",
            "Modern technology and design"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Luxury Audi vehicles",
            "Air-conditioned interiors",
            "Advanced navigation systems"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "exclusive-bentley-rentals-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "exclusive-bentley-rentals-in-dubai",
        "title": "Exclusive Bentley Rentals In Dubai",
        "subtitle": "Luxury British craftsmanship at your fingertips",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.7,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Bentley Rental",
                "minutes": 1440,
                "price": 2136,
                "originalPrice": 2136,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Exclusive%20Bentley/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Exclusive%20Bentley/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Exclusive%20Bentley/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Exclusive%20Bentley/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Exclusive%20Bentley/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Experience unmatched luxury with a Bentley rental in Dubai. Known for handcrafted interiors and smooth performance, Bentley vehicles offer the ultimate luxury driving experience.",

        "highlights": [
            "Luxury Bentley vehicles",
            "Premium handcrafted interiors",
            "High performance and prestige",
            "Ideal for VIP experiences"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Luxury Bentley cars",
            "Premium interiors",
            "Advanced driving technology"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-lamborghini-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-lamborghini-in-dubai",
        "title": "Renting Lamborghini In Dubai",
        "subtitle": "The ultimate supercar experience",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.8,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Lamborghini Rental",
                "minutes": 1440,
                "price": 3999,
                "originalPrice": 3999,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Lamborghini/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Lamborghini/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Lamborghini/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Lamborghini/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Lamborghini/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Lamborghini/6.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent a Lamborghini in Dubai and experience the thrill of Italian supercar performance. Perfect for luxury travel, special events, or unforgettable driving adventures.",

        "highlights": [
            "Luxury Lamborghini supercars",
            "High-speed performance",
            "Premium driving experience",
            "Perfect for special occasions"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Luxury sports cars",
            "Premium interiors",
            "Advanced driving systems"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "hire",
        "Supplier_Code": "DOJOIN",
        "slug": "hire",
        "title": "Hire",
        "subtitle": "Dubai Airport Transfer Service",

        "category": "car",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.5,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Airport Transfer",
                "minutes": 60,
                "price": 180,
                "originalPrice": 240,
                "discountPercent": 25
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Hire/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Hire/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Hire/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Hire/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Hire/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Convenient airport transfer services in Dubai designed to provide comfortable and reliable transport between the airport and your hotel.",

        "highlights": [
            "Reliable airport transfer service",
            "Professional drivers",
            "Comfortable vehicles",
            "Door-to-door pickup and drop-off"
        ],

        "whatToBring": [
            "Passport",
            "Booking confirmation"
        ],

        "facilities": [
            "Private vehicle",
            "Air-conditioned transport",
            "Professional driver"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "airport-private-transfer-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "airport-private-transfer-in-dubai",
        "title": "Airport Private Transfer in Dubai",
        "subtitle": "Dubai Airport Transfers",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai International Airport, Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Private Airport Transfer",
                "minutes": 60,
                "price": 143,
                "originalPrice": 143,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Airport%20Private%20Transfer/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Airport%20Private%20Transfer/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Airport%20Private%20Transfer/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Airport%20Private%20Transfer/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Airport%20Private%20Transfer/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Airport%20Private%20Transfer/7.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Book a private airport transfer in Dubai for a comfortable and convenient journey between Dubai International Airport and your destination.",

        "highlights": [
            "Private airport transfer service",
            "Professional chauffeur service",
            "Comfortable and luxury vehicles",
            "Reliable and timely pickups"
        ],

        "whatToBring": [
            "Passport",
            "Flight details",
            "Booking confirmation"
        ],

        "facilities": [
            "Private transport",
            "Professional driver",
            "Air-conditioned vehicle"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-chevrolet-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-chevrolet-in-dubai",
        "title": "Renting Chevrolet In Dubai",
        "subtitle": "Practical, reliable Chevrolet rentals for family trips, business travel, and everyday convenience",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.5,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Chevrolet Rental",
                "minutes": 1440,
                "price": 1374,
                "originalPrice": 1374,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Chevrolet/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Chevrolet/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Chevrolet/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Chevrolet/.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent a Chevrolet in Dubai and enjoy reliability, comfort, and performance. With options ranging from stylish sedans to powerful SUVs and sports models, Chevrolet rentals provide modern features and smooth driving suitable for city trips and longer journeys.",

        "highlights": [
            "Wide range of Chevrolet models",
            "Reliable and comfortable driving experience",
            "Suitable for family trips or business travel",
            "Modern safety and comfort features"
        ],

        "whatToBring": [
            "Valid Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Air-conditioned vehicles",
            "Comfortable interiors",
            "Modern infotainment systems"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-dodge-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-dodge-in-dubai",
        "title": "Renting Dodge In Dubai",
        "subtitle": "Bold American performance rentals with powerful engines and striking design",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.5,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Dodge Rental",
                "minutes": 1440,
                "price": 556,
                "originalPrice": 556,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Dodge/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Dodge/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Dodge/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Dodge/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent a Dodge in Dubai and enjoy the power of American muscle cars combined with bold design. Known for strong performance and spacious interiors, Dodge vehicles offer an exciting driving experience.",

        "highlights": [
            "Powerful American muscle cars",
            "Aggressive performance and style",
            "Spacious interiors and modern features",
            "Perfect for thrill-seeking drivers"
        ],

        "whatToBring": [
            "Valid Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Performance vehicles",
            "Comfortable seating",
            "Advanced driving technology"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-ford-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-ford-in-dubai",
        "title": "Renting Ford In Dubai",
        "subtitle": "Versatile Ford rentals for every journey",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.5,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Ford Rental",
                "minutes": 1440,
                "price": 556,
                "originalPrice": 556,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Ford/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Ford/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Ford/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Ford/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Ford/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Ford/6.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent a Ford in Dubai and enjoy dependable performance, comfort, and versatility. From business-ready sedans to adventure SUVs, Ford rentals provide practicality and reliability.",

        "highlights": [
            "Versatile vehicle lineup",
            "Reliable performance",
            "Comfortable interiors",
            "Suitable for city and desert trips"
        ],

        "whatToBring": [
            "Valid Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Air-conditioned vehicles",
            "Comfortable seating",
            "Modern safety features"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-infiniti-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-infiniti-in-dubai",
        "title": "Renting Infiniti In Dubai",
        "subtitle": "Discover Japanese luxury with Infiniti rental fleet",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Infiniti Rental",
                "minutes": 1440,
                "price": 388,
                "originalPrice": 388,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Infiniti/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Infiniti/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Infiniti/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Infiniti/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent an Infiniti in Dubai and experience Japanese luxury combined with advanced technology. Infiniti vehicles offer premium comfort, sleek design, and smooth driving performance.",

        "highlights": [
            "Premium Japanese luxury vehicles",
            "Smooth and comfortable driving",
            "Elegant design and interiors",
            "Advanced safety technology"
        ],

        "whatToBring": [
            "Valid Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Luxury interiors",
            "Advanced infotainment systems",
            "Premium comfort seating"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-luxury-bmw-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-luxury-bmw-in-dubai",
        "title": "Renting Luxury BMW In Dubai",
        "subtitle": "Reserve the ultimate driving machine",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.7,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "BMW Rental",
                "minutes": 1440,
                "price": 1124,
                "originalPrice": 1124,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20BMW/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20BMW/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20BMW/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20BMW/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20BMW/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20BMW/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20BMW/7.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent a BMW in Dubai and experience the perfect blend of performance, luxury, and innovation. BMW vehicles offer powerful engines, sleek designs, and advanced technology.",

        "highlights": [
            "Premium German engineering",
            "High-performance driving experience",
            "Elegant design and interiors",
            "Ideal for business or leisure travel"
        ],

        "whatToBring": [
            "Valid Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Luxury interiors",
            "Advanced infotainment systems",
            "Powerful engines"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-luxury-cadillac-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-luxury-cadillac-in-dubai",
        "title": "Renting Luxury Cadillac In Dubai",
        "subtitle": "American luxury with comfort, technology and bold design",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Cadillac Rental",
                "minutes": 1440,
                "price": 962,
                "originalPrice": 962,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20Cadillac/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20Cadillac/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20Cadillac/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20Cadillac/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20Cadillac/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent a Cadillac in Dubai and enjoy American luxury combined with bold styling and advanced technology. Cadillac vehicles provide spacious interiors and a comfortable premium driving experience.",

        "highlights": [
            "Luxury American vehicles",
            "Spacious interiors",
            "Advanced technology features",
            "Smooth and comfortable ride"
        ],

        "whatToBring": [
            "Valid Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Luxury interiors",
            "Advanced driver assistance systems",
            "Premium comfort seating"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-mercedes-benz-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-mercedes-benz-in-dubai",
        "title": "Renting Mercedes Benz In Dubai",
        "subtitle": "Classic luxury meets modern innovation with our prestigious Mercedes-Benz rental fleet",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Mercedes Benz Rental",
                "minutes": 1440,
                "price": 499,
                "originalPrice": 499,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Mercedes%20Benz/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Mercedes%20Benz/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Mercedes%20Benz/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Mercedes%20Benz/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Mercedes%20Benz/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent a Mercedes-Benz in Dubai and enjoy the perfect blend of luxury, performance, and advanced technology. From elegant sedans to powerful SUVs, Mercedes vehicles deliver comfort, style, and refined driving experiences.",

        "highlights": [
            "Prestigious Mercedes-Benz luxury vehicles",
            "Elegant design and premium interiors",
            "Advanced safety and driving technology",
            "Ideal for luxury city travel"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Luxury interiors",
            "Advanced infotainment system",
            "Premium comfort seating"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-jaguar-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-jaguar-in-dubai",
        "title": "Renting Jaguar In Dubai",
        "subtitle": "British luxury performance vehicles for discerning clients",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Jaguar Rental",
                "minutes": 1440,
                "price": 811,
                "originalPrice": 811,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Jaguar/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Jaguar/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Jaguar/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Jaguar/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent a Jaguar in Dubai and enjoy a blend of British luxury, sport performance, and elegant styling. Jaguar vehicles offer refined interiors and dynamic driving experiences.",

        "highlights": [
            "Luxury British performance cars",
            "Elegant design and refined interiors",
            "Powerful engine performance",
            "Perfect for luxury city driving"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Luxury seating",
            "Premium interior finish",
            "Advanced driving systems"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-lexus-lc-500-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-lexus-lc-500-in-dubai",
        "title": "Renting Lexus LC 500 In Dubai",
        "subtitle": "Enjoy renowned reliability and refined comfort with our premium Lexus rental options",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Lexus LC 500 Rental",
                "minutes": 1440,
                "price": 888,
                "originalPrice": 888,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Lexus%20LC%20500/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Lexus%20LC%20500/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Lexus%20LC%20500/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Lexus%20LC%20500/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Experience the perfect balance of luxury, reliability, and performance with a Lexus rental in Dubai. Lexus vehicles offer smooth handling, elegant design, and advanced technology.",

        "highlights": [
            "Premium Lexus luxury vehicles",
            "Smooth driving performance",
            "Elegant design and comfort",
            "Advanced safety technology"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Luxury interior",
            "Advanced infotainment",
            "Comfort seating"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-kia-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-kia-in-dubai",
        "title": "Renting Kia In Dubai",
        "subtitle": "Budget-friendly Kia rentals offering exceptional value with modern features",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.5,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Kia Rental",
                "minutes": 1440,
                "price": 499,
                "originalPrice": 499,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Kia/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Kia/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Kia/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Kia/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Kia/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent a Kia in Dubai and enjoy a comfortable, practical, and budget-friendly vehicle for everyday travel. Kia vehicles provide reliability and modern technology.",

        "highlights": [
            "Affordable and reliable vehicles",
            "Comfortable interiors",
            "Modern safety features",
            "Great for city travel"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Air-conditioned vehicles",
            "Comfort seating",
            "Modern infotainment"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-maserati-ghibli-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-maserati-ghibli-in-dubai",
        "title": "Renting Maserati Ghibli In Dubai",
        "subtitle": "Experience Italian racing heritage with exclusive Maserati rentals",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Maserati Ghibli Rental",
                "minutes": 1440,
                "price": 600,
                "originalPrice": 600,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Maserati%20Ghibli/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Maserati%20Ghibli/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Maserati%20Ghibli/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Maserati%20Ghibli/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent a Maserati in Dubai and experience Italian elegance with thrilling performance. Maserati vehicles deliver luxurious interiors and powerful engines for a unique driving experience.",

        "highlights": [
            "Italian luxury sports sedan",
            "Powerful performance engine",
            "Luxury interior design",
            "Perfect for premium travel experiences"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Premium leather interiors",
            "Advanced infotainment system",
            "High-performance engine"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-luxury-land-rovers-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-luxury-land-rovers-in-dubai",
        "title": "Renting Luxury Land Rovers In Dubai",
        "subtitle": "Luxury meets capability with our premium Land Rover rentals",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.7,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Land Rover Rental",
                "minutes": 1440,
                "price": 1374,
                "originalPrice": 1374,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20Land%20Rovers/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20Land%20Rovers/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20Land%20Rovers/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Luxury%20Land%20Rovers/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent a Land Rover in Dubai and experience luxury combined with rugged off-road capability. Built for both city and desert adventures, Land Rover vehicles offer comfort, performance, and prestige.",

        "highlights": [
            "Luxury off-road SUVs",
            "Advanced terrain capability",
            "Premium interiors",
            "Ideal for desert and city travel"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Luxury SUV interiors",
            "Advanced navigation system",
            "Premium comfort seating"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-nissan-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-nissan-in-dubai",
        "title": "Renting Nissan In Dubai",
        "subtitle": "Reliable, practical Nissan rentals for business trips, family vacations, and everyday needs",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.5,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Nissan Rental",
                "minutes": 1440,
                "price": 499,
                "originalPrice": 499,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Nissan/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Nissan/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Nissan/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Nissan/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Nissan/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent a Nissan in Dubai and enjoy a reliable, comfortable, and versatile driving experience. From compact cars to spacious SUVs, Nissan offers modern features, smooth performance, and practicality for every journey.",

        "highlights": [
            "Reliable and practical vehicles",
            "Comfortable interiors",
            "Fuel-efficient options",
            "Ideal for family or business trips"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Air conditioning",
            "Comfort seating",
            "Modern infotainment"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "rent-porsche-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "rent-porsche-in-dubai",
        "title": "Rent Porsche in Dubai",
        "subtitle": "Unleash legendary performance with our Porsche rentals - precision engineering for driving enthusiasts",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.7,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Porsche Rental",
                "minutes": 1440,
                "price": 1593,
                "originalPrice": 1593,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Porsche/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Porsche/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Porsche/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Porsche/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Experience the thrill of high-performance driving with a Porsche rental in Dubai. Known for its sleek design, powerful engines, and precision engineering, Porsche delivers an exhilarating yet refined ride.",

        "highlights": [
            "Legendary sports car performance",
            "Premium luxury interiors",
            "Precision engineering",
            "Perfect for luxury driving experiences"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Sport performance engine",
            "Luxury interior",
            "Advanced navigation system"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "rent-range-rover-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "rent-range-rover-in-dubai",
        "title": "Rent Range Rover in Dubai",
        "subtitle": "Combining luxury with all-terrain capability",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.7,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Range Rover Rental",
                "minutes": 1440,
                "price": 561,
                "originalPrice": 561,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Range%20Rover/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Range%20Rover/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Range%20Rover/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Range%20Rover/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Range%20Rover/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Range%20Rover/7.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Range%20Rover/6.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent a Range Rover in Dubai and enjoy the perfect combination of luxury, power, and off-road capability. With spacious interiors and advanced technology, it delivers comfort and performance on every journey.",

        "highlights": [
            "Luxury SUV experience",
            "Advanced terrain capability",
            "Premium interiors",
            "Ideal for city and desert driving"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Luxury seating",
            "Advanced navigation",
            "All-terrain driving modes"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-ultra-luxury-rolls-royce-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-ultra-luxury-rolls-royce-in-dubai",
        "title": "Renting Ultra-Luxury Rolls Royce In Dubai",
        "subtitle": "The pinnacle of automotive prestige",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.8,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Rolls Royce Rental",
                "minutes": 1440,
                "price": 3824,
                "originalPrice": 3824,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Ultra-Luxury%20Rolls%20Royce/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Ultra-Luxury%20Rolls%20Royce/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Ultra-Luxury%20Rolls%20Royce/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Ultra-Luxury%20Rolls%20Royce/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Ultra-Luxury%20Rolls%20Royce/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Experience unmatched elegance and luxury by renting a Rolls Royce in Dubai. With opulent interiors, iconic design, and exceptional comfort, every journey becomes an extraordinary experience.",

        "highlights": [
            "Ultra-luxury automotive experience",
            "Iconic Rolls Royce craftsmanship",
            "Supreme comfort and elegance",
            "Perfect for VIP experiences"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Luxury leather interiors",
            "Premium sound system",
            "Advanced comfort features"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-toyota-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-toyota-in-dubai",
        "title": "Renting Toyota In Dubai",
        "subtitle": "Dependable Toyota rentals offering peace of mind with exceptional reliability and efficiency",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.5,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Toyota Rental",
                "minutes": 1440,
                "price": 666,
                "originalPrice": 666,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Toyota/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Toyota/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Toyota/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Toyota/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent a Toyota in Dubai for a dependable, efficient, and comfortable driving experience. Toyota vehicles are known for reliability, practicality, and smooth performance.",

        "highlights": [
            "Reliable and durable vehicles",
            "Fuel-efficient performance",
            "Comfortable interiors",
            "Great for daily travel"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Air conditioning",
            "Comfort seating",
            "Modern infotainment"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-brabus-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-brabus-in-dubai",
        "title": "Renting Brabus In Dubai",
        "subtitle": "Experience the thrill where power meets luxury",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.8,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Brabus Rental",
                "minutes": 1440,
                "price": 3332,
                "originalPrice": 3332,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Brabus/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Brabus/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Brabus/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Brabus/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Drive a Brabus in Dubai and experience unmatched performance, luxury, and bold design. Brabus vehicles are tuned for exceptional power and exclusivity.",

        "highlights": [
            "High-performance luxury vehicles",
            "Exclusive Brabus tuning",
            "Premium interiors",
            "Iconic design and power"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "High-performance engine",
            "Luxury interior",
            "Advanced infotainment"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "renting-mini-cooper-in-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "renting-mini-cooper-in-dubai",
        "title": "Renting Mini Cooper In Dubai",
        "subtitle": "Stylish, compact city explorers",

        "category": "car rental",
        "destination": "dubai",
        "location": "Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Mini Cooper Rental",
                "minutes": 1440,
                "price": 311,
                "originalPrice": 311,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Mini%20Cooper/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Mini%20Cooper/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Mini%20Cooper/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Mini%20Cooper/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Car%20Rental/Mini%20Cooper/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Rent a Mini Cooper in Dubai for a fun, stylish, and agile driving experience. Its compact design and sporty performance make it perfect for navigating city streets.",

        "highlights": [
            "Compact stylish design",
            "Sporty driving experience",
            "Perfect for city travel",
            "Comfortable interiors"
        ],

        "whatToBring": [
            "Driving License",
            "Passport",
            "Credit Card"
        ],

        "facilities": [
            "Modern infotainment",
            "Comfort seating",
            "Air conditioning"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "bosnia-visa-assist",
        "Supplier_Code": "DOJOIN",
        "slug": "bosnia-visa-assist",
        "title": "Bosnia Visa Assist",
        "subtitle": "From document prep to embassy appointment, we've got you covered",

        "category": "visa-service",
        "destination": "bosnia",
        "location": "Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Bosnia Visa Assistance",
                "minutes": 10080,
                "price": 650,
                "originalPrice": 650,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Bosnia%20Visa%20Assist/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Bosnia%20Visa%20Assist/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Bosnia%20Visa%20Assist/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Bosnia%20Visa%20Assist/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Bosnia%20Visa%20Assist/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Bosnia%20Visa%20Assist/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Bosnia%20Visa%20Assist/7.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Considering traveling from the United Arab Emirates to Bosnia? DoJoin assists with the visa process including document preparation, submission guidance, and embassy appointment coordination.",

        "highlights": [
            "Complete visa documentation support",
            "Embassy appointment assistance",
            "Guidance throughout visa process",
            "Quick and professional support"
        ],

        "whatToBring": [
            "Valid Passport",
            "Passport-size Photograph",
            "Emirates ID Copy",
            "Residence Visa Copy"
        ],

        "facilities": [
            "Visa consultation",
            "Document verification",
            "Application support"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "uk-visa-assist",
        "Supplier_Code": "DOJOIN",
        "slug": "uk-visa-assist",
        "title": "UK Visa Assist",
        "subtitle": "Gateway to the UK",

        "category": "visa-service",
        "destination": "united-kingdom",
        "location": "Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "UK Visa Assistance",
                "minutes": 10080,
                "price": 3650,
                "originalPrice": 3650,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/UK%20Visa%20Assist/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/UK%20Visa%20Assist/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/UK%20Visa%20Assist/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/UK%20Visa%20Assist/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/UK%20Visa%20Assist/5.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/UK%20Visa%20Assist/6.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/UK%20Visa%20Assist/7.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "DoJoin provides complete UK visa assistance including document preparation, application support, and guidance for multiple visa types including 6-month, 2-year, and 5-year visas.",

        "highlights": [
            "Complete visa assistance",
            "Multiple visa duration options",
            "Professional document review",
            "Fast processing guidance"
        ],

        "whatToBring": [
            "Passport",
            "Passport Photo",
            "Bank Statement",
            "Travel Documents"
        ],

        "facilities": [
            "Visa consultation",
            "Document preparation",
            "Application submission guidance"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "uae-tourist-visa",
        "Supplier_Code": "DOJOIN",
        "slug": "uae-tourist-visa",
        "title": "UAE Tourist Visa",
        "subtitle": "Easy UAE tourist visa service",

        "category": "visa-service",
        "destination": "uae",
        "location": "Dubai, UAE",

        "rating": 4.9,
        "reviewCount": 21,

        "durationOptions": [
            {
                "label": "Tourist Visa Processing",
                "minutes": 4320,
                "price": 399,
                "originalPrice": 399,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/UAE%20Tourist%20Visa/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/UAE%20Tourist%20Visa/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/UAE%20Tourist%20Visa/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/UAE%20Tourist%20Visa/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Dubai and other UAE cities are rapidly growing global tourism destinations. DoJoin provides fast UAE tourist visa processing with reliable support and guidance.",

        "highlights": [
            "Quick UAE visa processing",
            "90-day stay option",
            "Multiple entry options available",
            "Professional visa assistance"
        ],

        "whatToBring": [
            "Passport Copy",
            "Passport Photo",
            "Travel Details"
        ],

        "facilities": [
            "Visa application support",
            "Document verification",
            "Customer support"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "canada-visa-assist",
        "Supplier_Code": "DOJOIN",
        "slug": "canada-visa-assist",
        "title": "Canada Visa Assist",
        "subtitle": "Quick and Easy Visa Assistance",

        "category": "visa-service",
        "destination": "canada",
        "location": "Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Canada Visa Assistance",
                "minutes": 10080,
                "price": 1850,
                "originalPrice": 1850,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Canada%20Visa%20Assist/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Canada%20Visa%20Assist/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Canada%20Visa%20Assist/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Canada%20Visa%20Assist/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Canada%20Visa%20Assist/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "DoJoin helps travelers apply for Canada visas by assisting with documentation, requirements, and the full application process.",

        "highlights": [
            "Complete visa support",
            "Document verification",
            "Professional guidance",
            "Travel assistance"
        ],

        "whatToBring": [
            "Passport",
            "Financial Documents",
            "Photographs",
            "Travel Plan"
        ],

        "facilities": [
            "Visa consultation",
            "Application support",
            "Document preparation"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "australia-visa-assist",
        "Supplier_Code": "DOJOIN",
        "slug": "australia-visa-assist",
        "title": "Australia Visa Assist",
        "subtitle": "Visa Made Easy",

        "category": "visa-service",
        "destination": "australia",
        "location": "Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Australia Visa Assistance",
                "minutes": 10080,
                "price": 1650,
                "originalPrice": 1650,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Australia%20Visa%20Assist/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Australia%20Visa%20Assist/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Australia%20Visa%20Assist/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Australia%20Visa%20Assist/4.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Australia%20Visa%20Assist/5.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Australia is a top travel destination for adventure, relaxation, and business. DoJoin simplifies the visa process by helping you submit documents and guiding you through the application.",

        "highlights": [
            "Complete visa assistance",
            "Application form support",
            "Document review",
            "Professional visa consultation"
        ],

        "whatToBring": [
            "Passport",
            "Passport Photo",
            "Application Form",
            "Financial Documents"
        ],

        "facilities": [
            "Visa consultation",
            "Document review",
            "Application guidance"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "turkey-visa-assist",
        "Supplier_Code": "DOJOIN",
        "slug": "turkey-visa-assist",
        "title": "Turkey Visa Assist",
        "subtitle": "Easy and Hassle-Free",

        "category": "visa-service",
        "destination": "turkey",
        "location": "Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 0,

        "durationOptions": [
            {
                "label": "Turkey Visa Assistance",
                "minutes": 10080,
                "price": 650,
                "originalPrice": 650,
                "discountPercent": 0
            }
        ],

        "images": [
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Turkey%20Visa%20Assist/1.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Turkey%20Visa%20Assist/2.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Turkey%20Visa%20Assist/3.webp",
            "https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/media/products/Visa%20Services/Turkey%20Visa%20Assist/4.webp",
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "DoJoin makes the Turkey visa application process easy by assisting with online application forms, travel arrangements, hotel bookings, and documentation.",

        "highlights": [
            "Simple visa application process",
            "Travel and hotel booking assistance",
            "Professional visa support",
            "Complete documentation guidance"
        ],

        "whatToBring": [
            "Passport",
            "Passport Photo",
            "Travel Details",
            "Financial Documents"
        ],

        "facilities": [
            "Visa consultation",
            "Application support",
            "Document preparation"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "andaz-the-palm",
        "Supplier_Code": "DOJOIN",
        "slug": "andaz-the-palm",
        "title": "Andaz The Palm",
        "subtitle": "Luxury beachfront hotel experience at Palm Jumeirah",

        "category": "hotel",
        "destination": "dubai",
        "location": "Palm Jumeirah, Dubai, UAE",

        "rating": 4.7,
        "reviewCount": 140,

        "durationOptions": [
            {
                "label": "Hotel Stay",
                "minutes": 1440,
                "price": 875,
                "originalPrice": 875,
                "discountPercent": 0
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Experience the ultimate in luxury at Andaz The Palm in Dubai. Located on the iconic Palm Jumeirah, this magnificent hotel offers breathtaking views of the Arabian Gulf and unparalleled hospitality.",

        "highlights": [
            "Luxury beachfront resort on Palm Jumeirah",
            "Panoramic views of the Arabian Gulf",
            "World-class dining experiences",
            "Premium spa and wellness facilities",
            "Easy access to Dubai attractions"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Booking confirmation"
        ],

        "facilities": [
            "Swimming Pool",
            "Spa & Wellness Center",
            "Private Beach",
            "Restaurants & Bars",
            "Fitness Center"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "holiday-inn-al-maktoum",
        "Supplier_Code": "DOJOIN",
        "slug": "holiday-inn-al-maktoum",
        "title": "Holiday Inn Al Maktoum",
        "subtitle": "Comfortable stay near Al Maktoum International Airport",

        "category": "hotel",
        "destination": "dubai",
        "location": "Dubai South, Near Al Maktoum International Airport, Dubai",

        "rating": 4.4,
        "reviewCount": 120,

        "durationOptions": [
            {
                "label": "Hotel Stay",
                "minutes": 1440,
                "price": 480,
                "originalPrice": 480,
                "discountPercent": 0
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Located near Al Maktoum International Airport and Dubai Parks & Resorts, Holiday Inn Dubai Al-Maktoum Airport offers comfortable rooms, modern amenities, and convenient access to major attractions.",

        "highlights": [
            "Close to Al Maktoum International Airport",
            "Modern comfortable rooms",
            "Dining and meeting facilities",
            "Outdoor swimming pool",
            "Fitness center"
        ],

        "whatToBring": [
            "Valid ID",
            "Booking confirmation"
        ],

        "facilities": [
            "Swimming Pool",
            "Restaurant",
            "Conference Rooms",
            "Fitness Center",
            "Airport Accessibility"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "lapita-hotel-dubai-parks-resorts",
        "Supplier_Code": "DOJOIN",
        "slug": "lapita-hotel-dubai-parks-resorts",
        "title": "Lapita Hotel with Free Access to Dubai Parks and Resorts",
        "subtitle": "Polynesian-themed luxury stay with theme park access",

        "category": "hotel",
        "destination": "dubai",
        "location": "Dubai Parks and Resorts, Dubai, UAE",

        "rating": 4.0,
        "reviewCount": 2,

        "durationOptions": [
            {
                "label": "Hotel Stay with Park Access",
                "minutes": 1440,
                "price": 1190,
                "originalPrice": 1390,
                "discountPercent": 14
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Lapita Hotel immerses guests in the spirit of the Polynesian islands while offering luxury accommodations and direct access to Dubai Parks and Resorts.",

        "highlights": [
            "Polynesian-themed resort",
            "Free access to Dubai Parks and Resorts",
            "Luxury family-friendly accommodation",
            "Located within the theme park complex"
        ],

        "whatToBring": [
            "Passport or ID",
            "Booking confirmation"
        ],

        "facilities": [
            "Theme Park Access",
            "Swimming Pools",
            "Restaurants",
            "Kids Activities",
            "Spa"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "abu-dhabi-crown-plaza-theme-park-access",
        "Supplier_Code": "DOJOIN",
        "slug": "abu-dhabi-crown-plaza-theme-park-access",
        "title": "Abu Dhabi Crown Plaza with Free Access to the Theme Parks",
        "subtitle": "Stay & Play Getaway Offer",

        "category": "hotel",
        "destination": "abu-dhabi",
        "location": "Yas Island, Abu Dhabi, UAE",

        "rating": 5.0,
        "reviewCount": 3,

        "durationOptions": [
            {
                "label": "Hotel Stay with Theme Park Access",
                "minutes": 1440,
                "price": 1195,
                "originalPrice": 1541,
                "discountPercent": 22
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Enjoy luxurious accommodation with breathtaking views in Abu Dhabi while getting access to the exciting Yas Island theme parks.",

        "highlights": [
            "Stay near Yas Island attractions",
            "Theme park access included",
            "Luxury accommodation",
            "Ideal family getaway"
        ],

        "whatToBring": [
            "Passport or ID",
            "Booking confirmation"
        ],

        "facilities": [
            "Luxury Rooms",
            "Swimming Pool",
            "Restaurants",
            "Theme Park Shuttle",
            "Spa & Fitness Center"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dibba-mountain-park-resort",
        "Supplier_Code": "DOJOIN",
        "slug": "dibba-mountain-park-resort",
        "title": "Dibba Mountain Park Resort",
        "subtitle": "Mountain resort retreat experience",

        "category": "hotel",
        "destination": "fujairah",
        "location": "Dibba, Fujairah, UAE",

        "rating": 4.5,
        "reviewCount": 50,

        "durationOptions": [
            {
                "label": "Resort Stay",
                "minutes": 1440,
                "price": 816,
                "originalPrice": 816,
                "discountPercent": 0
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Dibba Mountain Park Resort offers a peaceful mountain retreat where visitors can relax, enjoy scenic landscapes, and experience outdoor adventures.",

        "highlights": [
            "Mountain resort location",
            "Nature views and fresh air",
            "Family-friendly activities",
            "Comfortable accommodation"
        ],

        "whatToBring": [
            "Valid ID",
            "Comfortable clothing"
        ],

        "facilities": [
            "Swimming Pool",
            "Outdoor Activities",
            "Restaurant",
            "Nature Trails"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dibba-mountain-park-resort",
        "Supplier_Code": "DOJOIN",
        "slug": "dibba-mountain-park-resort",
        "title": "Dibba Mountain Park Resort",
        "subtitle": "Mountain resort retreat experience",

        "category": "hotel",
        "destination": "fujairah",
        "location": "Dibba, Fujairah, UAE",

        "rating": 4.5,
        "reviewCount": 50,

        "durationOptions": [
            {
                "label": "Resort Stay",
                "minutes": 1440,
                "price": 816,
                "originalPrice": 816,
                "discountPercent": 0
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Dibba Mountain Park Resort offers a peaceful mountain retreat where visitors can relax, enjoy scenic landscapes, and experience outdoor adventures.",

        "highlights": [
            "Mountain resort location",
            "Nature views and fresh air",
            "Family-friendly activities",
            "Comfortable accommodation"
        ],

        "whatToBring": [
            "Valid ID",
            "Comfortable clothing"
        ],

        "facilities": [
            "Swimming Pool",
            "Outdoor Activities",
            "Restaurant",
            "Nature Trails"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "relaxation-package-pullman-resort-al-marjan-island",
        "Supplier_Code": "DOJOIN",
        "slug": "relaxation-package-pullman-resort-al-marjan-island",
        "title": "Relaxation Package at Pullman Resort Al Marjan Island",
        "subtitle": "Experience ultimate relaxation with luxury spa treatments",

        "category": "hotel-package",
        "destination": "ras-al-khaimah",
        "location": "Al Marjan Island, Ras Al Khaimah, UAE",

        "rating": 4.6,
        "reviewCount": 80,

        "durationOptions": [
            {
                "label": "Relaxation Package",
                "minutes": 1440,
                "price": 669,
                "originalPrice": 669,
                "discountPercent": 0
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Relax in luxury at Pullman Resort Al Marjan Island with premium spa treatments including aromatherapy, hot stone, Balinese, Swedish, and deep tissue massages.",

        "highlights": [
            "Luxury beachfront resort",
            "Spa treatments included",
            "Relaxing island environment",
            "Premium hospitality experience"
        ],

        "whatToBring": [
            "Valid ID",
            "Comfortable clothing"
        ],

        "facilities": [
            "Luxury Spa",
            "Beach Access",
            "Swimming Pools",
            "Restaurants",
            "Fitness Center"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "al-faya-retreat",
        "Supplier_Code": "DOJOIN",
        "slug": "al-faya-retreat",
        "title": "Al Faya Retreat",
        "subtitle": "Experience the Ultimate in Classic Elegance",

        "category": "hotel",
        "destination": "sharjah",
        "location": "Mleiha Desert, Sharjah, UAE",

        "rating": 4.7,
        "reviewCount": 25,

        "durationOptions": [
            {
                "label": "Retreat Stay",
                "minutes": 1440,
                "price": 3499,
                "originalPrice": 3499,
                "discountPercent": 0
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Al Faya Retreat transforms the desert into a luxurious sanctuary. Located in the Sharjah desert, the retreat blends modern architecture with Bedouin hospitality, offering a unique desert getaway.",

        "highlights": [
            "Luxury desert retreat",
            "Spa and wellness facilities",
            "Private swimming pool",
            "Authentic Bedouin hospitality",
            "Stunning desert views"
        ],

        "whatToBring": [
            "Passport or ID",
            "Comfortable clothing",
            "Camera"
        ],

        "facilities": [
            "Luxury Spa",
            "Swimming Pool",
            "Private Suites",
            "Desert Experience Activities"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "al-faya-retreat",
        "Supplier_Code": "DOJOIN",
        "slug": "al-faya-retreat",
        "title": "Al Faya Retreat",
        "subtitle": "Experience the Ultimate in Classic Elegance",

        "category": "hotel",
        "destination": "sharjah",
        "location": "Mleiha Desert, Sharjah, UAE",

        "rating": 4.7,
        "reviewCount": 25,

        "durationOptions": [
            {
                "label": "Retreat Stay",
                "minutes": 1440,
                "price": 3499,
                "originalPrice": 3499,
                "discountPercent": 0
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Al Faya Retreat transforms the desert into a luxurious sanctuary. Located in the Sharjah desert, the retreat blends modern architecture with Bedouin hospitality, offering a unique desert getaway.",

        "highlights": [
            "Luxury desert retreat",
            "Spa and wellness facilities",
            "Private swimming pool",
            "Authentic Bedouin hospitality",
            "Stunning desert views"
        ],

        "whatToBring": [
            "Passport or ID",
            "Comfortable clothing",
            "Camera"
        ],

        "facilities": [
            "Luxury Spa",
            "Swimming Pool",
            "Private Suites",
            "Desert Experience Activities"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "holiday-inn-express-internet-city",
        "Supplier_Code": "DOJOIN",
        "slug": "holiday-inn-express-internet-city",
        "title": "Holiday Inn Express Int City",
        "subtitle": "Affordable comfort in Dubai Internet City",

        "category": "hotel",
        "destination": "dubai",
        "location": "Dubai Internet City, Dubai, UAE",

        "rating": 4.5,
        "reviewCount": 120,

        "durationOptions": [
            {
                "label": "Hotel Stay",
                "minutes": 1440,
                "price": 225,
                "originalPrice": 300,
                "discountPercent": 25
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Holiday Inn Express Internet City offers comfortable and affordable accommodation with modern facilities in one of Dubai's most dynamic business districts.",

        "highlights": [
            "Affordable hotel stay in Dubai",
            "Close to Dubai Internet City metro",
            "Comfortable rooms and breakfast buffet",
            "Ideal for business travelers"
        ],

        "whatToBring": [
            "Passport or ID",
            "Booking confirmation"
        ],

        "facilities": [
            "Restaurant",
            "Business Center",
            "Fitness Center",
            "Free WiFi"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "atlantis-the-palm",
        "Supplier_Code": "DOJOIN",
        "slug": "atlantis-the-palm",
        "title": "Atlantis the Palm",
        "subtitle": "Luxury resort experience on Palm Jumeirah",

        "category": "hotel",
        "destination": "dubai",
        "location": "Palm Jumeirah, Dubai, UAE",

        "rating": 4.8,
        "reviewCount": 500,

        "durationOptions": [
            {
                "label": "Hotel Stay",
                "minutes": 1440,
                "price": 1860,
                "originalPrice": 1860,
                "discountPercent": 0
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Atlantis The Palm is one of Dubai's most iconic luxury resorts, offering world-class accommodation, water parks, marine experiences, and fine dining.",

        "highlights": [
            "Iconic Palm Jumeirah resort",
            "Aquaventure Waterpark access",
            "Underwater aquarium experiences",
            "Luxury suites and restaurants"
        ],

        "whatToBring": [
            "Passport or ID",
            "Booking confirmation"
        ],

        "facilities": [
            "Waterpark",
            "Aquarium",
            "Luxury Spa",
            "Private Beach",
            "Restaurants"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "atlantis-the-palm",
        "Supplier_Code": "DOJOIN",
        "slug": "atlantis-the-palm",
        "title": "Atlantis the Palm",
        "subtitle": "Luxury resort experience on Palm Jumeirah",

        "category": "hotel",
        "destination": "dubai",
        "location": "Palm Jumeirah, Dubai, UAE",

        "rating": 4.8,
        "reviewCount": 500,

        "durationOptions": [
            {
                "label": "Hotel Stay",
                "minutes": 1440,
                "price": 1860,
                "originalPrice": 1860,
                "discountPercent": 0
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Atlantis The Palm is one of Dubai's most iconic luxury resorts, offering world-class accommodation, water parks, marine experiences, and fine dining.",

        "highlights": [
            "Iconic Palm Jumeirah resort",
            "Aquaventure Waterpark access",
            "Underwater aquarium experiences",
            "Luxury suites and restaurants"
        ],

        "whatToBring": [
            "Passport or ID",
            "Booking confirmation"
        ],

        "facilities": [
            "Waterpark",
            "Aquarium",
            "Luxury Spa",
            "Private Beach",
            "Restaurants"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "kingfisher-retreat",
        "Supplier_Code": "DOJOIN",
        "slug": "kingfisher-retreat",
        "title": "Kingfisher Retreat",
        "subtitle": "Nature escape at a private conservation retreat",

        "category": "hotel",
        "destination": "sharjah",
        "location": "Kalba, Sharjah, UAE",

        "rating": 4.7,
        "reviewCount": 40,

        "durationOptions": [
            {
                "label": "Retreat Stay",
                "minutes": 1440,
                "price": 670.40,
                "originalPrice": 790,
                "discountPercent": 15
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Kingfisher Retreat offers a unique eco-tourism escape in a protected conservation area, providing luxury tents, nature experiences, and peaceful surroundings.",

        "highlights": [
            "Luxury glamping experience",
            "Private conservation reserve",
            "Nature and wildlife exploration",
            "Peaceful eco-tourism retreat"
        ],

        "whatToBring": [
            "Passport or ID",
            "Comfortable clothing",
            "Camera"
        ],

        "facilities": [
            "Luxury Tents",
            "Private Pools",
            "Nature Activities",
            "Restaurant"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "hotels",
        "Supplier_Code": "DOJOIN",
        "slug": "hotels",
        "title": "Hotels",
        "subtitle": "Discover Your Dream Stay with DoJoin",

        "category": "hotel",
        "destination": "uae",
        "location": "United Arab Emirates",

        "rating": 3.9,
        "reviewCount": 9,

        "durationOptions": [
            {
                "label": "Hotel Booking",
                "minutes": 1440,
                "price": 1500,
                "originalPrice": 1500,
                "discountPercent": 0
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Start a comfortable and luxurious journey with DoJoin. Discover breathtaking destinations and a diverse range of accommodations from budget-friendly hotels to premium luxury stays across the UAE.",

        "highlights": [
            "Wide range of hotel options",
            "Luxury and budget accommodations",
            "Easy booking with instant confirmation",
            "Trusted travel services with DoJoin"
        ],

        "whatToBring": [
            "Valid ID or Passport",
            "Booking Confirmation"
        ],

        "facilities": [
            "Hotel Booking Assistance",
            "Customer Support",
            "Multiple Payment Options"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "5-star-stay-radisson-blu-fujairah",
        "Supplier_Code": "DOJOIN",
        "slug": "5-star-stay-radisson-blu-fujairah",
        "title": "5-Star Stay at Radisson Blu Fujairah",
        "subtitle": "A perfect blend of comfort, ocean views, and world-class hospitality awaits",

        "category": "hotel",
        "destination": "fujairah",
        "location": "Radisson Blu Resort, Fujairah, UAE",

        "rating": 4.5,
        "reviewCount": 50,

        "durationOptions": [
            {
                "label": "Hotel Stay",
                "minutes": 1440,
                "price": 639,
                "originalPrice": 639,
                "discountPercent": 0
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Escape to the 5-star Radisson Blu Resort Fujairah with DoJoin and enjoy a relaxing stay along the Arabian Gulf coastline. Choose from comfortable rooms and suites with stunning ocean views and world-class amenities.",

        "highlights": [
            "Luxury 5-star beachfront resort",
            "Stunning views of the Arabian Gulf",
            "Spacious rooms and suites",
            "Buffet breakfast included",
            "Perfect for couples and families"
        ],

        "whatToBring": [
            "Passport or Emirates ID",
            "Booking Confirmation",
            "Personal belongings"
        ],

        "facilities": [
            "Private Beach",
            "Swimming Pools",
            "Restaurants and Bars",
            "Fitness Center",
            "Spa and Wellness Center"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-safari-park",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-safari-park",
        "title": "Dubai Safari Park",
        "subtitle": "Wildlife adventure with safaris and live animal encounters",

        "category": "park",
        "destination": "dubai",
        "location": "Dubai Safari Park, Al Warqa 5, Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 106,

        "durationOptions": [
            {
                "label": "Safari Park Entry Ticket",
                "minutes": 240,
                "price": 50,
                "originalPrice": 50,
                "discountPercent": 0
            }
        ],

        "images": [],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Dubai Safari Park offers an exciting wildlife experience with over 3,000 animals from around the world. Visitors can enjoy safari journeys, animal encounters, educational exhibits, and live entertainment.",

        "highlights": [
            "Over 3,000 animals from around the world",
            "Safari bus tours",
            "Wildlife encounters and live presentations",
            "African, Asian, and Arabian themed villages"
        ],

        "whatToBring": [
            "Valid ID",
            "Comfortable clothing",
            "Camera",
            "Water bottle"
        ],

        "facilities": [
            "Safari Transport",
            "Restaurants and Cafes",
            "Gift Shops",
            "Rest Areas"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "img-worlds-of-adventure",
        "Supplier_Code": "DOJOIN",
        "slug": "img-worlds-of-adventure",
        "title": "IMG Worlds of Adventure",
        "subtitle": "Dubai's first mega indoor theme park",

        "category": "parks",
        "destination": "dubai",
        "location": "IMG Worlds of Adventure, City of Arabia, Dubai, UAE",

        "rating": 4.9,
        "reviewCount": 42,

        "durationOptions": [
            {
                "label": "Theme Park Entry Ticket",
                "minutes": 360,
                "price": 365,
                "originalPrice": 365,
                "discountPercent": 0
            }
        ],

        "images": [],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "IMG Worlds of Adventure is Dubai’s largest indoor theme park featuring Marvel and Cartoon Network themed attractions, rides, and immersive entertainment zones.",

        "highlights": [
            "Marvel superhero themed rides",
            "Cartoon Network attractions",
            "Haunted Hotel experience",
            "Indoor air-conditioned theme park"
        ],

        "whatToBring": [
            "Valid ID",
            "Comfortable clothing",
            "Camera"
        ],

        "facilities": [
            "Restaurants",
            "Souvenir Shops",
            "Lockers",
            "Guest Services"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "motiongate-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "motiongate-dubai",
        "title": "Motiongate Park",
        "subtitle": "Hollywood inspired theme park experience",

        "category": "parks",
        "destination": "dubai",
        "location": "Dubai Parks and Resorts, Sheikh Zayed Road, Dubai, UAE",

        "rating": 4.9,
        "reviewCount": 21,

        "durationOptions": [
            {
                "label": "Theme Park Entry Ticket",
                "minutes": 360,
                "price": 295,
                "originalPrice": 330,
                "discountPercent": 11
            }
        ],

        "images": [],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Motiongate Dubai brings Hollywood movies to life with rides and attractions inspired by famous films such as Shrek, Kung Fu Panda, Ghostbusters, and The Hunger Games.",

        "highlights": [
            "Hollywood themed attractions",
            "DreamWorks animation zone",
            "Thrilling roller coasters",
            "Family friendly entertainment"
        ],

        "whatToBring": [
            "Valid ID",
            "Comfortable clothing"
        ],

        "facilities": [
            "Restaurants",
            "Souvenir Shops",
            "Ride Lockers",
            "Guest Services"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "wild-wadi-waterpark",
        "Supplier_Code": "DOJOIN",
        "slug": "wild-wadi-waterpark",
        "title": "Wild Wadi Waterpark",
        "subtitle": "Dubai's most loved waterpark",

        "category": "water_adventure",
        "destination": "dubai",
        "location": "Jumeirah Beach Road, Dubai, UAE",

        "rating": 4.5,
        "reviewCount": 34,

        "durationOptions": [
            {
                "label": "Waterpark Entry Ticket",
                "minutes": 360,
                "price": 199,
                "originalPrice": 269,
                "discountPercent": 26
            }
        ],

        "images": [],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Wild Wadi Waterpark is one of Dubai’s most popular waterparks, featuring thrilling rides, wave pools, and family attractions located near the iconic Burj Al Arab.",

        "highlights": [
            "Over 30 water rides and attractions",
            "Jumeirah Sceirah speed slide",
            "Wave pools and lazy river",
            "Family friendly water activities"
        ],

        "whatToBring": [
            "Swimwear",
            "Towel",
            "Sunscreen"
        ],

        "facilities": [
            "Changing Rooms",
            "Restaurants",
            "Lockers",
            "Shaded Seating Areas"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "atlantis-aquaventure-waterpark",
        "Supplier_Code": "DOJOIN",
        "slug": "atlantis-aquaventure-waterpark",
        "title": "Atlantis Aquaventure Waterpark",
        "subtitle": "World's largest waterpark adventure",

        "category": "water_adventure",
        "destination": "dubai",
        "location": "Atlantis The Palm, Palm Jumeirah, Dubai, UAE",

        "rating": 4.7,
        "reviewCount": 94,

        "durationOptions": [
            {
                "label": "Waterpark Entry Ticket",
                "minutes": 360,
                "price": 360,
                "originalPrice": 360,
                "discountPercent": 0
            }
        ],

        "images": [],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Atlantis Aquaventure Waterpark features over 100 rides and attractions including record-breaking slides, shark safaris, and thrilling water adventures.",

        "highlights": [
            "World's largest waterpark",
            "Over 100 slides and attractions",
            "Shark Safari experience",
            "Private beach access"
        ],

        "whatToBring": [
            "Swimwear",
            "Towel",
            "Sunscreen"
        ],

        "facilities": [
            "Changing Rooms",
            "Restaurants",
            "Lockers",
            "Private Beach"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 0,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-garden-glow",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-garden-glow",
        "title": "Dubai Garden Glow",
        "subtitle": "Fantasy light park experience",

        "category": "parks",
        "destination": "dubai",
        "location": "Zabeel Park, Dubai, UAE",

        "rating": 4.0,
        "reviewCount": 43,

        "durationOptions": [
            {
                "label": "Entry Ticket",
                "minutes": 180,
                "price": 70,
                "originalPrice": 70,
                "discountPercent": 0
            }
        ],

        "images": [],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Dubai Garden Glow combines art, light, and imagination to create a magical night park featuring glowing sculptures, light installations, and themed attractions.",

        "highlights": [
            "Glow Park with illuminated sculptures",
            "Dinosaur Park exhibits",
            "Art installations made from recycled materials",
            "Family friendly evening attraction"
        ],

        "whatToBring": [
            "Valid ID",
            "Camera",
            "Comfortable walking shoes"
        ],

        "facilities": [
            "Restaurants",
            "Souvenir Shops",
            "Rest Areas"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-butterfly-garden",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-butterfly-garden",
        "title": "Dubai Butterfly Garden",
        "subtitle": "The World's Largest Covered Butterfly Garden",

        "category": "parks",
        "destination": "dubai",
        "location": "Dubai Miracle Garden, Al Barsha South 3, Dubai, UAE",

        "rating": 4.5,
        "reviewCount": 35,

        "durationOptions": [
            {
                "label": "Entry Ticket",
                "minutes": 120,
                "price": 49,
                "originalPrice": 49,
                "discountPercent": 0
            }
        ],

        "images": [
            "dubai-butterfly-garden-1.jpg",
            "dubai-butterfly-garden-2.jpg",
            "dubai-butterfly-garden-3.jpg",
            "dubai-butterfly-garden-4.jpg",
            "dubai-butterfly-garden-5.jpg"
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Dubai Butterfly Garden houses nearly 15,000 butterflies from over 50 species inside climate-controlled domes. The garden offers a beautiful natural environment filled with flowers, educational exhibits, and interactive experiences.",

        "highlights": [
            "Largest covered butterfly garden in the world",
            "Over 15,000 butterflies across multiple species",
            "Beautiful flower gardens and themed domes",
            "Educational exhibits about butterfly life cycles"
        ],

        "whatToBring": [
            "Valid ID",
            "Camera",
            "Comfortable walking shoes"
        ],

        "facilities": [
            "Souvenir shop",
            "Cafeteria",
            "Rest areas"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 1,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "seaworld-abu-dhabi",
        "Supplier_Code": "DOJOIN",
        "slug": "seaworld-abu-dhabi",
        "title": "SeaWorld Abu Dhabi",
        "subtitle": "Marine Life Theme Park Experience",

        "category": "parks",
        "destination": "abu-dhabi",
        "location": "Yas Island, Abu Dhabi, UAE",

        "rating": 4.8,
        "reviewCount": 29,

        "durationOptions": [
            {
                "label": "Entry Ticket",
                "minutes": 300,
                "price": 375,
                "originalPrice": 375,
                "discountPercent": 0
            }
        ],

        "images": [
            "seaworld-abu-dhabi-1.jpg",
            "seaworld-abu-dhabi-2.jpg",
            "seaworld-abu-dhabi-3.jpg",
            "seaworld-abu-dhabi-4.jpg",
            "seaworld-abu-dhabi-5.jpg"
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "SeaWorld Abu Dhabi is a next-generation marine life theme park offering immersive experiences across eight themed realms, interactive exhibits, marine animal encounters, and exciting rides.",

        "highlights": [
            "Eight immersive ocean-themed realms",
            "Marine animal encounters and aquariums",
            "Family-friendly rides and attractions",
            "Interactive conservation and education experiences"
        ],

        "whatToBring": [
            "Valid ID",
            "Comfortable clothing",
            "Camera"
        ],

        "facilities": [
            "Restaurants",
            "Gift shops",
            "Rest areas"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 1,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "warner-bros-world-abu-dhabi",
        "Supplier_Code": "DOJOIN",
        "slug": "warner-bros-world-abu-dhabi",
        "title": "Warner Bros World Abu Dhabi",
        "subtitle": "Indoor Movie-Themed Adventure Park",

        "category": "parks",
        "destination": "abu-dhabi",
        "location": "Yas Island, Abu Dhabi, UAE",

        "rating": 4.9,
        "reviewCount": 14,

        "durationOptions": [
            {
                "label": "Entry Ticket",
                "minutes": 300,
                "price": 345,
                "originalPrice": 345,
                "discountPercent": 0
            }
        ],

        "images": [
            "warner-bros-world-1.jpg",
            "warner-bros-world-2.jpg",
            "warner-bros-world-3.jpg",
            "warner-bros-world-4.jpg"
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Warner Bros World Abu Dhabi is the world's largest indoor theme park featuring iconic characters such as Batman, Superman, Bugs Bunny, and Scooby-Doo across immersive themed lands.",

        "highlights": [
            "Six themed lands based on Warner Bros characters",
            "Rides and attractions inspired by DC Comics",
            "Meet-and-greet with famous cartoon characters",
            "Indoor air-conditioned theme park"
        ],

        "whatToBring": [
            "Valid ID",
            "Camera",
            "Comfortable walking shoes"
        ],

        "facilities": [
            "Restaurants",
            "Gift shops",
            "Restrooms"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 1,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "yas-waterworld",
        "Supplier_Code": "DOJOIN",
        "slug": "yas-waterworld",
        "title": "Yas Waterworld With Free Shuttle",
        "subtitle": "Ultimate Water Adventure Park",

        "category": "waterpark",
        "destination": "abu-dhabi",
        "location": "Yas Island, Abu Dhabi, UAE",

        "rating": 4.0,
        "reviewCount": 24,

        "durationOptions": [
            {
                "label": "Entry Ticket",
                "minutes": 300,
                "price": 295,
                "originalPrice": 295,
                "discountPercent": 0
            }
        ],

        "images": [
            "yas-waterworld-1.jpg",
            "yas-waterworld-2.jpg",
            "yas-waterworld-3.jpg",
            "yas-waterworld-4.jpg"
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Yas Waterworld is one of the largest water parks in the UAE featuring thrilling slides, wave pools, family rides, and unique water attractions.",

        "highlights": [
            "More than 40 rides and slides",
            "Unique water attractions and wave pools",
            "Family-friendly water rides",
            "Located on Yas Island"
        ],

        "whatToBring": [
            "Swimwear",
            "Towel",
            "Sunscreen"
        ],

        "facilities": [
            "Restaurants",
            "Locker rentals",
            "Changing rooms"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 1,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "ferrari-world-abu-dhabi",
        "Supplier_Code": "DOJOIN",
        "slug": "ferrari-world-abu-dhabi",
        "title": "Ferrari World Abu Dhabi",
        "subtitle": "World's First Ferrari Branded Theme Park",

        "category": "parks",
        "destination": "abu-dhabi",
        "location": "Yas Island, Abu Dhabi, UAE",

        "rating": 4.8,
        "reviewCount": 36,

        "durationOptions": [
            {
                "label": "Entry Ticket",
                "minutes": 300,
                "price": 345,
                "originalPrice": 345,
                "discountPercent": 0
            }
        ],

        "images": [
            "ferrari-world-1.jpg",
            "ferrari-world-2.jpg",
            "ferrari-world-3.jpg",
            "ferrari-world-4.jpg"
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Ferrari World Abu Dhabi is a Ferrari-themed amusement park featuring high-speed roller coasters, racing simulators, and family-friendly attractions.",

        "highlights": [
            "Home to Formula Rossa, the world's fastest roller coaster",
            "Ferrari themed rides and attractions",
            "Family entertainment and racing simulators",
            "Indoor theme park on Yas Island"
        ],

        "whatToBring": [
            "Valid ID",
            "Camera",
            "Comfortable clothing"
        ],

        "facilities": [
            "Restaurants",
            "Souvenir stores",
            "Rest areas"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 1,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "the-green-planet",
        "Supplier_Code": "DOJOIN",
        "slug": "the-green-planet",
        "title": "The Green Planet",
        "subtitle": "Tropical Bio-Dome Experience",

        "category": "parks",
        "destination": "dubai",
        "location": "City Walk, Dubai, UAE",

        "rating": 4.6,
        "reviewCount": 50,

        "durationOptions": [
            {
                "label": "Entry Ticket",
                "minutes": 120,
                "price": 155,
                "originalPrice": 155,
                "discountPercent": 0
            }
        ],

        "images": [
            "green-planet-1.jpg",
            "green-planet-2.jpg",
            "green-planet-3.jpg",
            "green-planet-4.jpg"
        ],

        "badges": [
            "24-Hour Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "The Green Planet is an indoor tropical rainforest housed in a bio-dome that allows visitors to explore exotic plants, animals, and birds in an immersive ecosystem.",

        "highlights": [
            "Indoor tropical rainforest bio-dome",
            "Over 3000 plants and animals",
            "Bird and reptile encounters",
            "Educational ecological experience"
        ],

        "whatToBring": [
            "Valid ID",
            "Camera"
        ],

        "facilities": [
            "Cafe",
            "Gift shop",
            "Rest areas"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 24,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "crocodile-park-dubai",
        "Supplier_Code": "DOJOIN",
        "slug": "crocodile-park-dubai",
        "title": "Crocodile Park Dubai",
        "subtitle": "Wildlife Crocodile Experience",

        "category": "parks",
        "destination": "dubai",
        "location": "Dubai Crocodile Park, Dubai, UAE",

        "rating": 4.3,
        "reviewCount": 7,

        "durationOptions": [
            {
                "label": "Entry Ticket",
                "minutes": 120,
                "price": 95,
                "originalPrice": 95,
                "discountPercent": 0
            }
        ],

        "images": [
            "crocodile-park-1.jpg",
            "crocodile-park-2.jpg",
            "crocodile-park-3.jpg",
            "crocodile-park-4.jpg",
            "crocodile-park-5.jpg"
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Dubai Crocodile Park is home to hundreds of Nile crocodiles and features an aquarium, museum, and educational exhibits that showcase the fascinating life of crocodiles.",

        "highlights": [
            "Over 250 Nile crocodiles",
            "Crocodile aquarium experience",
            "Educational crocodile museum",
            "Family-friendly wildlife attraction"
        ],

        "whatToBring": [
            "Camera",
            "Comfortable walking shoes"
        ],

        "facilities": [
            "Visitor center",
            "Gift shop",
            "Restaurants"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 1,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-parks-and-resorts",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-parks-and-resorts",
        "title": "Dubai Parks and Resorts",
        "subtitle": "Motiongate | Legoland | Real Madrid World",

        "category": "theme-park",
        "destination": "dubai",
        "location": "Dubai Parks and Resorts, Dubai, UAE",

        "rating": 4.4,
        "reviewCount": 100,

        "durationOptions": [
            {
                "label": "1 Park Pass",
                "minutes": 360,
                "price": 295,
                "originalPrice": 330,
                "discountPercent": 11
            }
        ],

        "images": [
            "dubai-parks-resorts-1.jpg",
            "dubai-parks-resorts-2.jpg",
            "dubai-parks-resorts-3.jpg",
            "dubai-parks-resorts-4.jpg",
            "dubai-parks-resorts-5.jpg"
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Dubai Parks and Resorts is a massive entertainment complex featuring Motiongate Dubai, Legoland Dubai, Legoland Water Park, and Real Madrid World offering rides, attractions, and entertainment for all ages.",

        "highlights": [
            "Access to world-class theme parks",
            "Motiongate Hollywood themed rides",
            "Legoland family attractions",
            "Real Madrid World experiences"
        ],

        "whatToBring": [
            "Valid ID",
            "Comfortable clothing",
            "Camera"
        ],

        "facilities": [
            "Restaurants",
            "Shopping outlets",
            "Rest areas"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 1,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "dubai-miracle-garden",
        "Supplier_Code": "DOJOIN",
        "slug": "dubai-miracle-garden",
        "title": "Dubai Miracle Garden",
        "subtitle": "The world's largest natural flower garden",

        "category": "parks",
        "destination": "dubai",
        "location": "Al Barsha South 3, Dubailand, Dubai, UAE",

        "rating": 4.7,
        "reviewCount": 368,

        "durationOptions": [
            {
                "label": "Entry Ticket",
                "minutes": 180,
                "price": 89,
                "originalPrice": 89,
                "discountPercent": 0
            }
        ],

        "images": [
            "dubai-miracle-garden-1.jpg",
            "dubai-miracle-garden-2.jpg",
            "dubai-miracle-garden-3.jpg",
            "dubai-miracle-garden-4.jpg",
            "dubai-miracle-garden-5.jpg"
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Dubai Miracle Garden is the largest natural flower garden in the world featuring millions of blooming flowers arranged in stunning sculptures and themed displays.",

        "highlights": [
            "Over 150 million flowers in bloom",
            "Flower sculptures and themed displays",
            "Emirates A380 floral installation",
            "Family-friendly outdoor attraction"
        ],

        "whatToBring": [
            "Camera",
            "Comfortable walking shoes",
            "Sun protection"
        ],

        "facilities": [
            "Restaurants",
            "Souvenir shops",
            "Rest areas"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 1,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "yas-island-abu-dhabi-multi-park-pass",
        "Supplier_Code": "DOJOIN",
        "slug": "yas-island-abu-dhabi-multi-park-pass",
        "title": "Yas Island Abu Dhabi Multi Park Pass",
        "subtitle": "Access to Ferrari World, Warner Bros World, SeaWorld, Yas Waterworld",

        "category": "parks",
        "destination": "abu-dhabi",
        "location": "Yas Island, Abu Dhabi, UAE",

        "rating": 4.8,
        "reviewCount": 26,

        "durationOptions": [
            {
                "label": "Multi Park Pass",
                "minutes": 480,
                "price": 475,
                "originalPrice": 475,
                "discountPercent": 0
            }
        ],

        "images": [
            "yas-island-multi-pass-1.jpg",
            "yas-island-multi-pass-2.jpg",
            "yas-island-multi-pass-3.jpg",
            "yas-island-multi-pass-4.jpg",
            "yas-island-multi-pass-5.jpg"
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "The Yas Island Multi Park Pass allows visitors to explore multiple world-famous theme parks including Ferrari World, Warner Bros World, SeaWorld Abu Dhabi, and Yas Waterworld.",

        "highlights": [
            "Access to multiple Yas Island theme parks",
            "Ferrari World roller coasters",
            "SeaWorld marine life experiences",
            "Warner Bros character themed rides"
        ],

        "whatToBring": [
            "Valid ID",
            "Comfortable clothing",
            "Camera"
        ],

        "facilities": [
            "Restaurants",
            "Gift shops",
            "Rest areas"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 1,
        "mobileTicket": true,
        "refundable": false
    },
    {
        "id": "creek-park-exotic-bird-show",
        "Supplier_Code": "DOJOIN",
        "slug": "creek-park-exotic-bird-show",
        "title": "Creek Park Exotic Bird Show",
        "subtitle": "Dubai Dolphinarium Bird Performance",

        "category": "parks",
        "destination": "dubai",
        "location": "Dubai Dolphinarium, Creek Park, Dubai, UAE",

        "rating": 3.8,
        "reviewCount": 5,

        "durationOptions": [
            {
                "label": "Entry Ticket",
                "minutes": 60,
                "price": 45,
                "originalPrice": 45,
                "discountPercent": 0
            }
        ],

        "images": [
            "creek-park-bird-show-1.jpg",
            "creek-park-bird-show-2.jpg",
            "creek-park-bird-show-3.jpg",
            "creek-park-bird-show-4.jpg",
            "creek-park-bird-show-5.jpg"
        ],

        "badges": [
            "Instant Confirmation",
            "Mobile Tickets Accepted",
            "Non-refundable"
        ],

        "overview": "Immerse yourself in a symphony of nature's most exquisite creatures as they showcase their intelligence, grace, and astonishing abilities. Witness the awe-inspiring acrobatics of majestic macaws, the playful antics of cheeky cockatoos, and the precision flight patterns of agile parrots, all within a stunning, purpose-built arena.Prepare to be captivated by the vibrant colors, enchanting melodies, and awe-inspiring beauty of the Exotic Bird Show presented by Dubai Dolphinarium. Step into a world where feathered wonders take flight, showcasing their extraordinary talents and leaving audiences spellbound.",
        "highlights": [
            "Marvel at the kaleidoscope of colors that adorn these magnificent birds as they soar through the air, demonstrating their remarkable agility and intelligence.",
            "Be prepared to be amazed as they showcase an array of jaw-dropping tricks, including mimicry, aerial displays, and astonishing displays of dexterity that will leave you in awe.",
            "Led by a team of expert trainers, the Exotic Bird Show offers an educational and entertaining experience for the whole family.",
            "Discover fascinating insights into the birds' natural habitats, learn about their unique characteristics, and gain a deeper appreciation for the conservation efforts dedicated to preserving these extraordinary species."
        ],

        "whatToBring": [
            "Valid ID",
        ],

        "facilities": [
            "Seating arena",
            "Refreshment kiosks",
            "Souvenir shop"
        ],

        "cancellationPolicy": "Non-refundable.",
        "confirmationHours": 1,
        "mobileTicket": true,
        "refundable": false
    },

]
