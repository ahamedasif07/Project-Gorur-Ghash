"use client";
import { usePathname } from "next/navigation";
import Head from "next/head";

// Meta data for different routes
const metaConfig = {
  "/": {
    title: "Gorur Ghash - Home",
    description: "Welcome to the Gorur Ghash homepage.",
  },
  "/men": {
    title: "Gorur Ghash - Men",
    description: "Explore men's fashion at Gorur Ghash.",
  },
  "/women": {
    title: "Gorur Ghash - Women",
    description: "Explore women's fashion at Gorur Ghash.",
  },
  // Add more routes as needed
};

const MetaData = () => {
  const pathname = usePathname();

  // Normalize dynamic routes (e.g., /men/[id])
  const normalizedRoute =
    pathname.split("/").length > 2 ? `/${pathname.split("/")[1]}` : pathname;

  // Use default metadata if the route is not found
  const metadata = metaConfig[normalizedRoute] || {
    title: "Gorur Ghash - Default",
    description: "Default description",
  };

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </Head>
  );
};

export default MetaData;
