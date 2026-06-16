import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';
import { i18n, type MessageDescriptor } from '@lingui/core';

export const appMetaTags = (title?: MessageDescriptor) => {
  const description =
    'NurseAider is the clinically governed document-signing service for the NurseAider care-workforce platform. Secure, auditable e-signatures for placement agreements, declarations, and consent.';

  return [
    {
      title: title ? `${i18n._(title)} - NurseAider` : 'NurseAider',
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content:
        'NurseAider, document signing, e-signature, care workforce, placement agreement, consent',
    },
    {
      name: 'author',
      content: 'NurseAider Pte Ltd',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'NurseAider - Secure document signing',
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@nurseaider',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
  ];
};
