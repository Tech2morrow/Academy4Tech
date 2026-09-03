---
title: "Automatic Pet Feeder"
description: "An Arduino-based timed feeder concept with three configurable feeding times, an LCD and keypad input."
category: "Arduino"
tags: ["Arduino", "Electronics", "Automation", "Prototyping"]
image: "/images/projects/automatic-pet-feeder.jpg"
imageAlt: "Top view of the automatic pet feeder prototype from the original Academy4Tech project page"
featured: true
draft: false
publishedDate: "2026-08-11"
difficulty: "Intermediate"
buildTime: "Build time not documented"
technologies: ["Arduino", "C++", "I2C"]
hardware: ["Arduino-compatible board", "16×2 I2C LCD", "4×4 keypad", "Motor or feeder actuator"]
software: ["Arduino IDE", "LiquidCrystal_I2C", "Keypad", "elapsedMillis"]
github: "https://github.com/Tech2morrow/Pet_Feeder"
legacyUrl: "/projects-blogs/cat-feeder"
---

## Project overview

The original Cat Feeder 1.0 project combines concept design, electrical design, programming and testing. Its purpose is to dispense a controlled portion of food at user-defined times.

Version 1.0 supports **three configurable feeding times** and includes an error-checking mechanism. The design uses the Arduino timer rather than an external real-time clock. This page preserves the documented concept while the source repository remains the authority for implementation details.

## Documented architecture

The controller uses a 16×2 LCD at I2C address `0x27`, a 4×4 keypad and a signal output on pin 11. The original code tracks the current time, three feeder schedules, the selected rotation value and separate elapsed timers for total runtime and motor runtime.

```cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <Keypad.h>
#include <elapsedMillis.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);
const byte ROWS = 4;
const byte COLS = 4;
int signalPin = 11;
```

## Main software functions

- `setup()` prepares the user interface and output hardware.
- `loop()` maintains the feeder state.
- `DisplayRemainingTime()` presents the countdown.
- `Time_input()` captures hours, minutes and seconds from the keypad.
- `GetRotation()` records the selected actuator rotation.
- `update_clock()` advances the software clock.

## Testing and improvement notes

The legacy page describes eight prototype views but does not provide enough verified detail to reproduce the mechanical assembly or wiring safely. Before rebuilding the prototype, confirm the actuator, power stage, mechanical limits and food-safe construction directly from the repository or updated design files.

Useful next improvements include an external real-time clock, non-volatile schedule storage, jam detection and a guarded motor driver. These are improvement ideas, not claims about the documented version.

## Source

The original code is available in the [Tech2morrow Pet Feeder repository](https://github.com/Tech2morrow/Pet_Feeder).
