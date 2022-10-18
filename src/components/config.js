import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./learningoptions/LearningOptions";
import LinkList from "./linklist/LinkList";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "dataLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Data",
            url: "https://keebo.ai/2021/06/07/what-is-data-learning-and-why-is-it-important/",
            id: 1,
          },
          {
            text: "Data Learning",
            url: "https://www.datalearning.eu/en/training-catalogue/",
            id: 2,
          },
          {
            text: "How to start for noncoders",
            url: "https://towardsdatascience.com/cant-code-here-is-the-best-way-to-learn-to-code-for-data-science-bfb0581ded37",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "dataLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Data",
            url: "https://keebo.ai/2021/06/07/what-is-data-learning-and-why-is-it-important/",
            id: 1,
          },
          {
            text: "Data Learning",
            url: "https://www.datalearning.eu/en/training-catalogue/",
            id: 2,
          },
          {
            text: "How to start for noncoders",
            url: "https://towardsdatascience.com/cant-code-here-is-the-best-way-to-learn-to-code-for-data-science-bfb0581ded37",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "apiLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to API",
            url: "https://project-open-data.cio.gov/api-basics/",
            id: 1,
          },
          {
            text: "Api for Beginners tutorial",
            url: "https://www.youtube.com/watch?v=GZvSYJDk-us",
            id: 2,
          },
          {
            text: "How to start with POSTMAN",
            url: "https://learning.postman.com/docs/getting-started/introduction/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "securityList",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to Software security",
            url: "https://www.csoonline.com/article/3315700/what-is-application-security-a-process-and-tools-for-securing-software.html",
            id: 1,
          },
          {
            text: "Cyber security for beginners",
            url: "https://www.youtube.com/watch?v=lZl2qWc3vUQ",
            id: 2,
          },
          {
            text: "Useful Links",
            url: "https://www.cybersecurity-review.com/useful-links/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "interviewLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Interview prep. course",
            url: "https://www.freecodecamp.org/learn/coding-interview-prep/",
            id: 1,
          },
          {
            text: "How to prepare",
            url: "https://www.techinterviewhandbook.org/coding-interview-prep/",
            id: 2,
          },
          {
            text: "Useful Links",
            url: "https://www.java67.com/2019/05/10-great-resources-for-programming-job-interview-questions.html",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
