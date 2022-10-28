import React, { useState } from 'react';
import './index.scss';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setModalVisible(true)} className='modal_open_btn'>Открыть окно</button>
      {
        modalVisible && (<div className='overlay'>
          <div className="modal">
            <div className="modal_header">
              <div className="modal_title">модальное окно</div>
              <div onClick={() => setModalVisible(false)} className="modal_close">&times;</div>
            </div>
            <div className='modal_content'>
              <svg>
                <title />
                <path />
              </svg>
            </div>

          </div>
        </div>)
      }

    </div>
  );
}

export default App;
