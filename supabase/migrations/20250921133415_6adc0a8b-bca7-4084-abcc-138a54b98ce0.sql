-- Create the Messages table for contact form submissions
CREATE TABLE public.Messages (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  name TEXT,
  email TEXT,
  message TEXT
);

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