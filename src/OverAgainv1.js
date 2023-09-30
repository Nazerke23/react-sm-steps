import { useState } from "react";

export default function OverAgain() {
  const [isHidden, setHidden] = useState(false);

  return (
    <>
      <div className="close">
        <MyButton
          name="X"
          onClickNext={() => {
            setHidden(!isHidden);
          }}
        />
      </div>
      <div className={"logic" + (isHidden ? " hide" : " ")}>
        <MyLogic />
      </div>
    </>
  );
}

function Title2({ step }) {
  return <h1>{step.name}</h1>;
}

function NumberedButtons(props) {
  return (
    <>
      <span className="active">1</span>
      <span className={props.number > 0 ? "active" : ""}>2</span>
      <span className={props.number > 1 ? "active" : ""}>3</span>
    </>
  );
}

function MyButton(props) {
  return (
    <>
      <button onClick={props.onClickNext}>{props.name}</button>
    </>
  );
}

function MyLogic() {
  const steps = [
    { name: "Step1: Learn React" },
    { name: "Step2: Apply for Jobs" },
    { name: "Step3:Invest your new income" },
  ];

  const [currentId, setCurrentId] = useState(0);

  const isValidForNext = currentId < steps.length - 1; //0-1-2  x < 2
  const isValidForPrev = currentId > 0; //x>0

  const onClickPrev = () => {
    isValidForPrev && setCurrentId(currentId - 1);
  };
  const onClickNext = () => {
    isValidForNext && setCurrentId(currentId + 1);
  };
  return (
    <>
      <NumberedButtons number={currentId} />
      <Title2 step={steps[currentId]}></Title2>
      <MyButton name="PREV" onClickNext={onClickPrev} />
      <MyButton name="NEXT" onClickNext={onClickNext} />
    </>
  );
}
