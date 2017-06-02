import React, {PropTypes} from 'react';

class LoadingDots extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {frame: 1};
  }//end constructor

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ //eslint-disable-line react/no-did-mount-set-state
        frame: this.state.frame + 1
      });//end this.setState
    }, this.props.interval);
  }//end componentDidMount

  componentWillUnmount () {
    clearInterval(this.interval);
  }//end componentWillUnmount

  render () {
    let dots = this.state.frame % (this.props.dots + 1);
    let text = '';
    while (dots > 0) {
      text += '.';
      dots--;
    }//end while
    return <span {...this.props}>{text}&nbsp;</span>;
  }//end render
}//end LoadingDots

LoadingDots.defaultProps = {
  interval: 300, dots: 3
};//end LoadingDots.defaultProps

LoadingDots.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number
};//end LoadingDots.propTypes

export default LoadingDots;
