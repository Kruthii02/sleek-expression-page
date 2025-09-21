-- Fix the RLS policy issue by creating a proper policy for viewing messages
-- Update the policy to allow anyone to view messages for now (you can restrict this later)
DROP POLICY IF EXISTS "Allow authenticated users to view messages" ON public.Messages;

CREATE POLICY "Allow anyone to view messages" 
ON public.Messages 
FOR SELECT 
USING (true);