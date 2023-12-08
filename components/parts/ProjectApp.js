"use client"
import React, {useState, useEffect} from 'react'
import ProjectComponent from './ProjectComponent';
import ProjectDetailsComponent from './ProjectDetailsComponent';

const ProjectApp = ({data}) => {
    const [projectToggle, setProjectToggle] = useState(false)
    const [projectData, setprojectData] = useState({
        title: '',
        image: '',
        tech: '',
        links: '',
        shortD: '',
        description: '',
    })
    const handleMoreInfo = (title, image, tech, links, shortD, description) => {
        setProjectToggle(!projectToggle)
        setprojectData({title, image, tech, links, shortD, description})
    }
    useEffect(() => {
        document.body.className = projectToggle === true ? 'overflow-hidden' : 'overflow-scroll';
      });
    const postPreviews = data.map((project) => 
        <ProjectComponent key={project.slug} {...project} handleMoreInfo={handleMoreInfo}/>
    );
   
    return (
        <div className={` ${projectToggle === true ? 'z-20' : 'z-10'}`}>
            <div className="relative columns-2 gap-4 max-xl:columns-1">{postPreviews}</div>
            {projectData.title !== '' ? <ProjectDetailsComponent projectData={projectData} projectToggle={projectToggle} setProjectToggle={setProjectToggle}/> : <></>}
        </div>
        
    )
}

export default ProjectApp