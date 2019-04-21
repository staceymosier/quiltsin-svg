import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiViewGrid, mdiCloseCircle } from '@mdi/js';

class Fab extends Component {
  constructor(props) {
    super(props);
    this.exitModal = this.exitModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.onQuiltChanged = this.onQuiltChanged.bind(this);
    this.state = {
      activeModal: false,
    };
  }

  onQuiltChanged(e) {
    const id = e.target.value;
    this.setState({ activeModal: false });
    this.props.callback(id);
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
                <ul className="quilt-selection">
                  {Object.entries(data).map(([key, value], int) => (
                    <li key={key}>
                      <div>
                        <img src={value.previewImage} alt={value.title} style={{ width: '150px' }} />
                      </div>
                      <button type="button" value={int + 1} onClick={e => this.onQuiltChanged(e)}>{value.title}</button>
                    </li>
                  ))}
                </ul>
                <button type="button" className="button save-button" onClick={this.exitModal}>
                  <Icon path={mdiCloseCircle} size={1} />
                </button>
              </div>
            </div>
          )
          : null }
      </div>
    );
  }
}

export default Fab;
