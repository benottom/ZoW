---
title: "Command and Telemetry Communications"
category: "Command and telemetry communications"
summary: "Why the trust assumptions inside command-and-telemetry links like MAVLink matter so much for UAS security."
affectedComponents:
  - "Ground-control link"
  - "Telemetry radio / datalink"
  - "Command protocol implementation (e.g. MAVLink)"
defenderQuestions:
  - "Is our command link authenticated, or only nominally private?"
  - "Can we distinguish message loss from message tampering?"
  - "What happens automatically if the link drops mid-mission?"
mitigationThemes:
  - "Authenticated and, where possible, encrypted command links"
  - "Message-integrity checks distinct from availability monitoring"
  - "Well-tested link-loss fail-safe behavior"
relatedMissions:
  - "mavlink-trust-boundary"
  - "telemetry-under-pressure"
publishedAt: 2026-02-17
seoDescription: "Understanding the trust assumptions inside UAS command-and-telemetry links and how defenders should monitor and harden them."
---

## What it is

Command-and-telemetry links carry the instructions that control a drone and the data that reports its status back to the operator. Many widely used protocols in this space, including MAVLink, were originally designed around trusted, closed networks rather than adversarial conditions.

## Why it matters

If the command channel can be spoofed, replayed or otherwise abused, an attacker may be able to influence vehicle behavior. If the telemetry channel can be tampered with, an operator can be misled about the vehicle's true state at the exact moment a decision needs to be made.

## Affected components

The ground-control application, the radio or network datalink carrying command and telemetry traffic, and the protocol implementation itself — including how it is configured for a given deployment — all shape the real risk.

## Defender questions

Teams should know whether their command link is authenticated in practice, not just in protocol documentation, whether they can tell the difference between ordinary message loss and deliberate tampering, and what fail-safe behavior triggers automatically if the link drops mid-mission.

## Detection ideas

Monitoring for unexpected link resets, message sequence anomalies, and command-telemetry latency patterns that deviate from baseline can all indicate interference before it becomes a safety issue.

## Mitigation themes

Where the platform supports it, authenticated and encrypted command links, message-integrity verification independent of simple availability checks, and thoroughly tested link-loss fail-safe logic form the core of a resilient design.

## Practice this in a mission

MAVLink Trust Boundary and Telemetry Under Pressure both put these concepts into a hands-on, isolated mission environment.
