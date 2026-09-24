/**
 * Portfolio copy for Cielo John Bareza.
 *
 * Edit this file to change the words on the site.
 * Do not add a phone number or a home address.
 *
 * GitHub and LinkedIn are blank until real profile URLs exist.
 * Paste a full https URL, or leave the string empty. Empty links stay off the page.
 *   github:   "https://github.com/your-username"
 *   linkedin: "https://www.linkedin.com/in/your-name"
 */

export type WorkItem = {
  label: string
  title: string
  organization: string
  place: string
  dates: string
  summary: string
  /** Tools named for this entry. Not a skill rating. */
  details: string[]
}

export const site = {
  name: "Cielo John Bareza",
  /** Line breaks for the large name in the hero. */
  nameLines: ["Cielo John", "Bareza"],
  role: "Software developer",
  email: "barezacielojohn@gmail.com",
  github: "",
  linkedin: "",
  lede:
    "Junior computer programmer at the Philippine Veterans’ Affairs Office in Quezon City. I build web and Windows applications, and I use NLP and machine learning for facial, ID, and text recognition, processing, and extraction.",
  workIntro:
    "Two roles and the undergraduate thesis. The notes stay with what the work was.",
  skillsIntro:
    "Software development is the main stack. Design and video sit on a separate line.",
  about: [
    "Software developer at the Philippine Veterans’ Affairs Office in Quezon City since May 2025, after a computer science degree focused on graphics and visualization.",
  ],
  education: {
    degree: "BS Computer Science, Graphics and Visualization",
    school: "Laguna State Polytechnic University",
    date: "July 2023",
    thesis:
      "Sentiment Analysis Algorithm Comparison using Local Store Reviews",
  },
  training: {
    name: "Cloud Cadet",
    organization: "Trends Group",
    dates: "August–October 2023",
    summary: "Basic cloud, cybersecurity, and network security.",
  },
  skills: [
    "Website development",
    "Windows application development",
    "C#",
    "Python",
    "PHP",
    "HTML",
    "CSS",
    "SQL (MySQL, MS SQL)",
    "ASP.NET MVC",
    "Git",
    "NLP",
    "Machine learning",
  ],
  alsoLine: "Graphic design, illustration, and video editing.",
  work: [
    {
      label: "Current role",
      title: "Junior Computer Programmer",
      organization: "Philippine Veterans’ Affairs Office",
      place: "Quezon City",
      dates: "May 2025–Present",
      summary:
        "Web and Windows applications. AI work uses NLP and machine learning for facial, ID, and text recognition, processing, and extraction.",
      details: [
        "C#",
        "Python",
        "PHP",
        "HTML",
        "CSS",
        "SQL (MySQL and MS SQL)",
        "ASP.NET MVC",
        "IIS Express",
        "Git/GitHub",
      ],
    },
    {
      label: "Internship",
      title: "Backend Developer Intern",
      organization: "Pixel8 Web Solutions and Consultancy Inc.",
      place: "Legazpi City",
      dates: "March 2023–June 2023",
      summary:
        "PHP APIs and backend functions, documents with FPDF, and work that also used GitLab, Figma, Balsamiq, and Draw.io.",
      details: ["PHP", "FPDF", "GitLab", "Figma", "Balsamiq", "Draw.io"],
    },
    {
      label: "Thesis",
      title:
        "Sentiment Analysis Algorithm Comparison using Local Store Reviews",
      organization: "Laguna State Polytechnic University",
      place: "",
      dates: "July 2023",
      summary:
        "Undergraduate thesis for the BS Computer Science, Graphics and Visualization degree, completed July 2023.",
      details: [],
    },
  ] satisfies WorkItem[],
}
