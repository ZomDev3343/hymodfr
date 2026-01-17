import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {configDotenv} from "dotenv";

configDotenv();
const config: Config = {
    title: 'MakeHytaleMods',
    tagline: 'Learn how to make mods and server plugins for Hytale',
    favicon: 'img/hymodfr-logo.png',

    future: {
        v4: true,
    },

    customFields: {
        testVar: process.env.TEST_VAR || 'default value',
    },

    url: 'https://zomdev3343.github.io/',

    baseUrl: '/makehytalemods/',
    organizationName: 'zomdev3343',
    projectName: 'makehytalemods',
    trailingSlash: false,

    onBrokenLinks: 'warn',

    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'MakeHytaleMods',
            logo: {
                alt: 'MHM Logo',
                src: 'img/hymodfr-logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'serverAssetsSidebar',
                    position: 'left',
                    label: 'Mods',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'serverPluginsSidebar',
                    position: 'left',
                    label: 'Server Plugins',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'javaDocsSidebar',
                    position: 'left',
                    label: 'Learn Java',
                },
                {
                    href: 'https://discord.gg/hKMP6AuRp5',
                    label: "Discord",
                    position: 'right',
                },
                {
                    href: 'https://github.com/zomdev3343/makehytalemods',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Documentation',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/hKMP6AuRp5',
                        },
                        {
                            label: 'X',
                            href: 'https://x.com/zom___',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/zomdev3343/makehytalemods',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} MakeHytaleMods. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
