---
title: Symudol Privacy Policy
description: How the Symudol Android app handles your data. Diogel receives none of it.
seo:
  description: "Symudol keeps your Nostr keys on your phone and sends Diogel nothing. This policy explains what the app stores, what it sends to services you choose, and your rights."
---

**Effective date:** November 2026

This policy covers **Symudol**, the Diogel Nostr signer app for Android. The [diogel.io website policy](/privacy) covers the website.

In short, Symudol has no accounts, no analytics, no crash reporting, no advertising and no tracking. It sends nothing to Diogel. Your keys and settings stay on your phone. The app connects only to Nostr relays and the other services described below, and only when you use a feature that needs them.

## Who we are

Symudol is a product of **Threenine Consulting Limited**, a company registered in England and Wales with company number 05608093.

- **Postal address (registered office):** Limelight Accountancy Limited, 99 Wey Hill, Haslemere, Surrey, GU27 1HT, United Kingdom
- **Privacy contact:** [privacy@threenine.co.uk](mailto:privacy@threenine.co.uk)
- **ICO registration number:** ZA904076

## What Diogel collects

Nothing. Symudol does not send us your keys, your identities, the requests you approve, how you use the app, or anything about your phone. We have no server that the app talks to. Because we receive no personal data from the app, we cannot look it up, correct it or delete it for you: it is all on your phone, under your control.

## What stays on your phone

Symudol keeps the following on your phone only:

- **Your private keys and identities**, in a vault encrypted with a key derived from your 6-digit PIN, and held in Android's secure storage.
- **Your decisions for other apps**, such as the apps you trust and the requests you chose to remember.
- **Your settings**, including the relays and media server you chose.
- **Biometric unlock**, if you turn it on. Android checks your fingerprint or face. Symudol never sees your biometric data; it only receives Android's answer.

The app turns off Android's cloud backup, so none of this is copied to Google's servers. Symudol also keeps its screens out of screenshots, screen recordings and the recent-apps preview.

When you copy a private key, Symudol marks it as sensitive so that Android hides it in clipboard previews, and clears an exported private key from the clipboard after a short time.

When you back up your vault, Symudol writes an encrypted backup file and hands it to Android's share sheet. You choose where it goes, such as a file on your phone or another app. That destination's own privacy policy then applies to the file.

## What goes to services you choose

Some features need the internet. When you use them, Symudol connects directly from your phone to a service you choose, or to a default you can change. Diogel does not run these services and does not see this traffic. Each service receives your IP address, as any internet service does, and has its own privacy policy.

### Nostr relays

When you open, create or edit your Nostr profile, Symudol reads your profile (kind 0) and your relay list (NIP-65) from Nostr relays, and publishes them when you save a change. Unless you change them in **Settings → Profile relays and media server**, it uses `relay.damus.io`, `nos.lol` and `relay.primal.net`, and reads profiles from the indexer relays `purplepag.es`, `profiles.nostr1.com` and `relay.nos.social`.

What you publish to Nostr is **public**: anyone can read your public key, profile name, picture and other profile fields, and relays and other people may keep copies. We cannot remove them for you.

### Media server (Blossom)

When you choose a new profile picture or banner, Symudol uploads the image you picked to a Blossom media server, `blossom.primal.net` unless you choose another. The image becomes public at the address the server gives it. Symudol reads only the image you pick; it does not browse your photos.

### NIP-05 addresses

When you enter a NIP-05 address such as `name@example.com`, Symudol asks that domain for its `/.well-known/nostr.json` file to check that the address belongs to your public key. The domain receives the name you asked about.

### Other Nostr apps on your phone

Other apps on your phone can ask Symudol to share your public key, or to sign, encrypt or decrypt for them (NIP-55). Symudol shows you each request first, unless you remembered a decision for that app. Your private key never leaves Symudol. What you approve, such as a signed note, goes to the app that asked, and that app's privacy policy then applies.

## Permissions

- **Internet:** to reach the relays and services above.

Symudol does not ask for your location, contacts, camera, microphone, or access to your files.

## How long data is kept

Everything Symudol stores stays on your phone until you remove it. You can revoke the decisions you gave other apps, or wipe the whole vault, in **Settings**. Uninstalling Symudol deletes everything it stored. A backup file you saved, and anything you published to Nostr, are not deleted by the app.

## Your rights

Under the UK GDPR, the EU GDPR, US state privacy laws and Canada's PIPEDA, you can ask us about personal data we hold about you. For Symudol, we hold none, because the app sends us nothing. You can still email [privacy@threenine.co.uk](mailto:privacy@threenine.co.uk) with any question, and we will reply within one month. We delete your email once we have dealt with it.

For data held by a relay, a media server or a NIP-05 domain, contact the operator of that service.

You can complain to the UK **Information Commissioner's Office** ([ico.org.uk](https://ico.org.uk), 0303 123 1113), to the data protection authority where you live or work in the EU, or to the [Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca).

## Children

Symudol is meant for adults. It is not designed for children, and we do not knowingly collect personal information from anyone.

## Security

Symudol is designed so that your private keys never leave the app unencrypted. Its security policy and threat model are published in [the Symudol repository](https://github.com/diogel-io/symudol). To report a security problem, follow its security policy.

## Changes to this policy

We will update this page when the app's practices change, and we will revise the effective date at the top. If a future version of Symudol sends data anywhere new, or asks for a new permission, we will update this policy before that version is released.
