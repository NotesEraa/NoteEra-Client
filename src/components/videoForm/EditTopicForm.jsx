import Modal from "../UI/Modal";
import Button from "../UI/button";
import { useState } from "react";
import axios from "axios";
const EditTopic =(props)=>{
    const[inputTopicName,setInputTopicName]=useState(props.topicname);
    const[inputTopicUri,setInputTopicUri]=useState(props.topicuri);
    const inputTopicNameHandler=(event)=>{
        setInputTopicName(event.target.value);
        console.log(event.target.value)
    }
    const inputTopicUriHandler=(event)=>{
        setInputTopicUri(event.target.value);
        console.log(event.target.value)
    }
    const cleardataHandler=()=>{
        setInputTopicName("");
        setInputTopicUri("");
    }
    const submitFormHandler=(event)=>{
        event.preventDefault();
        axios.put(`https://noteseravideobackend.onrender.com/video/edittopic/${props.topicid}`,{
            topicname:inputTopicName,
            topicuri:inputTopicUri
        }).then(res=>{
            alert("topic values changed");
            window.location.reload(false);
        }).catch(err=>{
            alert('error in changing detail');
        })
    }
    return<Modal hideCard = {props.hideCard}>
    <form>
        <h2>edit topic</h2>
        <div>
            Topic name:
            <input type="text" name="topicname" onChange={inputTopicNameHandler} value={inputTopicName}/>
          </div>
          <div>
            Topic uri:
            <input type="text" name="topicuri" onChange={inputTopicUriHandler} value={inputTopicUri}/>
          </div>
          <div><Button onClick={cleardataHandler}>clear</Button> <Button onClick={submitFormHandler}>Edit Data</Button></div>
    </form>
</Modal>
}
export default EditTopic;