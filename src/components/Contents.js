import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";

const url = 'https://course-api.com/react-tabs-project';

const Contents = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const jobs = await response.json();
    setJobs(jobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto px-24 py-24">
        <h2 className="capitalize text-5xl font-bold text-center">Loading...</h2>
      </section>
    )
  }

  const {company, dates, duties, title } = jobs[value];

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="pb-8">
        <h2 className="capitalize text-5xl font-bold text-center">experience</h2>
        <div className="w-24 border-2 border-sky-400 mx-auto mt-3"></div>
      </div>
      {/* button container */}
      <div className="flex flex-col mr-4 md:flex-row">
        <div className="grid grid-cols-3 md:grid-cols-1 md:h-[150px] gap-1 w-72 mx-auto mb-8">
          {
            jobs.map((tab, index) => {
              return (
                <button
                  key={tab.id}
                  onClick={() => setValue(index)}
                  className="w-24 bg-transparent md:hover:border-l-2 md:hover:border-sky-400 md:hover:border-b-0 hover:text-sky-400 hover:border-b-2 hover:border-sky-400"
                >
                  {tab.company}
                </button>
              )
            })
          }
        </div>
        {/* jobs info */}
        <article>
          <h3 className="font-mont text-3xl">{title}</h3>
          <h4 
            className="w-24 text-center bg-slate-200 font-pt-sans font-bold tracking-widest rounded-md my-4 text-slate-600"
          >
            {company}
          </h4>
          <p className="text-slate-600 text-sm mb-4">{dates}</p>
          {
            duties.map((duty, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center"
                >
                  <FaAngleDoubleRight className="text-sky-400 text-2xl mr-8" />
                  <p className="text-slate-500 text-md py-2">{duty}</p>
                </div>
              )
            })
          }
        </article>
      </div>
      <button
        className="bg-sky-400 px-14 py-2 uppercase text-slate-200 my-12 rounded-md block mx-auto hover:text-slate-900 hover:bg-sky-300 font-robo"
      >
        more info
      </button>
    </section>
  )
}

export default Contents;
