import React from 'react';

export const toasterContext = React.createContext(undefined!);

type Props = void;

type State = {
  context: any;
};

/***
  Присутствует четыре типа сообщений: ошибка, предупреждение, успех и информация
  Они отображаются в виде всплывающего окна в веб и АРР
  Пользователь может продолжать пользоваться сайтом или приложением при видимых тостах
***/

export class ToasterProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      context: {
        bug: this.bug,
        info: this.info,
        warning: this.warning,
        success: this.success,
        error: null,
        removeToasterMessage: this.removeToasterMessage,
        messages: [],
      },
    };
  }

  addToasterMessage = (message: string, header: string, type: any): void => {
    const {messages} = this.state.context;
    this.setState((prevState) => ({
      context: {
        ...prevState.context,
        messages: messages.concat([
          {
            type,
            message,
            header,
            unique:
              Math.random().toString(36).substring(2) + Date.now().toString(36),
          },
        ]),
      },
    }));
  };

  bug = (message: string, header = ''): void => {
    this.addToasterMessage(message, header, 'error');
  };

  success = (message: string, header = ''): void => {
    this.addToasterMessage(message, header, 'success');
  };

  info = (message: string, header = ''): void => {
    this.addToasterMessage(message, header, 'info');
  };

  warning = (message: string, header = ''): void => {
    this.addToasterMessage(message, header, 'warning');
  };

  setError = (error: any): void => {
    this.setState((prevState) => ({
      context: {
        ...prevState.context,
        error,
      },
    }));
  };

  removeToasterMessage = (unique: string): void => {
    const {messages} = this.state.context;
    this.setState((prevState) => ({
      context: {
        ...prevState.context,
        messages: messages.filter((message) => unique !== message.unique),
      },
    }));
  };

  componentDidCatch(error: Error): void {
    this.addToasterMessage(error.message, '', 'error');
  }

  render(): JSX.Element {
    return (
      <toasterContext.Provider value={this.state.context}>
        {this.props.children}
      </toasterContext.Provider>
    );
  }
}
