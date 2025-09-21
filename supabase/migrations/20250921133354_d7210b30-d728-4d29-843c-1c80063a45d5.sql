-- Update the Messages table to match the required fields
ALTER TABLE public.Messages 
DROP COLUMN IF EXISTS Email,
DROP COLUMN IF EXISTS Message;

-- Add the required columns
ALTER TABLE public.Messages 
ADD COLUMN name TEXT,
ADD COLUMN email TEXT,
ADD COLUMN message TEXT;

-- Enable Row Level Security
ALTER TABLE public.Messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert messages (for contact form submissions)
CREATE POLICY "Allow public message submissions" 
ON public.Messages 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow authenticated users to view all messages (for admin purposes)
CREATE POLICY "Allow authenticated users to view messages" 
ON public.Messages 
FOR SELECT 
USING (auth.role() = 'authenticated');