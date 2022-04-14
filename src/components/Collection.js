import React from "react";
import Highlighter from "react-highlight-words";

const Collection = ({show, suggested, activate, term}) => {
    return (
        <div className="search__input">
            {show && <div className="collection">
                {suggested.map((element, key) => {
                    return (
                        <a className="collection-item" key={key} onClick={(e) => activate(e, element.title)}>
                            <Highlighter
                                highlightClassName="YourHighlightClass"
                                searchWords={[term]}
                                autoEscape={true}
                                textToHighlight={element.title}
                            />
                        </a>
                    )
                })}
            </div>}
        </div>
    )
};

export default Collection;