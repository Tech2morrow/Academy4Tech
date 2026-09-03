export type LearningLesson = {
  title: string;
  duration: string;
  question: string;
  explanation: string;
  analogy: string;
  example: string;
  visual: string[];
  activity: string[];
  check: { question: string; answer: string };
  code?: string;
};

export type LearningGuide = {
  slug: string;
  hero: string;
  heroAlt: string;
  bigIdea: string;
  studentNote: string;
  outcomes: string[];
  lessons: LearningLesson[];
  vocabulary: { term: string; meaning: string }[];
  challenge: {
    title: string;
    brief: string;
    steps: string[];
    evidence: string[];
  };
  safety?: string[];
  sources: { title: string; publisher: string; url: string }[];
};

export const learningGuides: LearningGuide[] = [
  {
    slug: 'robotics',
    hero: '/images/learning/robotics-3d.jpg',
    heroAlt: 'Three-dimensional educational model of a mobile robot sensing a box and controlling its wheels and arm',
    bigIdea: 'A robot is a complete loop: it senses the world, decides what the information means, and acts safely.',
    studentNote: 'You do not need an expensive robot to begin. Paper models, simulations and small motor kits can teach the same system ideas.',
    outcomes: ['Identify the sensing, computing and acting parts of a robot', 'Explain feedback using a simple control loop', 'Plan a robot task as testable behaviours', 'Measure whether the robot actually meets its goal'],
    lessons: [
      {
        title: 'Sense, decide, act', duration: '20 min', question: 'What makes a machine a robot?',
        explanation: 'A useful robot has sensors that measure the environment, a controller that processes those measurements, and actuators that change the world. The controller repeats this loop many times each second. A remote-controlled car acts, but adding distance sensing and an automatic stopping rule makes it behave robotically.',
        analogy: 'Think of crossing a road: your eyes sense traffic, your brain decides when it is safe, and your legs act.',
        example: 'A distance sensor measures 18 cm. The controller compares that value with a 25 cm safety limit and commands both wheel motors to stop.',
        visual: ['Environment', 'Sensor reading', 'Decision rule', 'Motor action'],
        activity: ['Choose a familiar robot such as a vacuum or automatic door.', 'List what it senses, what decisions it makes and what moves.', 'Draw arrows to close the loop back to the environment.'],
        check: { question: 'Why is a motor not a sensor?', answer: 'A motor changes the physical world, so it is an actuator. A sensor measures the world and sends information to the controller.' }
      },
      {
        title: 'Motion and mechanisms', duration: '25 min', question: 'How does a robot turn electrical energy into movement?',
        explanation: 'Motors create rotation. Wheels, gears, belts and linkages transform that rotation into useful motion. Gear reduction trades speed for torque. Robot arms use joints, while mobile robots often vary the speed of left and right wheels to turn.',
        analogy: 'A bicycle gear makes climbing easier by trading wheel speed for more turning force.',
        example: 'If the left wheel turns slowly and the right wheel turns quickly, a two-wheel robot curves left.',
        visual: ['Electrical energy', 'Motor rotation', 'Mechanism', 'Robot motion'],
        activity: ['Roll two bottle caps together as model wheels.', 'Hold one still while moving the other.', 'Predict and sketch the direction the model would turn.'],
        check: { question: 'What does gear reduction usually increase?', answer: 'It usually increases torque while reducing output speed.' }
      },
      {
        title: 'Feedback and control', duration: '25 min', question: 'How can a robot correct its own mistakes?',
        explanation: 'Open-loop control sends a command without checking the result. Closed-loop control measures the result, finds the error between target and measurement, then corrects the command. Feedback helps a robot handle slopes, battery changes and small disturbances.',
        analogy: 'When steering a bicycle, you keep looking ahead and make many tiny corrections rather than choosing one handlebar angle forever.',
        example: 'A robot should face 90°, but its sensor reads 82°. The controller sees an 8° error and keeps turning until the error is small.',
        visual: ['Target', 'Compare', 'Correction', 'New measurement'],
        activity: ['Ask a partner to draw a line while looking once, then while continuously looking.', 'Compare the two results.', 'Identify which attempt used feedback.'],
        check: { question: 'What is error in a control loop?', answer: 'Error is the difference between the desired target and the measured result.' }
      },
      {
        title: 'Build and test behaviours', duration: '30 min', question: 'How do engineers make a robot dependable?',
        explanation: 'Complex tasks become manageable when split into behaviours such as start, follow, avoid, stop and recover. Engineers define a measurable success condition, test one behaviour at a time, record failures, and change only one variable before testing again.',
        analogy: 'A sports team practises passes and set plays separately before playing a full match.',
        example: 'For obstacle avoidance, define success as stopping at least 20 cm from a box in 9 of 10 trials on two floor surfaces.',
        visual: ['Define success', 'Test one part', 'Record evidence', 'Improve'],
        activity: ['Write a four-state plan for a delivery robot.', 'Add one failure case, such as a blocked path.', 'Choose one number that proves success.'],
        check: { question: 'Why change one variable at a time?', answer: 'It makes the cause of an improvement or failure easier to identify.' }
      }
    ],
    vocabulary: [
      { term: 'Sensor', meaning: 'A device that measures a physical quantity.' },
      { term: 'Actuator', meaning: 'A device that creates movement or another physical change.' },
      { term: 'Controller', meaning: 'The hardware and software that turns measurements into decisions.' },
      { term: 'Feedback', meaning: 'Using a measured result to correct the next action.' },
      { term: 'Torque', meaning: 'Turning force around an axis.' },
      { term: 'Behaviour', meaning: 'One testable robot action or response.' }
    ],
    challenge: { title: 'Design a desk-delivery robot', brief: 'Plan a small robot that carries an object across a classroom desk without falling or hitting an obstacle.', steps: ['Draw the chassis and label sensors, controller, power and actuators.', 'Create a sense-decide-act flow for edge and obstacle detection.', 'Write four test cases, including one failure case.', 'Build a paper model or simulate the route with a token.'], evidence: ['A labelled system diagram', 'A behaviour flowchart', 'A test table with measurable pass conditions'] },
    safety: ['Disconnect power before changing wiring.', 'Keep fingers, hair and loose clothing away from gears and wheels.', 'Use low-voltage educational hardware and an appropriate motor driver.'],
    sources: [
      { title: 'ROS 2 tutorials', publisher: 'Open Robotics', url: 'https://docs.ros.org/en/lyrical/Tutorials.html' },
      { title: 'ROS interfaces: topics, services and actions', publisher: 'Open Robotics', url: 'https://docs.ros.org/en/jazzy/How-To-Guides/Topics-Services-Actions.html' },
      { title: 'NASA Robotics Alliance Project', publisher: 'NASA', url: 'https://robotics.nasa.gov/' }
    ]
  },
  {
    slug: 'iot',
    hero: '/images/learning/iot-3d.jpg',
    heroAlt: 'Three-dimensional Internet of Things system linking a plant sensor, gateway, cloud dashboard and water pump',
    bigIdea: 'An IoT system connects the physical and digital worlds: a sensor or actuator, computing, and a network all work together.',
    studentNote: 'A useful connected device should still behave safely when Wi-Fi disappears or a message arrives late.',
    outcomes: ['Trace data from a sensor to a user and back to an actuator', 'Choose between local and cloud decisions', 'Explain MQTT publish and subscribe', 'Identify basic privacy, security and reliability needs'],
    lessons: [
      {
        title: 'The connected device', duration: '20 min', question: 'What belongs inside an IoT system?',
        explanation: 'An IoT device interacts with the physical world through at least one sensor or actuator and connects to the digital world through a network interface. A complete product may also include a gateway, server, database and user interface.',
        analogy: 'A school messenger gathers information in one room, follows a route, delivers it, and may bring an instruction back.',
        example: 'A soil-moisture probe, ESP32 and Wi-Fi connection form the device side of a plant-monitoring system.',
        visual: ['Physical world', 'Connected device', 'Network', 'Application'],
        activity: ['Find three connected products around you.', 'For each, name one sensor or actuator and one network.', 'Decide what should happen if the network fails.'],
        check: { question: 'Does a cloud dashboard alone make an IoT device?', answer: 'No. The system also needs a device that interacts with the physical world and communicates through a network.' }
      },
      {
        title: 'Messages and data journeys', duration: '25 min', question: 'How does a tiny device share useful data?',
        explanation: 'Devices package readings into messages. MQTT commonly uses publish and subscribe: a device publishes to a named topic, and interested clients subscribe. A timestamp and unit make readings meaningful, while a sensible reporting rate avoids wasting bandwidth and power.',
        analogy: 'A radio station broadcasts on a channel; listeners receive only the channels they choose.',
        example: 'A sensor publishes 31.4 with a timestamp to a temperature topic. A dashboard and an alert service can both subscribe.',
        visual: ['Measure', 'Package message', 'Publish topic', 'Subscribers'],
        activity: ['Invent a topic name for classroom temperature.', 'Write a sample message with value, unit and time.', 'Choose how often it should be sent and explain why.'],
        check: { question: 'Why include a unit with a sensor value?', answer: 'Without a unit, a number such as 31.4 could mean degrees Celsius, volts or something else.' }
      },
      {
        title: 'Local and cloud decisions', duration: '25 min', question: 'Where should an IoT decision happen?',
        explanation: 'Local or edge decisions are fast and can work offline. Cloud decisions can combine history and many devices but depend on connectivity. Good systems keep urgent safety rules local and use the cloud for storage, analysis and remote access.',
        analogy: 'You brake a bicycle yourself immediately; you do not phone someone far away and wait for permission.',
        example: 'A greenhouse controller stops a pump locally when the tank is empty, while the cloud stores daily moisture trends.',
        visual: ['Reading', 'Local safety rule', 'Cloud analysis', 'Actuator'],
        activity: ['Classify four decisions as local or cloud: stop motor, make weekly chart, send alert, unlock emergency exit.', 'Explain each choice.', 'Add a safe fallback.'],
        check: { question: 'Which decisions should usually remain local?', answer: 'Time-critical or safety-related decisions that must still work during network failure.' }
      },
      {
        title: 'Secure and reliable by design', duration: '30 min', question: 'How do we keep connected devices trustworthy?',
        explanation: 'Security begins with unique device identity, controlled access, protected data, safe updates and clear support. Reliability also needs timeouts, validation and useful behaviour when messages are missing or unreasonable.',
        analogy: 'A building needs named keys, locked doors, visitor rules, maintenance and an emergency plan.',
        example: 'Reject an impossible humidity reading, encrypt data in transit, change default passwords and stop watering after a maximum safe time.',
        visual: ['Identify', 'Protect', 'Validate', 'Recover'],
        activity: ['Threat-model a connected door sensor.', 'List what data it reveals and who should access it.', 'Add one software update and one offline-recovery rule.'],
        check: { question: 'Why are default shared passwords dangerous?', answer: 'Anyone who knows the common password may gain access to every device that was not changed.' }
      }
    ],
    vocabulary: [
      { term: 'Transducer', meaning: 'A sensor or actuator that connects computing to the physical world.' },
      { term: 'Gateway', meaning: 'A device that connects local devices to another network.' },
      { term: 'MQTT', meaning: 'A lightweight publish-and-subscribe messaging protocol.' },
      { term: 'Topic', meaning: 'A named MQTT channel used to organize messages.' },
      { term: 'Edge', meaning: 'Computing performed close to the device or data source.' },
      { term: 'Fallback', meaning: 'A safe alternative behaviour when the normal service fails.' }
    ],
    challenge: { title: 'Design a smart classroom monitor', brief: 'Design a system that measures temperature and room use without collecting unnecessary personal data.', steps: ['Choose sensors and justify each measurement.', 'Draw device, network, storage and dashboard connections.', 'Write local rules for warning and network failure.', 'Create a privacy and update checklist.'], evidence: ['Architecture diagram', 'Example message with unit and timestamp', 'Failure-mode table', 'Privacy explanation'] },
    safety: ['Never connect classroom prototypes directly to mains voltage.', 'Collect only the data the project needs.', 'Use test credentials and never publish passwords or private keys.'],
    sources: [
      { title: 'IoT device definition and cybersecurity FAQ', publisher: 'NIST', url: 'https://www.nist.gov/itl/applied-cybersecurity/nist-cybersecurity-iot-program/faqs' },
      { title: 'NISTIR 8259 IoT cybersecurity series', publisher: 'NIST', url: 'https://www.nist.gov/itl/applied-cybersecurity/nist-cybersecurity-iot-program/nistir-8259-series' },
      { title: 'MQTT specification', publisher: 'OASIS / MQTT.org', url: 'https://mqtt.org/mqtt-specification/' }
    ]
  },
  {
    slug: 'python',
    hero: '/images/learning/python-3d.jpg',
    heroAlt: 'Three-dimensional programming lesson showing code blocks for input, decisions, loops and robot output',
    bigIdea: 'Programming turns a large problem into small, exact instructions that a computer can test and repeat.',
    studentNote: 'Reading code is as important as writing it. Predict the result before pressing Run.',
    outcomes: ['Store and transform values with clear variable names', 'Use decisions and loops to control program flow', 'Organize repeated work with functions', 'Test a small engineering program with normal and unusual inputs'],
    lessons: [
      {
        title: 'Values, variables and expressions', duration: '20 min', question: 'How does a program remember information?',
        explanation: 'A value is a piece of data such as a number, text or true/false choice. A variable gives a value a useful name. Expressions combine values with operators, and Python evaluates the expression before storing or displaying the result.',
        analogy: 'A labelled container tells you what belongs inside and lets you replace its contents later.',
        example: 'Store distance_cm = 42, safe_distance_cm = 25, then compare the two values to decide whether the path is clear.',
        visual: ['Input value', 'Named variable', 'Expression', 'Result'],
        activity: ['Create variables for length and width.', 'Calculate rectangle area.', 'Change one input and predict the new result before running.'],
        check: { question: 'What is the difference between = and == in Python?', answer: '= assigns a value to a variable. == compares two values and produces True or False.' },
        code: `length_cm = 12\nwidth_cm = 8\narea_cm2 = length_cm * width_cm\nprint(area_cm2)`
      },
      {
        title: 'Decisions and loops', duration: '25 min', question: 'How does code choose and repeat?',
        explanation: 'An if statement selects a path using a Boolean condition. A loop repeats a block of code. Use for when working through a known collection or range, and while when repetition depends on a condition that may change.',
        analogy: 'A traffic signal uses conditions to choose stop or go, while a runner repeats laps until the race distance is complete.',
        example: 'Read five temperature samples, print a warning for values above 35, and count how many warnings occurred.',
        visual: ['Condition', 'Choose path', 'Repeat if needed', 'Finish'],
        activity: ['Write three sample temperatures in a list.', 'Predict which trigger a warning.', 'Add a boundary value of exactly 35 and check your rule.'],
        check: { question: 'Why must a while-loop condition eventually change?', answer: 'If it never becomes false, the loop may continue forever.' },
        code: `temperatures = [29, 36, 35, 38]\nfor value in temperatures:\n    if value > 35:\n        print("High temperature", value)`
      },
      {
        title: 'Functions and collections', duration: '25 min', question: 'How do we make programs easier to reuse and understand?',
        explanation: 'Functions group one responsibility behind a meaningful name. Parameters carry input into the function and return sends a result back. Lists hold ordered values, while dictionaries connect keys to values.',
        analogy: 'A recipe has a name, ingredients as inputs, steps inside, and a finished dish as its result.',
        example: 'A function converts an ADC reading into voltage, then a list stores several converted samples for an average.',
        visual: ['Arguments', 'Function', 'Return value', 'Use result'],
        activity: ['Write a function that converts centimetres to metres.', 'Call it with three values.', 'Test zero and a decimal value.'],
        check: { question: 'Why return a value instead of only printing it?', answer: 'A returned value can be stored, tested or used in another calculation.' },
        code: `def cm_to_m(distance_cm):\n    return distance_cm / 100\n\nmeasurements = [25, 80, 135]\nmetres = [cm_to_m(value) for value in measurements]`
      },
      {
        title: 'Test an engineering script', duration: '30 min', question: 'How can code earn our trust?',
        explanation: 'Start with a clear input-output rule. Test typical values, boundaries and invalid inputs. Separate calculation from input and display so the important logic is easy to verify. Error messages should help the user recover.',
        analogy: 'A bridge is checked with expected loads and difficult conditions before people depend on it.',
        example: 'A battery checker classifies 12.4 V as ready, 11.8 V as recharge, and rejects a negative measurement.',
        visual: ['Define rule', 'Choose cases', 'Run', 'Compare expected'],
        activity: ['Write expected results for three battery voltages.', 'Create a function and test each case.', 'Add one impossible input and a helpful response.'],
        check: { question: 'What is a boundary test?', answer: 'It tests a value exactly at or immediately around the point where behaviour changes.' },
        code: `def battery_state(volts):\n    if volts < 0:\n        raise ValueError("Voltage cannot be negative")\n    return "ready" if volts >= 12.2 else "recharge"`
      }
    ],
    vocabulary: [
      { term: 'Variable', meaning: 'A name that refers to a value.' },
      { term: 'Expression', meaning: 'Values and operators that Python evaluates.' },
      { term: 'Boolean', meaning: 'A value that is either True or False.' },
      { term: 'Loop', meaning: 'A structure that repeats instructions.' },
      { term: 'Function', meaning: 'A named, reusable block of code.' },
      { term: 'Test case', meaning: 'An input and the result expected from it.' }
    ],
    challenge: { title: 'Build a sensor-data checker', brief: 'Create a Python program that checks a list of classroom temperature readings and produces a clear summary.', steps: ['Write a function that validates one reading.', 'Classify valid readings as comfortable, warm or hot.', 'Count each category and calculate the average.', 'Test boundary and invalid values.'], evidence: ['Readable source code', 'At least six test cases', 'Expected and actual output', 'A short note about one bug you fixed'] },
    sources: [
      { title: 'The Python tutorial', publisher: 'Python Software Foundation', url: 'https://docs.python.org/3/tutorial/' },
      { title: 'Python standard library', publisher: 'Python Software Foundation', url: 'https://docs.python.org/3/library/' },
      { title: 'Python language reference', publisher: 'Python Software Foundation', url: 'https://docs.python.org/3/reference/' }
    ]
  },
  {
    slug: 'arduino',
    hero: '/images/learning/arduino-3d.jpg',
    heroAlt: 'Three-dimensional microcontroller prototype with button, potentiometer, LED, resistor and servo',
    bigIdea: 'Arduino makes microcontroller experiments approachable by joining a programmable board, a simple code structure and reusable libraries.',
    studentNote: 'Build one input and one output first. Confirm each part works before combining them.',
    outcomes: ['Explain the setup-and-loop structure of a sketch', 'Wire and control a digital input and output safely', 'Read an analog signal and create PWM output', 'Separate logic power from higher-current actuator power'],
    lessons: [
      {
        title: 'Board, pins and sketches', duration: '20 min', question: 'What happens when an Arduino sketch runs?',
        explanation: 'A microcontroller runs one program repeatedly. setup() runs once after start or reset; loop() then repeats. Pins can be configured as inputs or outputs. The uploaded program continues without a full desktop operating system.',
        analogy: 'Opening a classroom happens once, but checking the room and doing tasks repeats throughout the day.',
        example: 'Configure an LED pin in setup(), then turn it on and off with delays in loop().',
        visual: ['Power or reset', 'setup once', 'loop repeatedly', 'Pin changes'],
        activity: ['Open the built-in Blink example.', 'Point to setup and loop.', 'Predict what changing the delay will do.'],
        check: { question: 'How many times does setup() normally run?', answer: 'Once after power-up or reset.' },
        code: `const int ledPin = 9;\n\nvoid setup() {\n  pinMode(ledPin, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(ledPin, HIGH);\n  delay(500);\n  digitalWrite(ledPin, LOW);\n  delay(500);\n}`
      },
      {
        title: 'Digital input and output', duration: '25 min', question: 'How does a controller read a button and control an LED?',
        explanation: 'Digital signals use two logical states, HIGH and LOW. Inputs must not float between states, so a pull-up or pull-down resistor gives the pin a known default. An LED needs a series resistor to limit current.',
        analogy: 'A door is treated as open or closed, even though the handle moves through many positions.',
        example: 'Use INPUT_PULLUP for a button: an unpressed button reads HIGH and a pressed button connected to ground reads LOW.',
        visual: ['Button state', 'Digital input', 'Decision', 'LED output'],
        activity: ['Draw a button using the internal pull-up.', 'Trace the current path when pressed.', 'Write a truth table for button and LED states.'],
        check: { question: 'Why does an LED need a resistor?', answer: 'The resistor limits current so the LED and controller pin are not damaged.' }
      },
      {
        title: 'Analog input and PWM', duration: '25 min', question: 'How can a digital controller work with changing signals?',
        explanation: 'An analog-to-digital converter turns a voltage range into a number. PWM rapidly switches a digital output to control average energy. PWM can dim an LED or command some motor drivers, but it is not a true analog voltage.',
        analogy: 'A fast light switch can make a lamp appear dimmer when it spends less time on during each cycle.',
        example: 'Map a potentiometer reading to a PWM duty value so turning the knob changes LED brightness.',
        visual: ['Changing voltage', 'ADC number', 'Map range', 'PWM duty'],
        activity: ['Sketch low, middle and high PWM waveforms.', 'Mark the on-time in each.', 'Predict relative LED brightness.'],
        check: { question: 'What does 25% PWM duty mean?', answer: 'The output is on for about one quarter of each repeating cycle.' }
      },
      {
        title: 'Sensors, actuators and safe power', duration: '30 min', question: 'Why should motors not be powered directly from a pin?',
        explanation: 'Sensors usually use small currents, but motors and servos can demand much more than a microcontroller pin supplies. Use a driver or suitable external supply, share ground where the circuit requires it, and protect against voltage spikes from inductive loads.',
        analogy: 'A small doorbell button can signal a powerful gate motor, but it should not carry the motor current itself.',
        example: 'A light sensor tells the controller it is dark; the controller signals a transistor driver that powers a lamp.',
        visual: ['Sensor', 'Controller logic', 'Driver', 'Separate load power'],
        activity: ['Label logic and load current paths on a motor diagram.', 'Circle the shared reference connection.', 'Add a safe power-off step before rewiring.'],
        check: { question: 'What is the driver’s job?', answer: 'It lets a low-power control signal safely switch or regulate a higher-current load.' }
      }
    ],
    vocabulary: [
      { term: 'Sketch', meaning: 'An Arduino program.' },
      { term: 'GPIO', meaning: 'General-purpose input/output pins.' },
      { term: 'Pull-up', meaning: 'A resistor that gives an input a known HIGH default.' },
      { term: 'ADC', meaning: 'A converter that represents an analog voltage as a number.' },
      { term: 'PWM', meaning: 'Pulse-width modulation: controlling average output with timed pulses.' },
      { term: 'Driver', meaning: 'A circuit that safely controls a load requiring more power.' }
    ],
    challenge: { title: 'Build a responsive night light', brief: 'Plan or build a low-voltage light that brightens as the room becomes darker.', steps: ['Read a light-dependent sensor.', 'Map the reading to LED PWM output.', 'Print readings for calibration.', 'Test bright, medium and dark conditions.'], evidence: ['Wiring diagram', 'Commented sketch', 'Three calibration readings', 'A short test result'] },
    safety: ['Remove USB or battery power before rewiring.', 'Use a resistor with every ordinary LED.', 'Never connect motors or mains-powered loads directly to an I/O pin.'],
    sources: [
      { title: 'Arduino learning resources', publisher: 'Arduino', url: 'https://docs.arduino.cc/learn/' },
      { title: 'Arduino programming reference and examples', publisher: 'Arduino', url: 'https://docs.arduino.cc/programming/' },
      { title: 'Built-in examples', publisher: 'Arduino', url: 'https://docs.arduino.cc/built-in-examples/' }
    ]
  },
  {
    slug: 'raspberry-pi',
    hero: '/images/learning/raspberry-pi-3d.jpg',
    heroAlt: 'Three-dimensional single-board computer connected to storage, display, camera, LED and temperature sensor',
    bigIdea: 'A Raspberry Pi is a compact Linux computer that can run applications, use networks and interact with electronics through GPIO.',
    studentNote: 'Treat it as both a computer and an electronics board: shut down the operating system correctly and protect its 3.3 V GPIO pins.',
    outcomes: ['Distinguish a single-board computer from a microcontroller', 'Prepare storage and navigate Raspberry Pi OS', 'Use GPIO without exceeding electrical limits', 'Design a small networked physical-computing service'],
    lessons: [
      {
        title: 'Computer or controller?', duration: '20 min', question: 'How is a Raspberry Pi different from an Arduino-style board?',
        explanation: 'A Raspberry Pi single-board computer has a processor, memory, storage, operating system and multitasking applications. A microcontroller usually starts one dedicated program quickly and uses less power. Choose based on startup time, interfaces, power and software needs.',
        analogy: 'A laptop manages many activities; a digital alarm clock performs one focused job immediately.',
        example: 'Use a Raspberry Pi for a camera web dashboard; use a microcontroller for a battery sensor that wakes briefly every minute.',
        visual: ['Project need', 'Compare constraints', 'SBC or MCU', 'System choice'],
        activity: ['List five needs for a wildlife camera.', 'Mark which need favours an SBC or MCU.', 'Choose one and defend the trade-off.'],
        check: { question: 'Why might a microcontroller suit a tiny battery device better?', answer: 'It can use less power, start quickly and run one dedicated task without a full operating system.' }
      },
      {
        title: 'Boot, Linux and the terminal', duration: '25 min', question: 'What turns a bare board into a usable computer?',
        explanation: 'Boot media stores the operating system. After power-up, Linux manages files, users, programs and hardware. The terminal lets you express exact commands. Updates fix bugs and security issues; project dependencies should be kept separate when possible.',
        analogy: 'The board is a stage, the operating system is the stage manager, and applications are the performers.',
        example: 'Create a project folder, enter it, list its files and run a Python script from the terminal.',
        visual: ['Boot media', 'Linux starts', 'User session', 'Application'],
        activity: ['Write what pwd, ls and mkdir do.', 'Draw a folder tree for one project.', 'Plan a safe shutdown before removing power.'],
        check: { question: 'Why not simply unplug a running Raspberry Pi?', answer: 'The operating system may still be writing data, so sudden power loss can corrupt files or storage.' },
        code: `mkdir sensor-project\ncd sensor-project\npython3 -m venv .venv\nsource .venv/bin/activate`
      },
      {
        title: 'GPIO and physical computing', duration: '25 min', question: 'How can Linux software control real components?',
        explanation: 'GPIO pins can be configured as digital inputs or outputs and some support alternate interfaces. Raspberry Pi GPIO uses 3.3 V logic. LEDs need resistors, motors need drivers, and 5 V must not be applied to a 3.3 V GPIO input.',
        analogy: 'GPIO pins are small signal doors, not power sockets for large machines.',
        example: 'A Python program reads a push button and switches an LED through a resistor.',
        visual: ['Physical input', '3.3 V GPIO', 'Python rule', 'Protected output'],
        activity: ['Use an official pinout to find ground and one GPIO.', 'Draw an LED with a resistor.', 'Have a partner check polarity before power.'],
        check: { question: 'Can a motor connect directly to GPIO?', answer: 'No. Use a motor driver and suitable power source; the GPIO provides only the control signal.' }
      },
      {
        title: 'A networked edge project', duration: '30 min', question: 'How can a Raspberry Pi turn measurements into a service?',
        explanation: 'A Pi can collect sensor or camera data, process it locally, store summaries and serve results over a network. Separate acquisition, processing and presentation so each part can be tested. Add authentication before exposing controls.',
        analogy: 'A newsroom gathers reports, checks and edits them, archives the record, then publishes a clear update.',
        example: 'Read room temperature once a minute, store timestamped values and display only the latest value and a daily chart.',
        visual: ['Acquire', 'Process locally', 'Store', 'Serve safely'],
        activity: ['Draw the four software parts.', 'Define one input and output for each.', 'Add a rule for sensor or network failure.'],
        check: { question: 'Why separate data collection from the web page?', answer: 'Each part becomes easier to test, replace and recover when a failure occurs.' }
      }
    ],
    vocabulary: [
      { term: 'SBC', meaning: 'A complete computer built on one circuit board.' },
      { term: 'Boot media', meaning: 'Storage containing the operating system used at startup.' },
      { term: 'Linux', meaning: 'The operating-system family used by Raspberry Pi OS.' },
      { term: 'GPIO', meaning: 'Pins software can use for general digital input and output.' },
      { term: 'Headless', meaning: 'Operating without a directly attached screen or keyboard.' },
      { term: 'Service', meaning: 'A program that provides a function to other programs or users.' }
    ],
    challenge: { title: 'Plan a classroom environment station', brief: 'Design a Raspberry Pi station that records one environmental measurement and presents it safely on the local network.', steps: ['Choose one supported sensor.', 'Draw safe GPIO or interface wiring.', 'Separate acquire, process, store and display software.', 'Define startup, shutdown and failure behaviour.'], evidence: ['System block diagram', 'Pin and power plan', 'Example data record', 'Four test cases'] },
    safety: ['Power off before connecting components.', 'Raspberry Pi GPIO uses 3.3 V logic; never feed 5 V into a GPIO input.', 'Use a driver and separate appropriate supply for motors and other high-current loads.'],
    sources: [
      { title: 'Getting started', publisher: 'Raspberry Pi', url: 'https://www.raspberrypi.com/documentation/computers/getting-started.html' },
      { title: 'Raspberry Pi hardware and GPIO', publisher: 'Raspberry Pi', url: 'https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#gpio' },
      { title: 'Raspberry Pi OS and Python', publisher: 'Raspberry Pi', url: 'https://www.raspberrypi.com/documentation/computers/os.html' }
    ]
  },
  {
    slug: 'ai',
    hero: '/images/learning/ai-3d.jpg',
    heroAlt: 'Three-dimensional machine-learning pipeline sorting colored shapes after learning from examples',
    bigIdea: 'Machine learning finds useful patterns in examples; it does not understand a problem in the same way a person does.',
    studentNote: 'A model can be mathematically accurate on its training data and still fail in the real world. Test the whole system.',
    outcomes: ['Identify examples, features and labels', 'Separate training, validation and test data', 'Explain classification and regression', 'Evaluate errors, bias and safe human oversight'],
    lessons: [
      {
        title: 'Learn from examples', duration: '20 min', question: 'What does a machine-learning model actually learn?',
        explanation: 'A dataset contains examples. Features describe each example, and a label is the answer for supervised learning. Training adjusts model parameters so inputs map to useful outputs. The model learns statistical patterns, including unwanted patterns in poor data.',
        analogy: 'Sorting many objects by examples can reveal a rule, but a misleading set of examples teaches the wrong rule.',
        example: 'Use colour and weight as features to classify recyclable objects, while checking that the background does not accidentally reveal the label.',
        visual: ['Examples', 'Features and labels', 'Training', 'Model'],
        activity: ['Choose a simple classification task.', 'Write two useful features and one misleading feature.', 'Explain how you would label ten examples.'],
        check: { question: 'What is a label?', answer: 'It is the target answer associated with a training example in supervised learning.' }
      },
      {
        title: 'Train, validate and test', duration: '25 min', question: 'How do we know a model learned a pattern instead of memorising?',
        explanation: 'Training data adjusts the model. Validation data helps choose settings. Test data estimates performance on unseen examples and must not guide training. Overfitting happens when a model matches training details but performs poorly on new data.',
        analogy: 'Practise questions teach you, a mock exam guides revision, and a sealed final exam measures what transfers.',
        example: 'Split plant images by individual plant, not random near-identical frames, so the test set is genuinely new.',
        visual: ['Training set', 'Validation set', 'Locked test set', 'Real-world check'],
        activity: ['Divide 20 paper examples into three sets.', 'Keep the test labels hidden while making a rule.', 'Measure the final unseen result once.'],
        check: { question: 'Why keep test data separate?', answer: 'Using it to tune the model would make the final score overly optimistic.' }
      },
      {
        title: 'Predictions and metrics', duration: '25 min', question: 'Which score tells us whether a model is useful?',
        explanation: 'Regression predicts a number; classification predicts a category or probability. Accuracy alone can mislead when one class is rare. A confusion matrix separates true positives, false positives, true negatives and false negatives so the cost of each error is visible.',
        analogy: 'A fire alarm that never rings is correct most of the time but useless when fire is rare.',
        example: 'For a safety detector, missing a hazard may cost more than a false alarm, so recall may matter more than overall accuracy.',
        visual: ['Prediction', 'Compare truth', 'Count error types', 'Choose metric'],
        activity: ['Create a 2×2 confusion matrix for ten predictions.', 'Count false alarms and missed cases.', 'Decide which error matters most for your task.'],
        check: { question: 'When can high accuracy be misleading?', answer: 'When one class is much more common, a model can ignore the rare class and still appear accurate.' }
      },
      {
        title: 'Responsible deployment', duration: '30 min', question: 'What should happen before people depend on a model?',
        explanation: 'Test data quality, different user groups, unusual conditions and changes over time. Explain the model’s limits, monitor failures and provide human review for meaningful decisions. Protect private data and make it possible to stop or replace the model.',
        analogy: 'A new team member needs a clear job, supervision, feedback and limits—not blind trust.',
        example: 'A school recycling assistant suggests a bin but lets the student correct it; corrections are reviewed before any retraining.',
        visual: ['Test broadly', 'Explain limits', 'Human oversight', 'Monitor and improve'],
        activity: ['Write a model card for your classifier.', 'List intended use, two limits and one group it may underserve.', 'Add a human override and monitoring signal.'],
        check: { question: 'Why monitor a deployed model?', answer: 'Real-world data and conditions change, so performance can decline or new harms can appear.' }
      }
    ],
    vocabulary: [
      { term: 'Feature', meaning: 'An input measurement used by a model.' },
      { term: 'Label', meaning: 'The target answer for a supervised example.' },
      { term: 'Training', meaning: 'Adjusting model parameters using examples.' },
      { term: 'Overfitting', meaning: 'Learning training details that do not generalise.' },
      { term: 'Classification', meaning: 'Predicting a category or class probability.' },
      { term: 'Regression', meaning: 'Predicting a numeric value.' }
    ],
    challenge: { title: 'Design a fair recycling classifier', brief: 'Plan a small image or feature-based model that suggests a recycling category and clearly communicates uncertainty.', steps: ['Define classes and collect balanced example types.', 'Choose a train, validation and test split.', 'Select metrics based on error cost.', 'Write limits, privacy choices and human-override behaviour.'], evidence: ['Dataset plan', 'Feature and label table', 'Confusion matrix', 'Short model card'] },
    sources: [
      { title: 'Machine Learning Crash Course', publisher: 'Google for Developers', url: 'https://developers.google.com/machine-learning/crash-course' },
      { title: 'Machine-learning exercises', publisher: 'Google for Developers', url: 'https://developers.google.com/machine-learning/crash-course/exercises' },
      { title: 'TensorFlow tutorials', publisher: 'TensorFlow', url: 'https://www.tensorflow.org/tutorials' }
    ]
  },
  {
    slug: 'computer-vision',
    hero: '/images/learning/computer-vision-3d.jpg',
    heroAlt: 'Three-dimensional computer vision pipeline from camera and pixels to detected objects and robot action',
    bigIdea: 'Computer vision converts sampled light into numbers, then uses geometry and learned patterns to extract useful information.',
    studentNote: 'A camera captures pixels, not meaning. Lighting, viewpoint and calibration affect every later decision.',
    outcomes: ['Describe an image as a grid of channel values', 'Explain a basic vision pipeline', 'Distinguish detection, segmentation and tracking', 'Connect visual measurements to a safe action'],
    lessons: [
      {
        title: 'From light to pixels', duration: '20 min', question: 'What does a camera give the computer?',
        explanation: 'A lens focuses light onto a sensor. The sensor samples the scene into a grid of pixels. Each pixel stores intensity or colour-channel values. Resolution controls spatial detail, while exposure affects brightness and blur.',
        analogy: 'A mosaic represents a scene using many small coloured tiles; step back and the picture appears.',
        example: 'A 640 × 480 image contains 307,200 pixel positions, each with one or more channel values.',
        visual: ['Scene light', 'Lens and sensor', 'Pixel grid', 'Channel values'],
        activity: ['Draw an 8 × 8 pixel icon on squared paper.', 'Encode dark and light squares as 0 and 1.', 'Explain what detail is lost at low resolution.'],
        check: { question: 'Does one pixel know which object it belongs to?', answer: 'No. A pixel only stores measured values; algorithms infer structure from patterns across pixels.' }
      },
      {
        title: 'Improve and find structure', duration: '25 min', question: 'How can useful shapes emerge from noisy pixels?',
        explanation: 'Preprocessing can resize, change colour space, smooth noise or improve contrast. Gradients describe rapid intensity change and often reveal edges. Thresholding separates ranges, while morphology can remove small gaps or specks.',
        analogy: 'Cleaning a foggy window and tracing strong boundaries makes the important shapes easier to see.',
        example: 'Convert a high-contrast part to grayscale, blur small noise, then find edges before measuring its outline.',
        visual: ['Raw image', 'Preprocess', 'Edges or mask', 'Clean structure'],
        activity: ['Photograph one object on two backgrounds.', 'Predict which background gives a cleaner threshold.', 'List one lighting change that could break the method.'],
        check: { question: 'Why blur before some edge detectors?', answer: 'Smoothing can reduce small noise that would otherwise create false edges.' }
      },
      {
        title: 'Detect, segment and track', duration: '25 min', question: 'What kind of answer should a vision system produce?',
        explanation: 'Classification names an entire image. Detection locates objects with boxes or positions. Segmentation labels individual pixels. Tracking follows an object over time. Choose the least complex output that solves the task.',
        analogy: '“There is a ball” is classification; pointing to it is detection; colouring every ball pixel is segmentation; following it is tracking.',
        example: 'A sorting robot may need a contour centre and orientation, not a large general-purpose recognition model.',
        visual: ['Image', 'Choose task', 'Locate or label', 'Track or measure'],
        activity: ['Choose outputs for three tasks: photo album, robot pick-up, football analysis.', 'Explain the minimum needed.', 'Draw the expected output on one sample image.'],
        check: { question: 'Which task assigns a class to each relevant pixel?', answer: 'Segmentation.' }
      },
      {
        title: 'Vision-guided action', duration: '30 min', question: 'How does a pixel position become a physical movement?',
        explanation: 'Calibration relates image measurements to camera geometry. A robot also needs coordinate transforms between camera, robot and world frames. Confidence checks, reach limits and a safe stop keep uncertain visual results from causing unsafe motion.',
        analogy: 'A map location is useful only when you know the map scale, orientation and your own position.',
        example: 'Find an object centre in pixels, convert it to a table coordinate using calibration, confirm it lies in the safe workspace, then command the gripper.',
        visual: ['Pixel measurement', 'Calibration', 'Robot coordinates', 'Checked action'],
        activity: ['Place a grid beside an object in a photo.', 'Estimate scale in pixels per centimetre.', 'List two reasons the estimate changes when the camera moves.'],
        check: { question: 'Why is camera calibration important?', answer: 'It connects image measurements to camera geometry so positions and sizes can be interpreted accurately.' }
      }
    ],
    vocabulary: [
      { term: 'Pixel', meaning: 'One sampled position in a digital image.' },
      { term: 'Channel', meaning: 'One component of image data, such as red, green or blue.' },
      { term: 'Threshold', meaning: 'A rule that separates values into groups.' },
      { term: 'Detection', meaning: 'Finding and locating objects.' },
      { term: 'Segmentation', meaning: 'Assigning a label to individual pixels.' },
      { term: 'Calibration', meaning: 'Estimating camera properties that connect images to geometry.' }
    ],
    challenge: { title: 'Design a tabletop sorter', brief: 'Create a vision plan that locates one coloured shape and tells a robot where it is safe to pick.', steps: ['Define camera position and lighting.', 'Choose preprocessing and object-location steps.', 'Describe pixel-to-table calibration.', 'Add confidence, boundary and safe-stop checks.'], evidence: ['Pipeline diagram', 'Annotated test image', 'Calibration plan', 'Five varied test scenes'] },
    sources: [
      { title: 'OpenCV-Python tutorials', publisher: 'OpenCV', url: 'https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html' },
      { title: 'Image processing tutorials', publisher: 'OpenCV', url: 'https://docs.opencv.org/4.x/d2/d96/tutorial_py_table_of_contents_imgproc.html' },
      { title: 'Camera calibration and 3D reconstruction', publisher: 'OpenCV', url: 'https://docs.opencv.org/4.x/d9/db7/tutorial_py_table_of_contents_calib3d.html' }
    ]
  },
  {
    slug: 'opencv',
    hero: '/images/learning/opencv-3d.jpg',
    heroAlt: 'Three-dimensional sequence showing colour image, grayscale, blur, edges, contours and final outline',
    bigIdea: 'OpenCV provides tested building blocks for turning images and video into measurable computer-vision results.',
    studentNote: 'Display or save every intermediate image. A visible pipeline is much easier to debug than one final answer.',
    outcomes: ['Load, inspect and save image arrays', 'Use colour conversion, blur, threshold and edges', 'Measure contours and regions of interest', 'Build a camera loop with checks and clear output'],
    lessons: [
      {
        title: 'Images are arrays', duration: '20 min', question: 'How does OpenCV represent a picture?',
        explanation: 'OpenCV loads an image into a matrix-like array. Rows come before columns, and a colour image usually has multiple channels. In common OpenCV Python workflows, colour order is BGR rather than RGB, so conversion matters when using other libraries.',
        analogy: 'A spreadsheet cell has a row, column and value; a colour pixel has a row, column and channel values.',
        example: 'Load an image, inspect shape and dtype, read one pixel, then save a grayscale copy.',
        visual: ['Image file', 'Array', 'Rows and columns', 'Channels'],
        activity: ['Create a tiny coloured grid on paper.', 'Index three cells as row, column.', 'Predict the array shape for height 100, width 200 and three channels.'],
        check: { question: 'For img[y, x], which coordinate comes first?', answer: 'The row or y-coordinate comes first, followed by the column or x-coordinate.' },
        code: `import cv2 as cv\n\nimage = cv.imread("object.jpg")\nprint(image.shape, image.dtype)\ngray = cv.cvtColor(image, cv.COLOR_BGR2GRAY)\ncv.imwrite("object-gray.png", gray)`
      },
      {
        title: 'Build a processing pipeline', duration: '25 min', question: 'Why use several small image operations?',
        explanation: 'Each operation solves one problem. Colour conversion simplifies channels, blur reduces small noise, thresholding creates a mask, and edge detection finds rapid change. The correct order depends on the scene and desired measurement.',
        analogy: 'Preparing a science sample may require filtering, staining and viewing—each step reveals something different.',
        example: 'Convert to grayscale, apply a small Gaussian blur, then use Canny edges to reveal a part boundary.',
        visual: ['Colour', 'Grayscale', 'Smooth', 'Edges'],
        activity: ['Run or inspect the same image with two blur sizes.', 'Record which edges disappear.', 'Explain the trade-off between noise and detail.'],
        check: { question: 'Can excessive blur remove useful information?', answer: 'Yes. It reduces noise but can also erase small edges and features.' },
        code: `gray = cv.cvtColor(image, cv.COLOR_BGR2GRAY)\nblurred = cv.GaussianBlur(gray, (5, 5), 0)\nedges = cv.Canny(blurred, 60, 140)`
      },
      {
        title: 'Contours and measurements', duration: '25 min', question: 'How can a binary shape become useful numbers?',
        explanation: 'Contours describe connected boundaries in a binary image. From a contour, software can calculate area, perimeter, centre and bounding rectangle. A region of interest limits work to the part of the image that matters.',
        analogy: 'Tracing the coast of an island lets you estimate its boundary and area without studying the whole ocean.',
        example: 'Find contours in a thresholded image, reject tiny areas as noise, then draw a box around the largest remaining object.',
        visual: ['Binary mask', 'Contours', 'Filter by area', 'Measure object'],
        activity: ['Draw three blobs on grid paper.', 'Estimate each area.', 'Write a rule that rejects small specks but keeps the main object.'],
        check: { question: 'Why filter contours by area?', answer: 'It can remove small noise and keep shapes large enough to be relevant.' }
      },
      {
        title: 'A dependable camera loop', duration: '30 min', question: 'What makes video processing more than a repeated image script?',
        explanation: 'A video loop must confirm the camera opened, check every frame, process within the available time, show or record results and release resources. Use a measured frame rate and make failure visible rather than silently using stale data.',
        analogy: 'A live sports commentator must keep receiving current play, speak on time and report if the feed stops.',
        example: 'Capture a frame, detect an object, overlay the measured centre, exit on a key, and release the camera cleanly.',
        visual: ['Capture', 'Validate frame', 'Process and display', 'Release'],
        activity: ['Write pseudocode for a safe camera loop.', 'Add a frame-failure branch.', 'Choose one timing measurement to record.'],
        check: { question: 'Why check the frame-read result?', answer: 'The camera may disconnect or fail; processing invalid data can produce crashes or misleading results.' }
      }
    ],
    vocabulary: [
      { term: 'Array', meaning: 'An indexed grid of values used to store an image.' },
      { term: 'BGR', meaning: 'Blue, green, red channel order commonly used by OpenCV.' },
      { term: 'Kernel', meaning: 'A small neighbourhood used by a filter.' },
      { term: 'Mask', meaning: 'An image that selects relevant pixels.' },
      { term: 'Contour', meaning: 'A connected boundary around a shape.' },
      { term: 'ROI', meaning: 'Region of interest: a selected part of an image.' }
    ],
    challenge: { title: 'Create a shape inspector', brief: 'Build or plan an OpenCV program that finds one high-contrast object and reports its centre and area.', steps: ['Capture or choose a controlled test image.', 'Create and inspect preprocessing stages.', 'Find and filter contours.', 'Test lighting, rotation, size and no-object cases.'], evidence: ['Source code or pseudocode', 'Four saved intermediate images', 'Measurement table', 'Known limitations'] },
    sources: [
      { title: 'Install OpenCV for Python', publisher: 'OpenCV', url: 'https://docs.opencv.org/5.0/py_tutorials/py_setup/py_pip_install/py_pip_install.html' },
      { title: 'OpenCV-Python tutorials', publisher: 'OpenCV', url: 'https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html' },
      { title: 'Image processing in OpenCV', publisher: 'OpenCV', url: 'https://docs.opencv.org/4.x/d2/d96/tutorial_py_table_of_contents_imgproc.html' }
    ]
  },
  {
    slug: 'ros',
    hero: '/images/learning/ros-3d.jpg',
    heroAlt: 'Three-dimensional robot software modules linked by sensor, mapping, decision and motor-control message paths',
    bigIdea: 'ROS connects independent robot programs through named interfaces so a complex system can be built, inspected and replaced one part at a time.',
    studentNote: 'ROS is middleware and tooling, not the robot’s operating system in the everyday desktop sense.',
    outcomes: ['Read a ROS computational graph', 'Choose topics, services or actions for a task', 'Explain frames and timestamped sensor data', 'Use simulation, logs and command-line tools to debug'],
    lessons: [
      {
        title: 'Nodes and the robot graph', duration: '20 min', question: 'Why split robot software into separate nodes?',
        explanation: 'A node is a running participant with a focused responsibility, such as reading a camera or controlling wheels. Nodes form a graph through interfaces. Smaller responsibilities make components easier to test, reuse and replace.',
        analogy: 'A film crew has camera, sound, lighting and directing teams connected by clear communication.',
        example: 'A camera node publishes images, a detector node interprets them, and a motor node accepts safe velocity commands.',
        visual: ['Sensor node', 'Processing node', 'Decision node', 'Motor node'],
        activity: ['Draw four nodes for a line-following robot.', 'Name each responsibility.', 'Add arrows showing information direction.'],
        check: { question: 'Should one node usually do every robot task?', answer: 'No. Focused nodes improve testing, reuse and fault isolation.' }
      },
      {
        title: 'Topics, services and actions', duration: '25 min', question: 'Which ROS interface fits each kind of communication?',
        explanation: 'Topics carry ongoing one-way streams using publish and subscribe. Services handle short request-response work. Actions manage longer goals with feedback, a result and cancellation. Interface definitions keep message structure consistent.',
        analogy: 'A radio broadcast is a topic, asking a desk for one fact is a service, and ordering a delivery with progress updates is an action.',
        example: 'Camera frames use a topic, resetting a map can use a service, and navigating to a goal uses an action.',
        visual: ['Continuous stream', 'Quick request', 'Long goal', 'Feedback or result'],
        activity: ['Classify six robot communications.', 'Explain one ambiguous choice.', 'Add the expected data fields for one message.'],
        check: { question: 'Why is navigation normally an action?', answer: 'It takes time and benefits from progress feedback, a final result and cancellation.' }
      },
      {
        title: 'Time and coordinate frames', duration: '25 min', question: 'How do measurements from different sensors agree?',
        explanation: 'Sensor data is measured at a time and in a coordinate frame. Transforms describe how frames relate, such as camera to robot base and robot base to map. Using the wrong frame or stale timestamp can place an object incorrectly.',
        analogy: '“Two metres ahead” is incomplete until we know ahead of what and at what moment.',
        example: 'Transform a point detected in the camera frame into the robot base frame before planning an arm movement.',
        visual: ['Sensor frame', 'Timestamp', 'Transform tree', 'Common frame'],
        activity: ['Draw map, robot and camera axes.', 'Connect them as a tree.', 'Describe what changes when the robot turns.'],
        check: { question: 'What does a transform provide?', answer: 'It describes the position and orientation relationship between coordinate frames.' }
      },
      {
        title: 'Simulate, observe and debug', duration: '30 min', question: 'How can we understand a distributed robot when something fails?',
        explanation: 'Start with the graph: confirm expected nodes, interfaces and message rates. Inspect data, logs, parameters and transforms before changing code. Simulation allows repeatable tests without risking hardware, but physical validation is still required.',
        analogy: 'A doctor checks symptoms and measurements systematically before choosing a treatment.',
        example: 'If a robot does not move, check whether the command topic exists, messages arrive, safety node permits motion and motor controller reports faults.',
        visual: ['Observe graph', 'Inspect messages', 'Isolate boundary', 'Retest'],
        activity: ['Create a fault tree for “robot does not stop”.', 'List one observation at each system boundary.', 'Choose a safe simulation test before hardware.'],
        check: { question: 'Why inspect interfaces before editing code?', answer: 'The fault may be missing data, naming, timing or configuration rather than the algorithm itself.' }
      }
    ],
    vocabulary: [
      { term: 'Node', meaning: 'A running ROS participant with a focused role.' },
      { term: 'Topic', meaning: 'An asynchronous publish-and-subscribe data stream.' },
      { term: 'Service', meaning: 'A short request-response interaction.' },
      { term: 'Action', meaning: 'A longer goal with feedback, result and cancellation.' },
      { term: 'Frame', meaning: 'A named coordinate system.' },
      { term: 'Transform', meaning: 'The spatial relationship between two frames.' }
    ],
    challenge: { title: 'Architect a warehouse rover', brief: 'Design a ROS graph for a small rover that accepts a destination, avoids obstacles and reports progress.', steps: ['Define focused nodes and their responsibilities.', 'Choose topic, service or action for each connection.', 'Draw map, base and sensor frames.', 'Create a debugging checklist for one failure.'], evidence: ['Node graph', 'Interface table', 'Frame tree', 'Safe simulation test plan'] },
    safety: ['Test motion logic in simulation first.', 'Keep a physical emergency stop and supervised test area.', 'Limit speed and acceleration during first hardware tests.'],
    sources: [
      { title: 'ROS 2 tutorials', publisher: 'Open Robotics', url: 'https://docs.ros.org/en/lyrical/Tutorials.html' },
      { title: 'Topics, services and actions', publisher: 'Open Robotics', url: 'https://docs.ros.org/en/jazzy/How-To-Guides/Topics-Services-Actions.html' },
      { title: 'ROS 2 concepts', publisher: 'Open Robotics', url: 'https://docs.ros.org/en/lyrical/Concepts.html' }
    ]
  },
  {
    slug: 'pcb-design',
    hero: '/images/learning/pcb-design-3d.jpg',
    heroAlt: 'Three-dimensional PCB workflow from schematic and footprints to routed copper layers and assembled board',
    bigIdea: 'PCB design translates an electrical idea into exact physical layers that a manufacturer can build and inspect.',
    studentNote: 'A beautiful layout cannot repair a wrong schematic. Check electrical intent before arranging the board.',
    outcomes: ['Explain schematic symbols, nets, footprints and pads', 'Place components using electrical and mechanical needs', 'Route power, signals, planes and vias thoughtfully', 'Run ERC and DRC before creating fabrication files'],
    lessons: [
      {
        title: 'From idea to schematic', duration: '20 min', question: 'What information belongs in a schematic?',
        explanation: 'A schematic describes components and electrical connections, not their physical positions. Symbols represent parts, pins are connection points, and nets join pins that must be electrically common. Clear labels make intent reviewable.',
        analogy: 'A subway map explains which stations connect even though it does not copy the city’s exact geography.',
        example: 'Draw a connector, resistor and LED in series; label power and ground and assign realistic values.',
        visual: ['Requirement', 'Symbols', 'Nets and values', 'Electrical check'],
        activity: ['Draw a battery-resistor-LED schematic.', 'Mark polarity and current path.', 'Have a partner find one possible wiring error.'],
        check: { question: 'Does schematic position determine board position?', answer: 'No. The schematic shows electrical relationships; physical placement happens in the PCB layout.' }
      },
      {
        title: 'Footprints and placement', duration: '25 min', question: 'How does a symbol become a physical component?',
        explanation: 'A footprint contains copper pads and mechanical information that match a real part. Package dimensions, pin numbering and orientation must match the datasheet. Placement begins with board shape, connectors and mechanical constraints, then groups related components.',
        analogy: 'A furniture plan must use the real dimensions and doorway positions, not just a list of furniture.',
        example: 'Place a decoupling capacitor close to the microcontroller power pin and keep connectors accessible at the edge.',
        visual: ['Symbol', 'Datasheet package', 'Footprint', 'Placed component'],
        activity: ['Compare one symbol with two possible footprints.', 'Use dimensions to choose the right one.', 'Mark pin 1 on both.'],
        check: { question: 'Why verify a footprint against the datasheet?', answer: 'A wrong pad size, spacing or pin order can make the manufactured board unusable.' }
      },
      {
        title: 'Copper, layers and routing', duration: '25 min', question: 'How do physical tracks change circuit behaviour?',
        explanation: 'Tracks have resistance and carry current. Width, length, spacing and return path matter. Plan power first, use ground zones where appropriate, keep sensitive signals away from noisy switching paths, and use vias to change copper layers.',
        analogy: 'Road width and route affect how much traffic can move and how different traffic streams interfere.',
        example: 'Use a wider power track for a motor load and keep its high-current return away from a small analog sensor path.',
        visual: ['Place by function', 'Plan power', 'Route signals', 'Add return paths'],
        activity: ['Colour power, ground and signal nets differently on a printed layout.', 'Find a long return path.', 'Propose a shorter arrangement.'],
        check: { question: 'What is a via?', answer: 'A plated hole that electrically connects copper between PCB layers.' }
      },
      {
        title: 'Checks and manufacturing output', duration: '30 min', question: 'What should be verified before ordering a board?',
        explanation: 'Electrical Rules Check finds schematic conflicts; Design Rules Check finds layout violations. Inspect board outline, clearances, drill sizes, reference labels and polarity. Fabrication outputs commonly include Gerber layer files, drill data and assembly information.',
        analogy: 'A building needs both design review and construction drawings before materials are cut.',
        example: 'Run ERC, update the PCB from the schematic, run DRC, inspect Gerbers in a viewer, then print the board at 1:1 scale to check connectors.',
        visual: ['ERC', 'Update layout', 'DRC', 'Fabrication review'],
        activity: ['Create a pre-order checklist.', 'Include electrical, mechanical and documentation checks.', 'Explain who should review it.'],
        check: { question: 'Why inspect Gerber files separately?', answer: 'They are the actual layer data the manufacturer uses, so the review checks what will be fabricated.' }
      }
    ],
    vocabulary: [
      { term: 'Schematic', meaning: 'A symbolic description of components and electrical connections.' },
      { term: 'Net', meaning: 'Pins that are intended to be electrically connected.' },
      { term: 'Footprint', meaning: 'The physical pad and outline pattern for a component.' },
      { term: 'Via', meaning: 'A plated connection between copper layers.' },
      { term: 'ERC', meaning: 'Electrical Rules Check for the schematic.' },
      { term: 'DRC', meaning: 'Design Rules Check for the board layout.' }
    ],
    challenge: { title: 'Design a sensor indicator board', brief: 'Create a beginner PCB plan with a power connector, sensor connector, resistor, LED and small controller.', steps: ['Capture and annotate the schematic.', 'Select and verify footprints.', 'Place connectors and related parts, then route.', 'Run checks and review fabrication outputs.'], evidence: ['Schematic PDF or screenshot', 'Annotated layout', 'ERC and DRC results', 'Manufacturing checklist'] },
    safety: ['Use only safe low-voltage circuits for first boards.', 'Check polarity, voltage ratings and connector pin order before power.', 'Solder with ventilation, eye protection and a heat-safe stand.'],
    sources: [
      { title: 'KiCad documentation', publisher: 'KiCad', url: 'https://docs.kicad.org/' },
      { title: 'Getting started in KiCad', publisher: 'KiCad', url: 'https://docs.kicad.org/8.0/en/getting_started_in_kicad/getting_started_in_kicad.html' },
      { title: 'PCB Editor manual', publisher: 'KiCad', url: 'https://docs.kicad.org/10.0/en/pcbnew/pcbnew.html' }
    ]
  },
  {
    slug: 'electronics',
    hero: '/images/learning/electronics-3d.jpg',
    heroAlt: 'Three-dimensional low-voltage circuit with battery, switch, resistor, LED and multimeter probes',
    bigIdea: 'Electronics controls energy and information through complete circuits whose voltage, current and resistance can be measured.',
    studentNote: 'Start with batteries or current-limited bench supplies. Never experiment directly with wall electricity.',
    outcomes: ['Explain voltage, current and resistance in a closed circuit', 'Calculate simple values with Ohm’s law', 'Compare series and parallel connections', 'Use a multimeter with correct mode and connection'],
    lessons: [
      {
        title: 'Voltage, current and resistance', duration: '20 min', question: 'What moves through a circuit, and what controls it?',
        explanation: 'Voltage is potential difference between two points. Current is the rate of charge flow through a path. Resistance opposes current. For an ohmic component, V = I × R connects the three quantities.',
        analogy: 'Water pressure resembles voltage, flow rate resembles current, and a narrow pipe resembles resistance—but the analogy has limits.',
        example: 'Across a 330 Ω resistor at 3.3 V, ideal current is 3.3 ÷ 330 = 0.010 A, or 10 mA.',
        visual: ['Potential difference', 'Closed path', 'Resistance', 'Current'],
        activity: ['Cover one value in the Ohm’s-law triangle.', 'Solve for current with 5 V and 1 kΩ.', 'Check that units become milliamps.'],
        check: { question: 'Can current flow through an open circuit?', answer: 'Ideally no. The broken path prevents continuous charge flow.' }
      },
      {
        title: 'Series and parallel', duration: '25 min', question: 'How does connection shape change circuit behaviour?',
        explanation: 'Series components share one current path, and their voltage drops add. Parallel branches share the same two end nodes, so each branch has the same voltage. Adding a parallel branch lowers equivalent resistance and increases total source current.',
        analogy: 'A single queue is series; several checkout lanes between the same entrance and exit are parallel.',
        example: 'Two 1 kΩ resistors in series total 2 kΩ; the same two in parallel equal 500 Ω.',
        visual: ['Source', 'One path: series', 'Branches: parallel', 'Return'],
        activity: ['Draw two lamps in series and parallel.', 'Mark equal current or equal voltage.', 'Predict what happens if one lamp opens.'],
        check: { question: 'What quantity is equal across ideal parallel branches?', answer: 'The voltage across each branch is the same.' }
      },
      {
        title: 'Components shape signals', duration: '25 min', question: 'Why are different electronic components needed?',
        explanation: 'Resistors limit current and divide voltage. Capacitors store electric-field energy and smooth change. Diodes favour one current direction, while transistors use a small control signal to switch or regulate a larger path. Sensors change an electrical property with the environment.',
        analogy: 'A toolbox has different tools because gripping, cutting and measuring are different jobs.',
        example: 'A resistor protects an LED, while a transistor allows a microcontroller to control a load requiring more current.',
        visual: ['Signal or power', 'Component property', 'Changed behaviour', 'Useful output'],
        activity: ['Match five components to jobs.', 'Choose a component for motor switching.', 'Explain why a resistor alone is not a motor driver.'],
        check: { question: 'What does a capacitor store?', answer: 'Energy in an electric field, associated with separated charge.' }
      },
      {
        title: 'Measure and troubleshoot safely', duration: '30 min', question: 'How does a multimeter become part of the circuit?',
        explanation: 'Voltage is measured across two points with the meter in parallel. Current is measured by opening the path and inserting the meter in series. Resistance is measured only on an unpowered circuit. Begin with the correct port and range.',
        analogy: 'A pressure gauge connects across a pipe section, while a flow meter must become part of the flow path.',
        example: 'To check an LED resistor, disconnect power, isolate the component if needed, select resistance and measure across it.',
        visual: ['Choose quantity', 'Select port and mode', 'Connect correctly', 'Check reading'],
        activity: ['Draw meter connections for voltage and current.', 'Circle the dangerous mistake of placing a current-mode meter across a battery.', 'Write a three-step pre-measurement check.'],
        check: { question: 'Why is current mode dangerous across a source?', answer: 'The meter presents a very low-resistance path that can cause a large current, damage or injury.' }
      }
    ],
    vocabulary: [
      { term: 'Voltage', meaning: 'Electric potential difference between two points, measured in volts.' },
      { term: 'Current', meaning: 'Rate of electric charge flow, measured in amperes.' },
      { term: 'Resistance', meaning: 'Opposition to current, measured in ohms.' },
      { term: 'Series', meaning: 'Components sharing one current path.' },
      { term: 'Parallel', meaning: 'Branches connected across the same two nodes.' },
      { term: 'Continuity', meaning: 'The presence of a complete conductive path.' }
    ],
    challenge: { title: 'Engineer an LED indicator', brief: 'Design and verify a safe low-voltage LED circuit for a chosen battery or logic supply.', steps: ['Choose source and LED voltage.', 'Calculate a suitable series resistor and power.', 'Draw the circuit and meter test points.', 'Predict and record voltage and current.'], evidence: ['Ohm’s-law calculation', 'Circuit diagram', 'Measurement plan', 'Expected-versus-measured table'] },
    safety: ['Use batteries or a current-limited low-voltage supply.', 'Power off before moving wires or measuring resistance.', 'Never place a meter in current mode directly across a source.', 'Ask a qualified adult before working near mains-powered equipment.'],
    sources: [
      { title: 'Arduino electronics learning resources', publisher: 'Arduino', url: 'https://docs.arduino.cc/learn/' },
      { title: 'Ohm’s law: voltage, current and resistance', publisher: 'All About Circuits', url: 'https://www.allaboutcircuits.com/textbook/direct-current/chpt-2/voltage-current-resistance-relate/' },
      { title: 'Direct-current electronics textbook', publisher: 'All About Circuits', url: 'https://www.allaboutcircuits.com/textbook/direct-current/' }
    ]
  },
  {
    slug: 'embedded-systems',
    hero: '/images/learning/embedded-systems-3d.jpg',
    heroAlt: 'Three-dimensional embedded system connecting sensors, timer, microcontroller, display and motor driver',
    bigIdea: 'An embedded system combines dedicated software and hardware under real limits for time, memory, energy and safety.',
    studentNote: 'Reliable embedded code responds to events, protects shared data and always has a defined safe state.',
    outcomes: ['Describe microcontroller memory, peripherals and firmware', 'Choose GPIO, ADC, UART, I2C or SPI for a connection', 'Explain polling, interrupts and timers', 'Design a state machine with timeout and fault recovery'],
    lessons: [
      {
        title: 'Hardware meets firmware', duration: '20 min', question: 'What makes a system embedded?',
        explanation: 'An embedded system is built into a product to perform focused functions. A microcontroller combines processor, memory and peripherals. Firmware starts at reset, initializes hardware and then handles events or repeats a control loop within limited resources.',
        analogy: 'A washing-machine controller has one dedicated workplace, unlike a laptop that runs many unrelated applications.',
        example: 'A thermostat reads temperature, applies a control rule, drives a relay safely and updates a small display.',
        visual: ['Reset', 'Initialize hardware', 'Read and decide', 'Control product'],
        activity: ['Choose one appliance.', 'List its inputs, outputs and timing needs.', 'Identify its safe state after a fault.'],
        check: { question: 'What is firmware?', answer: 'Software stored for and closely controlling an embedded device.' }
      },
      {
        title: 'Pins and communication buses', duration: '25 min', question: 'How do components exchange data?',
        explanation: 'GPIO handles simple digital states; ADC measures analog voltage. UART is an asynchronous serial link, I2C connects addressed devices on shared data and clock lines, and SPI uses separate clock and data paths for fast controller-peripheral exchange.',
        analogy: 'Different roads suit a single driveway, a shared bus route or a fast dedicated delivery lane.',
        example: 'Use I2C for several low-speed addressed sensors and SPI for a display that needs faster transfers.',
        visual: ['Peripheral need', 'Choose interface', 'Wire and configure', 'Validate data'],
        activity: ['Match four peripherals to interfaces.', 'Count required signal wires.', 'Check voltage compatibility and shared ground.'],
        check: { question: 'What allows several I2C devices to share a bus?', answer: 'Each compatible device uses an address on the shared clock and data lines.' }
      },
      {
        title: 'Time, polling and interrupts', duration: '25 min', question: 'How can a controller respond at the right moment?',
        explanation: 'Polling repeatedly checks for change. An interrupt pauses normal flow to handle an event quickly, then returns. Hardware timers schedule precise events. Interrupt handlers should be short; lengthy work can be signalled for the main loop.',
        analogy: 'Polling is repeatedly checking the door; an interrupt is a doorbell; a timer is an alarm clock.',
        example: 'A timer triggers sensor sampling every 10 ms while a button interrupt records an emergency request for the main loop.',
        visual: ['Normal task', 'Event arrives', 'Short handler', 'Resume safely'],
        activity: ['Classify three events as polling, interrupt or timer.', 'Draw a timing line.', 'Mark work that should stay outside an interrupt handler.'],
        check: { question: 'Why keep an interrupt handler short?', answer: 'Long handlers delay other time-critical work and can make system timing unpredictable.' }
      },
      {
        title: 'State machines and fault recovery', duration: '30 min', question: 'How can behaviour stay clear as a product grows?',
        explanation: 'A finite-state machine lists valid states, events and transitions. Outputs depend on the current state. Timeouts prevent indefinite waiting, a watchdog can reset stalled software, and fault states put hardware into a safe condition while preserving useful diagnostic information.',
        analogy: 'A lift has states such as doors open, doors closing and moving; only certain transitions are safe.',
        example: 'A motor controller moves from IDLE to RUN only after a start event, enters FAULT on overcurrent, and returns only after power is safe and a reset is requested.',
        visual: ['State', 'Event or timeout', 'Guard condition', 'Next or fault state'],
        activity: ['Draw states for an automatic fan.', 'Add sensor failure and over-temperature events.', 'Define the output in every state.'],
        check: { question: 'What is a safe state?', answer: 'A defined condition that reduces risk when the system cannot continue normal operation.' }
      }
    ],
    vocabulary: [
      { term: 'Firmware', meaning: 'Software closely tied to an embedded device.' },
      { term: 'Peripheral', meaning: 'Hardware controlled by or connected to the processor.' },
      { term: 'Interrupt', meaning: 'An event that temporarily redirects processor execution.' },
      { term: 'Timer', meaning: 'Hardware that measures or schedules time intervals.' },
      { term: 'State machine', meaning: 'Behaviour model built from states and allowed transitions.' },
      { term: 'Watchdog', meaning: 'A mechanism that detects stalled software and initiates recovery.' }
    ],
    challenge: { title: 'Design a reliable mini incubator controller', brief: 'Plan firmware that reads temperature, controls a fan, updates a display and enters a safe state if sensing fails.', steps: ['Choose peripherals and interfaces.', 'Define timing for sensing and display.', 'Draw states, transitions and outputs.', 'Add range checks, timeout and watchdog behaviour.'], evidence: ['Hardware block diagram', 'Timing diagram', 'State machine', 'Fault-injection test plan'] },
    safety: ['Use low-voltage loads or simulated outputs while learning.', 'Separate motor power through a suitable driver.', 'Choose a safe output state before enabling hardware.', 'Treat watchdog reset as recovery, not a substitute for fixing faults.'],
    sources: [
      { title: 'CMSIS introduction', publisher: 'Arm', url: 'https://arm-software.github.io/CMSIS_6/latest/General/index.html' },
      { title: 'CMSIS-Core overview', publisher: 'Arm', url: 'https://arm-software.github.io/CMSIS_6/latest/Core/index.html' },
      { title: 'Arduino microcontroller learning resources', publisher: 'Arduino', url: 'https://docs.arduino.cc/learn/' }
    ]
  }
];

export const learningGuideBySlug = new Map(learningGuides.map((guide) => [guide.slug, guide]));
