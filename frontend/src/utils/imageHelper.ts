// Helper function to get image path
// For images in src/assets, they need to be imported or moved to public folder
export const getImagePath = (imagePath: string): string => {
  // If it's already a full URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // Remove /src/assets prefix if present
  let path = imagePath.replace('/src/assets', '');
  
  // If path starts with /, it's already a public path
  if (path.startsWith('/')) {
    return path;
  }
  
  // Try to construct path from assets (will need webpack to handle this)
  // For now, return the path as-is and let onError handle fallback
  return path;
};






