import React, { useState } from 'react';
import Modal from './components/modal/Modal';
import './index.scss';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setModalVisible(true)} className='modal_open_btn'>Открыть окно</button>
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </div>
  );
}

export default App;
