-- Drop the existing policy that causes performance issues
DROP POLICY IF EXISTS "Only authenticated users can view submissions" ON public.form_submissions;

-- Create optimized policy that evaluates auth.role() once per query instead of per row
CREATE POLICY "Only authenticated users can view submissions" 
ON public.form_submissions 
FOR SELECT 
USING ((SELECT auth.role()) = 'authenticated'::text);