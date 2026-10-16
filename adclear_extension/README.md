# AdClear

A small Manifest V3 browser extension that blocks a short list of known third-party advertising domains and hides a few clearly labelled ad containers on supported music websites.

## Install in Chrome or Edge

1. Download and extract `AdClear.zip`.
2. Open `chrome://extensions` in Chrome or `edge://extensions` in Edge.
3. Turn on **Developer mode**.
4. Choose **Load unpacked**.
5. Select the extracted `adclear_extension` folder.
6. Open Spotify Web or SoundCloud and test.

## Important limitations

- This is a basic starter extension, not a guaranteed ad-free solution.
- Spotify and SoundCloud can change their page code and ad delivery at any time.
- Some ads may be delivered through the same infrastructure as playback, so blocking requests can break playback or have no effect.
- The extension does not bypass subscriptions, account restrictions, or access controls.
- The current build targets Chromium browsers. Firefox may require manifest and API adjustments.

## Files

- `manifest.json` — extension configuration
- `rules.json` — declarative request-blocking rules
- `content.js` — conservative hiding of clearly labelled ad containers
- `popup.html` / `popup.css` — minimal popup UI

## Development

Keep rules narrow and test playback after every change. Avoid broad blocking of Spotify/SoundCloud API or media domains.
