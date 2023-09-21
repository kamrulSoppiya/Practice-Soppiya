export default function Checkbox({ className, text, handel, option, index, ...rest }) {
  return (
    <label className={className}>
      <input type="checkbox" onChange={(e)=>handel(e,index)} checked={option.checked}  {...rest} /> <span>{text}</span>
    </label>
  );
}
