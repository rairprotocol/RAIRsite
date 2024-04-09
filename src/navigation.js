import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
 links: [
    {
      text: 'Learn',
      links: [
        {
          text: 'Docs',
          href: 'https://docs.rairprotocol.org',
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Get in Touch',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Github', href: 'https://github.com/rairprotocol', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: 'https://docs.rairprotocol.org/rair-technologies/api/rair-api' },
        { text: 'Github', href: 'https://github.com/rairprotocol' },
        { text: 'Etherscan verify', href: '#' },
        { text: 'Contact', href: 'https://rairprotocol.org/contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: 'https://docs.rairprotocol.org' },
        { text: 'Community Forum', href: 'https://twitter.com/rairtech' },
        { text: 'Status', href: 'https://twitter.com/rairtech' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: '#' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-github', href: 'https://github.com/rairprotocol' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};