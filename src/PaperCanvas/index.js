import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PaperScope, Size} from 'paper';
import './styles.css';

export default class PaperCanvas extends Component {
  static propTypes = {
    script: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.scope = new PaperScope();
  }

  componentDidMount() {
    const {width, height, script} = this.props;
    this.scope.setup(this.canvas.current);
    this.scope.view.viewSize = new Size(width, height);
    if (script) {
      script(this.scope);
    }
  }

  render() {
    return (
      <canvas ref={this.canvas} className='canvas'/>
    );
  }
}

