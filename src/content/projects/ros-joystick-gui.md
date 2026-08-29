---
title: "ROS Joystick Control GUI"
description: "A Python and KivyMD interface that visualizes Logitech F710 joystick data carried through ROS."
category: "Robotics"
tags: ["ROS", "Python", "KivyMD", "Logitech F710"]
imageAlt: "Technical illustration representing a ROS joystick control interface"
featured: true
draft: false
publishedDate: "2026-08-11"
difficulty: "Intermediate"
buildTime: "Build time not documented"
technologies: ["ROS 1", "Python 3", "Kivy", "KivyMD"]
hardware: ["Logitech F710 or compatible joystick", "Linux computer"]
software: ["Ubuntu/Linux", "ROS", "Python 3.6 or later", "pip", "Kivy", "KivyMD", "ROS joystick driver"]
github: "https://github.com/Tech2morrow/Logitech-F710"
legacyUrl: "/projects-blogs/joystick-gui"
---

## Project overview

This project demonstrates joystick control through a custom graphical interface. A ROS node subscribes to `sensor_msgs/Joy`, reads axis and button values, and updates a KivyMD screen so the operator can see the controller state.

The original work credits Mr. Anouar Dhouibi for assistance with GUI and joystick-data transfer through ROS communication.

## Documented setup sequence

1. Prepare an Ubuntu or Linux environment.
2. Install ROS.
3. Install Python 3 and `pip` (the legacy build used Python 3.6 or newer).
4. Install Kivy and KivyMD.
5. Install the joystick driver and ROS joystick node.
6. Map the controller to the publisher.
7. Verify the nodes and topic data before running the interface.

## ROS callback pattern

The application subscribes to `/joy`, then separates button and axis arrays inside its callback.

```python
import rospy
from sensor_msgs.msg import Joy

def callback(data):
    buttons = data.buttons
    axes = data.axes
    print(*buttons)
    print(*axes)

rospy.Subscriber('/joy', Joy, callback)
```

The interface maps axis values to horizontal and vertical controls and changes button colors to reflect pressed states.

> The repository targets a legacy ROS/Python environment. Confirm package versions and update deprecated dependencies before using it on a current system.

## Source

See the [Logitech F710 project repository](https://github.com/Tech2morrow/Logitech-F710) for the original implementation.
