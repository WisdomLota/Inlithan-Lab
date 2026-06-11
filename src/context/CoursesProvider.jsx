import { useState } from 'react'
import { CoursesContext } from './CoursesContext'
import icon from '../assets/courses.png'
import explore from '../assets/explore.png'


export function CoursesProvider({ children }) {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Economics for Engineers',
      questions: 15,
      code: 'All 426',
      students: 124,
      icon: icon,
      currentWeek: 4,
      about: 'Engineering Economics bridges the gap between technical decision-making and financial reasoning. This course introduces students to the principles of economic analysis applied to engineering projects, helping them evaluate costs, benefits, risks, and sustainability.',
      aboutPoints: [
        'Apply time value of money concepts to real-world engineering problems.',
        'Compare alternative designs and investments using cash flow analysis.',
        'Understand cost estimation, depreciation, and break-even analysis.',
        'Assess project feasibility with tools like Net Present Value (NPV), Internal Rate of Return (IRR), and Payback Period.',
        'Integrate economic thinking into engineering design, resource allocation, and policy decisions.',
      ],
      aboutClosing: 'By the end of the course, learners will be equipped to make informed, financially sound engineering choices that balance innovation with practicality.',
      weeks: [
        { id: 1, number: 1, title: 'Introduction', description: '', lessonNotes: [], lessonSummary: { lesson: [], page: [] }, flashCards: [], hasCode: false },
        { id: 2, number: 2, title: 'Cost Concepts and Design Economics', description: '', lessonNotes: [], lessonSummary: { lesson: [], page: [] }, flashCards: [], hasCode: false },
        { id: 3, number: 3, title: 'Cost Estimation Techniques', description: '', lessonNotes: [], lessonSummary: { lesson: [], page: [] }, flashCards: [], hasCode: false },
        {
          id: 4,
          number: 4,
          title: 'Software Development Life Cycle (SDLC) Models',
          description: 'The Time Value of Money (TVM) is a fundamental principle in engineering economics that highlights how the value of money changes over time due to its earning potential.',
          hasCode: true,
          lessonNotes: [
            [
              { type: 'p', text: 'The Software Development Life Cycle (SDLC) is a structured approach that outlines all the steps involved in creating software, from planning to maintenance. It ensures that software is built systematically and meets user requirements.' },
              { type: 'p', text: 'The Software Development Life Cycle (SDLC) consists of several key steps, each with a specific purpose. These steps ensure that the software development process is systematic and efficient. The main steps are:' },
              { type: 'ul', items: [
                '1. Planning: This is the initial step where the project\'s goals are defined. The feasibility of the project is analyzed, including cost, time, and resource estimates.',
                '2. Requirements Analysis: Gather and analyze all functional and non-functional requirements. This step helps to determine what the software must do to meet the needs of users.',
                '3. System Design: Convert the gathered requirements into a blueprint for the software. The design outlines the architecture, modules, interfaces, and data flow.',
                '4. Implementation (Coding): The actual development of the software begins. Developers write code based on the designs.',
                '5. Testing: Ensure that the software works correctly and meets all requirements. Bugs, issues, and discrepancies are identified and resolved.',
                '6. Deployment: Deliver the software to the user environment where it will operate. This could involve installing the software on servers or providing it as a downloadable product.',
                '7. Maintenance: After deployment, maintenance ensures the software continues to work smoothly and meets user needs. This includes fixing bugs, adding new features, and making improvements.',
              ]},
              { type: 'h', text: '2.3 The Waterfall Model' },
              { type: 'p', text: 'The Waterfall model is one of the earliest and most traditional SDLC models. It is linear and sequential, where each phase must be completed before the next begins. The phases include Requirements, System Design, Implementation, Testing, Deployment, and Maintenance.' },
              { type: 'ul', items: [
                'Advantages: Easy to understand and manage. Best suited for smaller projects with clear goals.',
                'Disadvantages: Inflexible, doesn\'t accommodate changes easily. No working software until late in the process.',
              ]},
              { type: 'h', text: '2.4 The Agile Model' },
              { type: 'p', text: 'Agile is a development approach that focuses on flexibility, collaboration, and customer feedback throughout the development cycle. Instead of a linear flow like the Waterfall model, Agile is incremental and iterative, meaning that software is developed in small, usable portions called increments. Each increment delivers working software that can be reviewed by the customer, who can then provide feedback.' },
            ],
            [
              { type: 'h', text: 'Steps in Agile Development' },
              { type: 'ul', items: [
                '1. Requirements Gathering and Sprint Planning: Define what will be built during the upcoming sprint (typically 1-4 weeks). Activities include meeting with stakeholders to gather requirements, breaking down user stories into tasks, prioritizing and selecting tasks for the sprint, and estimating work.',
                '2. Design and Development: Design the functionality and write the code. Create basic designs for new features and implement these through coding.',
                '3. Daily Stand-up Meetings: Coordinate the development team and address issues. Conduct short, 15-minute stand-up meetings where each member discusses progress and blockers.',
                '4. Testing and Quality Assurance: Ensure that the increment meets quality standards. Perform unit testing, integration testing, and acceptance testing on newly developed code.',
                '5. Sprint Review / Demo: Present the completed increment to stakeholders for feedback. Hold a Sprint Review Meeting to demonstrate the working software.',
                '6. Sprint Retrospective: Improve the process for future sprints by discussing what went well and areas for improvement.',
                '7. Release Planning: Deliver increments to users, conduct final testing, and plan deployment of features into production.',
              ]},
              { type: 'h', text: 'Benefits of Agile' },
              { type: 'ul', items: [
                'Customer Involvement: Agile encourages frequent interaction with customers, which helps to understand their needs and adjust accordingly.',
                'Flexibility: Agile is highly adaptable. Changes can be easily made during each iteration, without affecting the entire project.',
                'Continuous Delivery: Since Agile focuses on developing usable increments in each iteration, stakeholders see working software early and often.',
              ]},
              { type: 'h', text: 'Example of Agile in Practice' },
              { type: 'p', text: 'Consider a team building a mobile app. Instead of creating the entire app in one go, Agile would focus on building core features first, such as: 1. Login/Signup functionality (in one sprint). 2. User Profile page (in another sprint). 3. Notification feature (in a subsequent sprint).' },
              { type: 'p', text: 'This way, each feature is completed, tested, and demonstrated to stakeholders, allowing them to provide feedback early, potentially adjusting features as needed.' },
              { type: 'p', text: '2.5 The Prototyping Model — An iterative approach to software development that focuses on creating a prototype to help understand user requirements and gather early feedback.' },
            ],
            [
              { type: 'h', text: 'Phases of the Prototyping Model:' },
              { type: 'ul', items: [
                '1. Requirement Gathering and Analysis: Initial requirements are gathered from stakeholders, including a general understanding of system functionality, features, and desired outcomes.',
                '2. Quick Design: A preliminary design is created to focus on presenting an overview of the system\'s key features.',
                '3. Build Prototype: A prototype is built — a scaled-down version of the system to demonstrate features to users for validation and feedback.',
                '4. User Evaluation: Stakeholders interact with the prototype to understand how well it meets their needs and provide feedback.',
                '5. Refinement: Based on user feedback, the prototype is improved until stakeholders are satisfied.',
                '6. Development and Deployment: The prototype is transformed into the final software product through actual coding, testing, and deployment.',
              ]},
              { type: 'h', text: 'When to Use the Prototyping Model:' },
              { type: 'ul', items: [
                'Uncertain Requirements: When the project requirements are not well-understood at the beginning.',
                'High User Interaction: Projects where user experience is critical benefit greatly from prototyping.',
                'Complex Systems: Used when there is uncertainty about technical aspects.',
              ]},
              { type: 'h', text: 'Types of Prototypes:' },
              { type: 'ul', items: [
                '1. Throwaway/Rapid Prototypes: Built quickly with the intention of being discarded after feedback.',
                '2. Evolutionary Prototypes: Refined over multiple iterations and evolve into the final product.',
              ]},
            ],
          ],
          lessonSummary: {
            lesson: [
              { type: 'h', text: 'Agile Development' },
              { type: 'h', text: 'Steps:' },
              { type: 'ol', items: [
                'Requirements & Sprint Planning – Define sprint goals, gather requirements, break down user stories, prioritize tasks, estimate work.',
                'Design & Development – Create designs and implement functionality through coding.',
                'Daily Stand-up Meetings – Short team meetings to share progress and blockers.',
                'Testing & QA – Unit, integration, and acceptance testing to ensure quality.',
                'Sprint Review/Demo – Present completed work to stakeholders for feedback.',
                'Sprint Retrospective – Reflect on successes and improvements for future sprints.',
                'Release Planning – Deliver increments, finalize testing, and deploy features.',
              ]},
              { type: 'h', text: 'Benefits:' },
              { type: 'ul', items: [
                'Strong customer involvement',
                'Flexibility to adapt to changes',
                'Continuous delivery of working software',
              ]},
              { type: 'p', text: 'Example: Building a mobile app feature by feature (e.g., login/signup → profile page → notifications).' },
              { type: 'h', text: 'Prototyping Model' },
              { type: 'h', text: 'Phases:' },
              { type: 'ol', items: [
                'Requirement Gathering & Analysis – Collect initial requirements.',
                'Quick Design – Create a simple preliminary design.',
                'Build Prototype – Develop a scaled-down version of the system.',
                'User Evaluation – Stakeholders test and give feedback.',
                'Refinement – Improve prototype iteratively based on feedback.',
                'Development & Deployment – Finalize coding, testing, and release.',
              ]},
              { type: 'h', text: 'When to Use:' },
              { type: 'ul', items: [
                'Requirements are unclear',
                'Projects with high user interaction (e.g., UI-heavy systems)',
                'Complex systems with technical uncertainties',
              ]},
              { type: 'h', text: 'Types of Prototypes:' },
              { type: 'ul', items: [
                'Throwaway/Rapid – Built quickly, discarded after feedback.',
                'Evolutionary – Refined until it becomes the final product.',
              ]},
            ],
            page: [
              { type: 'h', text: 'Agile Development' },
              { type: 'ul', items: [
                'Process: Plan → Design/Code → Daily Stand-ups → Test → Review/Demo → Retrospective → Release.',
                'Benefits: Customer involvement, flexibility, continuous delivery.',
                'Example: Build app features step by step (login → profile → notifications).',
              ]},
              { type: 'h', text: 'Prototyping Model' },
              { type: 'ul', items: [
                'Process: Gather requirements → Quick design → Build prototype → User evaluation → Refine → Final development.',
                'Best for: Unclear requirements, UI-heavy projects, complex systems.',
              ]},
              { type: 'h', text: 'Types:' },
              { type: 'ul', items: [
                'Throwaway: Quick, discarded after feedback.',
                'Evolutionary: Refined until it becomes the final product.',
              ]},
            ],
          },
          flashCards: [
            { id: 1, question: 'What is the first step in Agile?', answer: 'Requirements & Sprint Planning – define goals, gather requirements, prioritize tasks.' },
            { id: 2, question: 'What is the Waterfall Model?', answer: 'A linear and sequential SDLC model where each phase must be completed before the next begins.' },
            { id: 3, question: 'What are the two types of prototypes?', answer: 'Throwaway/Rapid Prototypes (built quickly, discarded after feedback) and Evolutionary Prototypes (refined over iterations into the final product).' },
          ],
        },
        { id: 5, number: 5, title: 'Time Value of Money II', description: '', lessonNotes: [], lessonSummary: { lesson: [], page: [] }, flashCards: [], hasCode: false },
        { id: 6, number: 6, title: 'Evaluating a Single Project', description: '', lessonNotes: [], lessonSummary: { lesson: [], page: [] }, flashCards: [], hasCode: false },
        { id: 7, number: 7, title: 'Comparison and Selection among Alternatives', description: '', lessonNotes: [], lessonSummary: { lesson: [], page: [] }, flashCards: [], hasCode: false },
        { id: 8, number: 8, title: 'Midterm Exam', description: '', lessonNotes: [], lessonSummary: { lesson: [], page: [] }, flashCards: [], hasCode: false },
        { id: 9, number: 9, title: 'Depreciation Methods and Income Taxes', description: '', lessonNotes: [], lessonSummary: { lesson: [], page: [] }, flashCards: [], hasCode: false },
        { id: 10, number: 10, title: 'Evaluating Projects with the Benefit-Cost Ratio Method', description: '', lessonNotes: [], lessonSummary: { lesson: [], page: [] }, flashCards: [], hasCode: false },
        { id: 11, number: 11, title: 'Price Changes and Exchange Rates', description: '', lessonNotes: [], lessonSummary: { lesson: [], page: [] }, flashCards: [], hasCode: false },
        { id: 12, number: 12, title: 'Breakeven and Sensitivity Analysis', description: '', lessonNotes: [], lessonSummary: { lesson: [], page: [] }, flashCards: [], hasCode: false },
      ],
    },
    {
      id: 2,
      title: 'Calculus',
      questions: 1337,
      code: 'All 426',
      students: 124,
      icon: explore,
      currentWeek: 1,
      about: '',
      aboutPoints: [],
      aboutClosing: '',
      weeks: [],
    },
  ])

  const [exploreCourses] = useState([
    { id: 1, title: 'Economics for Engineers', skillLevel: 'All skill', university: 'New East University' },
    { id: 2, title: 'Economics for Engineers', skillLevel: 'All diff', university: 'Cyprus International University' },
    { id: 3, title: 'Economics for Engineers', skillLevel: 'All diff', university: 'University of Exeter' },
    { id: 4, title: 'Calculus II', skillLevel: 'Intermediate', university: 'MIT OpenCourseWare' },
    { id: 5, title: 'Data Structures', skillLevel: 'Beginner', university: 'Stanford Online' },
    { id: 6, title: 'Linear Algebra', skillLevel: 'All levels', university: 'New East University' },
  ])
  

  return (
    <CoursesContext.Provider value={{ courses, setCourses, exploreCourses }}>
      {children}
    </CoursesContext.Provider>
  )
}

export default CoursesProvider