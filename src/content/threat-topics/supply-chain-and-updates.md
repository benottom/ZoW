---
title: "Supply Chain and Updates"
category: "Supply chain and updates"
summary: "How third-party components and update pipelines introduce risk that is hard to see from the outside of a UAS platform."
affectedComponents:
  - "Third-party software components and libraries"
  - "Hardware sub-components"
  - "Update and deployment pipeline"
defenderQuestions:
  - "Do we maintain an inventory of third-party components in our UAS software and hardware?"
  - "Is our update pipeline authenticated and auditable end to end?"
  - "Would an unexpected component or configuration change be noticed?"
mitigationThemes:
  - "Component inventory and provenance tracking"
  - "Authenticated, auditable update pipelines"
  - "Configuration and integrity monitoring against a known baseline"
relatedMissions:
  - "supply-chain-surprise"
publishedAt: 2026-04-21
seoDescription: "How third-party components and update pipelines introduce UAS supply-chain risk, with defender questions and mitigation themes."
---

## What it is

Modern UAS platforms are assembled from a mix of first-party and third-party software components, open-source libraries and hardware sub-components, all delivered and updated through a software supply chain.

## Why it matters

A weakness introduced anywhere in that chain — a compromised dependency, an unverified update, an unexpected hardware substitution — can end up running with the same trust as first-party code, often without an obvious signal that anything changed.

## Affected components

Third-party software components and libraries, hardware sub-components sourced from external vendors, and the update and deployment pipeline that delivers changes to fielded systems are all in scope.

## Defender questions

Organizations should know whether they maintain an inventory of third-party components across their UAS software and hardware, whether their update pipeline is authenticated and auditable end to end, and whether an unexpected component or configuration change would actually be noticed.

## Detection ideas

Comparing deployed configurations against a known-good baseline, monitoring update-pipeline activity for unauthorized changes, and tracking component provenance over time all help catch supply-chain issues before they reach production missions.

## Mitigation themes

A maintained component inventory with provenance tracking, an authenticated and auditable update pipeline, and ongoing configuration and integrity monitoring form the practical foundation for supply-chain resilience.

## Practice this in a mission

Supply Chain Surprise turns this topic into a hands-on investigation, tracing an unexpected behavior back to its source inside an isolated lab.
