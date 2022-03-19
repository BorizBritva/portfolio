import PropTypes from 'prop-types';

function ToolbarItem({name, active, onClick}) {

  const eventClick = () => {
    onClick({name, active, onClick})
  }

  return(
    <li className={`toolbar-item${active===name ? ' active' : ''}`} onClick={eventClick}>
      {name}
    </li>
  )
}

ToolbarItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ToolbarItem;
