import React, { useEffect, useState } from 'react'
import { Task } from '../../types/Task';
import { Data as data } from '../../utils/TasksData'
import JiraTaskPage from './JiraTaskPage';


export default function Jira() {
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const [tasks, setTasks] = useState<Task[]>();
    const [status, setStatus] = useState();

    const taskStatus = {
        TODO: {
            name: "todo",
            label: "To Do"
        },
        IN_PROGRESS: {
            name: "inprogress",
            label: "In Progress"
        },
        BLOCKED: {
            name: "blocked",
            label: "Blocked"
        },
        PR_RAISED: {
            name: "prraised",
            label: "PR Raised"
        }
    }

    useEffect(() => {
        setTasks(data)
    }, [])

    const handleTaskClick = (task: any) => {
        setSelectedTaskId(task.id);
        setStatus(task.status)
    };

    const handleCloseTaskPage = () => {
        setSelectedTaskId(null);
    };

    const handleStatusChange = (e: any) => {
        setStatus(e.target.value)
        let updatedTasks = tasks?.map(task => task.id === selectedTaskId ? { ...task, status: e.target.value } : { ...task });
        setTasks(updatedTasks);
        setSelectedTaskId(null);
    };


    const getTaskBlock = (taskType: any) => {
        return (<div className="bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-semibold mb-4">{taskType.label}</h3>
            {tasks?.filter((task) => task.status === taskType.name)
                .map((task) => (
                    <div key={task.id}
                        className="bg-white p-2 mb-2 rounded cursor-pointer"
                        onClick={() => handleTaskClick(task)}
                    >
                        {task.title}
                    </div>
                ))}
        </div>);
    }

    return (
        <div className="container mx-auto p-4">
            <div className="text-center mx-auto mb-10 font-bold text-3xl">
                Jira Board
            </div>
            <div className="grid grid-cols-4 gap-4">
                {Object.values(taskStatus).map((task: any) => {
                    return getTaskBlock(task)
                })}
            </div>
            {
                selectedTaskId && (
                    <JiraTaskPage
                        taskId={selectedTaskId}
                        onClose={handleCloseTaskPage}
                        handleStatusChange={handleStatusChange}
                        status={status}
                    />
                )
            }
        </div >
    )
}
