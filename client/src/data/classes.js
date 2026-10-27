import strengthImg from '../Images/class-strength.webp';
import burnoutImg from '../Images/class-burnout.webp';
import bootcampImg from '../Images/class-bootcamp.webp';

// One source of truth for the class cards and the class detail pages
export const CLASSES = [
    {
        slug: 'Strength',
        category: 'Gym',
        title: 'Strength & Sweat',
        students: 29,
        duration: '2H',
        durationLong: '2 Hours',
        instructor: 'Cameron Williamson',
        classes: 30,
        difficulty: 'Beginner',
        image: strengthImg,
        description:
            'This class focuses on building strength and increasing stamina with battle ropes, free weights and bodyweight moves. Perfect for beginners who want a full-body workout and a solid base to grow from.',
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
