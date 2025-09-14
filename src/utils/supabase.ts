// Supabase Client Utility
// Secure database connection with error handling and logging

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { config, isDevelopment } from '../config';

// Database types
export interface ArtistSubmission {
  id?: string;
  artist_name: string;
  artist_type: 'solo' | 'group';
  email: string;
  phone?: string;
  location: string;
  genres: string[];
  instagram?: string;
  twitter?: string;
  youtube?: string;
  soundcloud?: string;
  spotify?: string;
  bio: string;
  terms_agreed: boolean;
  privacy_agreed: boolean;
  created_at?: string;
}

// Singleton Supabase client
class SupabaseService {
  private static instance: SupabaseService;
  private client: SupabaseClient;

  private constructor() {
    this.client = createClient(config.supabase.url, config.supabase.anonKey);
    
    if (isDevelopment) {
      console.log('🔗 Supabase client initialized for development');
    }
  }

  public static getInstance(): SupabaseService {
    if (!SupabaseService.instance) {
      SupabaseService.instance = new SupabaseService();
    }
    return SupabaseService.instance;
  }

  // Submit artist registration
  public async submitArtist(submission: ArtistSubmission): Promise<ArtistSubmission> {
    try {
      const { data, error } = await this.client
        .from('artist_signups')
        .insert([submission])
        .select()
        .single();

      if (error) {
        console.error('Database error:', error);
        throw new Error(`Database error: ${error.message}`);
      }

      // Log successful submission (no PII)
      if (isDevelopment) {
        console.log('✅ Artist submission saved successfully');
      }

      return data;
    } catch (error) {
      console.error('Submission error:', error);
      throw error;
    }
  }

  // Get all submissions (admin only)
  public async getAllSubmissions(): Promise<ArtistSubmission[]> {
    try {
      const { data, error } = await this.client
        .from('artist_signups')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(`Database error: ${error.message}`);
      }

      return data || [];
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  // Delete submission (admin only)
  public async deleteSubmission(id: string): Promise<void> {
    try {
      const { error } = await this.client
        .from('artist_signups')
        .delete()
        .eq('id', id);

      if (error) {
        throw new Error(`Delete error: ${error.message}`);
      }

      // Audit log for deletion
      console.log(`🗑️ Submission ${id} deleted`);
    } catch (error) {
      console.error('Delete error:', error);
      throw error;
    }
  }

  // Check database connection
  public async checkConnection(): Promise<boolean> {
    try {
      const { error } = await this.client
        .from('artist_signups')
        .select('id')
        .limit(1);

      return !error;
    } catch {
      return false;
    }
  }

  // Get raw client for advanced operations
  public getClient(): SupabaseClient {
    return this.client;
  }
}

// Export singleton instance
export const supabaseService = SupabaseService.getInstance();
export default supabaseService;