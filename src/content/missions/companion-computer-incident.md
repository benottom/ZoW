---
title: "Companion Computer Incident"
missionId: "MISSION 006"
shortDescription: "Investigate suspicious behavior on the onboard Linux companion computer."
role: "blue"
difficulty: "practitioner"
domains: ["Embedded"]
durationMinutes: 40
mode: "individual"
environment: "virtual"
learningOutcomes:
  - "Investigate an embedded Linux system for signs of compromise"
  - "Differentiate normal companion-computer behavior from anomalous processes"
  - "Preserve evidence on resource-constrained hardware"
prerequisites: ["Drone Cybersecurity Foundations"]
isFree: false
isFeatured: false
status: "published"
---

Most modern UAS pair a flight controller with a companion computer running embedded Linux — and that companion computer is exactly the kind of general-purpose system attackers know how to target. In this mission, process and network activity on a simulated companion computer doesn't match its expected baseline.

You work through logs, running processes and network connections to determine what changed, when, and whether the flight controller itself is at risk. Resource constraints on embedded hardware mean your investigation has to be efficient, not exhaustive.

Companion Computer Incident is a core mission in the UAS Blue Team Defender learning path.
