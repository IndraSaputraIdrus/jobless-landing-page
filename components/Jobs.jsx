import { useState } from "react";
import clsx from "clsx";
import Card from "./Card";

const listCard = [
  {
    id: 1,
    title: "Front-End Developer",
    logo: "figma-logo.svg",
    logoColor: "bg-white",
    subTitle: "Figma",
    description:
      "We are looking for an experienced front-end developer to join our team.",
    skills: ["Rust"],
    salary: "$70,000 - $90,000",
  },
  {
    id: 2,
    title: "Data Scientist",
    logo: "facebook-logo.svg",
    logoColor: "bg-blue-500",
    subTitle: "Facebook",
    description: "We are seeking a data scientist to join our team.",
    skills: ["Golang", "Python"],
    salary: "$100,000 - $130,000",
  },
  {
    id: 3,
    title: "Technical Writer",
    logo: "vercel-logo.svg",
    logoColor: "bg-black",
    subTitle: "Vercel",
    description: "We are seeking a technical writer to join our team.",
    skills: ["Documentation"],
    salary: "$60,000 - $80,000",
  },
];

export default function Jobs() {
  const [active, setActive] = useState(listCard[0].title);

  return (
    <div id="jobs" className="container mx-auto mb-16">
      <div className="px-4 py-2 md:py-0 md:px-0">
        <h3 className="font-semibold mb-3">Featured Jobs</h3>
        <div
          className={clsx(
            "grid gap-6",
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {listCard.map((item) => (
            <Card
              key={item.id}
              active={item.title === active ? true : false}
              onClick={() => setActive(item.title)}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
