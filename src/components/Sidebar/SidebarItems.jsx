import DashboardLogo from "./DashboardLogo";
import ProjectAndTaskLogo from "./ProjectAndTaskLogo"
import DiscussionBoardLogo from "./DiscussionBoardLogo"
import TaskListLogo from "./TaskListLogo"
const SidebarItems = () => {
	return (
		<>
			<DashboardLogo/>
            <ProjectAndTaskLogo/>
            <DiscussionBoardLogo/>
			<TaskListLogo/>
		</>
	);
};

export default SidebarItems;
