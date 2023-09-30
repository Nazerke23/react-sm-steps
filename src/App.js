import { useState } from "react";
import Button from "./Button";
import Title from "./Title";
import Numbers from "./Numbers";

function App() {
  const contents = [
    { title: "Step1: Learn React" },
    { title: "Step2: Apply for Jobs" },
    { title: "Step3:Invest your new income" },
  ];

  const [currentId, setCurrentId] = useState(0);
  const isValidForNext = currentId < contents.length - 1; //0-1-2
  const isValidForPrev = currentId > 0; //2-1-0

  const currentContent = contents[currentId];
  console.log("I am from console", currentId);

  return (
    <>
      <Numbers number={currentId}></Numbers>
      <Title content={currentContent} />
      <button
        onClick={() => {
          if (isValidForPrev) {
            setCurrentId(currentId - 1);
          }
        }}
      >
        PREV
      </button>
      <button
        onClick={() => {
          if (isValidForNext) {
            setCurrentId(currentId + 1);
          }
        }}
      >
        NEXT
      </button>

      {/* <Button>Previous</Button>
      <Button> Next</Button> */}
    </>
  );
}

export default App;
