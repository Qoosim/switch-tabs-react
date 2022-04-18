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
    </section>
  )
}

export default Contents;
