class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc
    //  createClientMessage,
    //  stateRef,
    //  createCustomMessage,
    //  ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    //  this.createClientMessage = createClientMessage;
    //  this.stateRef = stateRef;
    //  this.createCustomMessage = createCustomMessage;
  }
  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:",
      {
        widget: "javascriptLinks",
      }
    );
    this.updateChatbotState(message)
  };
  handleDataList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Data visualization:",
      {
        widget: "dataLinks",
      }
    );
    this.updateChatbotState(message)
  };
  handleAPIList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on API's:",
      {
        widget: "apiLinks",
      }
    );
    this.updateChatbotState(message)
  };
  handleSecurityList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Security:",
      {
        widget: "securityList",
      }
    );
    this.updateChatbotState(message)
  };
  handleInterviewList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Interview prep:",
      {
        widget: "interviewLinks",
      }
    );
    this.updateChatbotState(message)
  };
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi");
    this.updateChatbotState(greetingMessage);
  }
  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
