# AdClear

A lightweight Manifest V3 browser extension starter for Chromium browsers. It blocks a small set of known third-party ad domains and hides a few clearly labelled ad containers on Spotify Web and SoundCloud.

## Install

1. Download and extract `AdClear.zip`.
2. Open `chrome://extensions` in Chrome or `edge://extensions` in Edge.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the extracted `adclear_extension` folder.
5. Open the extension popup to turn filtering on or off.

## What it does

- Filters requests to a short list of known third-party ad domains.
- Hides only a few clearly labelled ad containers on supported music websites.
- Provides an on/off toggle and saves the setting locally.
- Does not collect browsing history or send data to a remote server.

## Limitations

This is not a guaranteed ad-free product. Spotify and SoundCloud can change their website code and ad delivery at any time. Some ads may share infrastructure with playback, so broad blocking could break playback; this extension deliberately avoids blocking music/media domains. No subscription or access controls are bypassed.

## Browser support

The current version targets Chrome and Edge (Chromium). Firefox support has not been tested and may require manifest/API changes.

## Files

- `manifest.json` — extension configuration
- `rules.json` — request filtering rules
- `background.js` — saved on/off state and ruleset toggling
- `content.js` — conservative hiding of labelled ad containers
- `popup.html`, `popup.css`, `popup.js` — popup and control
