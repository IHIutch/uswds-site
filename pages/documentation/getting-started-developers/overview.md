---
permalink: /documentation/getting-started-for-developers/
layout: styleguide
title: Getting started for developers
lead: Get started using the Design System by installing, compiling, and customizing our code.
category: How to use USWDS
type: docs
subnav:
  - href: /documentation/getting-started/developers/phase-one-install/
  - href: /documentation/getting-started/developers/phase-two-compile/
  - href: /documentation/getting-started/developers/phase-three-customize/
  - href: /documentation/getting-started/developers/resources/
redirect_from:
  - /documentation/fundamentals/
---

Getting started for developers will lead you, step by step, through the process of installing and compiling the U.S. Web Design System and customizing your project using components and design tokens. If you prefer a hands-on demonstration of this process, please check out [our interactive tutorial](https://github.com/uswds/uswds-tutorial), which will take you through the same steps using a pre-made example website.

As always, we're here for you if you have any questions. Please get in touch via GitHub, Slack, or email!


## What you need
We recommend using the following tools when working with the Design System:
- Node (use the version specified in the [.nvmrc file](https://github.com/uswds/uswds/blob/main/.nvmrc); if needed, [download the latest version](https://nodejs.org/en/download/) from Node.js)
- npm
- Sass (we use [the latest `sass` package from npm](https://www.npmjs.com/package/sass))

These step-by-step instructions describe how to get started with the Design System using npm (recommended method).

If npm is not a viable tool for your project, however, you can [download and install the Design System directly](https://github.com/uswds/uswds#download-and-install) as outlined in GitHub.

We’ve built the Design System to support older and newer browsers through [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement). We follow the [2% rule](https://gds.blog.gov.uk/2012/01/25/support-for-browsers/): we officially support any browser above 2% usage as observed by [analytics.usa.gov](https://analytics.usa.gov/). In other words, Design System version 2.0 supports Chrome, Firefox, Safari, Edge, and Internet Explorer 11 and up. The next major version of the Design System (3.0) will drop support of Internet Explorer 11.

## Step-by-step
Get started by installing the Design System on your project, compiling your project's Sass from the Design System source, and customizing the Design System to fit your project needs as outlined in the following phases:

[**Phase 1: Install**]({{ site.baseurl }}/documentation/getting-started/developers/phase-one-install/) →

[**Phase 2: Compile**]({{ site.baseurl }}/documentation/getting-started/developers/phase-two-compile/) →

[**Phase 3: Customize**]({{ site.baseurl }}/documentation/getting-started/developers/phase-three-customize/) →
