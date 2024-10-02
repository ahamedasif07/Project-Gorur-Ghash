module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all hostnames
        port: "", // Leave port empty if there's no specific port.
        pathname: "/**", // Allow all image paths
      },
      {
        protocol: "http",
        hostname: "**", // Allow all hostnames for HTTP as well
        port: "",
        pathname: "/**",
      },
    ],
  },
};
