/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn-icons-png.flaticon.com",
				port: "",
				pathname: "/512/**",
			},
			{
				protocol: "https",
				hostname: "icongr.am",
				port: "",
				pathname: "/devicon/**",
			},
			{
				protocol: "https",
				hostname: "iconos8.es",
				port: "",
				pathname: "/icon/**",
			},
		],
	},
};

export default nextConfig;
