import PropTypes from 'prop-types';

function ProjectsItem(props) {
  const {category, img} = props.items

  return(
    <li className="projects-item">
      <img src={img} alt={category}/>
    </li>
  )
}

ProjectsItem.propTypes = {
  items: PropTypes.object.isRequired
}

export default ProjectsItem;
