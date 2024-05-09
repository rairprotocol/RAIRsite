import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
 links: [
    {
      text: 'Learn',
      links: [
        {
          text: 'Knowledge Base',
          href: 'https://docs.rairprotocol.org',
        },
        {
          text: 'API Reference',
          href: 'https://docs.rairprotocol.org/rairprotocol/codebase/rair-api',
        },
        {
          text: 'Smart Contracts',
          href: 'https://docs.rairprotocol.org/rairprotocol/codebase/rairdapp/rairsolidity',
        },
        {
          text: 'Whitepaper',
          href: 'https://docs.rairprotocol.org/rairprotocol/whitepaper',
        },
        {
          text: 'Tokenomics',
          href: 'https://docs.rairprotocol.org/rairprotocol/tokenomics/mechanics',
        },
      ],
    },
    {
      text: 'Apply',
      href: 'https://calendly.com/rairprotocol',
    },
  ],
  actions: [{ text: 'Demo!', href: 'https://rair.market', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Platform',
      links: [
        { text: 'Github', href: 'https://github.com/rairprotocol' },
        { text: 'API Reference', href: 'https://docs.rairprotocol.org/rairprotocol/codebase/rair-api' },
        { text: 'Smart Contracts', href: 'https://docs.rairprotocol.org/rairprotocol/codebase/rairdapp/rairsolidity' },
        { text: 'Whitepaper', href: 'https://docs.rairprotocol.org/rairprotocol/whitepaper' },
        { text: 'Tokenomics', href: 'https://docs.rairprotocol.org/rairprotocol/tokenomics/mechanics' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: 'https://docs.rairprotocol.org' },
        { text: 'Community Forum', href: 'https://discord.com/login?redirect_to=%2Fchannels%2F940249331766788168%2F973582780485234798' },
        { text: 'Status', href: 'https://twitter.com/rairprotocol' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/rairprotocol' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.com/login?redirect_to=%2Fchannels%2F940249331766788168%2F973582780485234798' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/rairtech/' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};