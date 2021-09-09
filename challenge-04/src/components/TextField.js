export default function TextField({ id, labelText, ...rest }) {
  return (
    <div className="text-field">
      <label htmlFor={id}>{labelText}</label>
      <input id={id} {...rest}/>
    </div>
  )
}