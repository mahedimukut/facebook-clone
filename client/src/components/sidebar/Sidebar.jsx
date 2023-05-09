import "./sidebar.css"
import { Bookmark, CalendarMonth, Chat, Group, LibraryBooks, PlayCircle, QuestionMark, RssFeed, Work } from "@mui/icons-material"
import { Users } from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListIemtText">
                            Feed
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListIemtText">
                            Chats
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircle className="sidebarIcon" />
                        <span className="sidebarListIemtText">
                            Videos
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListIemtText">
                            Groups
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListIemtText">
                            Bookmarks
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <QuestionMark className="sidebarIcon" />
                        <span className="sidebarListIemtText">
                            Questions
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon" />
                        <span className="sidebarListIemtText">
                            Jobs
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <CalendarMonth className="sidebarIcon" />
                        <span className="sidebarListIemtText">
                            Events
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <LibraryBooks className="sidebarIcon" />
                        <span className="sidebarListIemtText">
                            Courses
                        </span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">

                    {Users.map(u => (
                        <CloseFriend key={u.id} user={u} />
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default Sidebar