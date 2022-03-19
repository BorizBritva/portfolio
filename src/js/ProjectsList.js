import PropTypes from 'prop-types';
import ProjectsItem from './ProjectsItem';

function ProjectsList(props) {
  const imgs = props.items;

  return (
    <div className="projects projects-collapse">
      <ul className="projects-list">
        {
          imgs.map((item, index) => {
            return <ProjectsItem key={index} items={item}/>
          })
        }
      </ul>
    </div>
  )
}

ProjectsList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ProjectsList;
