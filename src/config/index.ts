// Configuration Management
// Secure environment variable handling with validation

interface AppConfig {
  supabase: {
    url: string;
    anonKey: string;
  };
  app: {
    name: string;
    url: string;
  };
  features: {
    analytics: boolean;
    fileUploads: boolean;
    adminPanel: boolean;
  };
}

// Validation functions
const validateUrl = (url: string | undefined): string => {
  if (!url) {
    throw new Error('URL is required');
  }
  try {
    new URL(url);
    return url;
  } catch {
    throw new Error('Invalid URL format');
  }
};

const validateKey = (key: string | undefined, name: string): string => {
  if (!key) {
    throw new Error(`${name} is required`);
  }
  if (key.length < 10) {
    throw new Error(`${name} appears to be invalid (too short)`);
  }
  return key;
};

// Configuration object with validation
export const config: AppConfig = {
  supabase: {
    url: validateUrl(process.env.NEXT_PUBLIC_SUPABASE_URL),
    anonKey: validateKey(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, 'Supabase Anon Key'),
  },
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'Live From the Mothership',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
  features: {
    analytics: Boolean(process.env.NEXT_PUBLIC_GA_ID),
    fileUploads: true, // Enable file uploads
    adminPanel: Boolean(process.env.ADMIN_EMAIL),
  },
};

// Runtime configuration check
export const validateConfiguration = (): boolean => {
  try {
    // Test Supabase connection parameters
    if (!config.supabase.url.includes('supabase.co')) {
      console.warn('Warning: Supabase URL does not appear to be valid');
    }
    
    console.log('✅ Configuration validated successfully');
    return true;
  } catch (error) {
    console.error('❌ Configuration validation failed:', error);
    return false;
  }
};

// Development helpers
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';

// Export for use in components
export default config;