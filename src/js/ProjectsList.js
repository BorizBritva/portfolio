import PropTypes from 'prop-types';
import ProjectsItem from './ProjectsItem';
const shortid = require('shortid');

function ProjectsList({items}) {

  const getData = (data) => {
    if (data.length) {
      return (
        <ul className="projects-list">
          {
            data.map((d) => {
              return <ProjectsItem key={shortid.generate()} items={d}/>
            })
          }
        </ul>
      )
    }
    return null;
  }

  return (
    <div className="projects projects-collapse">
      {getData(items)}
    </div>
  )
}

ProjectsList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ProjectsList;
