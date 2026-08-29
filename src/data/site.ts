export const SITE = {
  name: 'Academy4Tech',
  url: 'https://academy4tech.com',
  tagline: 'Learn. Build. Innovate.',
  description: 'Practical engineering education for robotics, IoT, Python, AI and embedded systems.',
  owner: 'Muhammed Nabeel',
  phone: '+971 55 193 5789',
  social: {
    github: 'https://github.com/Tech2morrow',
    youtube: 'https://www.youtube.com/channel/UC4RUM4bbg45ck1Jfxznji5w',
    linkedin: 'https://www.linkedin.com/company/academy4tech/',
    linkedinOwner: 'https://www.linkedin.com/in/muhammednabeel/',
    instagram: 'https://www.instagram.com/academy4tech/',
    facebook: 'https://www.facebook.com/Academy4Tech-100580794890718/'
  }
} as const;

export type Topic = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: string;
  level: string;
  tools: string[];
};

export const topics: Topic[] = [
  { slug: 'robotics', name: 'Robotics', short: 'Design machines that sense, plan and act.', description: 'Build a foundation across mechanics, electronics, programming, control and autonomous systems.', icon: 'robot', level: 'Beginner to advanced', tools: ['ROS', 'Python', 'C++'] },
  { slug: 'iot', name: 'Internet of Things', short: 'Connect sensors, devices and useful data.', description: 'Learn device connectivity, messaging, dashboards and practical sensing systems.', icon: 'network', level: 'Beginner to intermediate', tools: ['ESP32', 'MQTT', 'Sensors'] },
  { slug: 'python', name: 'Python', short: 'Program clearly and automate engineering work.', description: 'Start with Python fundamentals, then apply them to hardware, robotics and computer vision.', icon: 'code', level: 'Beginner', tools: ['Python 3', 'VS Code', 'Jupyter'] },
  { slug: 'arduino', name: 'Arduino', short: 'Prototype electronics with approachable code.', description: 'Control outputs, read sensors and create embedded prototypes with Arduino boards.', icon: 'chip', level: 'Beginner', tools: ['Arduino IDE', 'C++', 'Sensors'] },
  { slug: 'raspberry-pi', name: 'Raspberry Pi', short: 'Build compact Linux-powered systems.', description: 'Use GPIO, Python and Linux to create connected and autonomous devices.', icon: 'board', level: 'Beginner to intermediate', tools: ['Linux', 'Python', 'GPIO'] },
  { slug: 'ai', name: 'AI & Machine Learning', short: 'Turn data into practical models.', description: 'Understand machine-learning workflows and how intelligent components fit engineering systems.', icon: 'brain', level: 'Intermediate', tools: ['Python', 'TensorFlow', 'Data'] },
  { slug: 'computer-vision', name: 'Computer Vision', short: 'Help machines interpret images and video.', description: 'Explore camera pipelines, feature extraction, detection and visual automation.', icon: 'eye', level: 'Intermediate', tools: ['OpenCV', 'Python', 'Cameras'] },
  { slug: 'opencv', name: 'OpenCV', short: 'Build fast vision applications.', description: 'Process images, video and camera data with the OpenCV computer-vision library.', icon: 'aperture', level: 'Intermediate', tools: ['OpenCV', 'Python', 'C++'] },
  { slug: 'ros', name: 'ROS', short: 'Connect the software inside a robot.', description: 'Learn nodes, topics, services, launch systems, visualization and robot tooling.', icon: 'nodes', level: 'Intermediate to advanced', tools: ['ROS', 'Linux', 'Python'] },
  { slug: 'pcb-design', name: 'PCB Design', short: 'Turn schematics into manufacturable boards.', description: 'Learn schematic capture, layout decisions and board-design workflows.', icon: 'circuit', level: 'Intermediate', tools: ['EAGLE', 'KiCad', 'Electronics'] },
  { slug: 'electronics', name: 'Electronics', short: 'Understand the circuits behind every build.', description: 'Develop practical knowledge of components, power, signals and measurement.', icon: 'bolt', level: 'Beginner', tools: ['Multimeter', 'Circuits', 'Sensors'] },
  { slug: 'embedded-systems', name: 'Embedded Systems', short: 'Build reliable software close to hardware.', description: 'Work with microcontrollers, interfaces, timing and resource-constrained applications.', icon: 'terminal', level: 'Intermediate', tools: ['C', 'C++', 'Microcontrollers'] },
  { slug: 'drones', name: 'Unmanned Aerial Vehicles', short: 'Explore aerial robotic platforms.', description: 'Understand common UAV forms, payloads, autonomy and engineering trade-offs.', icon: 'drone', level: 'Intermediate', tools: ['Flight control', 'Sensors', 'Vision'] },
  { slug: 'ground-robots', name: 'Unmanned Ground Vehicles', short: 'Create mobile robots for real terrain.', description: 'Explore drive systems, localization, sensing, teleoperation and autonomous navigation.', icon: 'rover', level: 'Intermediate', tools: ['ROS', 'LiDAR', 'Odometry'] },
  { slug: 'sensors', name: 'Sensors', short: 'Measure the physical world.', description: 'Learn how engineering systems acquire, validate and use environmental and motion data.', icon: 'wave', level: 'Beginner', tools: ['I2C', 'Analog', 'Data logging'] },
  { slug: 'robodk', name: 'RoboDK', short: 'Simulate and program industrial robots.', description: 'Use offline simulation for manufacturing tasks such as pick-and-place, welding and calibration.', icon: 'arm', level: 'Intermediate', tools: ['RoboDK', 'Simulation', 'Robot arms'] }
];

export const paths = [
  { name: 'Robotics Engineer', description: 'Programming → electronics → sensing → mobile robotics → ROS → vision', icon: 'robot', topics: ['python', 'electronics', 'arduino', 'sensors', 'ground-robots', 'ros', 'computer-vision'] },
  { name: 'IoT Developer', description: 'Electronics → microcontrollers → networks → dashboards → reliable devices', icon: 'network', topics: ['electronics', 'arduino', 'sensors', 'iot', 'raspberry-pi'] },
  { name: 'Computer Vision', description: 'Python → image fundamentals → OpenCV → camera systems → AI integration', icon: 'eye', topics: ['python', 'opencv', 'computer-vision', 'ai'] },
  { name: 'Embedded Systems', description: 'Electronics → C/C++ → microcontrollers → interfaces → PCB design', icon: 'chip', topics: ['electronics', 'arduino', 'embedded-systems', 'pcb-design'] }
];
