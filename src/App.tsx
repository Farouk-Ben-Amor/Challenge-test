import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { subjects, klassenstufeData, schulartData } from "./data.ts";
import SelectElement from "./components/SelectElement";
import SubjectCard from "./components/SubjectCard.tsx";

function App() {
  const [clickedSubject, setClickedSubject] = useState<number | null>(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const clickCard = (subjectId: number) => {
    setClickedSubject(prevState => (prevState === subjectId ? null : subjectId));
  };

  return (
    <div className="bg-slate-100 font-primary text-base h-full pt-2 flex flex-col md:flex-row md:h-full md:min-h-screen">
      <h1 className="text-center text-4xl font-bold p-4 md:hidden text-primaryDark">
        Welcome
      </h1>
      <div className="w-full md:w-[30%] order-1 md:order-1">
        <div className="p-4">
          <h1 className="font-semibold text-primaryDark pb-2">
            Select schulart & klassenstufe
          </h1>
          <div className="shadow-xl bg-white rounded-md p-4">
            <SelectElement
              label="schulart"
              register={register("select1")}
              options={schulartData}
              handleSubmit={handleSubmit(onSubmit)}
            />
            <SelectElement
              label="klassenstufe"
              register={register("select2")}
              options={klassenstufeData}
              handleSubmit={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>

      <div className="md:h-full pb-6 md:w-[65%] order-2 md:order-2">
        <div className="p-4 md:h-full">
          <h1 className="font-semibold text-primaryDark pb-2">
            Select the subject
          </h1>
          <div className="h-full bg-white rounded-md shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-4">
              {subjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  clickedSubject={clickedSubject}
                  onClick={clickCard}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
