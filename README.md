# Steam Web Toolbox

A collection of free, open-source Steam tools. All calculations are performed locally in your browser — no data is uploaded to any server.

**[中文文档](./README.zh-CN.md)**

## Online Demo

Try it live: [https://steamtools.jiajiaxd.com/](https://steamtools.jiajiaxd.com/)

## Features

- **Steam TOTP Generator** — Generate Steam Guard Mobile Authenticator codes. Supports drag & drop `.maFile` import.
- **CS2 Item ID Dictionary** — Lookup CS2 item IDs across BUFF, C5, YOUPIN, HALOSKINS and more platforms.

## Tech Stack

- Vite 6 — Build tool
- Tailwind CSS 4 — Styling
- Vanilla JavaScript — No framework dependencies
- i18n — English & Chinese support

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Privacy

All cryptographic operations and data processing happen entirely in your browser. No data is sent to any external server.

## License

MIT
