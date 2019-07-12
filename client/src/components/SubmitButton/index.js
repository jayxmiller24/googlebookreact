import React from 'react';
import API from "../../utils/API"




function SubmitButton(props){
    const saveData = (id , title, authors, description, info, img  )=> {
        
        console.log("-----------------------")
        console.log(id)
        console.log("------------------")
        API.saveBook({
          title: title,
          author: authors,
          description: description,
          bookInfo: info,
          bookImg: img
        })
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
    
      }
    return (
        <span className="btn btn-warning submit-btn" {...props} role="button" tabIndex="0" onClick={() => saveData(props.bookid, props.booktitle, props.bookauthor, props.bookdescriptions, props.bookinfo, props.bookimage)}>
          Submit Button
        </span>
      );

}

export default SubmitButton;