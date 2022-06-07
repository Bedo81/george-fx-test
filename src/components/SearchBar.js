import "./SearchBar.css";
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery, sticky, element }) => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
        navigate(`?search=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <div className="search-wrapper" ref={element}>
            <nav className={sticky ? "navbar navbar-sticky navbar-expand-lg navbar-dark bg-light" : "navbar navbar-expand-lg navbar-dark bg-light"}>
                <div className="container">
                        <form className="d-flex"
                            action="/"
                            method="get"
                            autoComplete="off"
                            onSubmit={onSubmit}>
                            <input value={searchQuery}
                                onInput={(e) => setSearchQuery(e.target.value)}
                                id="header-search"
                                name="search" className="form-control me-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-secondary my-sm-0" type="submit">Search</button>
                        </form>
                </div>
            </nav>
        </div>
    );
};

export default SearchBar;
