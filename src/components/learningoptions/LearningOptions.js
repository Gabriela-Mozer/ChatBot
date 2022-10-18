import React from "react";
import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Javascript",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    {
      text: "Data visualization",
      handler: props.actionProvider.handleDataList,
      id: 2,
    },
    { text: "APIs", handler: props.actionProvider.handleAPIList, id: 3 },
    {
      text: "Security",
      handler: props.actionProvider.handleSecurityList,
      id: 4,
    },
    {
      text: "Interview prep",
      handler: props.actionProvider.handleInterviewList,
      id: 5,
    },
  ];
  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));
  return <div className="learning-option-container">{optionsMarkup}</div>;
};
export default LearningOptions;
