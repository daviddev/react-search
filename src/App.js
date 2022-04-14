import React, {useEffect, useState} from "react";
import List from "./components/List";
import SearchBox from "./components/SearchBox";
import {api_url} from "./constants";
import Collection from "./components/Collection";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [term, setTerm] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [isSearched, setSearch] = useState(false);

    useEffect(() => {
        if (loading){
            fetchData().then((response) => {
                if (response.results) {
                    setResults(response.results);
                    setLoading(false);
                }
            });
        }
    }, [loading]);

    useEffect(() => {
        let query = term.trim().toLowerCase();
        setFiltered(results.filter(result => {
            return query === '' || result.title.toLowerCase().includes(query);
        }));
    }, [term]);

    const fetchData = async () => {
        return (await fetch(`${api_url}/search/anime?q=null&page=1`)).json();
    };

    const activate = (e, title) => {
        e.preventDefault();
        setTerm(title);
        setSearch(true);
    };

    return (
        <>
            <div className="row search">
                <div className="search__wrapper">
                    <SearchBox term={term} setTerm={setTerm} setSearch={setSearch} activate={activate}/>
                    <Collection show={!isSearched} suggested={filtered} activate={activate} term={term}/>
                </div>
            </div>
            {isSearched && <div className="row search__result">
                <List elements={filtered} term={term}/>
            </div>}
        </>
    );
};

export default App;
