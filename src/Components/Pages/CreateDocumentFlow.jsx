import React, { useEffect, useState } from "react";
import "../general.css";
import "./CreateDocumentFlow.css";
import logo from "../assets/logo.png";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const MakeRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();
  const year = () => {
    let VarDate = new Date().getFullYear();

    return VarDate;
  };

  useEffect(() => {
    if (sessionStorage.getItem("Username") === null) {
      navigation("/");
    } else {
      sessionStorage.setItem("MainHome", sessionStorage.getItem("MainHome"));
    }
  }, [navigation]);

  const Staff_Name = () => {
    return sessionStorage.getItem("Username");
  };

  const Logout = () => {
    setIsLoading(true);

    sessionStorage.clear();
    localStorage.clear();
    navigation("/");

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const Home = () => {
    setIsLoading(true);
    navigation("/Non-Acc-Staff-Home");

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const setPath = (pathName) => {
    setIsLoading(true);
    navigation("/Non-Acc-Staff-Home/SetWorkFlow/Path");
    sessionStorage.setItem("PathName", pathName);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const updatePath = (pathName) => {
    // setIsLoading(true);
    // navigation("/Non-Acc-Staff-Home/SetWorkFlow/Path");
    // sessionStorage.setItem("PathName", pathName);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 2000);
  };

  const requestNames = [
    "Exam Reshedule",
    "Exam Re-attempt",
    "Labratory Session Reshedule",
    "Requesting Studentship Confirmation Letter",
    "Requesting Progress Report",
    "Requesting for New Student Record Book",
    "Requesting for New Student ID card",
  ];

  return (
    <div className="main">
      {isLoading && <Loading />}
      <div className="Background">
        <div className="Header">
          <img src={logo} alt="University Logo" className="Logo" />
          <div className="title">
            Welcome to Student Document Approval System{" "}
          </div>
        </div>

        <div className="Main-Background">
          <div className="Content-Background">
          <div className="welcome-with-Logout-button">
              <button className="btn btn-success" onClick={Home}>
                Home
              </button>
              <div className="Welcome-Name"> Welcome {Staff_Name()}</div>

              <button className="btn btn-danger" onClick={Logout}>
                Logout
              </button>
            </div>

            {requestNames.map((item, index) => {
              return (
                <div className="Request-Background" key={index}>
                  <div className="text"> {item}</div>

                  <div className="d-flex gap-4 pe-4">
                    <button
                      className="btn btn-warning px-4"
                      onClick={updatePath(item)}
                    >
                      Update/Modify
                    </button>

                    <button
                      className="btn btn-primary px-4"
                      onClick={() => setPath(item)}
                    >
                      Set
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="Footer">© Copyright {year()} University of Jaffna.</div>
      </div>
    </div>
  );
};

export default MakeRequest;
