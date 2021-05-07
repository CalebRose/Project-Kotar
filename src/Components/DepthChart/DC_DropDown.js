import React, { useEffect } from 'react';
import DropdownItem from '../Roster/DropdownItem';

const DCDropdown = (props) => {
  const [item, setItem] = React.useState('');
  const dropdownAlignment = 'dropdown is-' + props.align;
  const id = '#' + props.id;
  const activeDropdown = (event) => {
    const dropdown = document.querySelector(id);
    dropdown.classList.toggle('is-active');
  };
  const selectItem = (event) => {
    if (props.team) {
      setItem(event.target.value);
    } else if (props.data) {
      setItem(event);
    }
    activeDropdown();
    if (props.call) {
      props.call(event);
    }
  };

  let content;
  // If Dropdown is for teams

  // useEffect(() => {
  //   if (props.team) {
  //     setItem(props.team);
  //   } else if (props.data) {
  //     setItem(props.data[0].position);
  //   }
  // }, []);

  useEffect(() => {
    if (props.team) {
      setItem(props.team);
    } else if (props.data) {
      setItem(props.currentPosition);
    }
  }, [props]);

  if (props.teams) {
    content = props.teams.map((x) => (
      <DropdownItem
        key={x.id}
        value={x.Team + ' ' + x.Nickname}
        click={selectItem}
      />
    ));
  } else if (props.data) {
    content = props.data.map((x) => (
      <DropdownItem
        key={x.position}
        id={x.id}
        value={x.name + ' | ' + x.position}
        pos={x}
        click={selectItem}
        positionSwitch={true}
      />
    ));
  }

  return (
    <div className={dropdownAlignment} id={props.id}>
      <div className='dropdown-trigger'>
        <button
          className='button'
          aria-haspopup='true'
          aria-controls='dropdown-menu6'
          onClick={activeDropdown}
        >
          <span>{props.team ? item : item.name + ' | ' + item.position}</span>
          <span className='icon is-small'>
            <i className='fas fa-angle-down' aria-hidden='true'></i>
          </span>
        </button>
      </div>
      <div className='dropdown-menu' id='dropdown-menu' role='menu'>
        <div className='dropdown-content'>
          <DropdownItem
            value={props.team ? item : item.name + ' | ' + item.position}
            click={selectItem}
          />
          <hr className='dropdown-divider'></hr>
          {content}
        </div>
      </div>
    </div>
  );
};

export default DCDropdown;
