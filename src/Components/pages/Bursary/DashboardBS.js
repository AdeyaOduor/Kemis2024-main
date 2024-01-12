import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DashboardBS = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [bursaryStatus, setbursaryStatus] =useState(null)

    const userData = JSON.parse(localStorage.getItem('user'));
    const UserId = userData.userId;

    useEffect(() => {
        const fetchData = async () => {
            try {
                let urlhom = window.location.origin;
                let url = '/kemisapi/api/v1/Applications/getEntireUserDetails/' + UserId;
                console.log(urlhom + url);
                const response = await axios.get(urlhom + url);
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [UserId]);

    const handleCloseModal = () => {
        setSelectedUser(null);
    };
    const handleShowModal = async (user) => {
        setSelectedUser(user);
    };

    const handleApply = (user) => {
        console.log(`Applying for ${user.fullname}`);
    };


    if (loading) {
        return <p>Loading...</p>;
    }

    // Display the button and an empty table if there is no data
    // Display the button and an empty table if there is no data
    if (!data || data.length === 0) {
        return (
            <div className="container mx-auto mt-5">
                <Link to="/applicationform">
                    <button className="bg-blue-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded mb-3">
                        Add Applicant
                    </button>
                </Link>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 text-left">Serial Number</th>
                            <th className="py-2 text-left">UPI</th>
                            <th className="py-2 text-left">Fullname</th>
                            <th className="py-2 text-left">School</th>
                            <th className="py-2 text-left">KCPE Marks</th>
                            <th className="py-2 text-left">Bursary Applied</th>
                            <th className="py-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render empty table row */}
                        <tr>
                            <td colSpan="7" className="py-2 text-center">
                                No data available
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-5">
            <Link to="/applicationform">
                <button className="bg-blue-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded mb-3">
                    Add Applicant Details
                </button>
            </Link>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 text-left">Serial Number</th>
                        <th className="py-2 text-left">UPI</th>
                        <th className="py-2 text-left">Fullname</th>
                        <th className="py-2 text-left">School</th>
                        <th className="py-2 text-left">KCPE Marks</th>
                        <th className="py-2 text-left">Bursary Applied</th>
                        <th className="py-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                            <td className="py-2">{index + 1}</td>
                            <td className="py-2">{user.upi}</td>
                            <td className="py-2">{`${user.firstName} ${user.middleName} ${user.lastName}`}</td>
                            <td className="py-2">{user.primarySchool}</td>
                            <td className="py-2">{user.kcpeMarks}</td>
                            <td className="py-2">{user.bursarytype}</td>
                            <td className="py-2 space-x-2">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                                    onClick={() => handleShowModal(user)}
                                >
                                    View Details
                                </button>
                                <button
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                                    onClick={() => handleApply(user)}
                                >
                                    Apply
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="min-w-full bg-white border border-gray-300 bottom-0 mb-4">
                <thead>
                    <tr>
                        <th className="py-2 text-left">Applicant</th>
                        <th className="py-2 text-left">Bursary Scheme</th>
                        <th className="py-2 text-left">Amount</th>
                        
                    </tr>
                </thead>
                {/* <tbody>
                     {bursaryStatus.map((bursaryStatus, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                            <td className="py-2">{`${bursaryStatus.firstName} ${bursaryStatus.middleName} ${bursaryStatus.lastName}`}</td>
                            <td className="py-2">{bursaryStatus.primarySchool}</td>
                            <td className="py-2">{bursaryStatus.kcpeMarks}</td>
                           
                        </tr>
                    ))} 
                </tbody> */}
            </table>


            {/* User Details Modal */}
            {selectedUser && (
                <div className="bg-white p-8 rounded shadow-md overflow-y-auto" style={{ width: '600px', maxHeight: '80vh' }}>
                    {Object.entries(selectedUser)
                        .filter(([key]) => !['applicationId', 'userId', 'needId', 'declarationId', 'parentsGuardiansInfoId'].includes(key))
                        .map(([key, value]) => (
                            <div key={key} className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">{key}:</label>
                                <input
                                    type="text"
                                    value={Array.isArray(value) ? value.join('; ') : value}
                                    className="border rounded w-full py-1 px-3"
                                    readOnly
                                />
                            </div>
                        ))}
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleCloseModal}
                    >
                        Close
                    </button>
                </div>


            )}
        </div>
    );
};

export default DashboardBS;