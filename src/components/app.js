import { Component } from 'react';

export default class App extends Component {
  state = {
    items: ['a'],
    disabled: true,
  }

  handleClick = () => {
    this.setState({
      items: this.state.items.concat(`Item ${this.state.items.length}`),
    });
  }
  render() {
    return (
      window.Drupal.templates.App(this)
    );
  }
}
