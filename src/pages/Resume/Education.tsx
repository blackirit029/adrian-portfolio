import React from "react";

const Education = () => {
    const education = [
        {
            school: "University of San Carlos",
            place: "Nasipit, Talamban Cebu, Philippines",
            year: "May 2014 - April 2017",
            educationDescription: [
                "Scholar fulltime",
                "Graduate Associated in College",
                "Got Certificate in Computer Technology Major in Software Development"
            ],
        },
        {
            school: "The Sister of Boystown School",
            place: "Tungkop, Minglanilla Cebu, Philippines",
            year: "April 2009 - December 2012",
            educationDescription: [
                "Scholar fulltime",
                "Graduate High School",
                "NC2 holder in Electrical and Installation and Maintenance"
            ],
        }
    ];

    const renderEducationDetails = (educationDes: any) => {
        return (
            <li className="">{educationDes}</li>
        );
    }

    const renderEducation = (educationData: any) => {
        const { school, place, year, educationDescription } = educationData;

        return (
            <div className="w-[100%]">
                <div className="flex lg:justify-between lg:mb-0 md:justify-between md:mb-0 sm:justify-between sm:mb-0 flex-col mb-3">
                    <div className="text-xl text-sky-500 lg:mb-0 md:mb-0 sm:mb-0 mb-3">{school}</div>
                    <div className="text-xl">{year}</div>
                </div>
                <div className="text-lg">{place}</div>
                <ul className="list-disc pl-10">
                    {educationDescription.map((educationDes: any, index: any) => {
                        return renderEducationDetails(educationDes);
                    })}
                </ul>
                <hr className="border-t-[1px] border-white w-full my-6" />
            </div>
        );
    }

    return (
        <>
            <div className="text-4xl font-bold mt-10">Education</div>
            <div className="mt-6 lg:w-[75%] md:w-[85%] sm:w-[90%] w-[90%]">
                {education.map((educationData, index) => {
                    return renderEducation(educationData);
                })}
            </div>
        </>
    );
}

export default Education;
