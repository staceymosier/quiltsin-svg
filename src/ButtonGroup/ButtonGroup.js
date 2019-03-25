import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiSettings } from '@mdi/js';

const SavePanel = () => {
  return (
  <div class="form-group">
    <div className="form-item">
      <input type="checkbox" id="include-swatches" name="include-swatches"/>
      <label for="include-swatches">With palette</label>
    </div>
    <div className="form-item">
      <input type="checkbox" id="include-letters" name="include-letters"/>
      <label for="include-letters">With letters</label>
    </div>
    <div className="form-item">
      <input type="checkbox" id="include-fabric-estimate" name="include-fabric-estimate"/>
      <label for="include-fabric-estimate">With fabric estimation</label>
    </div>
  </div>
  );
}

class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.exitModal = this.exitModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.state = {
      activeModal: false
    }
  }

  openModal(e) {
    this.setState({ activeModal: true});
    return;
  }

  exitModal(e) {
    this.setState({ activeModal: false});
    return;
  }

  render(){
    return (
      <div>
        <div className="actions">
          <button onClick={this.openModal} className="fab">
            <Icon path={mdiSettings}
              size={1}
              color="#cecece"
            />
          </button>
        </div>

        { this.state.activeModal ?
          <div className="modal">
            <div className="content">
              <div class="panel">
                <h3>Save Options</h3>
                <SavePanel/>
              </div>
              <button className="button" onClick={this.exitModal}>Cancel</button>
               &nbsp; 
              <button className="button" onClick={this.saveItem}>Save</button>
            </div>
          </div>
        : null }
    </div>
    );
  }
}

export default ButtonGroup;
