import React from 'react';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      let classChange; 
      if(props.tab === props.selectedTab) {
        classChange='tab active-tab';
      }
      else {
        classChange='tab'
      }
  return (
    <div
      className={'classChange'}
      onClick={(event) => { props.selectTabHandler(props.tab);
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         console.log('im click why not work')
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
