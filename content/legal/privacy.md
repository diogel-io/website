---
title: Privacy Policy
description: How the diogel.io website handles personal data for visitors in the UK, the EU and North America.
seo:
  description: "What diogel.io collects, who processes it and your rights under the UK GDPR, the EU GDPR, US state privacy laws and Canada's PIPEDA."
---

<!--
DRAFT (feature/website-privacy-policy). Not legal advice and not yet reviewed by a lawyer.
Every [[CONFIRM: ...]] marker is a fact or decision the owner must supply before this page ships.
Planning notes: ~/Documents/diogel/50-operations/legal/website-privacy-policy.md
-->

**Effective date:** [[CONFIRM: publication date]]

This policy covers the **diogel.io** website only: the marketing pages, the documentation and the Nostr address file at `diogel.io/.well-known/nostr.json`. The Diogel products (Porwr, Symudol and Bancwr) run on your own device or server and have their own privacy notices. For example, [Porwr's privacy policy](https://github.com/diogel-io/porwr/blob/master/PRIVACY.md) explains that the extension does not collect or process personal information.

In short, this website has no accounts, no forms, no newsletter, no advertising and no cookies. We do not sell or share your personal information. The only personal data involved is the technical data any website receives when you visit, and our privacy-focused, cookieless visitor counts.

## Who we are

Diogel is a product of **Threenine Consulting Limited**, a company registered in England and Wales with company number 05608093 (VAT number GB 900383850). We are the controller of the personal data described in this policy.

- **Postal address (registered office):** Limelight Accountancy Limited, 99 Wey Hill, Haslemere, Surrey, GU27 1HT, United Kingdom
- **Privacy contact:** [privacy@threenine.co.uk](mailto:privacy@threenine.co.uk)
- **ICO registration number:** ZA904076

We have not appointed a Data Protection Officer because our processing does not require one. [[CONFIRM: no DPO]]

## What we collect and why

### When you load a page

Our website is hosted by **Netlify, Inc.** When your browser asks for a page, Netlify's servers necessarily receive your IP address, the page you asked for, the date and time, your browser's user-agent string and the referring page. Netlify uses this to deliver the site and to protect it against abuse, and it keeps the data in its access logs for a limited period. [[CONFIRM: log retention for the diogel.io Netlify plan]]

- **Legal basis (UK and EU GDPR):** our legitimate interest in running a secure, working website (Article 6(1)(f)).

### Visitor statistics

We use **Fathom Analytics**, operated by Conva Ventures Inc. (Canada), to count visits. Fathom tells us which pages are viewed, the referring site, and the country, browser and device type in aggregate.

- Fathom sets **no cookies** and stores nothing on your device.
- Fathom does not keep your IP address. It uses a one-way hash, rotated daily, to tell new visits from repeat ones, then discards it. The statistics we see cannot identify you.
- Visitors in the EU are processed through Fathom's EU infrastructure.

**Legal basis:** our legitimate interest in understanding which pages are useful so that we can improve the site, while using a provider designed to avoid identifying you (Article 6(1)(f)).

### Icons

Some pages load their small interface icons from the public **Iconify** icon service (`api.iconify.design`). Your browser fetches them directly, so the service receives your IP address and browser details like any web server. We do not send it anything else. [[CONFIRM: remove this section once icons are bundled into the site. See the planning notes.]]

**Legal basis:** our legitimate interest in displaying the site correctly (Article 6(1)(f)).

### Data stored in your browser

We do not use cookies. The site saves two kinds of data in your browser's local storage, and none of it is sent to us:

- your light or dark mode choice (`nuxt-color-mode`)
- a cached copy of the documentation index, so that the documentation search works quickly (`content_collection_docs`, `content_checksum_docs`)

Both are needed for features you use, so the law does not require your consent before they are stored. You can clear them at any time in your browser settings.

### Our Nostr address directory

The file `diogel.io/.well-known/nostr.json` is a public [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md) directory. It links names such as `support@diogel.io` to Nostr public keys and preferred relays, so that Nostr apps can verify those addresses. At present it lists only Diogel's own organisational identities. If we ever list a person, we do so only with their agreement, and we remove their entry on request. Bear in mind that Nostr events and other copies of the file may already be held by other parties, so we cannot recall those.

### When you contact us

If you email us, we use your email address and message to reply, and we keep the correspondence for as long as we need it to deal with your enquiry. [[CONFIRM: retention period for correspondence]]

- **Legal basis:** our legitimate interest in answering you, or steps you ask us to take before entering into a contract (Article 6(1)(f) or (b)).

### Links to other sites

The site links to GitHub, the Chrome Web Store, Firefox Add-ons and Companies House. When you follow a link, the other site's privacy policy applies.

## Who receives your data

| Recipient | Purpose | Location |
|-----------|---------|----------|
| Netlify, Inc. | Hosting and content delivery | United States, with a global edge network |
| Conva Ventures Inc. (Fathom Analytics) | Cookieless visitor statistics | Canada; EU traffic stays on EU infrastructure |
| Iconify (`api.iconify.design`) | Interface icons | [[CONFIRM: location, or remove once icons are bundled]] |

Netlify and Fathom act as our processors under data processing agreements. We do not sell, rent or share personal information for advertising, and we do not use it for automated decisions that significantly affect you.

## International transfers

Some providers are outside the UK and the EU.

- **Canada (Fathom):** the European Commission and the UK both recognise Canada as providing adequate protection for commercial data.
- **United States (Netlify):** transfers rely on the EU–US Data Privacy Framework and its UK Extension, or on the European Commission's Standard Contractual Clauses with the UK Addendum, as set out in Netlify's data processing agreement. [[CONFIRM: which mechanism Netlify's current DPA uses]]

## How long we keep data

- **Hosting logs:** kept by Netlify for a short period, then deleted. [[CONFIRM: period]]
- **Visitor statistics:** aggregate and anonymous, kept for as long as they are useful.
- **Emails:** kept for as long as needed to deal with your enquiry. [[CONFIRM: period]]
- **Browser storage:** stays on your device until you clear it.

## Your rights

### UK and EU visitors

Under the UK GDPR and the EU GDPR, you can ask us to give you a copy of your data, or to correct, erase or restrict it. You can also object to processing we base on legitimate interests, and ask for your data in a portable format. To use these rights, email [privacy@threenine.co.uk](mailto:privacy@threenine.co.uk). We will reply within one month. Because we hold so little data that is linked to a name, we may be unable to find data about you from a website visit alone.

You can complain to the UK **Information Commissioner's Office** ([ico.org.uk](https://ico.org.uk), 0303 123 1113) or, in the EU, to the data protection authority where you live or work. We would appreciate the chance to resolve your concern first.

[[CONFIRM WITH A LAWYER: whether an EU representative under Article 27 GDPR is needed. If it is, name the representative here.]]

### United States visitors

We do not sell or share personal information as defined by the California Consumer Privacy Act (as amended by the CPRA) or other US state privacy laws, and we do not process sensitive personal information. We do not currently meet the thresholds that make those laws apply to a business, but we still honour requests to see or delete your information. Please email us. We treat Global Privacy Control signals as an opt-out of sale or sharing, although we have nothing to opt you out of. We do not discriminate against anyone who exercises their rights.

### Canadian visitors

Under the Personal Information Protection and Electronic Documents Act (PIPEDA), you may ask to see the personal information we hold about you and to have it corrected, and you may withdraw consent where we rely on it. Our privacy contact is accountable for our compliance. You can also complain to the [Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca).

## Children

This website is not aimed at children, and we do not knowingly collect personal information from anyone under 13 (or under 16 in the EU).

## Security

The site is served only over HTTPS, and it collects as little as it can. No method of transmission is perfectly secure, but we choose providers with strong security practices.

## Changes to this policy

We will update this page when our practices change, and we will revise the effective date at the top. If we make significant changes, such as adding a form, a newsletter or cookies, we will update this policy before the change goes live.
