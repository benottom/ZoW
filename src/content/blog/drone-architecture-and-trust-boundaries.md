---
title: "Drone Architecture and Trust Boundaries: A Practical Map"
seoTitle: "Drone Architecture and Trust Boundaries"
author: "Ben Ottoman"
publishedAt: 2026-01-14
summary: "A practical map of where trust is assumed versus verified across a typical UAS, from flight controller to cloud."
tags: ["architecture", "trust boundaries", "fundamentals"]
category: "blog"
relatedMissions: ["mavlink-trust-boundary", "companion-computer-incident"]
seoDescription: "A practical map of UAS trust boundaries from flight controller to cloud, and why they matter for security teams evaluating drone risk."
---

Security teams evaluating drone risk for the first time often start by asking, "is this drone secure?" — a question that is almost impossible to answer well, because a modern UAS isn't one system. It's a set of systems, each with different trust assumptions, connected across a handful of boundaries that matter far more than any single component.

## The layers, briefly

A typical platform has a flight-controller layer running dedicated firmware, a companion-computer layer running general-purpose software, a communications layer carrying command and telemetry, a navigation layer fusing GNSS and inertial sensors, and a cloud or fleet-management layer coordinating everything from the ground. Each layer has its own failure modes, and — critically — each boundary between layers is a place where trust is either verified or simply assumed.

## Why the boundaries matter more than the layers

Most security assessments look hard at one layer and lightly at the connections between layers. That's backwards for UAS. A flight controller can be well-hardened and still be exposed by an over-trusted companion computer. A fleet-management platform can have excellent access controls and still leak mission-critical data through an under-authenticated telemetry link.

Mapping trust boundaries first — before diving into any one component — gives a defender or product-security engineer a much faster path to the issues that actually matter operationally.

## Where to start

If your team is new to UAS security, the fastest way to build this mental model is hands-on: work through a scenario that forces you to trace command flow across at least two boundaries. ZoneOfWar's MAVLink Trust Boundary and Companion Computer Incident missions are both built around exactly this kind of boundary-tracing exercise, inside an isolated simulation with no real hardware involved.
