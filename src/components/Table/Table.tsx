import React, { useEffect, useState } from "react"
import PaginatedTable from "./PaginatedTable"
import { Data as data } from '../../utils/UsersData'
import { User } from "../../types/User"

const columns = [
    {
        label: 'ID',
        name: 'id',
    },
    {
        label: 'Name',
        name: 'name',
    },
    {
        label: 'Status',
        name: 'status',
    },
    {
        label: 'Actions',
        name: 'actions',
    }
]

export default function Table() {

    const [usersData, setUsersData] = useState<User[]>()
    const [searchedUserData, setsearchedUserData] = useState<User[]>()
    const [search, setSearch] = useState("")
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRow, setSelectedRow] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    const itemsPerPage = 5;

    useEffect(() => {
        setUsersData(data)
    }, [])

    useEffect(() => {
        let items: any = []
        if (search === undefined || search === '') {
            items = usersData
        } else if (search !== "") {
            items = usersData?.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
        }
        const pageCount = Math.ceil((items || []).length / itemsPerPage);
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentData = (items || []).slice(indexOfFirstItem, indexOfLastItem);
        setsearchedUserData(currentData)
        setPageCount(pageCount)
    }, [usersData, search, currentPage])

    const handleSearchData = (search: string) => {
        setSearch(search)
    }

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleStatusChange = (id: any) => {
        let updatedUserData = (usersData || []).map(user =>
            user.id === id ?
                { ...user, status: !user.status }
                : user)
        setUsersData(updatedUserData)
    }

    const handleDelete = () => {
        setUsersData((data: any) => data.filter((user: any) => user.id !== selectedRow.id));
        setShowModal(false);
    };

    const handleApprove = () => {
        let updatedData = (usersData || []).map((user: User) => user.id === selectedRow.id ? { ...user, isApproved: !user.isApproved } : { ...user });
        setUsersData(updatedData)
        setShowModal(false);
    };

    return (
        <div>
            <div className="container mx-100">
                <div className="text-4xl font-bold mb-4 pt-10 text-center">Searchable and Paginated Table</div>
                <PaginatedTable
                    columns={columns}
                    data={searchedUserData || []}
                    handleSearchData={handleSearchData}
                    pageCount={pageCount}
                    handlePageChange={handlePageChange}
                    currentPage={currentPage}
                    handleStatusChange={handleStatusChange}
                    showModal={showModal}
                    setSelectedRow={setSelectedRow}
                    setShowModal={setShowModal}
                    handleApprove={handleApprove}
                    handleDelete={handleDelete}
                    selectedRow={selectedRow}
                />
            </div>
        </div>
    )
}