import React from 'react'

export const ToggleColumns = ({ onCheckboxClick, columns }) => {
  const handleClick = (e) => {
    onCheckboxClick(e.target.id, e.target.checked);
  }

  return (
    <div className="toggle-columns">
      {
        Object.keys(columns).map((column, index) => {
          return (
            <div key={index}>
              <label htmlFor={column}>
                {column}
              </label>
              <input
                id={column}
                name={column}
                type="checkbox"
                onChange={handleClick}
                checked={columns[column]}
              />
            </div>)
        })
      }
    </div>
  );
}
