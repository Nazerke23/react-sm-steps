export default function Numbers(props) {
  const howMany = props.number; //3

  const answers = [true];

  return (
    <>
      <span className="active">1</span>
      <span className={howMany >= 1 ? "active" : ""}>2</span>
      <span className={howMany >= 2 ? "active" : ""}>3</span>
    </>
  );
}
