import { useState } from "react";

// icons
import {
    faEnvelope,
    faPhone,
    faLocationPin
} from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    const [showCopyDiv, setShowCopyDiv] = useState({ isShow: false, type: "" });

    const contact = {
        email: {
            icon: faEnvelope,
            contact: "markadrian.grandia@gmail.com"
        },
        phone: {
            icon: faPhone,
            contact: "(+63) 9264006727"
        },
        location: {
            icon: faLocationPin,
            contact: "Cebu, Philippines"
        }
    };

    const contactLink = {
        github: {
            icon: faGithub,
            link: "https://github.com/blackirit029",
            name: "Github",
        },
        linkedIn: {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/mark-adrian-grandia-82546b207/",
            name: "Linkedin",
        }
    };

    const handleOnClickCopyClipboard = (type: string, text: string) => {
        // to do implement copy clipboard
        navigator.clipboard.writeText(text);
        setShowCopyDiv({ isShow: true, type });

        setTimeout(() => {
            setShowCopyDiv({ isShow: false, type: "" });
        }, 3000);
    };

    const renderContactCard = (data: any, type: string) => {
        return (
            <button className="bg-zinc-700 w-[300px] h-12 rounded items-center flex pl-4 transition duration-150 ease-in-out hover:scale-105"
                onClick={() => handleOnClickCopyClipboard(type, data.contact)}>
                <FontAwesomeIcon icon={data.icon} className="w-4 h-4"/>
                <span className="ml-2 text-sm">{data.contact}</span>
            </button>
        );
    }

    const renderContactLinkCard = (data: any) => {
        return (
            <a href={data.link} target="_blank" className="bg-zinc-700 w-[300px] h-12 rounded items-center flex pl-4 transition duration-150 ease-in-out hover:scale-105" rel="noreferrer">
                <FontAwesomeIcon icon={data.icon} className="w-4 h-4 mr-2"/>
                {data.name}
            </a>
        );
    }

    return (
        <>
            <div className="text-4xl font-bold">Contact</div>
            <div className="mt-5 grid gap-4 lg:grid-cols-3 lg:grid-rows-1 md:grid-rows-2 md:grid-cols-2 sm:grid-cols-1 sm:grid-rows-3">
                {renderContactCard(contact.email, "email")}
                {renderContactCard(contact.phone, "phone")}
                {renderContactCard(contact.location, "location")}
            </div>
            <div className="mt-5 grid gap-4 lg:grid-cols-2 grid-rows-1 md:grid-cols-2 sm:grid-cols-1 sm:grid-rows-2">
                {renderContactLinkCard(contactLink.github)}
                {renderContactLinkCard(contactLink.linkedIn)}
            </div>
            <div className="transition-opacity ease-in duration-700 h-4 m-2">
                {showCopyDiv.isShow ? `My ${showCopyDiv.type} is copied to your clipboard!` : " " }
            </div>
        </>
    );
}

export default Contact;
