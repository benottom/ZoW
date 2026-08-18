---
title: "Firmware and Embedded Systems"
category: "Firmware and embedded systems"
summary: "How flight-controller firmware and companion-computer software create attack surface, and what defenders should watch for."
affectedComponents:
  - "Flight controller firmware"
  - "Companion computer (embedded Linux)"
  - "Bootloaders and update mechanisms"
defenderQuestions:
  - "Can we verify the integrity of firmware currently running on our fleet?"
  - "Are companion-computer processes monitored against a known-good baseline?"
  - "Is our update mechanism authenticated end to end?"
mitigationThemes:
  - "Signed firmware and verified boot"
  - "Baseline monitoring for embedded Linux processes"
  - "Least-privilege configuration for companion-computer services"
relatedMissions:
  - "companion-computer-incident"
  - "supply-chain-surprise"
publishedAt: 2026-02-10
seoDescription: "How UAS flight-controller firmware and companion-computer software create attack surface, with defender questions and mitigation themes."
---

## What it is

Most unmanned aircraft combine a flight controller running dedicated firmware with a companion computer running a general-purpose operating system, usually embedded Linux. Firmware handles flight-critical control loops; the companion computer typically handles higher-level autonomy, mission logic and communications.

## Why it matters

Firmware and embedded software sit closest to the physical aircraft, which means weaknesses here can affect safety of flight, not just data confidentiality. At the same time, companion computers running general-purpose operating systems inherit the same class of vulnerabilities seen across IT and IoT: unpatched services, weak configuration and insufficient process monitoring.

## Affected components

Flight controller firmware, bootloaders and update mechanisms, and companion-computer operating systems and services are all in scope. A weakness in any one of these can potentially cascade into the others if trust boundaries between them are not enforced.

## Defender questions

Security teams responsible for UAS fleets should be able to answer whether firmware integrity can be verified at any point in time, whether companion-computer behavior is monitored against an expected baseline, and whether the update mechanism itself is authenticated and resistant to tampering.

## Detection ideas

Baseline monitoring of companion-computer processes, network connections and resource usage can surface deviations early. Firmware version and hash verification at boot, where supported, provides a cheap integrity signal before a mission begins.

## Mitigation themes

Signed firmware with verified boot, least-privilege configuration for companion-computer services, and a tested, authenticated update pipeline are the foundational controls most organizations should prioritize first.

## Practice this in a mission

ZoneOfWar's Companion Computer Incident and Supply Chain Surprise missions turn this topic into a hands-on investigation, inside an isolated environment with no real hardware at risk.
