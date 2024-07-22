/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'news.google.com'
            }
        ]
    }
};

export default nextConfig;
