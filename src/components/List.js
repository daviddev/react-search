import React from "react";
import Highlighter from "react-highlight-words";

const List = ({elements, term}) => {
    return <>
        {
            elements.map((element, key) => {
                const {title, synopsis, image_url, url} = element;
                return (
                    <div className="col s3" key={key}>
                        <div className="card">
                            <div className="card-image">
                                <img src={image_url} alt='image'/>
                            </div>
                            <div className="card-content">
                                <span className="card-title">
                                    <Highlighter
                                        highlightClassName="YourHighlightClass"
                                        searchWords={[term]}
                                        autoEscape={true}
                                        textToHighlight={title}
                                    />
                                </span>
                                <p>{synopsis}</p>
                            </div>
                            <div className="card-action">
                                <a href={url}>This is a link</a>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </>
}

export default List;