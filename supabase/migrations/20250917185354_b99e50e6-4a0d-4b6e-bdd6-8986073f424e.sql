-- Create form_submissions table
CREATE TABLE public.form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  treatment_type TEXT,
  page_path TEXT,
  lead_source TEXT DEFAULT 'Website',
  utm_params JSONB,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  webhook_sent BOOLEAN DEFAULT FALSE,
  notes TEXT
);

-- Enable Row Level Security
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form submissions)
CREATE POLICY "Anyone can submit forms" 
ON public.form_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public viewing (only authenticated users can view)
CREATE POLICY "Only authenticated users can view submissions" 
ON public.form_submissions 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create index for common queries
CREATE INDEX idx_form_submissions_created_at ON public.form_submissions(created_at DESC);
CREATE INDEX idx_form_submissions_treatment_type ON public.form_submissions(treatment_type);
CREATE INDEX idx_form_submissions_webhook_sent ON public.form_submissions(webhook_sent);