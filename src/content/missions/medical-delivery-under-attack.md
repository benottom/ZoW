---
title: "Medical Delivery Under Attack"
missionId: "MISSION 004"
shortDescription: "Keep an autonomous delivery mission safe while communications and telemetry become unreliable."
role: "blue"
difficulty: "practitioner"
domains: ["Communications", "Navigation"]
durationMinutes: 40
mode: "team"
environment: "virtual"
learningOutcomes:
  - "Triage degraded command and telemetry links without stopping a safety-critical mission"
  - "Distinguish real anomalies from noisy or lossy communications"
  - "Apply fail-safe decision criteria under time pressure"
prerequisites: ["Drone Cybersecurity Foundations"]
isFree: false
isFeatured: true
status: "published"
---

An autonomous medical-delivery drone is mid-flight when its command and telemetry links begin degrading. The mission cannot simply be aborted — a delayed delivery has real consequences — but continuing blind is not acceptable either.

Working inside an isolated simulation, you monitor link quality, cross-check telemetry against expected flight behavior, and decide when to trust the data in front of you. The scoring engine tracks mission availability alongside command and telemetry integrity, so the fastest response is not always the highest-scoring one.

This mission is designed to build judgment under uncertainty: recognizing when degraded signal is an environmental artifact and when it is the first sign of interference, and choosing a resilient response that protects both the mission and the airframe.
