import React from "react";
import { Subject } from "../data";

interface SubjectCardProps {
  subject: Subject;
  clickedSubject: number | null;
  onClick: (subjectId: number) => void;
  size?: number;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  clickedSubject,
  onClick,
  size = 48,
}) => {
  return (
    <div
      key={subject.id}
      onClick={() => onClick(subject.id)}
      className={`flex flex-col border-gray-300 border-2 items-center justify-center rounded-md cursor-pointer ${
        clickedSubject === subject.id
          ? "bg-indigo-50 border-1 border-indigo-200"
          : ""
      }`}
    >
      <img
        src={subject.image}
        width={`${size}`}
        height={`${size}`}
        alt={subject.name}
        className="w-24 h-16  object-contain"
      />
      <p
        className={`text-center font-bold ${
          clickedSubject === subject.id ? "text-indigo-400 " : "text-black-500"
        }`}
      >
        {subject.name}
      </p>
    </div>
  );
};

export default SubjectCard;
