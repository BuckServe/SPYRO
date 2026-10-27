import strengthImg from '../Images/cc3.webp';
import burnoutImg from '../Images/cc2.webp';
import bootcampImg from '../Images/cc1.webp';

// One source of truth for the class cards and the class detail pages
export const CLASSES = [
    {
        slug: 'Strength',
        category: 'Yoga',
        title: 'Strength & Sweat',
        students: 29,
        duration: '2H',
        durationLong: '2 Hours',
        instructor: 'Esther Howard',
        classes: 30,
        difficulty: 'Beginner',
        image: strengthImg,
        description:
            'This class focuses on building strength and increasing stamina through a series of yoga poses. Perfect for beginners who want to get a full-body workout while also improving flexibility and mindfulness.',
    },
    {
        slug: 'BurnOut',
        category: 'Fitness',
        title: 'Total Body Burnout',
        students: 34,
        duration: '4H',
        durationLong: '4 Hours',
        instructor: 'Wade Warren',
        classes: 45,
        difficulty: 'Medium',
        image: burnoutImg,
        description:
            'This class focuses on high-intensity strength training to push your limits. Perfect for fitness enthusiasts looking to increase muscle endurance and build strength.',
    },
    {
        slug: 'BootCamp',
        category: 'Yoga',
        title: 'Bootcamp Challenge',
        students: 60,
        duration: '3H',
        durationLong: '3 Hours',
        instructor: 'Robert Fox',
        classes: 52,
        difficulty: 'Hard',
        image: bootcampImg,
        description:
            'This intensive yoga bootcamp is designed to challenge your strength and endurance. Ideal for advanced practitioners looking to push their limits.',
    },
];

export const getClass = (slug) =>
    CLASSES.find((c) => c.slug.toLowerCase() === String(slug).toLowerCase());
