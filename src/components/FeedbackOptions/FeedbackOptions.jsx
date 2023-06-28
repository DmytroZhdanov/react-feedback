import { Component } from 'react';
import { OptionBtn, OptionsList } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';


export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <OptionsList>
        <li>
          <OptionBtn type="button" onClick={onLeaveFeedback} name="good">
            Good
          </OptionBtn>
        </li>
        <li>
          <OptionBtn type="button" onClick={onLeaveFeedback} name="neutral">
            Neutral
          </OptionBtn>
        </li>
        <li>
          <OptionBtn type="button" onClick={onLeaveFeedback} name="bad">
            Bad
          </OptionBtn>
        </li>
      </OptionsList>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};