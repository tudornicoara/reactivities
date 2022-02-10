import React from "react";
import {observer} from "mobx-react-lite";
import {Image, List, Popup} from "semantic-ui-react";
import {Profile} from "../../../app/models/profile";
import {Link} from "react-router-dom";
import ProfileCard from "../../profiles/ProfileCard";

interface Props {
    attendees: Profile[];
}

export default observer(function ActivityListItemAttendee({attendees}: Props) {
    return (
        <List horizontal>
            {attendees.map(attedee => (
                <Popup
                    hoverable
                    key={attedee.username}
                    trigger={
                        <List.Item key={attedee.username} as={Link} to={`/profiles/${attedee.username}`}>
                            <Image size='mini' circular src={attedee.image || '/assets/user.png'} />
                        </List.Item>
                    }
                >
                    <Popup.Content>
                        <ProfileCard profile={attedee} />
                    </Popup.Content>
                </Popup>
            ))}
        </List>
    )
})