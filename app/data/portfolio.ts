import semahImage from '../assets/portolio/semah-image.png';
import fistumImage from '../assets/portolio/fitsum-image.jpg';
import tomocaImage from '../assets/portolio/tomoca-image.png';
import angelImage from '../assets/portolio/angel-skin.png';
import lliImage from '../assets/portolio/lli-image.jpg';
import myWeb from '../assets/portolio/porto.jpg';
import be from '../assets/portolio/be.jpeg';
import shirogane from "@/app/assets/portolio/teamsplatform.png";
import ethioSalacyCalculatorImage from "@/app/assets/portolio/ethio-salary-calculator.jpg";

export const frontendProjects = [
    {
        id: 1,
        name: "Teams Platform",
        color: '#4673b3',
        image: shirogane,
        imageDescription: "Bermel Fest Image",
        url: "https://shiroganeteams.vercel.app/",
        description: "This is my school project",
        technologies: ['nextjs', 'tailwindcss', 'ts']
    },
]

export const backendProjects = [
    {
        id: 1,
        name: "E-commerce System",
        color: '#32a8a8',
        image: be,
        imageDescription: "E-commerce System",
        url: "https://github.com/daisynotfound/shopee",
        description: "E-commerce with 2 role (Admin and User)",
        technologies: ['Laravel', 'Php']
    },
    {
        id: 2,
        name: "E-commerce",
        color: '#EA2829',
        image: shirogane,
        imageDescription: "E-commerce",
        url: "https://github.com/daisynotfound/DaisyShop",
        description: "Same e-commerce but you can check your product status on your cart",
        technologies: ['expressjs',  'nodejs']
    },
]