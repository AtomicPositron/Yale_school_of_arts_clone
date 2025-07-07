import "./body.css";


function body() {
  return (
    <div className=" mt-30 ">
    <div className=" flex flex-col justify-center">
      <h1 className="text-6xl text-center  font-bold">Recent Happenings</h1>
      <div className="currentHappening flex flex-wrap justify-center mt-20  gap-10 flex-row">
        <img
          src="https://cdn.filestackcontent.com/resize=width:525/ry3lC2aFTHqq2DNNgwxD"
          alt="Graduation image"
        />
        <span className="caption w-sm text-2xl p-10 ">
          Congratulations to the MFA Class of 2025! 🎓🥂 <br />
          <br />
          On Monday, May 19, the Yale School of Art celebrates its graduating
          class of 2025 with a commencement address by theorist and artist Eva
          Hayward.
          <br />
          <br />
         <a href="https://www.art.yale.edu/public-events">Learn more about the MFA Class of 2025</a> {" "}
        </span>
      </div>
      <span className="text-center text-xl mt-20">
        <a href="https://www.art.yale.edu/public-events">See the Spring 2025 Visiting Artist lecture schedule here</a>
        <br />
        <a href="See the Spring 2025 Visiting Artist lecture schedule here">Fall 2024 archive</a>
        <br />
        <a href="https://www.art.yale.edu/exhibitions">Spring 2025 exhibitions + schedule here</a>
      </span>
      <h1 className="mt-40 text-6xl text-center  font-bold">Bulletin</h1>
      <div className="infomation mt-20 text-xl flex flex-col gap-10 pl-10 pr-10 md:pl-40 md:pr-40 content-center justify-center">
        <p className="border-3 border-black p-5">
          From our friends at the Yale Center for Environmental Justice The Yale
          Center for Environmental Justice is in the process of planning our
          fourth annual Global Environmental Justice Conference, with this year
          focusing on the theme of “Environmental Joy.” The conference aims to
          explore the ways in which environmental and climate justice and the
          communities engaged in that work generate joy. Guided by the notion
          that the ultimate goal of most environmental and climate work is to
          alleviate suffering and increase wellbeing, Environmental Joy will
          explore and celebrate the diverse ways that environmental justice
          achieves this goal. One facet of the conference programming we hope to
          organize is a juried art show soliciting works from artists around the
          world on the theme of Environmental Joy to be showcased in an
          exhibition during the conference. We are currently seeking any
          interested students or faculty who would be interested in supporting
          the planning and execution of this call for art. If you’re interested
          in learning more about the opportunity, please contact Julia Simon at
          <span className="font-bold"> julia.simon@yale.edu.</span>
        </p>
        <p className="border-3 border-black p-5">
          The Yale Arts Apprenticeship Program connects Yale undergraduates,
          especially those on financial aid, with professional arts
          practitioners for summer opportunities. It falls under Yale's Summer
          Experience Award (SEA) funding and follows similar requirements.
          <br />
          <br />
          <span className="font-bold">
            Eligible Opportunities Must:
            <br />
            *Be at least 30 hours/week for 8 weeks (not necessarily continuous)
            <br />
            *Include independent projects with regular check-ins from the mentor
            <br />
            *Be with an individual Arts Practitioner, not a for-profit company
            (unless it's a registered non-profit)
          </span>
          <br />
          <br />
          Yale faculty, alumni, and arts practitioners can post opportunities by
          contacting Yale's Creative Careers advisor. More info: Arts
          Apprenticeship Details To post a job: Contact Derek I. Webster
        </p>
      </div>
      <h1 className="mt-40 text-6xl text-center  font-bold">
        Calendar and NewsLetters
      </h1>
      <div className="mt-40 text-xl flex flex-row flex-wrap gap-10 align-center  content-center justify-center">

          <p className="border-3 border-black w-sm p-6 text-center">
            <br />
            NEW CALENDARS BEGINNING SUMMER 2020  <span className="font-bold"><a href="https://www.art.yale.edu/public-events">Public Calendar</a></span>
            <br />
            Containing those events open to the public. <span className="font-bold"><a href="https://www.art.yale.edu/soa-in-the-world">School of Art in the World</a></span>
            <br />
            Containing events and exhibitions hosted by, led by, or featuring
            members of the School of Art community. <span className="font-bold"><a href="https://www.art.yale.edu/calendar">Community Calendar</a></span>
            <br />
            Containing those events,open only,to the SoA community.
          </p>
          <p className="border-3 w-sm border-black p-6">
            <br />
            Get news from the Yale School of Art in your inbox: Sign up for our
            newsletters publish two newsletters during the academic year:
            News From New Haven, A public monthly newsletter about news and
            events happening on campus. Week at SoA, A weekly community-only
            email listing SoA events as well as public and university events in
            New Haven. Editor details
          </p>
        </div>
    </div>
    </div>
  );
}

export default body;
