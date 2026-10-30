# Cowork audit for Sight Shield

What the Claude Cowork account has today, what is built for In Line Signs, and what Sight Shield can reuse or needs of its own. Audited 30 Oct 2026 from inside this cloud session.

## Connectors (claude.ai org level)

| Connector | Connected | Account it points at | Useful to Sight Shield |
| --- | --- | --- | --- |
| Microsoft 365 | Yes | info@inlinesigns.com.au, Mackenzie & Brown tenant | Yes for now. Mail, OneDrive and SharePoint hold all SightShield paperwork. SightShield has no mailbox or tenant of its own. |
| Gmail | Yes | maczac07@gmail.com (personal) | Tania sometimes writes here. |
| Google Calendar | Yes | Personal | Nothing scheduled for Sight Shield yet. |
| Xero | Yes | Mackenzie & Brown Co Pty Ltd only | SightShield's own Xero file will need connecting once it exists. |
| Supabase | Yes | Org with inline-signs, inline-signs-dev, Workflow | A sightshield project can be added here. |
| Netlify | Yes | Team with inlinesigns and inlinesigns-jobsheets | A sightshield site can be added here. |
| Pocket | Yes | Zac's recorder, has a "SightShield" space | Yes. Two recordings already. |
| Slack | Yes | Empty workspace | Not in use. |
| Zapier | Yes | | Available for automations. |
| Composio | Yes | | Available. |
| Claude Docs | Yes | | Holds the three SS docs. |
| Google Drive (small-business plugin) | Failed to authenticate this session | | Not searched. |

About 43 plugin-bundled MCP servers failed to connect through the proxy this session (Canva, HubSpot, Notion, Asana, Linear, QuickBooks, MYOB, Gusto, DocuSign and others). None of them is known to hold Sight Shield data. This is a connection failure, not a missing capability.

## Plugins installed

browser-use, operations, marketing, design, productivity, small-business, cowork-plugin-management. All from the Anthropic catalog. None is customised for either business.

## Custom skills (24, all synced to the account)

Built for In Line Signs, not reusable as-is: vinyl-colour-match, job-to-post, sign-dimension-sheet, quote-follow-up, supplier-invoices, install-reminder, morning-brief, review-reply-drafts, tender-signage-takeoff, nest-for-cutting, logo-vectorize, font-matcher, client-brand-sheet, shop-buy-list, secondhand-hunt, grant-watch.

Generic, reusable for Sight Shield: my-writing-style (Zac's voice), decision (logs new prices, rules and processes; the user preference says run it before changing anything), docs, docx, xlsx, pptx, pdf, google-workspace, skill-creator, import-memory.

No skill, scheduled task or memory file exists for Sight Shield.

## Memory and working context

- In Line Signs has a Brand Brain markdown file in SharePoint and a Brand DNA doc. Sight Shield has neither. This repo's `CLAUDE.md` now serves as the starting working memory.
- The In Line Signs workspace README sets a rule that SightShield lives in its own workspace under BUSINESS FILES/SightShield. That folder holds only the accountant agenda.

## Artifacts

Four Sight Shield artifacts exist (logo canvas, accountant brief, agenda, Stage 0 doc). The other 61 artifacts in the account are In Line Signs, personal or client work.

## Infrastructure

| Layer | In Line Signs | Sight Shield |
| --- | --- | --- |
| Company and ABN | Mackenzie & Brown Co Pty Ltd, ABN 24 689 202 560 | Pty Ltd ordered, ABN pending |
| Accounting | Xero, connected | None |
| Email and files | Microsoft 365 tenant mackenziebrowncoptyltd | None of its own |
| Domain and website | inlinesigns.com.au, Netlify | None |
| Database | Supabase inline-signs | None |
| Code | GitHub (job sheets app) | This repo, empty |
| Phone | 0491 709 002 | None of its own |
| Brand | Brand kit v1, red #D41A23, Barlow | Logo direction chosen, not final |
| SOPs and safety | Extensive SOP set, ISO prep under way via On Point Safety | On Point Safety to write; nothing exists yet |

## What this means

Everything Sight Shield needs on the Claude side is still to be built: its own memory, brand reference, skills, scheduled tasks, Xero connection, Supabase project, Netlify site and SharePoint workspace contents. The reusable parts are Zac's voice rules, the decision skill, the document skills and the connectors themselves.
