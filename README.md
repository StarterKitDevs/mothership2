# Live From the Mothership - Artist Registration Platform

A modern, secure, and sustainable artist registration platform for music competitions.

## 🏗️ Architecture Overview

This project follows enterprise-grade modular architecture with strict security and compliance standards:

- **Frontend**: Modern SaaS design with responsive UI
- **Backend**: Supabase integration with secure environment variable management
- **Security**: No credentials in codebase, environment-based configuration
- **Sustainability**: Optimized for green hosting and minimal resource consumption

## 🔒 Security & Compliance

- ✅ GDPR compliant data handling
- ✅ No API keys or secrets in repository
- ✅ Environment variable-based configuration
- ✅ Role-based access control ready
- ✅ Audit logging capabilities

## 🌱 Sustainability Features

- Green hosting optimized (Vercel green data centers)
- Minimal bundle sizes and efficient caching
- Optimized build processes for reduced energy consumption
- Background task batching for efficient resource usage

## 📁 Project Structure

```
/
├── src/
│   ├── components/          # Reusable UI components
│   ├── utils/              # Utility functions
│   ├── styles/             # Modular CSS
│   └── config/             # Configuration management
├── public/                 # Static assets
├── docs/                   # Documentation
├── scripts/                # Build and deployment scripts
├── .env.example           # Environment variables template
├── .env.local             # Local environment (not in repo)
└── deployment/            # Deployment configurations
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Supabase account
- Vercel account (optional)

### Local Development Setup

1. **Clone and Install**
   ```bash
   git clone [your-repo-url]
   cd live-from-mothership
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

3. **Database Setup**
   - Create Supabase project
   - Run the provided SQL schema (see `docs/database-setup.sql`)
   - Update environment variables

4. **Start Development Server**
   ```bash
   npm run dev
   ```

## 🔧 Environment Variables

Configure these in your deployment platform (Vercel, etc.) or `.env.local` for development:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📦 Deployment

### Vercel Deployment
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy static files to your hosting platform
3. Configure environment variables on the platform

## 🗄️ Database Schema

The application uses a single `artist_signups` table with the following structure:

- `id` (UUID, Primary Key)
- `artist_name` (Text, Required)
- `artist_type` (Text, Required) - 'solo' or 'group'
- `email` (Text, Required)
- `phone` (Text, Optional)
- `location` (Text, Required)
- `genres` (JSON Array, Required)
- `instagram` (Text, Optional)
- `twitter` (Text, Optional)
- `youtube` (Text, Optional)
- `soundcloud` (Text, Optional)
- `spotify` (Text, Optional)
- `bio` (Text, Required)
- `terms_agreed` (Boolean, Required)
- `privacy_agreed` (Boolean, Required)
- `created_at` (Timestamp)

## 📚 Documentation

- [API Documentation](docs/api.md)
- [Component Guide](docs/components.md)
- [Deployment Guide](docs/deployment.md)
- [Security Guidelines](docs/security.md)

## 🤝 Contributing

1. Follow the established modular architecture
2. Ensure no credentials are committed to the repository
3. Add appropriate documentation for new features
4. Test thoroughly before submitting pull requests

## 📄 Legal & Compliance

- Privacy Policy: Compliant with GDPR and CCPA
- Terms of Service: Clear competition rules and data usage
- Data Protection: Secure handling of all personal information

## 🆘 Support

For technical support or questions:
- Create an issue in this repository
- Contact: info@mothershiplive.com

---

**Note**: This application follows enterprise-grade security standards. Never commit API keys, secrets, or personal data to the repository.