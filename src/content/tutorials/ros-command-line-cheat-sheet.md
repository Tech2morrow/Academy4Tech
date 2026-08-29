---
title: "ROS 1 Command-Line Cheat Sheet"
description: "A reorganized reference to classic ROS 1 package, node, topic, service, parameter, bag and TF commands."
category: "ROS"
tags: ["ROS 1", "Linux", "Robotics", "Command line"]
imageAlt: "Technical illustration representing ROS nodes and command-line tools"
featured: true
draft: false
publishedDate: "2026-08-11"
difficulty: "Intermediate"
technologies: ["ROS 1", "Bash", "Linux"]
requirements: ["A working ROS 1 installation", "A sourced catkin workspace", "Basic terminal familiarity"]
legacyUrl: "/projects-blogs/ros-cheat-code"
---

## Before you start

This reference preserves useful commands from the original Academy4Tech ROS cheat sheet. It targets **ROS 1**. Some legacy tools beginning with `rx` were renamed to `rqt` tools; ROS 2 uses a different command structure.

## Packages and workspaces

```bash
rospack find <package>
roscd <package>
rosls <package>
rosdep install <package>
catkin_make
```

Use `rospack` to locate packages, `roscd` to move into one and `rosdep` to install declared system dependencies.

## Nodes and launch files

```bash
roscore
rosrun <package> <executable>
rosnode list
rosnode info <node>
rosnode ping <node>
rosnode kill <node>
roslaunch <package> <file.launch>
```

`roscore` starts the ROS master, parameter server and logging node. `rosrun` starts one executable; `roslaunch` coordinates one or more nodes from a launch file.

## Topics and messages

```bash
rostopic list
rostopic type /topic_name
rostopic echo /topic_name
rostopic hz /topic_name
rostopic bw /topic_name
rosmsg show <message_type>
```

Publish a string at 10 Hz:

```bash
rostopic pub -r 10 /topic_name std_msgs/String "data: 'hello'"
```

## Parameters

```bash
rosparam list
rosparam get /parameter
rosparam set /parameter value
rosparam dump parameters.yaml
rosparam load parameters.yaml
rosparam delete /parameter
```

Parameters use YAML values and live on the ROS parameter server.

## Services

```bash
rosservice list
rosservice info /service_name
rosservice type /service_name
rosservice call /add_two_ints 1 2
rossrv show <service_type>
```

## Record and replay topic data

```bash
rosbag record -a
rosbag record /topic_one /topic_two
rosbag info recording.bag
rosbag play recording.bag
```

Bag files capture time-stamped topic messages for repeatable debugging and analysis.

## TF and visualization

```bash
rosrun tf tf_echo <source_frame> <target_frame>
rosrun tf view_frames
rqt_graph
rqt_plot /topic/field
rqt_console
rviz
```

Use these tools to inspect transforms, visualize the node graph, plot data, filter logs and view robot state.

## Diagnose a workspace

```bash
roswtf
roswtf <launch-file>
```

`roswtf` checks the running graph or a launch file for common configuration problems.
