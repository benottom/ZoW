---
title: "Identity and Access"
category: "Identity and access"
summary: "Why operator and system identity is a foundational control across the whole UAS stack, from ground control to fleet APIs."
affectedComponents:
  - "Ground-control application accounts"
  - "Fleet-management platform roles"
  - "Machine-to-machine credentials"
defenderQuestions:
  - "Are operator accounts protected with strong authentication and least privilege?"
  - "How are machine-to-machine credentials issued, rotated and revoked?"
  - "Would we notice a credential being used from an unexpected context?"
mitigationThemes:
  - "Strong authentication and least-privilege roles for operators"
  - "Managed lifecycle for machine and service credentials"
  - "Context-aware monitoring of credential use"
relatedMissions:
  - "compromised-reconnaissance-flight"
publishedAt: 2026-04-02
seoDescription: "Why operator and machine identity is a foundational UAS security control, with defender questions and credential-lifecycle mitigation themes."
---

## What it is

Identity and access covers who, and what, is authorized to operate, monitor or configure a drone or fleet — from human operator accounts to the machine-to-machine credentials connecting ground-control software, cloud platforms and onboard systems.

## Why it matters

Weak identity controls undermine every other security investment. If an attacker can obtain valid operator or service credentials, many of the technical protections built into the platform become far less effective.

## Affected components

Ground-control application accounts, fleet-management platform roles and permissions, and the machine-to-machine credentials used between services and onboard systems are all part of this picture.

## Defender questions

Teams should confirm operator accounts use strong authentication and least-privilege roles, understand how machine-to-machine credentials are issued, rotated and revoked, and know whether they would notice a credential being used from an unexpected context or location.

## Detection ideas

Monitoring authentication events for unusual timing, location or device context, alerting on privilege escalation, and tracking service-credential usage against expected patterns all help surface identity-based compromise early.

## Mitigation themes

Strong authentication and least-privilege roles for human operators, a managed lifecycle for machine and service credentials, and context-aware monitoring of how credentials are actually used form the foundation of identity security for UAS operations.

## Practice this in a mission

Compromised Reconnaissance Flight includes an identity- and access-focused investigation thread as part of its scenario.
