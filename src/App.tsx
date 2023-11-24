import AdditionComp from "./webc";

const HelloApp: React.FC<{
  name: string;
}> = ({ name }) => {
  return (
    <>
      <h1>Hello hi, {name}!</h1>
      <AdditionComp number1="3" number2="7"></AdditionComp>
    </>
  );
};

export default HelloApp;
