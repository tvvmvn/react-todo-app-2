export default function FilterButton({
  name,
  filter,
  setFilter
}) {
  return (
    <button 
      key={name}
      disabled={name == filter}
      onClick={() => setFilter(name)}
    >
      {name}
    </button>
  )
}