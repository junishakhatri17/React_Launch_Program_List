import React, { memo } from "react";
import { compose } from "redux";
import "./../list.css";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { userActions } from '../store/action/projectFilterAction';

const initialList = [
  { id: 0, year: 2006, selected: false },
  { id: 1, year: 2007, selected: false },
  { id: 2, year: 2008, selected: false },
  { id: 3, year: 2009, selected: false },
  { id: 4, year: 2010, selected: false },
  { id: 5, year: 2011, selected: false },
  { id: 6, year: 2012, selected: false },
  { id: 7, year: 2013, selected: false },
  { id: 8, year: 2014, selected: false },
  { id: 9, year: 2015, selected: false },
  { id: 10, year: 2016, selected: false },
  { id: 11, year: 2017, selected: false },
  { id: 12, year: 2018, selected: false },
  { id: 13, year: 2019, selected: false },
  { id: 14, year: 2020, selected: false }
];
const launchList = [
  { id: 0, value: "True", selected: false },
  { id: 1, value: "False", selected: false }
];
const landingList = [
  { id: 0, value: "True", selected: false },
  { id: 1, value: "False", selected: false }
];
const FilterComp = () => {
  const dispatch = useDispatch();
  //let history = useHistory();
  const [landingSuccess, setLandingSuccess] = React.useState("");
  const [launchSuccess, setLaunchSuccess] = React.useState("");
  const [launchYear, setLaunchYear] = React.useState("");
  const [list, setNewList] = React.useState(initialList);
  const [launchlist, setLaunchList] = React.useState(launchList);
  const [landinglist, setLandingList] = React.useState(landingList);

  const getLaunchYear = (id, launch_year) => {
    setLaunchYear(launch_year);
    const newList = [...list];
    for(let i = 0; i < newList.length;i++) {
      if(i !== id ) {
        newList[i].selected = false
      }
    }
    newList[id].selected = !newList[id].selected;
    if(newList[id].selected === false ) {
      launch_year = "";
    }
    setNewList(newList);
    dispatch(userActions.LaunchYearDetails(landingSuccess,launchSuccess,launch_year));
  };

  function getLaunchSuccess(id, launch_success) {
    setLaunchSuccess(launch_success);
    const newList = [...launchlist];
    for(let i = 0; i < newList.length;i++) {
      if(i !== id ) {
        newList[i].selected = false
      }
    }
    newList[id].selected = !newList[id].selected;
    if(newList[id].selected === false ) {
      launch_success = "";
    }
    setLaunchList(newList);
    dispatch(userActions.LaunchYearDetails(landingSuccess,launch_success,launchYear));
  }
  function getLandingSuccess(id, landing_success) {
    setLandingSuccess(landing_success);
    const newList = [...landinglist];
    for(let i = 0; i < newList.length;i++) {
      if(i !== id ) {
        newList[i].selected = false
      }
    }
    newList[id].selected = !newList[id].selected;
    if(newList[id].selected === false ) {
      landing_success = "";
    }
    setLandingList(newList);
    dispatch(userActions.LaunchYearDetails(landing_success,launchSuccess,launchYear));
  };

  
  return (
    <div className="filter_container column left">
      <div className="filterDetails">
        <h3 style={{ margin: "0" }}>Filters</h3>
        <span className="filterHeadings">Launch Year</span>
        <hr className="seperator" />
        <div className="btnContainer">
          {initialList.length >= 0 &&
            list.map((item, index) => (
              <span
                index={item.id}
                key={index}
                className={`filterBtn ${
                  item.selected ? "selectedBtn" : "notselected"
                }`}
                onClick={id => getLaunchYear(index, item.year)}
              >
                {item.year}
              </span>
            ))}
        </div>
        <div className="launchSuccess">
          <span className="filterHeadings">Successful Launch</span>
          <hr className="seperator" />
          <div className="btnContainer">
            {launchList.length >= 0 &&
              launchList.map((item, index) => (
                <span
                  index={item.id}
                  key={index}
                  className={`filterBtn ${
                    item.selected ? "selectedBtn" : "notselected"
                  }`}
                  onClick={id => getLaunchSuccess(index, item.value.toLowerCase())}
                >
                  {item.value}
                </span>
              ))}
          </div>
        </div>
        <div className="landingSuccess">
          <span className="filterHeadings">Successful Landing</span>
          <hr className="seperator" />
          <div className="btnContainer">
            {landingList.length >= 0 &&
              landingList.map((item, index) => (
                <span
                  index={item.id}
                  key={index}
                  className={`filterBtn ${
                    item.selected ? "selectedBtn" : "notselected"
                  }`}
                  onClick={id => getLandingSuccess(index, item.value.toLowerCase())}
                >
                  {item.value}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projectList: state.GetProjectList.projectList
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo
)(FilterComp);