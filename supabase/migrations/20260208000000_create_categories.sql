-- Create categories table
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    link TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
ON public.categories
FOR SELECT
USING (true);

-- Insert initial data
INSERT INTO public.categories (title, image, link) VALUES
('Attraction', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/Attraction.webp', '/attractions'),
('Water Adventures', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/Water.webp', '/water-adventures'),
('Sky Adventures', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/Sky-Dive.webp', '/sky-adventures'),
('Airport Transfers', 'https://images.unsplash.com/photo-1585585828599-461a0419b788?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '/transfers'),
('Parks', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/park.jpeg', '/parks'),
('Hotel', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/hotel.jpeg', '/hotels'),
('Visa & Services', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/1.jpg', '/visa'),
('Safari', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/safari.webp', '/safari'),
('Yacht', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/Yatch.webp', '/yacht'),
('Car Rental', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/car.jpeg', '/car-rental'),
('City Tours', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/city.jpeg', '/city-tours'),
('Restaurants', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/restaurant.jpeg', '/restaurants'),
('Holiday Packages', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/hotel.jpeg', '/holiday-packages'),
('Dinner Cruise', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/cruise.jpeg', '/dinner-cruise'),
('Adventures', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/adventure.webp', '/adventures'),
('Live Concerts', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/concert.webp', '/concerts'),
('Cruises', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/asd.webp', '/cruises'),
('Games', 'https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Categories/game.webp', '/games'),
('Group Packages', 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=600&auto=format&fit=crop', '/groups');
