import React from 'react'
import ChatPersonCard from '../../Components/ChatPerson/ChatPersonCard';
import './ChatPeople.css';
function ChatPeople(props) {
    var messageDictionary={
        "Pierre":[{
            image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
            name:"Pierre",
            lastMessage: "Hi"
        }],
        "Jane":[{
            image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
            name:"Jane",
            lastMessage: "Hi"
        }],
        "Monika":[{
            image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
            name:"Monika",
            lastMessage: "Hi"
        }],

    }
    
    return (
            <div className="people__list" >
                {Object.keys(messageDictionary).map((key)=>
                    <ChatPersonCard chatProfile={messageDictionary[key][messageDictionary[key].length-1]} changeUser = {props.changeUser}/>
                )}
            </div>
    )
}

export default ChatPeople
