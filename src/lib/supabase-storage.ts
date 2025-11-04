/**
 * Supabase Storage Helper
 * Handles image uploads to Supabase storage bucket
 */

import { getServiceSupabase } from './supabase-admin';

const BUCKET_NAME = 'truerankdigital';

/**
 * Download image from URL and upload to Supabase storage
 * Returns the public URL of the uploaded image
 */
export async function uploadImageToSupabase(
  imageUrl: string,
  fileName: string
): Promise<string | null> {
  const supabase = getServiceSupabase();
  if (!supabase) {
    console.error('Supabase client not initialized');
    return null;
  }

  try {
    console.log('📥 Downloading image from:', imageUrl);

    // Download image from DALL-E URL
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/png';

    console.log('📤 Uploading to Supabase storage...');

    // Generate unique file name
    const timestamp = Date.now();
    const extension = contentType.split('/')[1] || 'png';
    const uniqueFileName = `blog/${timestamp}-${fileName}.${extension}`;

    // Upload to Supabase storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(uniqueFileName, imageBuffer, {
        contentType,
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      throw uploadError;
    }

    console.log('✅ Image uploaded:', uploadData.path);

    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(uploadData.path);

    console.log('🌐 Public URL:', publicUrlData.publicUrl);

    return publicUrlData.publicUrl;
  } catch (error) {
    console.error('Error uploading image to Supabase:', error);
    return null;
  }
}

/**
 * Delete image from Supabase storage
 */
export async function deleteImageFromSupabase(
  imageUrl: string
): Promise<boolean> {
  const supabase = getServiceSupabase();
  if (!supabase) return false;

  try {
    // Extract path from URL
    const url = new URL(imageUrl);
    const path = url.pathname.split(`/${BUCKET_NAME}/`)[1];

    if (!path) {
      console.error('Could not extract path from URL');
      return false;
    }

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([path]);

    if (error) {
      console.error('Delete error:', error);
      return false;
    }

    console.log('🗑️ Image deleted:', path);
    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    return false;
  }
}

/**
 * Ensure the storage bucket exists and has proper policies
 * This function should be called during setup
 */
export async function ensureBucketExists(): Promise<boolean> {
  const supabase = getServiceSupabase();
  if (!supabase) return false;

  try {
    // Check if bucket exists
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();

    if (listError) {
      console.error('Error listing buckets:', listError);
      return false;
    }

    const bucketExists = buckets?.some((bucket) => bucket.name === BUCKET_NAME);

    if (!bucketExists) {
      console.log(`📦 Creating bucket: ${BUCKET_NAME}`);

      const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, {
        public: true,
        fileSizeLimit: 10485760, // 10MB
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/gif'],
      });

      if (createError) {
        console.error('Error creating bucket:', createError);
        return false;
      }

      console.log('✅ Bucket created successfully');
    } else {
      console.log('✅ Bucket already exists');
    }

    return true;
  } catch (error) {
    console.error('Error ensuring bucket exists:', error);
    return false;
  }
}

