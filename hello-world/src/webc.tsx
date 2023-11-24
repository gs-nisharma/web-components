const AdditionComp: React.FC<{
  number1: string;
  number2: string;
}> = ({ number1, number2 }) => {
  return <maths-add data-number1={number1} data-number2={number2}></maths-add>;
};
export default AdditionComp;
