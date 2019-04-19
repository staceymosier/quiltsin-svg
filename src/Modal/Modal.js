import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.exitModal = this.exitModal.bind(this);
  }

  exitModal() {
    this.setState({ activeModal: false });
  }

  render() {
    const { activeModal } = this.state;
    return (
      <div>
        { activeModal
          ? (
            <div className="modal">
              <div className="modal-content">
                Hello there
                <button type="button" onClick={this.exitModal}>Cancel</button>
              </div>
            </div>
          ) : null }
      </div>
    );
  }
}

export default Modal;
