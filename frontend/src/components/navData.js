import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';


export const navData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <MenuBookIcon/>,
        text: "Recipes",
        link: "/recipes"
    },
    {
        id: 2,
        icon: <AccountCircleIcon/>,
        text: "Users",
        link: "/users"
    },
    {
        id: 3,
        icon: <InfoIcon/>,
        text: "About",
        link: "/about"
    },

    {
        id: 5,
        icon: <HowToRegIcon/>,
        text: "Free Register!",
        link: "/create"
    },

    {
        id: 6,
        icon: <VerifiedUserIcon/>,
        text: "login",
        link: "/login"
    }
]
