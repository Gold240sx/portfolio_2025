/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		reactCompiler: false,
	},
	images: { unoptimized: true },
}

export default nextConfig
