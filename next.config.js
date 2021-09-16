const { getRedirectStatus } = require('next/dist/lib/load-custom-routes');

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async getRedirectStatus() {
    return [];
  },
};
