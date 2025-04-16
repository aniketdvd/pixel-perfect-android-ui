/**
 * Gets the correct URL for an asset with GitHub Pages base path
 * @param path - The path to the asset relative to the public directory
 * @returns The complete URL to the asset
 */
export const getAssetUrl = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // For development, use the path as is
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // For GitHub Pages, prepend the base URL
  return `/pixel-perfect-android-ui/${cleanPath}`;
}; 