import { useState } from "react";

export default function OverAgain() {
  const [isHidden, setHidden] = useState(false);

  return (
    <>
      <div className="close">
        <MyButton
          onClickNext={() => {
            setHidden(!isHidden);
          }}
        >
          X
        </MyButton>
      </div>
      <div className={"logic" + (isHidden ? " hide" : " ")}>
        <MyLogic />
      </div>
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
      <Message onClick={() => console.log("I was clicked")}>
        {steps[currentId].name}
      </Message>
      <MyButton onClickNext={onClickPrev}>PREV</MyButton>
      <MyButton onClickNext={onClickNext}>NEXT</MyButton>
    </>
  );
}

function Title2({ step }) {
  return <h1>{step.name}</h1>;
}

function Message({ children, onClick }) {
  return <h1 onClick={onClick}>{children}</h1>;
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

function MyButton({ onClickNext, children }) {
  return (
    <>
      <button onClick={onClickNext}>{children}</button>
    </>
  );
}
