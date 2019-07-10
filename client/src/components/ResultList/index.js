import React from "react";



function ResultList(props) {
  return (
    <ul className="list-group">
      {props.result.map(results => (
        <li className="list-group-item" key={results.id}>
          <h5>Title: {results.volumeInfo.title}</h5>
          <h5>Author:{results.volumeInfo.authors}</h5>
          <img alt={results.volumeInfo.title} src={results.volumeInfo.imageLinks.smallThumbnail}/>
          <h5>Description: {results.volumeInfo.description}</h5>
          <h5><a href={results.volumeInfo.infoLink}>Link</a></h5>
        <button className="btn btn-warning" >Save Book</button>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
