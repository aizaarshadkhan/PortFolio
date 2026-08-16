// PORTFOLIO DATA 


const portfolioData = {

    //  SKILLS 

    skills: [

        {
            name: "HTML5",
            icon: "fab fa-html5",
            description: "Semantic and structured web pages."
        },

        {
            name: "CSS3",
            icon: "fab fa-css3-alt",
            description: "Modern layouts and responsive styling."
        },

        {
            name: "Bootstrap",
            icon: "fab fa-bootstrap",
            description: "Responsive and mobile-first interfaces."
        },

        {
            name: "JavaScript",
            icon: "fab fa-js",
            description: "Interactive and dynamic web functionality."
        },

        {
            name: "Git & GitHub",
            icon: "fab fa-github",
            description: "Version control and project management."
        },

        {
            name: "Responsive Design",
            icon: "fas fa-mobile-alt",
            description: "Websites that work across different devices."
        }

    ],


    // PROJECTS 

    projects: [

        {
            id: 1,
            title: "MealBridge",
            category: "Web Development",
            image: "IMG/logo-white.png",
            shortDescription:
                "A community food-sharing platform designed to connect food donors with people who need food.",
            description:
                "MealBridge is a web-based community food-sharing platform created to make food donation and distribution easier. The platform focuses on connecting donors with recipients while providing a simple and user-friendly interface.",
            features: [
                "Food donation interface",
                "Donor and recipient sections",
                "Responsive website design",
                "User-friendly navigation",
                "Food sharing concept"
            ],
            technologies: [
                "HTML5",
                "CSS3",
                "Bootstrap",
                "JavaScript"
            ],
            github: "https://github.com/aizaarshadkhan/MealBridge",
            liveDemo: "https://mealbridge-home-page.vercel.app/"
        },

        {
            id: 2,
            title: "Mehanti",
            category: "E-Commerce / Office Furniture",
            image: "IMG/mehanti.png",
            shortDescription:
                "A modern office furniture e-commerce website offering ergonomic, premium, and functional workspace products.",
            description:
                "Mehanti is an office furniture e-commerce website focused on providing comfortable, functional, and stylish furniture for modern workspaces and remote workers.",
            features: [
                "Ergonomic office furniture showcase",
                "Product listing with prices",
                "Shop Now call-to-action",
                "Home office consultation service",
                "Furniture delivery service",
                "Workspace setup support",
                "About Us section",
                "Contact form",
                "Google Maps integration"
            ],
            technologies: [
                "HTML",
                "CSS"
            ],
            github: "https://github.com/aizaarshadkhan/Mehanti",
            liveDemo: "https://mehanti.vercel.app/"
        }

    ],

    // EDUCATION
    education: [

        {
            icon: "fas fa-graduation-cap",
            type: "Degree",
            title: "BS Computer Science",
            institute: "Virtual University of Pakistan",
            duration: "Currently Studying",
            description:
                "Currently pursuing a Bachelor of Science in Computer Science, developing a strong foundation in programming, web development, software engineering, databases, and computer science concepts."
        },

        {
            icon: "fas fa-certificate",
            type: "Certifications",
            title: "Professional Certificates",
            institute: "Various Learning Platforms",
            duration: "Completed",
            description:
                "Completed multiple certificates through online learning and professional development programs to expand my technical knowledge and practical skills."
        },

        {
            icon: "fas fa-code",
            type: "Course",
            title: "Frontend Development Course",
            institute: "Currently Enrolled",
            duration: "In Progress",
            description:
                "Currently developing my frontend development skills through a dedicated course, with a focus on creating responsive, interactive, and user-friendly websites."
        }

    ]

};