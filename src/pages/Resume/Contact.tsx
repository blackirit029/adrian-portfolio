import React from "react";

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

    const renderContactCard = (data: any) => {
        return (
            <button className="bg-zinc-700 w-[300px] h-12 rounded items-center flex pl-4 hover:bg-sky-500">
                <FontAwesomeIcon icon={data.icon} className="w-4 h-4"/>
                <span className="ml-2 text-sm">{data.contact}</span>
            </button>
        );
    }

    const renderContactLinkCard = (data: any) => {
        return (
            <a href={data.link} target="_blank" className="bg-zinc-700 w-[250px] h-12 rounded items-center flex pl-4 hover:bg-sky-500" rel="noreferrer">
                <FontAwesomeIcon icon={data.icon} className="w-4 h-4 mr-2"/>
                {data.name}
            </a>
        );
    }

    return (
        <>
            <div className="text-4xl font-bold">Contact</div>
            <div className="mt-5 grid gap-4 grid-cols-3 grid-rows-1 ">
                {renderContactCard(contact.email)}
                {renderContactCard(contact.phone)}
                {renderContactCard(contact.location)}
            </div>
            <div className="mt-5 grid gap-4 grid-cols-2 grid-rows-1">
                {renderContactLinkCard(contactLink.github)}
                {renderContactLinkCard(contactLink.linkedIn)}
            </div>
        </>
    );
}

export default Contact;
