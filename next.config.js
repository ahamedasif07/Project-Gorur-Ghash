module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "", // Leave port empty if there's no specific port.
        pathname: "/**", // Allow all image paths from this host.
      },
    ],
  },
};
