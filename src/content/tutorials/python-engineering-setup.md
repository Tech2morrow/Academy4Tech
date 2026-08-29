---
title: "Set Up Python for Engineering Projects"
description: "A clean, current-friendly starting workflow for Python, VS Code, virtual environments and notebooks."
category: "Python"
tags: ["Python", "VS Code", "Jupyter", "Virtual environments"]
imageAlt: "Technical illustration representing a Python engineering development environment"
featured: true
draft: false
publishedDate: "2026-08-11"
difficulty: "Beginner"
technologies: ["Python 3", "VS Code", "Jupyter"]
requirements: ["A Windows, macOS or Linux computer", "Permission to install software"]
youtube: "https://www.youtube.com/playlist?list=PLfDK_vJhZlEztnzWSK2oxScFUz_TVEWcN"
legacyUrl: "/online-free-courses/python"
---

## Install Python from an official source

Download a supported Python 3 release from [python.org](https://www.python.org/downloads/). On Windows, enable the installer option that adds Python to your path. Avoid archived third-party download links when an official installer is available.

Confirm the installation:

```bash
python --version
python -m pip --version
```

On some systems the command is `python3` rather than `python`.

## Choose an editor

[Visual Studio Code](https://code.visualstudio.com/) is a practical general-purpose choice. Install the official Python extension, then open your project folder rather than editing isolated files.

Other documented options from the legacy course page include [Jupyter](https://jupyter.org/), [PyCharm](https://www.jetbrains.com/pycharm/), [Spyder](https://www.spyder-ide.org/) and [Thonny](https://thonny.org/). Choose one tool and learn its debugger well.

## Create an isolated environment

```bash
python -m venv .venv
```

Activate it on Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Activate it on macOS or Linux:

```bash
source .venv/bin/activate
```

Then update packaging tools:

```bash
python -m pip install --upgrade pip
```

## Run a first program

Create `hello.py`:

```python
project = "Academy4Tech"
topics = ["robotics", "IoT", "computer vision"]

for topic in topics:
    print(f"{project}: build with {topic}")
```

Run it with `python hello.py`.

## Continue with the Academy4Tech playlist

The original website links to the [Python 3.x video playlist](https://www.youtube.com/playlist?list=PLfDK_vJhZlEztnzWSK2oxScFUz_TVEWcN). Video content may reflect older Python or tool versions, so compare installation steps with official documentation.
