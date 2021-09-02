export default function Button({ kind }) {
  return (
    <button
     type="button" 
     className={kind === 'primary' ? 'primary' : 'secondary'}>
       {kind}
    </button>
  )
}