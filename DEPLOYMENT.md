# Deployment Guide - Live From the Mothership

## 🚀 Vercel Deployment Setup

### Step 1: Prepare Your Repository

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Live From the Mothership artist registration platform"
   git branch -M main
   git remote add origin [your-github-repo-url]
   git push -u origin main
   ```

2. **Verify .env.local is NOT committed**
   ```bash
   # Ensure .env.local is in .gitignore and not tracked
   git status
   # Should NOT show .env.local
   ```

### Step 2: Supabase Setup

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Wait for setup to complete

2. **Create Database Table**
   - Go to SQL Editor in Supabase
   - Run the SQL from `database-mock-data.sql`
   - This creates the table AND adds mock data

3. **Get Your Credentials**
   - Project URL: `https://[your-project].supabase.co`
   - Anon Key: Found in Settings > API

### Step 3: Vercel Deployment

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Choose "Other" for framework preset

2. **Add Environment Variables**
   In Vercel dashboard > Settings > Environment Variables, add:
   
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   NEXT_PUBLIC_APP_NAME=Live From the Mothership
   NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
   ```

3. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Get your live URL

### Step 4: Test Your Deployment

1. **Verify Form Submission**
   - Go to your live URL
   - Fill out and submit the artist registration form
   - Check Supabase dashboard to see the submission

2. **Check Admin Panel**
   - Go to `https://your-app.vercel.app/admin`
   - Verify you can see all submissions including mock data

### Step 5: Domain Configuration (Optional)

1. **Add Custom Domain**
   - In Vercel: Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

2. **Update Environment Variables**
   - Change `NEXT_PUBLIC_APP_URL` to your custom domain
   - Redeploy

## 🔒 Security Checklist

- ✅ No API keys in repository
- ✅ Environment variables properly configured
- ✅ .env files in .gitignore
- ✅ Security headers configured in vercel.json
- ✅ HTTPS enforced by Vercel

## 🌱 Sustainability Features

- ✅ Deployed on Vercel's green infrastructure
- ✅ Optimized build size and caching
- ✅ Efficient Supabase queries
- ✅ Minimal JavaScript bundle

## 📊 Monitoring

1. **Vercel Analytics**
   - Enable in Vercel dashboard
   - Monitor performance and usage

2. **Supabase Monitoring**
   - Check API usage in Supabase dashboard
   - Monitor database performance

## 🔧 Troubleshooting

### Common Issues

1. **Environment Variables Not Working**
   - Ensure variables start with `NEXT_PUBLIC_`
   - Check spelling and formatting
   - Redeploy after adding variables

2. **Database Connection Issues**
   - Verify Supabase URL and key
   - Check table exists with correct name
   - Review Supabase logs

3. **Build Failures**
   - Check Vercel build logs
   - Verify all dependencies in package.json
   - Ensure TypeScript errors are resolved

### Getting Help

1. Check Vercel deployment logs
2. Review browser console for errors  
3. Check Supabase dashboard for API errors
4. Contact support if needed

## 📱 Testing Checklist

After deployment, test:

- ✅ Form submission works
- ✅ Data appears in Supabase
- ✅ Admin panel displays submissions
- ✅ Mobile responsiveness
- ✅ Privacy policy/terms modals open
- ✅ Error handling works

Your app should now be live and fully functional! 🎉