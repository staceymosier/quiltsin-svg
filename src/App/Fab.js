import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiViewGrid } from '@mdi/js';

class Fab extends Component {
  constructor(props) {
    super(props);
    this.exitModal = this.exitModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.state = {
      activeModal: false,
    };
  }

  openModal() {
    this.setState({ activeModal: true });
  }

  exitModal() {
    this.setState({ activeModal: false });
  }

  render() {
    const { activeModal } = this.state;
    const { data } = this.props;
    return (
      <div>
        <div className="actions">
          <button type="button" onClick={this.openModal} className="fab">
            <Icon path={mdiViewGrid} size={1} />
          </button>
        </div>

        { activeModal
          ? (
            <div className="modal">
              <div className="content">
                {Object.entries(data).map(([key, value]) => (
                  <div key={key}>{value.title}</div>
                ))}
                <button type="button" className="button" onClick={this.exitModal}>Cancel</button>
                <button type="button" className="button" onClick={this.saveItem}>Save</button>
              </div>
            </div>
          )
          : null }
      </div>
    );
  }
}

export default Fab;
