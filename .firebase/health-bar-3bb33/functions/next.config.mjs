// next.config.mjs
var nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "news.google.com",
        pathname: "/api/attachments/**"
      },
      {
        protocol: "https",
        hostname: "i.zedtranslate.com",
        pathname: "/newsimage/**"
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**"
      }
    ]
  }
};
var next_config_default = nextConfig;
export {
  next_config_default as default
};
