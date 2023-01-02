import logo from './logo.svg';
import './App.css';
import ActionButton from './components/ActionButton'
import Select from './components/Select'
import PartSelector from './components/PartSelector';
import { useState } from 'react';
import { iPhoneInfos } from './iPhoneData';

function App() {
  const models = Object.keys(iPhoneInfos)

  let [currentFormStep, setCurrentFormStep] = useState(0);

  let model = 'iPhone X'
  let brokenParts = []

  function registerBrokenPart(part, state) {
    if (state == false) {
      brokenParts.push(part)
      console.log(part, "added to broken parts array", brokenParts)
    } else {
      let index = brokenParts.indexOf(part);
      if (index !== -1) {
        brokenParts.splice(index, 1);
      }
      console.log(part, "removed from broken parts array", brokenParts)
    }

    if (brokenParts.length > 0) {
      setCurrentFormStep(currentFormStep + 1)
    }
    renderActiveBall()
  }

  function registerModel(modelName) {
    model = modelName
    console.log('model value set to', modelName)
  }

  function handleActionBtnClick() {
    console.log('using', model)
    console.log('broken parts', brokenParts)
  }

  function renderActiveBall() {
    let activeBall = document.querySelector('.activeBall')

    if (currentFormStep == 1) {
      activeBall.animate([
        {
          transform: 'translate(-3px, 4px)'
        }, {
          transform: 'translate(-60px, 4px)'
        }
      ], {
        duration: 400,
        fill: "forwards",
        easing: "cubic-bezier(.3,.49,.11,1.16)"
      })
    }

    setTimeout(() => {
      let activeForm = document.querySelector('.form-input.active')

      const finalTop = activeForm.offsetTop + "px"

      activeBall.animate([
        {
          top: activeBall.offsetTop + "px"
        }, {
          top: finalTop 
        }
      ], {
        duration: 400,
        fill: "forwards",
        easing: "cubic-bezier(.3,.49,.11,1.16)"
      })
    }, 50)
  }

  return (
    <div className="App">
      <h1>Broken iPhone Repair Stats</h1>
      <div className="form">
        <div className="activeBall"></div>
        <Select title="Model" options={models} registerModel={registerModel} active={currentFormStep} setCurrentFormStep={setCurrentFormStep} renderActiveBall={renderActiveBall} />
        <PartSelector registerBrokenPart={registerBrokenPart} active={currentFormStep} setCurrentFormStep={setCurrentFormStep} renderActiveBall={renderActiveBall} />
      </div>
      <ActionButton text="check" handleActionBtnClick={handleActionBtnClick} />
    </div>
  );
}

export default App;
