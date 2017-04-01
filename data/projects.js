/**
 * Created by pavithraabhishek on 3/27/17.
 */



exports.SingleRow = {
    "pid": 123,
    "name": "Project1",
    "description": "This is a description for your project. ",
    "members": [
        {
        "userId": 123,
        "fname": "User1",
        "lname": "Lname1",
        "status": "Invited",
        "email": "user1@gmail.com"
        },
        {
            "userId": 345,
            "name": "User2",
            "lname": "Lname2",
            "status": "Active",
            "email": "user2@gmail.com"
        }
    ],
    "workPackages": [
        {
        "wid": 123,
        "assignee": {
            "userId": 123,
            "fname": "User1",
            "lname": "Lname1",
            "status": "Invited",
            "email": "user1@gmail.com"
        },
        "subject": "Go-Live",
        "type": "Task",
        "status": "New"
        }
    ]
}
