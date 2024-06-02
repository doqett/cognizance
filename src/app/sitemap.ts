import { MetadataRoute } from 'next';
import { meta, menuItems, footerItems } from '@/assets/data/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  //   const res = await fetch('https://.../posts');
  //   const allPosts = await res.json();

  //   const posts = allPosts.map((post) => ({
  //     url: `https://doqett.com/courses/${post.slug}`,
  //     lastModified: post.publishedAt,
  //   }));

  const routes = menuItems.map((route) => ({
    url: `${meta.URL}${route.path}`,
    lastModified: new Date(),
  }));

  const footerRoutes = footerItems.legal.map((route) => ({
    url: `${meta.URL}${route.path}`,
    lastModified: new Date(),
  }));

  return [...routes, ...footerRoutes];
}
