import PropTypes from 'prop-types';
import ToolbarItem from './ToolbarItem';

function Toolbar({filters, selected, onSelectFilter}) {

  return(
    <div className="toolbar toolbar-collapse">
      <ul className="toolbar-list">
        {filters.map( (item, index) => {
          return <ToolbarItem key={index} name={item} active={selected} onClick={onSelectFilter}/>
        })}
      </ul>
    </div>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired
}

export default Toolbar;
