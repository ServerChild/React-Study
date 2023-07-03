import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: " 허누 왕바아보오오오오오오오오!!!!!!!",
    },
    {
        id : 2,
        message: "허누 울트라 와앙 바아보오오오오오오오오!!!!!",
    },
    {
        id: 3,
        message: "에베베베베베벱 - ㅠ - 허누 바보바보바보멍퉁이!",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                //알림이 모두 끝나면 notifications를 모두 비움
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message} 
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;