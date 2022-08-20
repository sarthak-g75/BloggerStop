import React from "react";
import {MdFileDownloadDone,MdDangerous} from "react-icons/md"

const Notification = ({  message, type }) => {
  const successBtn = (
    <MdFileDownloadDone
     
      size="30px"
      color="Green"
     
    />)
  const dangerBtn = (
    <MdDangerous
     
      size="30px"
      color="DarkRed"
     
    />)
  // useEffect(() => {
  //   console.log({state});
  //   if (state === true) {
  //     setnoti(true);
  //     console.log(noti);
  //   }

  // }, []);

  return <div className={ type=== "success" ?"notification success": type==="danger"? "danger notification":"notification" }>
    <div className="notificationContent" >
      {type=== "success" ? successBtn: dangerBtn}
      <div className={ type=== "success" ?" successText": type==="danger"?"dangerText": ""} >{message}</div>
    </div>
  </div>;
};

export default Notification;
