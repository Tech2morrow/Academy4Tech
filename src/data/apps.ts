export type AndroidApp = {
  name: string;
  packageName: string;
  category: 'Education' | 'Tools';
  description: string;
  audience: string;
  icon: string;
  featureImage: string;
  playUrl: string;
  updated: string;
  containsAds?: boolean;
};

export const ANDROID_DEVELOPER_URL = 'https://play.google.com/store/apps/developer?id=Academy4Tech&hl=en';

// Keep this list in the same order as the Academy4Tech Google Play developer page.
// Artwork is stored locally so the website stays fast and does not hot-link store assets.
export const androidApps: AndroidApp[] = [
  {
    name: 'Academy4Tech',
    packageName: 'com.academy4tech.versionfirst',
    category: 'Education',
    description: 'A learning hub for robotics, Python, IoT, Arduino, Raspberry Pi, ROS, computer vision and practical engineering.',
    audience: 'Robotics learners, researchers and developers',
    icon: '/images/apps/academy4tech-icon.webp',
    featureImage: '/images/apps/academy4tech-feature.webp',
    playUrl: 'https://play.google.com/store/apps/details?id=com.academy4tech.versionfirst',
    updated: '17 August 2026'
  },
  {
    name: 'Pip Notes',
    packageName: 'com.pipnotes.app',
    category: 'Tools',
    description: 'A colorful, private notes app with sketches, reminders, checklists, Pip Buddy and optional Google Drive sync.',
    audience: 'Students, planners and creative note-takers',
    icon: '/images/apps/pip-notes-icon.webp',
    featureImage: '/images/apps/pip-notes-feature.webp',
    playUrl: 'https://play.google.com/store/apps/details?id=com.pipnotes.app',
    updated: '22 August 2026'
  },
  {
    name: 'BuddyQuest STEM',
    packageName: 'com.buddyquest.stem',
    category: 'Education',
    description: 'Learn Python, mathematics, physics, biology and engineering through colorful missions with an animated study buddy.',
    audience: 'School-age STEM learners',
    icon: '/images/apps/buddyquest-stem-icon.webp',
    featureImage: '/images/apps/buddyquest-stem-feature.webp',
    playUrl: 'https://play.google.com/store/apps/details?id=com.buddyquest.stem',
    updated: '19 August 2026',
    containsAds: true
  },
  {
    name: 'CodeQuest',
    packageName: 'com.nabeel.codequestappxyz',
    category: 'Education',
    description: 'An interactive Python adventure with coding quests, puzzles, battles and RPG-style progression for young coders.',
    audience: 'Beginner coders ages 9–17',
    icon: '/images/apps/codequest-icon.webp',
    featureImage: '/images/apps/codequest-feature.webp',
    playUrl: 'https://play.google.com/store/apps/details?id=com.nabeel.codequestappxyz',
    updated: '22 August 2026'
  },
  {
    name: 'LessScreen',
    packageName: 'com.lessscreen.focus',
    category: 'Tools',
    description: 'A local-first focus companion with priority tasks, counters, screen-time reminders and a movable Focus Cat.',
    audience: 'People building healthier screen habits',
    icon: '/images/apps/lessscreen-icon.webp',
    featureImage: '/images/apps/lessscreen-feature.webp',
    playUrl: 'https://play.google.com/store/apps/details?id=com.lessscreen.focus',
    updated: '29 August 2026',
    containsAds: true
  }
];
