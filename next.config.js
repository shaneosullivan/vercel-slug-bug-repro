const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withFonts = require("next-fonts");

module.exports = withFonts(withBundleAnalyzer());
