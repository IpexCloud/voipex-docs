// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Voipex.io docs',
  tagline: 'Documentation for Voipex API services',
  url: 'https://voipex.io',
  baseUrl: '/voipex-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'IpexCloud',
  projectName: 'voipex-docs',
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {},
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'VOIPEX',
        logo: {
          alt: 'Voipex',
          src: 'img/favicon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'auth',
            position: 'right',
            label: 'Auth',
          },
          {
            type: 'doc',
            docId: 'api/intro',
            position: 'right',
            label: 'API',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Network',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/ipex.cz/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ipexcz',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://ipex.cz/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/IpexCloud',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
    }),
};

module.exports = config;
