import { getFlagImage } from "../getFlagImage";
import "./SearchResults.css";

const SearchResults = ({ results }) => {

  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Flag</th>
            <th scope="col">Name</th>
            <th scope="col">Currency</th>
            <th scope="col">Exchange rate</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => (
            <tr key="{index}">
              <td data-label="Flag">{getFlagImage(item)}</td>
              <td data-label="Name">{item.nameI18N}</td>
              <td data-label="Currency">{item.currency}</td>
              <td data-label="Exchange rate">{item.exchangeRate?.middle}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default SearchResults