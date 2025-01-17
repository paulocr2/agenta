const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    reactStrictMode: true,
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    productionBrowserSourceMaps: true,
    transpilePackages: [
        "@lobehub/ui",
        "@lobehub/icons",
        "rc-util",
        "antd",
        "rc-pagination",
        "rc-picker",
        "rc-tree",
        "rc-input",
        "rc-table",
        "@ant-design/icons",
        "@ant-design/icons-svg",
    ],
    swcMinify: true,
    images: {
        remotePatterns: [{hostname: "fps.cdnpk.net"}],
    },

    async redirects() {
        return [
            {
                source: "/",
                destination: "/apps",
                permanent: true,
            },
        ]
    },

    webpack: (config, {webpack, isServer}) => {
        const envs = {}

        Object.keys(process.env).forEach((env) => {
            if (env.startsWith("NEXT_PUBLIC_")) {
                envs[env] = process.env[env]
            }
        })

        if (!isServer) {
            config.plugins.push(
                new webpack.DefinePlugin({
                    "process.env": JSON.stringify(envs),
                }),
            )
        }

        return config
    },
}

module.exports = withMDX(nextConfig)
