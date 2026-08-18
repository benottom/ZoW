---
title: "Resilience, Not Just Security: Designing UAS to Fail Safely"
author: "Ben Ottoman"
publishedAt: 2026-05-05
summary: "Why resilient mission design — not just prevention — is the right frame for cyber-physical autonomous systems."
tags: ["resilience", "autonomous systems", "research"]
category: "research"
relatedMissions: ["medical-delivery-under-attack", "fleet-intrusion"]
seoDescription: "Why resilient mission design, not just prevention, is the right security frame for cyber-physical autonomous systems like drones."
---

Traditional IT security is built heavily around prevention: keep the attacker out. For cyber-physical autonomous systems, prevention alone is an incomplete strategy, because the cost of a missed prevention control isn't just data loss — it can be a mission failure or a safety event.

## Resilience as the organizing principle

A resilience-first approach assumes that some incidents will get through prevention controls and asks a different question: when that happens, does the system degrade safely, preserve the operator's ability to respond, and recover without cascading into a worse outcome?

## What this looks like in practice

For UAS specifically, resilient design shows up as fail-safe behavior when links or sensors degrade, mission logic that can operate correctly on incomplete information, and monitoring that gives defenders enough evidence to act quickly rather than after the fact.

## Measuring it

Detection time and containment accuracy are useful metrics, but they should sit alongside mission-integrity and recovery-effectiveness metrics. A team that detects an incident quickly but fails to preserve mission integrity, or recovers slowly, has not actually demonstrated resilience.

## Why this matters for training design

ZoneOfWar's scoring model reflects this resilience-first framing directly: missions like Medical Delivery Under Attack and Fleet Intrusion are scored on mission integrity and recovery, not only on detection and containment, because that combination is what real operational resilience requires.
