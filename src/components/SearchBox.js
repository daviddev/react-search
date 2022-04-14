import React from "react";

const SearchBox = ({term, setTerm, setSearch, activate}) => {
    return (
        <form onSubmit={(e) => activate(e, term)} className="search__input">
            <div className="search__icon">
                <img src="https://serverconf.ru/upload/iblock/030/03018460827b4e57f5e1f856d00653b1.png"
                     alt=""/>
            </div>
            <input value={term}
                   id="first_name2"
                   type="text"
                   className="validate"
                   onChange={e => {
                       setSearch(false);
                       setTerm(e.target.value);
                   }}
            />
        </form>
    )
}

export default SearchBox;