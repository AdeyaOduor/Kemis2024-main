import React, { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { getCurrentUser } from "../../../REST-API/auth/AuthProvider";
import { MdClose } from 'react-icons/md';

const LearnerTransfer = () => {
    const user = getCurrentUser();
    const uic = user.username;
    const [upi, setUpi] = useState("");
    const [learner, setLearner] = useState(null);
    const [uicFrom, setUicFrom] = useState(null);
    const [commentTo, setCommentTo] = useState("");
    const [savedRecord, setSavedRecord] = useState(false);
    const [loading, setLoading] = useState(true);
    const [transferList, setTransferList] = useState([]);
    // modal
    const [expandedTransferId, setExpandedTransferId] = useState(null);
    const [expandedTransferUpi, setExpandedTransferUpi] = useState(null);
    const handleViewTransferClick = (transferId, transferUpi) => {
        setExpandedTransferId(transferId === expandedTransferId ? null : transferId);
        setExpandedTransferUpi(transferUpi === expandedTransferUpi ? null : transferUpi);
        console.log("UPI response on click:", expandedTransferUpi);
        console.log("ID response on click:", expandedTransferUpi);
    };
    // handle transfer acknowledgement
    const [transferUpi, setTransferUpi] = useState('');
    const [transferId, setTransferId] = useState('');
    const [commentFrom, setCommentFrom] = useState('');
    const [isTransfer, setIsTransfer] = useState('');

    const handleAccept = () => {
        setTransferUpi(expandedTransferUpi);
        setTransferId(expandedTransferId);
        setCommentFrom(commentFrom);
        setIsTransfer('1');
    };

    const handleReject = () => {
        setTransferUpi(expandedTransferUpi);
        setTransferId(expandedTransferId);
        setCommentFrom(commentFrom);
        setIsTransfer('2');
    };

    const handleSubmitAcknowledgement = (e) => {
        e.preventDefault();
        // Log the form values
        // http://localhost/student/api/v1/learners/transferLeanerResponse/${expandedTransferUpi}
        console.log('Transfer ID:', expandedTransferId);
        console.log('Transfer UPI:', expandedTransferUpi);
        console.log('CommentFrom:', commentFrom);
        const mydata = {
            id: expandedTransferId,
            upi: expandedTransferUpi,
            comment_from: commentFrom,
            is_transfered: isTransfer,
        };
        let updateTransferUrl = urlhom+ `/student/api/v1/learners/transferLeanerResponse/${expandedTransferUpi}`;
        localStorage.setItem('mydata', JSON.stringify(mydata));
        console.log("Transformed Data", mydata);
        JSON.stringify()
    
        const headers = {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Methods": "GET, POST",
          "Access-Control-Allow-Headers": "X-Token",
          "Access-Control-Allow-Credentials": "true",
        };
        axios
          .post(updateTransferUrl, mydata, {
            headers: headers,
          })
          .then((response) => {
            // Clear the form and show successful submittion of grievance
            setSavedRecord(true);
          })
          .catch((error) => {
            console.error("Error saving data:", error);
          });


        console.log('Current school:', mydata);
        
    };
    const closePopup = () => {
        setExpandedTransferId(null);
        setExpandedTransferUpi(null);
    };
    // tabs

    const [activeButton, setActiveButton] = useState('transfer');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const isButtonActive = (buttonName) => {
        return activeButton === buttonName ? 'bg-gray-500' : '';
    };
    //   end

    useEffect(() => {
        if (learner) {
            setUicFrom(learner.school_uic || null);
        }
        //get transfer request endpoint
        axios.get(urlhom + `/student/api/v1/learners/transfer/requests/${uic}`).then(res => {
            if (res.status === 200) {
                setTransferList(res.data)
            }
            setLoading(false)

        })
    }, [learner]);
    if (loading) {
        console.warn('Loading Learner List');
    }

    const handleSearchLearner = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get(
                urlhom+`/student/api/v1/learners/get/learner/${upi}`
            );
            setLearner(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    let urlhom = window.location.origin;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const mydata = {
            uic_from: uicFrom,
            uic_to: uic,
            comment_to: commentTo,
            is_transfered: 0,
        };

        try {
            const headers = {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Methods": "GET, POST",
                "Access-Control-Allow-Headers": "X-Token",
                "Access-Control-Allow-Credentials": "true",
              };
            const response = await axios.post( urlhom+`/student/api/v1/learners/transferLearnerRequest/${upi}`,
                mydata,
                {headers: headers,
              }
            );
            
            console.log("Response:", response);
            setSavedRecord(true);
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    return (
        <>
            <div className="bgPrimary">
                <div className="mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-16">
                   
                </div>
            </div>

            <div className="bg-ff80b5">
                <div className="mx-auto max-w-7xl py-12 sm:py-12 lg:py-16">
                    <div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="flex flex-col sm:flex-row">
                                    {/* Main Content */}
                                    <div className="w-full sm:w-5/6 p-4 mt-0 pt-0 mx-auto">

                                        <div
                                            className="flex flex-wrap sm:flex-row items-center sm:items-start"
                                            style={{ backgroundColor: '#fdfafa', padding: '4px', borderRadius: '5px' }}
                                        >
                                            <button
                                                type="button"
                                                className={`bg-blue-500 text-white p-1 btn-xs border m-1 ${isButtonActive('transfer')}`}
                                                onClick={() => handleButtonClick('transfer')}
                                                style={{ borderRadius: '10px' }}
                                            >
                                                Transfer Learner
                                            </button>
                                            <button
                                                type="button"
                                                className={`bg-blue-500 text-white p-1 btn-xs border m-1 ${isButtonActive('transfersIn')}`}
                                                onClick={() => handleButtonClick('transfersIn')}
                                                style={{ borderRadius: '10px' }}
                                            >
                                                Transfers In
                                            </button>
                                            <button
                                                type="button"
                                                className={`bg-blue-500 text-white p-1 btn-xs border m-1 ${isButtonActive('transfersOut')}`}
                                                onClick={() => handleButtonClick('transfersOut')}
                                                style={{ borderRadius: '10px' }}
                                            >
                                                Transfers Out
                                            </button>
                                        </div>

                                        <div>
                                            {activeButton === 'transfer' && (
                                                <div>
                                                    <div className=" p-8 rounded-lg shadow-lg mt-2" style={{ backgroundColor: '#fbf5f58a' }}>

                                                        <div className="flex flex-wrap sm:flex-row items-center sm:items-start">
                                                            <form onSubmit={handleSearchLearner}>
                                                                <div className="flex items-center">
                                                                    <input
                                                                        type="text"
                                                                        className="p-2 border mr-0 focus:outline-none"
                                                                        value={upi}
                                                                        onChange={(event) => setUpi(event.target.value)}
                                                                        placeholder="Search learner by UPI"
                                                                        style={{ borderLeftRadius: '10px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}
                                                                    />
                                                                    <button type="submit"
                                                                        className="bg-blue-500 text-white p-2"
                                                                        style={{ borderRightRadius: '10px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', marginTop: '0.1rem', padding: '0.5443rem' }}

                                                                    >
                                                                        Search
                                                                    </button>

                                                                </div>
                                                            </form>
                                                            
                                                        </div>
                                                        <hr/>
                                                        <form onSubmit={handleSubmit}>
                                                            <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
                                                                <Grid item xs={12} sm={6}>
                                                                    <TextField
                                                                        id="learner_upi"
                                                                        label="Learner UPI"
                                                                        value={learner?.upi || ""}
                                                                        InputProps={{
                                                                            readOnly: true,
                                                                        }}
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={12} sm={6}>
                                                                    <TextField
                                                                        id="learner_name"
                                                                        label="Learner Name"
                                                                        value={
                                                                            learner
                                                                                ? `${learner.first_name || ""
                                                                                } ${learner.other_name || ""
                                                                                } ${learner.sur_name || ""}`
                                                                                : ""
                                                                        }
                                                                        InputProps={{
                                                                            readOnly: true,
                                                                        }}
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={12} sm={6}>
                                                                    <TextField
                                                                        id="uic_from"
                                                                        label="Current School UIC"
                                                                        value={learner?.school_uic || ""}
                                                                        onChange={(e) =>
                                                                            setUicFrom(e.target.value)
                                                                        }
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={12} sm={6}>
                                                                    <TextField
                                                                        id="school_name"
                                                                        label="Current School Name"
                                                                        value={learner?.school_name || ""}
                                                                        InputProps={{
                                                                            readOnly: true,
                                                                        }}
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <TextField
                                                                        id="comment_to"
                                                                        label="Comments"
                                                                        multiline
                                                                        rows={3}
                                                                        colSpan={8}
                                                                        value={commentTo}
                                                                        onChange={(e) =>
                                                                            setCommentTo(e.target.value)
                                                                        }
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <Button
                                                                        type="submit"
                                                                        className="btn btn-success"
                                                                        variant="contained"
                                                                        color="success"
                                                                    >
                                                                        Transfer Learner
                                                                    </Button>
                                                                </Grid>
                                                                {savedRecord && (
                                                                    <Grid item xs={12}>
                                                                        <p className="text-green-500">
                                                                            Learner transfer request saved
                                                                            successfully.
                                                                        </p>
                                                                    </Grid>
                                                                )}
                                                            </Grid>
                                                        </form>
                                                    </div>
                                                </div>
                                            )}
                                            {activeButton === 'transfersIn' && (
                                                <div>
                                                    <div className="w-full overflow-x-auto mt-4" style={{ backgroundColor: '#fbf5f58a' }}>
                                                        <h2>Out Going Learners</h2>
                                                        <table className="min-w-full text-xs bg-white border border-gray-300 table table-bordered table stripped p-2 m-2">
                                                            <thead>
                                                                <tr>
                                                                    <th className="py-2 px-4 border" rowSpan={2} style={{ backgroundColor: '#e7bec66b', }}>SNO.</th>
                                                                    <th className="py-2 px-4 border" rowSpan={2} style={{ backgroundColor: '#e7bec66b', }}>UPI</th>
                                                                    <th className="py-2 px-4 border" rowSpan={2} style={{ backgroundColor: '#e7bec66b', }}>Trans ID</th>
                                                                    <th className="py-2 px-4 border" rowSpan={2} style={{ backgroundColor: '#e7bec66b', }}>Name</th>
                                                                    <th className="py-2 px-4 border" colSpan={3} style={{ backgroundColor: '#abccd196', }}>Receiving School School</th>
                                                                    <th className="py-2 px-4 border" rowSpan={2} style={{ backgroundColor: '#e7bec66b', }}>Comment</th>
                                                                    <th className="py-2 px-4 border" rowSpan={2} style={{ backgroundColor: '#e7bec66b', }}>Status</th>
                                                                    <th className="py-2 px-4 border" rowSpan={2} style={{ backgroundColor: '#e7bec66b', }}>Action</th>
                                                                </tr>
                                                                <tr>
                                                                    <th className="py-2 px-4 border" style={{ backgroundColor: '#d6ffe16b', }}>Name</th>
                                                                    <th className="py-2 px-4 border" style={{ backgroundColor: '#d6ffe16b', }}>UIC</th>
                                                                    <th className="py-2 px-4 border" style={{ backgroundColor: '#d6ffe16b', }}>Comment</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {transferList.map((transferListItem, index) => (
                                                                    <tr key={transferListItem.id}>
                                                                        <td className="py-2 px-4 border" style={{ backgroundColor: '#80808014', }}>{index + 1}</td>
                                                                        <td className="py-2 px-4 border">{transferListItem.id}</td>
                                                                        <td className="py-2 px-4 border">{transferListItem.upi}</td>
                                                                        <td className="py-2 px-4 border">{transferListItem ? transferListItem.first_name + ' ' + transferListItem.other_name + ' ' + transferListItem.sur_name : ''}</td>
                                                                        <td className="py-2 px-4 border">{transferListItem.uic_to}</td>
                                                                        <td className="py-2 px-4 border">{transferListItem.uic_to}</td>
                                                                        <td className="py-2 px-4 border">{transferListItem.comment_to}</td>
                                                                        <td className="py-2 px-4 border">{transferListItem.comment_from}</td>
                                                                        <td className="py-2 px-4 border">{transferListItem.is_transfered}</td>
                                                                        <td className="py-2 px-4 border">
                                                                            <button type="submit" className="bg-blue-500 text-white p-2 rounded d-inline btn-xs"
                                                                                onClick={() => handleViewTransferClick(transferListItem.id, transferListItem.upi)}
                                                                            >
                                                                                Action
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                        {expandedTransferId && expandedTransferUpi && (
                                                            <div className="flex fixed top-2 left-0 w-screen h-full overflow-auto ml-5 mr-5" style={{ zIndex: '9999' }}>
                                                                <div className="m-auto px-3 modal-md">
                                                                    <button
                                                                        className="close-button textDanger"
                                                                        onClick={closePopup}
                                                                        style={{
                                                                            color: '#b72323',
                                                                            fontSize: '14px',
                                                                            padding: '4px',
                                                                            borderRadius: '5px',
                                                                            backgroundColor: '#babbb3'
                                                                        }}
                                                                    >
                                                                        <MdClose size={18} /> {/* Close icon */}
                                                                    </button>
                                                                    <div className="bg-white p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#f9f2f2' }}>
                                                                        <form onSubmit={handleSubmitAcknowledgement}>
                                                                            <div className="flex mb-4">
                                                                                <div className="w-1/3 m-2">
                                                                                    <label htmlFor="learnerUPI" className="block mb-2">
                                                                                        Learner UPI
                                                                                    </label>
                                                                                    <input
                                                                                        type="text"
                                                                                        id="transfer_upi"
                                                                                        value={expandedTransferUpi}
                                                                                        onChange={(e) => setTransferUpi(e.target.value)}
                                                                                        className="form-input"
                                                                                    />
                                                                                </div>

                                                                                <div className="w-1/3 m-2">
                                                                                    <label htmlFor="transferId" className="block mb-2">
                                                                                        Transfer ID
                                                                                    </label>
                                                                                    <input
                                                                                        type="text"
                                                                                        id="transfer_id"
                                                                                        value={expandedTransferId}
                                                                                        onChange={(e) => setTransferId(e.target.value)}
                                                                                        className="form-input"
                                                                                    />
                                                                                </div>
                                                                            </div>

                                                                            <div className="mb-4">
                                                                                <label htmlFor="comment" className="block mb-2">
                                                                                    Comment
                                                                                </label>
                                                                                <textarea
                                                                                    rows="4"
                                                                                    placeholder="Enter your comment..."
                                                                                    id="comment_from"
                                                                                    value={commentFrom}
                                                                                    onChange={(e) => setCommentFrom(e.target.value)}
                                                                                    className="form-input"
                                                                                ></textarea>
                                                                            </div>

                                                                            <div className="flex justify-between">
                                                                                <button type="submit" className="btn btn-danger btn-sm" onClick={handleReject}>
                                                                                    Reject
                                                                                </button>
                                                                                <button type="submit" className="btn btn-success btn-sm" onClick={handleAccept}>
                                                                                    Accept
                                                                                </button>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                            {activeButton === 'transfersOut' && (
                                                <div>
                                                    Content for Transfers Out
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LearnerTransfer;