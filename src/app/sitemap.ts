import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
 return [
   {
     url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
     lastModified: new Date(),
     changeFrequency: "yearly",
     priority: 1,
   },
   {
     url: `${process.env.NEXT_PUBLIC_BASE_URL}/landing`,
     lastModified: new Date(),
     changeFrequency: "yearly",
     priority: 1,
   },
   {
     url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricingplans`,
     lastModified: new Date(),
     changeFrequency: "yearly",
     priority: 1,
   },
   {
     url: `${process.env.NEXT_PUBLIC_BASE_URL}/homefilelisting`,
     lastModified: new Date(),
     changeFrequency: "yearly",
     priority: 1,
   },
   {
     url: `${process.env.NEXT_PUBLIC_BASE_URL}/filelistinglistview`,
     lastModified: new Date(),
     changeFrequency: "yearly",
     priority: 1,
   },
   {
     url: `${process.env.NEXT_PUBLIC_BASE_URL}/filelistinggridview`,
     lastModified: new Date(),
     changeFrequency: "yearly",
     priority: 1,
   },
   {
     url: `${process.env.NEXT_PUBLIC_BASE_URL}/uploadnewfiles`,
     lastModified: new Date(),
     changeFrequency: "yearly",
     priority: 1,
   },
   {
     url: `${process.env.NEXT_PUBLIC_BASE_URL}/filedetailsimage`,
     lastModified: new Date(),
     changeFrequency: "yearly",
     priority: 1,
   },
   {
     url: `${process.env.NEXT_PUBLIC_BASE_URL}/filedetailsdocument`,
     lastModified: new Date(),
     changeFrequency: "yearly",
     priority: 1,
   },
   {
     url: `${process.env.NEXT_PUBLIC_BASE_URL}/createnewfile`,
     lastModified: new Date(),
     changeFrequency: "yearly",
     priority: 1,
   },
   {
     url: `${process.env.NEXT_PUBLIC_BASE_URL}/fileusagedashboard`,
     lastModified: new Date(),
     changeFrequency: "yearly",
     priority: 1,
   },
 ];
}