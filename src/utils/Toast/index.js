import {showMessage, hideMessage} from 'react-native-flash-message';

const Toast = (message, type) => {
  showMessage({
    message,
    type,
  });
};

export default Toast;
