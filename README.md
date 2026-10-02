# Vasooli

Vasooli is a proposed health reimbursement service inside **Polifyx by Insurance Samadhan**. This site introduces the concept for The Ken’s agent competition and collects pilot interest. It is not a live claims service.

The working principle on the page is: **Automate the chase. Keep consequential decisions with you.**

## Run locally

Requires **Node.js 22 or newer** (the signup store uses the built-in `node:sqlite` module).

```bash
npm install
npm run dev
```

The development server uses port 3000 unless you pass another port:

```bash
npm run dev -- --hostname 127.0.0.1 --port 43123
```

Then open `http://127.0.0.1:43123`.

Other checks:

```bash
npm test
npm run lint
npm run build
npm start
```

## Signup storage

`POST /api/pilot` validates the form on the server and writes one row to a SQLite database. The browser only receives whether the row was stored. It never receives the database path, the stored contact details, or a list of submissions.

Success is shown only after that write (and a read-back) succeeds. The message is:

> Your interest has been recorded. You have not submitted a claim.

If the database cannot be written, or `PILOT_STORAGE=off`, the response says signup is unavailable and the form keeps what the person typed. No email or SMS is sent.

Default database file: `data/pilot.sqlite` (gitignored).

### Environment variables

Copy `.env.example` if you want to override the defaults. None of these are required for local use, and none are exposed to the browser.

| Variable | Purpose |
| --- | --- |
| `PILOT_DB_PATH` | Server-side path to the SQLite file. Default: `data/pilot.sqlite`. |
| `PILOT_STORAGE` | Set to `off` to refuse writes. The form then says signup is unavailable. |
| `PILOT_ALLOWED_ORIGINS` | Optional comma-separated browser origins allowed to post. When unset, the `Origin` host must match the `Host` header. |

Collected fields: name, email or phone, role, optional language, and consent to be contacted about the pilot. The form does not ask for policy numbers, medical records, diagnoses, Aadhaar or bank details. Pilot-contact consent is separate from any future permission to handle a claim, and it is not marketing consent.

A browser without JavaScript can still post the form. The server redirects back with a receipt only after the row is stored. The success message is shown only when that receipt exists in the database.

## Deploy

This environment does not have an authorised public host, so no public competition URL is claimed here.

Use a Node.js 22+ server with a persistent disk. Serverless file systems will not keep SQLite data.

```bash
npm ci
npm run build
PILOT_DB_PATH=/var/lib/vasooli/pilot.sqlite npm start -- --hostname 0.0.0.0 --port 43123
```

Put HTTPS in front of that process. Create the directory for `PILOT_DB_PATH` and keep it private. Do not commit the database. Do not turn on outbound email or SMS unless that channel is explicitly configured and authorised — this app does not send any.

If the site is served from a public origin that differs from the internal host header, set `PILOT_ALLOWED_ORIGINS` to the public origin, including the scheme, for example `https://vasooli.example.com`.

## Assets and information still required before a public launch

Official files were not in this repository. The page uses original Vasooli lettering and a simple document-and-check symbol, plus typographic wordmarks for Polifyx and Insurance Samadhan. It does not redraw official logos.

Still needed from the brand owners:

- Official Insurance Samadhan logo, used at its real proportions with its clear space
- Official Polifyx logo, used the same way
- Official colour values, if they should replace the warm ivory, teal, sage and peach palette used here
- Verified website, privacy notice and contact links

Do not add hospital, TPA, insurer or technology logos as partners unless that use is explicitly authorised. Do not add legal policies, phone numbers, testimonials or certification badges that have not been supplied.
