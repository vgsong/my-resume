import React from 'react';


let projectCardContent = [

                {title:"DAILY TOOLS",
                tools: "tools: PyQT, Pandas, PyPDF2",
                desc: "Set of scripts I use daily. Supports Finance department/operations.",
                imgref:"python-logo.png"},

                {title:"INVOICE UPLOADER",
                tools: "tools: Selenium, PyQT, Pandas",
                desc: "Eliminated hundreds of monthly manual invoice upload into client's portal.",
                imgref:"python-logo.png"},

                {title:"PDF ATTACHER",
                tools: "tools: Pandas, PyPDF2",
                desc: "Streamlined monthly pdf attachment/append process.",
                imgref:"python-logo.png"}

];


let projectList = projectCardContent.map((items, index)=>{

    const img = require(`../../imgs/${items.imgref}`)

    return(

        <div className="card-text-center">
        <img key={index} className="card-img  w-25" src={img}/>
            <div className="card-body text-center">
            <h4 className="card-title" key={index}>{items.title}</h4>
            <p className="card-text text-muted" key={index}>{items.tools}</p>
            <p className="card-text text-left" key={index}>{items.desc}</p>
            </div>
        </div>
    )
});


export default function ProjectsContent(){
    return(
        <div className="Projects-Content-Page">
            <h1>PROJECTS.</h1>
            <div className='Project-Card-Container'>
                {projectList}
            </div>
        </div>
    );
}