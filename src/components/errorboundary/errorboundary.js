
import React from 'react';
import Error from 'components/UI/error/error';
class ErrorBoundary extends React.Component {
    state = { hasError: false, error: '' };
  
    componentDidCatch(error, info) {
      // for logging 
      console.log('logging error:', error);
      this.setState({ hasError: true, error: error });
    }
  
    render() {
      const message = "Something went wrong...";
      if (this.state.hasError) {
        return (
        <React.Fragment>
            <Error error={message}></Error>
        </React.Fragment>);
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;