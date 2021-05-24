import classes from "./InputElement.module.css"
const InputElement = (props) => {
  return (
    <div className={classes.inputBox}>
      <label>{props.label}</label>
      <input type="text" name={props.name} value={props.value} onChange={props.handleInputChange}/>
    </div>
  );
};

export default InputElement;
