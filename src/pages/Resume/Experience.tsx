import React from "react";

const Experience = () => {
    const experience = [
        {
            company: "Accenture",
            position: "Advanced App Engineering Sr. Analyst",
            year: "November 2023 - PRESENT",
            jobDescription: [
                "Optimize project management, resulting in timely deliverables and improved client satisfaction rates.",
                "Attend stand-up daily meetings.",
                "Update old code bases to modern development standards, improving functionality.",
                "Fixing bugs and adding new features.",
                "Manage the ticket assigned showing the current status when it will be done and other details like RCA etc."
            ],
        },
        {
            company: "Primover Consultancy Services, Inc.",
            position: "Software Developer",
            year: "May 2022 - November 2023",
            jobDescription: [
                "Investigating the to-be-added feature or to-be-fix bug.",
                "Do the bug fixing in the added feature or any bug that was found during the testing.",
                "Create the Design Document on how to approach the bug or new feature.",
                "Implement the design approach.",
                "Do the UTE after the coding.",
                "Create a release request ticket if done with the testing and coding.",
            ],
        },
        {
            company: "Gomigu",
            position: "Software Engineer",
            year: "March 2018 - March 2022",
            jobDescription: [
                "Implement the given UX Design unto Frontend for both Web and Mobile.",
                "Add new to the existing or newly created project.",
                "Fixing bugs that were found by the tester to the added feature and the possibility that it affected other features.",
                "Report to the scrum master in daily meetings about the progress.",
                "Assigned in both Web and Mobile development.",
            ],
        },
        {
            company: "Zoog Technologies Inc.",
            position: "Software Engineer",
            year: "July 2017 - March 2018",
            jobDescription: [
                "Implement the given UX Design unto Frontend for both Web and Mobile",
                "Add new to the existing or newly created project.",
                "Fixing bugs that were found by the tester to the added feature and the possibility that it affected other features.",
                "Report to the scrum master in daily meetings about the progress.",
                "Assigned in both Web and Mobile development.",
            ],
        }
    ];

    const renderJobDescription = (jobData: any) => {
        return (
            <li className="">{jobData}</li>
        );
    }

    const renderJobExperience = (experienceData: any) => {
        const { position, year, company, jobDescription } = experienceData;

        return (
            <div className="w-[1080px]">
                <div className="flex justify-between">
                    <div className="text-xl text-sky-500">{position}</div>
                    <div className="text-xl">{year}</div>
                </div>
                <div className="text-lg">{company}</div>
                <ul className="list-disc pl-10">
                    {jobDescription.map((jobData: any, index: any) => {
                        return renderJobDescription(jobData);
                    })}
                </ul>
                <hr className="border-t-[1px] border-white w-full my-6" />
            </div>
        );
    }

    return (
        <>
            <div className="text-4xl font-bold mt-10">Experience</div>
            <div className="mt-6">
                {experience.map((experienceData, index) => {
                    return renderJobExperience(experienceData);
                })}
            </div>
        </>
    );
}

export default Experience;
