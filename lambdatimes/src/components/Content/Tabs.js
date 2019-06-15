import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';



const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
            props.tabs.map( (tab, index) => {
              return (
                <Tab tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} key={index}/>
              )
            })
            }
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabsObject: PropTypes.shape({
    0: PropTypes.string,
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
  })
}




export default Tabs;
