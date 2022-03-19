import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import ProjectsList from './ProjectsList';

function Portfolio(props) {
  const {filters, selected, projects} = props.items
  const [select, setSelected] = useState(selected)

  const handleSelected = (e) => {
    setSelected(prevSelect => {
      return e.name;
    })
  }

  const resProjects = projects.filter(item => {
    return select==="All" ? item : item.category===select;
  })

  return (
    <div className="portfolio">
      <Toolbar filters={filters} selected={select} onSelectFilter={handleSelected}/>
      <ProjectsList items={resProjects}/>
    </div>
  )
}

Portfolio.propTypes = {
  items: PropTypes.object.isRequired
}

export default Portfolio;
