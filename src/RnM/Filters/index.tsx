type FilterProps = {}

function Filter() {
  return (
    <label>
      <span>Choose Race:</span>
      <select name="race">
        <option value="">-</option>
        <option value="Human">Human</option>
      </select>
    </label>
  )
}

export default function RnMFilters() {
  return <Filter />
}
