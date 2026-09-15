# Ops Console

Create a complete reusable UI design foundation and mock frontend for a monitoring/control application.

IMPORTANT:

Complete the entire task in one pass.

Do not ask questions or wait for confirmation.

Do not stop after making only a plan, shell, or first screen.

Do not leave TODOs or unfinished sections.

When something is ambiguous, make a reasonable design assumption and continue.

This is NOT the full production application.

Your job is to create:

a shared visual/design system

a responsive AppShell

a reusable component library

3 representative mock screens

Another developer will later rebuild these patterns in Svelte.

Product context

This application lets users:

monitor targets

inspect events and status changes

trigger actions

choose execution location

inspect device/system health

Execution locations:

This PC / Local

Oracle / Cloud

Both

The UI should feel like a polished productivity/operations tool, not a complex infrastructure dashboard.

Use realistic mock data only. Do not build a real backend or database.

Design direction

Prioritize:

clean information hierarchy

compact desktop UI

comfortable mobile UI

clear status/error/degraded/offline states

consistent action placement

reusable patterns

Avoid:

excessive gradients

oversized cards

excessive whitespace

overly decorative dashboard design

Responsive rules

Use the same data and actions across mobile and desktop.

Desktop:

tables for structured lists

compact toolbars

contextual row actions

drawers/panels for detail

Mobile:

intentional card/list layouts

stacked important information

touch-friendly actions

menus, drawers, or bottom sheets for secondary actions

Do not simply stack desktop table rows vertically.

Shared layout

Create a reusable AppShell with:

desktop sidebar navigation

mobile navigation adaptation

page header

main content frame

basic connection/system status

Suggested navigation groups:

Monitoring

Events

Content

Tools

Automation

Devices

System

Reusable component library

Create and demonstrate reusable components for:

buttons

inputs / search / select

checkbox / switch

tabs / segmented controls

status badges

health indicators

execution target selector

Local / Oracle / Both indicators

PageHeader

toolbar / filters

action menu

desktop table

mobile data card

responsive data-list pattern

loading / skeleton

empty state

error / offline / degraded states

dialog / confirmation

drawer / detail panel

form/settings section

timeline / event item

Prefer small composable components over one giant universal component.

Also create a simple component showcase page.

Example screen 1 — Monitoring List

Create a complete responsive Monitoring screen.

Include:

search

filters

status

execution target

last checked time

next check

source/device

warnings/errors

actions

Example actions:

view details

enable/disable

run now

change execution target

edit

delete

Desktop: table-oriented layout.
Mobile: purpose-designed card list.

Mock examples should include:

healthy Local

healthy Oracle

Both

paused

degraded

error

Example screen 2 — Monitoring Detail / Events

Show:

target identity

current status

execution target

source/device

primary actions

recent observations

event/history timeline

configuration summary

error/degraded information

The user should quickly understand:

what happened

when

where it was observed

whether it recovered

Example screen 3 — Devices & Execution

Show Local PC and Oracle VM examples.

Include:

online/offline

health

capabilities

last seen

active workloads

degraded state

Example capabilities:

HTTP

Browser

Windows

Filesystem

Booking

Include a clear selector for:

This PC

Oracle

Both

Make it visually clear that Both means both execution sources, not fallback.

Final requirement

Before stopping, finish all of these:

design system

responsive AppShell

reusable component library

component showcase

Monitoring List

Monitoring Detail / Events

Devices & Execution

desktop layouts

mobile layouts

loading / empty / error / degraded states

enough mock interaction to communicate intended behavior

Do not ask what to build next.

Finish the entire design foundation package in one run.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/12e0c48c-5a52-4588-ac73-ba77a24b884e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
