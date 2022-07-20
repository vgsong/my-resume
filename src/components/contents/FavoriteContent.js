import React from 'react';

let favBookCardContent = [

    {title:"DAILY TOOLS",
    author: "tools: PyQT, Pandas, PyPDF2",
    desc: "Set of scripts used daily.Supports Finance department/operations.",
    imgref:"akarenina.jpg"},

    {title:"INVOICE UPLOADER",
    author: "tools: Selenium, PyQT, Pandas",
    desc: "Eliminated thousands of monthly manual input when uploading invoices into client's portal.",
    imgref:"cnp.jpg"},

    {title:"PDF ATTACHER",
    author: "tools: Pandas, PyPDF2",
    desc: "Streamlined monthly pdf attachment/append process.",
    imgref:"mmusashi.jpg"}

];

let favBookList = favBookCardContent.map((item, index) => {

    let img = require(`../../imgs/books/${item.imgref}`)
    
    return(
        // <div className="card">
        <div className="Favorite-Card">
        <img className="img-fluid img-thumbnail w-25 m-4" key={index} src={img}></img>    
        </div>
        // {/* </div> */}
    );
})


export default function FavoriteContent() {
    return(
        <div className="Favorite-Content">
            <h1>FAVORITES.</h1>
            <div className="Favorite-Card-Content">
            {favBookList}
            </div>
        </div>
    );
}