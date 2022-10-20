class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    } else if (
      lowerCaseMessage.includes("bye") ||
      lowerCaseMessage.includes("i don't need help")
    ) {
      this.actionProvider.bye();
    } else if (lowerCaseMessage.includes("manager")) {
      this.actionProvider.karen();
    } else {
      this.actionProvider.optional();
    }
  }
}

export default MessageParser;

//Wersja z funkcją
