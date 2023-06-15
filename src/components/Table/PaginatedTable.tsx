import React, { useState } from 'react'
import { User } from '../../types/User';

export default function PaginatedTable({ 
    columns, 
    data, 
    handleSearchData, 
    handlePageChange, 
    currentPage, 
    pageCount, 
    handleStatusChange, 
    showModal, 
    setSelectedRow, 
    setShowModal, 
    handleApprove, 
    handleDelete, 
    selectedRow }: any) {
    const [filter, setFilter] = useState('');
    const [isApprovedButton, setApprovedButton] = useState(false)
    const [isDeleteButton, setDeleteButton] = useState(false)


    const onChange = (value: any) => {
        handleSearchData(value || undefined)
    }

    const handleClose = () => {
        setShowModal(false)
        setDeleteButton(false)
        setApprovedButton(false)
    }



    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <input
                    type="text"
                    value={filter}
                    onChange={(e) => {
                        setFilter(e.target.value);
                        onChange(e.target.value)
                    }}
                    placeholder="Search"
                    className="border border-gray-300 rounded p-2"
                />
            </div>
            <div className="overflow-x-auto relative">
                <table className="table table-compact table-zebra w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            {columns.map((column: any) => (
                                <th key={column.label} className="border-b px-4 py-2">{column.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row: User) => {
                            return (
                                <tr key={row.id} className={`border-b text-center ${row.isApproved ? "bg-green-100" : ""}`}>
                                    <td className="border-r px-4 py-2">{row.id}</td>
                                    <td className="border-r px-4 py-2">{row.name}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            className={`px-3 py-1 rounded ${row.status === true ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                                                }`}
                                            onClick={() => handleStatusChange(row.id)}
                                        >
                                            {row.status === true ? "Activated" : "Deactivated"}
                                        </button>
                                    </td>
                                    {/* <td className="px-4 py-2">
                                        <button
                                            className="mr-2 bg-blue-500 text-white px-3 py-1 rounded"
                                            onClick={() => {
                                                setSelectedRow(row);
                                                setShowModal(true);
                                            }}
                                        >
                                            actions
                                        </button>
                                    </td> */}
                                    <td className="px-4 py-2">
                                        <button
                                            className={`mr-2 text-white px-3 py-1 rounded ${row.isApproved ? "bg-gray-200" : "bg-blue-500"}`}
                                            disabled={row?.isApproved}
                                            onClick={() => {
                                                setSelectedRow(row);
                                                setShowModal(true);
                                                setApprovedButton(true);
                                            }}
                                        >
                                            Approve
                                        </button>

                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                            onClick={() => {
                                                setSelectedRow(row);
                                                setShowModal(true);
                                                setDeleteButton(true);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    {
                        showModal && (
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <div className="bg-gray-300 p-4 rounded shadow-lg">
                                    <button className="m-auto text-lg float-right" onClick={handleClose}>x</button>
                                    <h3 className="text-lg mb-4 font-medium ">Confirm Action</h3>
                                    <div className="mb-4">
                                        <span >Are you sure you want to perform this action for </span>
                                        <span className="font-medium">{selectedRow.name} ?</span>
                                    </div>
                                    <div className="flex justify-end">
                                        {isApprovedButton && <button
                                            className="mr-2 bg-blue-500 text-white px-3 py-1 rounded"
                                            onClick={() => {
                                                handleClose()
                                                handleApprove()
                                            }}
                                        >
                                            Approve
                                        </button>}
                                        {isDeleteButton && <button
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                            onClick={() => {
                                                handleClose()
                                                handleDelete()
                                            }}
                                        >
                                            Delete
                                        </button>}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </table>
            </div>
            <div className="mt-4 flex justify-center">
                <nav className="inline-flex rounded-md shadow">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    {Array.from({ length: pageCount }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-3 py-2 border-t border-b border-gray-300 bg-white text-sm leading-5 font-medium ${currentPage === index + 1
                                ? 'text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                : 'text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === pageCount}
                        className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                        Next
                    </button>
                </nav>
            </div>
        </div>
    )
}