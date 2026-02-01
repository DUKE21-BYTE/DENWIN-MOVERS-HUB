import { MetadataRoute } from 'next';
import { COUNTIES } from '@/data/counties';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://denwin-movers-hub.vercel.app';

  // Static pages
  const routes = [
    '',
    '/movers',
    '/add-business',
    '/privacy',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // Dynamic county pages (if we had specific pages for them, e.g. /movers/nairobi)
  // Since the current app uses query params (?county=Nairobi) or client-side filtering, 
  // we might not have unique URLs for them yet unless we implemented dynamic routes.
  // Assuming /movers accepts params, we can list them if they are distinct routes.
  // For now, listing the main pages is crucial.
  
  return [...routes];
}
