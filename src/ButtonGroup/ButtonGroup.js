import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiSettings } from '@mdi/js';

const SavePanel = () => (
  <div className="form-group">
    <div className="form-item">
      <label htmlFor="includeSwatches_opt">
        With palette
        <input type="checkbox" id="includeSwatches" name="includeSwatches" />
      </label>
    </div>
    <div className="form-item">
      <label htmlFor="includeLetters">
        With letters
        <input type="checkbox" id="includeLetters" name="includeLetters" />
      </label>
    </div>
    <div className="form-item">
      <label htmlFor="includeFabricEstimate">
        With fabric estimation
        <input type="checkbox" id="includeFabricEstimate" name="includeFabricEstimate" />
      </label>
    </div>
  </div>
);

class ButtonGroup extends Component {
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
    return (
      <div>
        <div className="actions">
          <button type="button" onClick={this.openModal} className="fab">
            <Icon
              path={mdiSettings}
              size={1}
              color="#cecece"
            />
          </button>
        </div>

        { activeModal
          ? (
            <div className="modal">
              <div className="content">
                <div className="panel">
                  <h3>Save Options</h3>
                  <SavePanel />
                </div>
                <button type="button" className="button" onClick={this.exitModal}>Cancel</button>
                &nbsp;
                <button type="button" className="button" onClick={this.saveItem}>Save</button>
              </div>
            </div>
          )
          : null }
      </div>
    );
  }
}

export default ButtonGroup;
