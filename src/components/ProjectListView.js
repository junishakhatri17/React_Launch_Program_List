import React, { useState, memo ,useEffect} from "react";
import { compose } from "redux";
import "./../list.css";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { userListActions } from '../store/action/projectListAction';

const initialList = [];

const ProjectListView = ({ projectList }) => {
  const dispatch = useDispatch();
  const [list, setList] = useState(initialList);

  useEffect(() => {
    // eslint-disable-next-line
    dispatch(userListActions.GetProjectDetails());
    // eslint-disable-next-line
   }, []);

   useEffect(() => {
    setList(projectList);
  }, [projectList]);

  return (
    <>      
        <div className="listviewCont column right">
            {list.length >= 0 && list.map((project, index) => (
                <div
                  className="card" key={index} style={{marginBottom: '20px'}}
                >
                  <div className="card-body">
                <div style={{textAlign: 'center', backgroundColor: '#e2e0e0'}}>
                    <img className="banner responsive" alt="launch-logo"src={project.links.mission_patch_small}/>
                </div>
                  <h3 style={{color: '#4b4bd0'}}>{project.mission_name} #{project.flight_number}</h3>
                    <p>
                    <b>Mission Ids: </b>  <span style={{color: '#4b4bd0'}}> {project.mission_id.length >= 0 && project.mission_id.map((item, index) => (
                     <li key={index}>{project.mission_id}</li>
                     ))}</span>
                    </p>
                    <p><b>Launch Year: </b> <span style={{color: '#4b4bd0'}}>{project.launch_year}</span></p>
                    <p><b>Successful Launch: </b><span style={{color: '#4b4bd0'}}>{JSON.stringify(project.launch_success)}</span></p>
                   <p><b>Successful Landing: </b><span style={{color: '#4b4bd0'}}>{JSON.stringify(project.rocket.first_stage.cores[0].land_success)}</span></p>
                  </div>
                </div>
            ))}
            {list.length === 0 ? <div style={{textAlign:'center',marginTop: '215px'}}><h1>No Space X launch program Found</h1></div> : ""}
          </div>
     
    </>
  );
};

const mapStateToProps = (state) => ({
  projectList: state.GetProjectList.projectList
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo
)(ProjectListView);
