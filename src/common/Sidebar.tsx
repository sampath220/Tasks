import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white h-screen w-48">
            <div className="p-4">
                <h1 className="text-2xl font-bold">My App</h1>
            </div>
            <ul className="p-2">
                <li className={`mb-2 ${window.location.pathname === "/" ? "bg-gray-500" : ""}`}>
                    <a href="/" className="block py-2 px-4 hover:bg-gray-700">
                        Dashboard
                    </a>
                </li>
                <li className={`mb-2 ${window.location.pathname === "/table" ? "bg-gray-500" : ""}`}>
                    <a href="/table" className="block py-2 px-4 hover:bg-gray-700">
                        Table
                    </a>
                </li>
                <li className={`mb-2 ${window.location.pathname === "/jiraboard" ? "bg-gray-500" : ""}`}>
                    <a href="/jiraboard" className="block py-2 px-4 hover:bg-gray-700">
                        Jira
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
