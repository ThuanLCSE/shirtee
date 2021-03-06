import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as UserAct from '../actions/ActionSignIn.jsx';

import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import Bill from './Bill';
import Navigator from './Navigator';
/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class CheckOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: false,
            stepIndex: 0,
        };
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }
  

  handleNext() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (<Bill/>);
      case 1:
        return (<p>Here is for the bank!</p>);
      case 2:
        return (<p>Here is for user to input there information for shipping!</p>);
      default:
        return (<p>This won't happen!</p>);
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div>
       <Navigator signInFunc={this.props.UserAct.SignIn}
                     userData={this.props.UserTodo}
                     signUpFunc={this.props.UserAct.SignUp}
                     becomeNewDesigner={this.props.UserAct.BecomeNewDesigner}/>
       <div className="container">
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Order Information</StepLabel>
          </Step>
          <Step>
            <StepLabel>Bank Payment</StepLabel>
          </Step>
          <Step>
            <StepLabel>Shipping Information</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a href="#">Click here</a> to view your order status.
            </p>
          ) : (
            <div>
              {this.getStepContent(stepIndex)}
              <div style={{marginTop: 12}}>
               <div className="col-sm-9"></div>
               <div className="col-sm-3">
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
               </div>
              </div>
            </div>
          )}
        </div>
       </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  UserTodo: state.UserTodo
});

const mapDispatchToProps = dispatch => ({
    UserAct: bindActionCreators(UserAct, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckOut);