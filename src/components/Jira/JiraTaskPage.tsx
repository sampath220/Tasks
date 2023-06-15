import React from 'react'

export default function JiraTaskPage({ taskId, onClose, handleStatusChange, status }: any) {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-4 rounded">
                <h2 className="text-lg font-semibold mb-4">Task {taskId}</h2>
                <div className="mb-4">
                    <label htmlFor="status" className="block font-medium">
                        Status:
                    </label>
                    <select
                        id="status"
                        className="w-full py-2 px-3 border border-gray-300 rounded"
                        value={status}
                        onChange={handleStatusChange}
                    >
                        <option value="todo">To Do</option>
                        <option value="inprogress">In Progress</option>
                        <option value="blocked">Blocked</option>
                        <option value="prraised">PR Raised</option>
                    </select>
                </div>
                <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    )
}
