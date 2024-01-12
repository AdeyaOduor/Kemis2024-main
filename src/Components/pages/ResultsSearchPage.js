import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uploadimg from '../Assets/uploading.gif'
import { InputLabel, } from "@material-ui/core";
const ResultsSearchPage = () => {
  const [mIndex, setmIndex] = useState('');
  const [mName, setmName] = useState('');
  const [searchResult, setSearchResult] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [Homebaseurl, setNemisURL] = useState('');
  const [locURL, setLocURL] = useState('');
  const crdpassword = "9876$Teta";
  const crdusername = "nemisadmin";
  const credentials = `${crdusername}:${crdpassword}`;
  const base64Credentials = btoa(credentials);
  const headers = {
    'Authorization': `Basic ${base64Credentials}`,
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Headers': 'X-Token',
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Credentials': true
  };
  // const headers = {
  //   'Content-Type': 'application/json; charset=utf-8',
  //   'Access-Control-Allow-Methods': 'GET, POST',
  //   'Access-Control-Allow-Headers': 'X-Token',
  //   'Access-Control-Allow-Credentials': 'true'
  // };

  useEffect(() => {
    setLocURL(window.location.origin);
    console.log(locURL);
    console.log(locURL.substring(13, 28));
    setNemisURL("http://nemis.education.go.ke");
    // if(locURL.substring(13,28) == "education.go.ke")
    // {
    // }
    // console.log(locURL.substring(7,18));
    // if(locURL.substring(7,18) == "10.104.100.")
    // {
    //   setNemisURL("http://10.104.100.83");
    // }
    // console.log(locURL.substring(7,16));
    // if(locURL.substring(7,16) == "localhost")
    // {
    //   setNemisURL("http://localhost");
    // }
    console.log(Homebaseurl);
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    if (mName.length > 0) {

    } else {
      setmName("No Name Given");
    }
    const baseurl = Homebaseurl + `/generic2/api/Public/NewAdmission/${mIndex}/${mName}`;
    //console.log(baseurl)
    try {
      const response = await axios.get(baseurl, {
        headers
      });
      setSearchResult(response.data);
      //console.log(response)
      setError(null);
      setLoading(false);
    } catch (error) {
      //console.error('Error fetching data:', error);
      setSearchResult(null);
      setLoading(false);
      setError('Error. Please check the entered Index Number.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Search Student Placement Results</h2>
      <div className="flex flex-col sm:flex-row items-center">
        <div className="my-2 flex flex-col sm:flex-row sm:mx-2 sm:col-span-1 items-end">
          <div className='mx-2 items-center'>
            <InputLabel id="index-label">Index</InputLabel>
            <input
              labelId="index-label"
              type="text"
              placeholder="Enter Index Number"
              value={mIndex}
              onChange={(e) => setmIndex(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded w-full sm:w-auto"
            />
          </div>
          <div className='mx-2 items-center relative flex-grow'>
            <InputLabel id="name-label" className="text-sm sm:text-base lg:text-lg">
              Name (i.e. John Sue - enter John or Sue)
            </InputLabel>
            <input
              labelId="name-label"
              type="text"
              placeholder="Enter Name"
              value={mName}
              onChange={(e) => setmName(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded w-full mb-2 sm:mb-0 sm:mr-2"
            />
          </div>
          <div className="mx-2 flex flex-col sm:flex-row items-center">
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-blue-500 transition duration-300 ease-in-out w-full sm:w-auto"
            >
              Search
            </button>
          </div>
        </div>

      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <p className="font-bold text-lg">{error.toUpperCase()}</p>
        </div>
      )}
      {loading && (
        <div className="bg-blue-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <img
            src={uploadimg}
            alt="Loading"
            style={{ width: "50px" }}
          />
        </div>
      )}
      {searchResult && (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="result-card">
            <p className="text-lg mb-2"><span className="font-semibold">Student IndexNo:</span> {searchResult.indeX_NO}</p>
            <p className="text-lg mb-2"><span className="font-semibold">Student Name:</span> {searchResult.name}</p>
            <p className="text-lg mb-2"><span className="font-semibold">Gender:</span> {searchResult.ge}</p>
            <p className="text-lg mb-2"><span className="font-semibold">Primary School:</span> {searchResult.school_Name}</p>
            <p className="text-lg mb-2"><span className="font-semibold">KCPE MARKS:</span> {searchResult.tot}</p>
            <p className="text-lg mb-2"><span className="font-semibold">Original School Selection:</span> {searchResult.schoolAdmittedOrig}</p>
            <p className="text-lg mb-2"><span className="font-semibold">Current School Selection:</span> {searchResult.schoolAdmitted}</p>
            <p className="text-lg mb-2"><span className="font-semibold">School Category:</span> {searchResult.category2}</p>
          </div>
          <div className="result-card"><br />
            {searchResult.selectionType === "1" && searchResult.category2 === "National" && (
              <p className="text-lg mb-2"><span className="font-semibold"><a className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" href="https://script.google.com/macros/s/AKfycbyuxSNgUwD80c9czTz2GUgFdIm6Y6XUWuUuTvyc2pcPEZlm5mzS/exec">Access Calling Letter Here!!</a></span></p>
            )}
            {searchResult.selectionType === "1" && searchResult.category2 === "SNE" && (
              <p className="text-lg mb-2"><span className="font-semibold"><a className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" href="https://script.google.com/macros/s/AKfycbyuxSNgUwD80c9czTz2GUgFdIm6Y6XUWuUuTvyc2pcPEZlm5mzS/exec">Access Calling Letter Here!!</a></span></p>
            )}

            {searchResult.selectionType === "1" && searchResult.category2 === "Extra County" && (
              <p className="text-lg mb-2"><span className="font-semibold"><a className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" href="https://script.google.com/macros/s/AKfycbxH8e80wiJbb-vi2Fef7Y086mrmJjwMEE05GDnfieQwF6GTi1wJ/exec">Access Calling Letter Here!!</a></span></p>
            )}


            {searchResult.selectionType === "1" && searchResult.category2 === "County" && (
              <p className="text-lg mb-2"><span className="font-semibold"><a className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" href="https://script.google.com/macros/s/AKfycby2Ls3Qa8Xb-Xw4Ik6WAsKr3zX9nP7dIxoYxOuYPsuxu7C4soM/exec">Access Calling Letter Here!!</a></span></p>
            )}


            {searchResult.selectionType === "1" && searchResult.category2 === "Sub County" && (
              <p className="text-lg mb-2"><span className="font-semibold"><a className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" href="https://script.google.com/macros/s/AKfycbzQGcNgmJODV0POKuBFt23WMJaeTkQ4vc8Kg6Yw8JazQqSqaG4/exec">Access Calling Letter Here!!</a></span></p>
            )}

            {searchResult.selectionType === "2" && (
              <p className="text-lg mb-2"><span className="font-semibold"><a className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" href="https://script.google.com/macros/s/AKfycbzqjnUipYVcEHLEt0kMqkeoIwg9bl0THmdQPsvKVlD53L8YhMgy/exec">Access Calling Letter Here!!</a></span></p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsSearchPage;