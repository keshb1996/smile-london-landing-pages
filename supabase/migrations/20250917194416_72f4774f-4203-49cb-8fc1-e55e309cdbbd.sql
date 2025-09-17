-- Drop the existing problematic INSERT policy
DROP POLICY IF EXISTS "Anyone can submit forms" ON form_submissions;

-- Create a new INSERT policy that explicitly allows anonymous submissions
CREATE POLICY "Allow anonymous form submissions" 
ON form_submissions 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);