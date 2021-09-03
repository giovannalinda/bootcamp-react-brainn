export default function Button({ kind, children }) {
  return (
    <button
     type="button" 
     className={kind === 'primary' ? 'primary' : 'secondary'}>
       {children}
    </button>
  )
}