import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import {
    TextField, Grid, Alert, AlertTitle,
} from '@mui/material';

const GrievanceForm = () => {

    const [inputs, setInputs] = useState({});
    const [view, setview] = useState(false);
    const [category, setCategory] = useState([]);
    const [type, setType] = useState([]);
    const [grievancetypeid, setGrievanceTypeId] = useState('');
    const [frequencytypevalue, setFrequencyTypevalue] = useState('0');
    const [description, setDescription] = useState('');
    const [fileuploaded, setFileUploaded] = useState('');
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [othertypedesc, setOtherTypedesc] = useState('');
    const [mobile, setMobile] = useState('');
    const [otherinput, setotherinput] = useState('');
    const [dateofincident, setDateofIncident] = useState('');
    const [frequencytype, setFrequencyType] = useState('');
    const [suggectedsolution, setSuggectedsolution] = useState('');
    const [formoreoccurencenumber, setNoOccurence] = useState(0);
    const [personsaffected, setPersonsAffected] = useState(0);
    const [responseobserved, setResponseObserved] = useState('');
    const [savedrecord, setSavedRecord] = React.useState(false);

    const [scopeid, setScope] = useState('0');
    const [otherscopeinput, setotherscopeinput] = useState('');
    const [level_code, setLevel] = useState('0');
    const [level_name, setLevelName] = useState('');
    const [region_code, setRegion] = useState('0');
    const [region_name, setRegionName] = useState('');
    const [county_code, setCounty] = useState('0');
    const [county_name, setCountyName] = useState('');
    const [sub_county_code, setSubCounty] = useState('0');
    const [sub_county_name, setSubCountyName] = useState('');

    const [areacode, setAreaCode] = useState('0');
    const [uic, setSchool] = useState('0');
    const [institution_name, setSchoolName] = useState('');

    const [scopelist, setScopeList] = useState([]);
    const [regionlist, setRegionlist] = useState([]);
    const [countylist, setCountylist] = useState([]);
    const [scountylist, setScountylist] = useState([]);
    const [levellist, setLevellist] = useState([]);
    const [schoolist, setSchoolist] = useState([]);
    const [myoption, setOption] = useState([]);
    const [Homebaseurl, setNemisURL] = useState('');
    const [locURL, setLocURL] = useState('');

    //const [selectedOption, setSelectedOption] = useState(null);
    //const Homebaseurl = `http://nemis.education.go.ke`;
    //const Homebaseurl = `http://localhost`;
    const crdpassword = "9876$Teta";
    const crdusername = "nemisadmin";
    const credentials = `${crdusername}:${crdpassword}`;
    const base64Credentials = btoa(credentials);
    const headers = {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': 'X-Token',
        'Access-Control-Allow-Credentials': 'true'
    };
    const yourNewRef = useRef();
    const handleSelectChange = (UserGroup, actionMeta) => {
        setInputs((inputs) => ({ ...inputs, [actionMeta.name]: UserGroup.value }));
    };

    const RegionsOptions = [];
    const getNEMISData = async (url) => {
        const baseurl = Homebaseurl + url;
        const myresponse = [];
        // const myresponse = await axios.get(`${baseurl}`, {
        //   headers,
        // });
        axios
            .get(baseurl, { headers })
            .then((response) => {
                myresponse = response.data;
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
        console.log(myresponse.data);
        return myresponse.data;
    }
    const getLevels = () => {
        const url = '/generic2/api/Cascade/Levels';
        const baseurl = Homebaseurl + url;
        axios
            .get(baseurl, { headers })
            .then((response) => {
                setLevellist(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
    const getRegions = () => {
        const url = '/generic2/api/Cascade/Regions';
        const baseurl = Homebaseurl + url;
        axios
            .get(baseurl, { headers })
            .then((response) => {
                setRegionlist(response.data);
                console.log(regionlist);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
    const setSelectedOption = (event, oplist) => {
        const option = oplist
            .find(option => option.value === event.target.value)
        return option;
    }
    const getCounties = () => {
        const url = '/generic2/api/Cascade/Counties';
        const baseurl = Homebaseurl + url;
        axios
            .get(baseurl, { headers })
            .then((response) => {
                setCountylist(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    const getSubCounties = (countycode) => {
        const url = '/generic2/api/Cascade/SubCounties/' + countycode;
        const baseurl = Homebaseurl + url;
        axios
            .get(baseurl, { headers })
            .then((response) => {
                setScountylist(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
    const getSchools = (subcountycode, levelcode) => {
        const url = '/generic2/api/Institution/InstitutionsListPerSubCountyLevel/' + subcountycode + '/' + levelcode;
        const baseurl = Homebaseurl + url;
        axios
            .get(baseurl, { headers })
            .then((response) => {
                setSchoolist(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
    const handleScopeChange = (event) => {
        setScope(event.target.value);
        console.log(event.target.value);
        setLevel('0');
        setLevelName('');
        setRegion('0');
        setRegionName('');
        setCounty('0');
        setCountyName('');
        setSubCounty('0');
        setSubCountyName('');
        setSchool('0');
        setSchoolName('');
        if (event.target.value == "2") {
            getRegions();
        }
        if (event.target.value == "3" || event.target.value == "4" || event.target.value == "5") {
            getCounties();
        }
    };
    const handleChange = (event) => {
        setFrequencyTypevalue(event.target.value)
        if (!(event.target.value === 2)) {
            setNoOccurence(0);
        }
    };

    const handleRegionChange = (selectedOption) => {
        const option = regionlist
            .find(option => option.region_Code === selectedOption.target.value);
        var text = option.region_Name;
        let value = selectedOption.target.value;
        setRegion(value);
        setRegionName(text);
        console.log(text, value);
        if (scopeid == 2) {
            setAreaCode(region_code);
        }
    };
    const handleCountyChange = (e) => {
        setCounty(e.target.value);
        var mcounty = e.target.value;
        const option = countylist
            .find(option => option.county_Code === mcounty);
        var text = option.county_Name;
        setCountyName(text);
        console.log(text, mcounty);

        if (scopeid == 3) {
            setAreaCode(county_code);
        }
        if (scopeid == "4" || scopeid == "5") {
            getSubCounties(mcounty);
        }
    };
    const handleSubCountyChange = (e) => {
        setSubCounty(e.target.value);
        var mscounty = e.target.value;
        const option = scountylist
            .find(option => option.sub_County_Code === mscounty);
        var text = option.sub_County_Name;
        setSubCountyName(text);
        console.log(text, mscounty);
        if (scopeid == 4) {
            setAreaCode(sub_county_code);
        }
        if (scopeid == "5") {
            getLevels();
            getSchools(mscounty, level_code);
        }
    };
    const handleLevelChange = (e) => {
        setLevel(e.target.value);
        var mlevel = e.target.value;
        const option = levellist
            .find(option => option.level_Code === mlevel);
        var text = option.level_Name;
        setLevelName(text);
        console.log(text, mlevel);
        getSchools(sub_county_code, mlevel);
    };

    const handleSchoolChange = (e) => {
        var mskul = e.target.value;
        const option = schoolist
            .find(option => option.institution_Code === mskul);
        var text = option.institution_Name;
        setSchoolName(text);
        console.log(text, mskul);
        setSchool(mskul);
        if (scopeid == 5) {
            setAreaCode(uic);
        }
    };

    const frequencytypeoptions = [
        {
            text: "One time incident",
            value: "1",
        },
        {
            text: "Happened more than once",
            value: "2",
        },
        {
            text: "On-going (currently experiencing problem)",
            value: "3",
        },
    ];

    const onValueChange = (e) => {
        setFrequencyTypevalue(e.value);
    };

    const handleAttachmentsChange = (e) => {
        const files = e.target.files;
        setFileUploaded(files);
    };

    const handleCategoryChange = (e) => {
        getCategoryType(e.target.value);
    };

    const enableOtherInput = (e) => {
        setotherinput(true);
    };

    const DisableOtherInput = (e) => {
        setotherinput(false);
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result;
                //setFormData({ ...formData, image: base64Image });
                setFileUploaded(base64Image);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('category', category);
        formData.append('type', type);
        formData.append('description', description);
        formData.append('fileuploaded', fileuploaded);
        formData.append('email', email);
        formData.append('fullname', fullname);
        formData.append('mobile', mobile);
        formData.append('dateofincident', dateofincident);
        formData.append('frequencytype', frequencytype);
        formData.append('suggectedsolution', suggectedsolution);
        formData.append('personsaffected', personsaffected);
        formData.append('responseobserved', responseobserved);
        formData.append('formoreoccurencenumber', formoreoccurencenumber);
        formData.append('scopeid', scopeid);
        formData.append('areacode', areacode);
        formData.append('uic', uic);
        formData.append('sub_county_code', sub_county_code);
        formData.append('county_code', county_code);
        formData.append('region_code', region_code);
        formData.append('level_code', level_code);
        formData.append('scopeotherdesc', otherscopeinput);
        let urlhom = window.location.origin;
        let url = urlhom + "/grvapi/api/v1/Grievance/addGrievance";
        //console.log("Our Data", data);



        const mydata = {
            grievancetypeid: grievancetypeid,
            description: description,
            fileuploaded: fileuploaded,
            mobile: mobile,
            email: email,
            remainanonymous: false,
            dateofincident: dateofincident,
            frequencytype: frequencytypevalue,
            formoreoccurencenumber: formoreoccurencenumber,
            suggectedsolution: suggectedsolution,
            personsaffected: personsaffected,
            responseobserved: responseobserved,
            othergrievancetypedesc: othertypedesc,
            fullname: fullname,
            scopeid: scopeid,
            areacode: areacode,
            uic: uic,
            institution_name: institution_name,
            sub_county_code: sub_county_code,
            sub_county_name: sub_county_name,
            county_code: county_code,
            county_name: county_name,
            region_code: region_code,
            region_name: region_name,
            level_code: level_code,
            level_name: level_name,
            scopeotherdesc: othertypedesc,
        };
        console.log("Our TransformData", mydata);

        const headers = {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Methods": "GET, POST",
            "Access-Control-Allow-Headers": "X-Token",
            "Access-Control-Allow-Credentials": "true",
        };
        axios
            .post(url, mydata, {
                headers: headers,
            })
            .then((response) => {
                // Clear the form and show successful submittion of grievance
                setSavedRecord(true);
            })
            .catch((error) => {
                console.error("Error saving data:", error);
            });
    };

    useEffect(() => {
        getCategory();
        getScope();
        setLocURL(window.location.origin);
        // console.log(locURL);
        // console.log(locURL.substring(7,18), locURL.substring(7,18) == '10.104.100.');
        // console.log(locURL.substring(7,23), locURL.substring(7,23) == 'education.go.ke');
        // console.log(locURL.substring(7,16), locURL.substring(7,16) == 'localhost');

        if (locURL.substring(7, 23) == "education.go.ke") {
            setNemisURL("http://nemis.education.go.ke");
        }
        if (locURL.substring(7, 18) == "10.104.100.") {
            setNemisURL("http://10.104.100.83");
        }
        if (locURL.substring(7, 16) == "localhost") {
            setNemisURL("http://localhost");
        }
        //console.log(Homebaseurl);
        // getRegions();
        // getCounties();
    }, []);

    const getScope = () => {
        // Make a POST request to save data
        let urlhom = window.location.origin;
        let url = urlhom + "/grvapi/api/v1/Cascade/Scope";
        const headers = {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'X-Token',
            'Access-Control-Allow-Credentials': 'true'
        }
        axios
            .get(url, { headers })
            .then((response) => {
                setScopeList(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    const getCategory = () => {
        // Make a POST request to save data
        let urlhom = window.location.origin;
        let url = urlhom + "/grvapi/api/v1/Cascade/GrievanceCategory";
        const headers = {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'X-Token',
            'Access-Control-Allow-Credentials': 'true'
        }
        axios
            .get(url, { headers })
            .then((response) => {
                setCategory(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
    const getCategoryType = (categoryid) => {
        // Make a POST request to save data
        let urlhom = window.location.origin;
        let url = urlhom + "/grvapi/api/v1/Cascade/GrievanceTypes/" + categoryid;
        const headers = {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'X-Token',
            'Access-Control-Allow-Credentials': 'true'
        }
        axios
            .get(url, { headers })
            .then((response) => {
                setType(response.data);
                console.log(type, response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    return (
        <div className=" w-screen mt-1 p-3">
            <Grid item xs={12} lg={12}>
                <div style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0.375rem' }}>
                    {!savedrecord && (
                        <form onSubmit={handleSubmit} className="bg-gray-300 p-4 rounded-md w-full">
                            <h6 className="font-bold text-lg mb-4">Submit Your Grievances</h6>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="col-span-6">
                                    <div className="w-full">
                                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                            Category
                                        </label>
                                        <select
                                            id="category"
                                            onChange={handleCategoryChange}
                                            required
                                            className="mt-1 p-2 w-1/2 border border-gray-400 rounded-md bg-inherit"
                                        >
                                            <option value="" disabled>
                                                Select a category
                                            </option>
                                            {category.map((option) => (
                                                <option key={option.grievancecategoryid} value={option.grievancecategoryid}>
                                                    {option.grievancecategory}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <div className="w-full">
                                        <label htmlFor="grievancetypeid" className="block text-sm font-medium text-gray-700">
                                            Type
                                        </label>
                                        <select
                                            id="grievancetypeid"
                                            value={grievancetypeid}
                                            onChange={(e) => setGrievanceTypeId(e.target.value)}
                                            required
                                            className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-inherit"
                                        >
                                            <option value="" disabled>
                                                Select a type
                                            </option>
                                            {type?.map((option) => (
                                                <option key={option.grievancetypeid} value={option.grievancetypeid} onClick={DisableOtherInput}>
                                                    {option.grievancetype}
                                                </option>
                                            ))}
                                            <option value="999" onClick={enableOtherInput}>
                                                Other...
                                            </option>
                                        </select>
                                        {otherinput && (
                                            <div className="mt-1">
                                                <label htmlFor="othergrievancetypedesc" className="block text-sm font-medium text-gray-700">
                                                    Specify Type
                                                </label>
                                                <input
                                                    type="text"
                                                    id="othergrievancetypedesc"
                                                    value={othertypedesc}
                                                    onChange={(e) => setOtherTypedesc(e.target.value)}
                                                    className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-inherit"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <div className="w-full">
                                        <label htmlFor="scopeid" className="block text-sm font-medium text-gray-700">
                                            Scope
                                        </label>
                                        <select
                                            id="scopeid"
                                            value={scopeid}
                                            onChange={(e) => handleScopeChange(e)}
                                            required
                                            className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-inherit"
                                        >
                                            <option value="" disabled>
                                                Select Area Incident Occurred
                                            </option>
                                            {scopelist?.map((option) => (
                                                <option key={option.scopedesc} value={option.scopeid}>
                                                    {option.scopedesc}
                                                </option>
                                            ))}
                                        </select>
                                        {scopeid === 9 && (
                                            <div className="mt-1">
                                                <label htmlFor="otherscopeinput" className="block text-sm font-medium text-gray-700">
                                                    Specify Other Area of Incident
                                                </label>
                                                <input
                                                    type="text"
                                                    id="otherscopeinput"
                                                    value={otherscopeinput}
                                                    onChange={(e) => setotherscopeinput(e.target.value)}
                                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-span-12">
                                    <TextField
                                        id="description"
                                        label="Description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                        multiline
                                        rows={4}
                                        fullWidth
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-12">
                                    <input
                                        id="fileuploaded"
                                        type="file"
                                        onChange={handleFileChange}
                                        multiple
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6">
                                    <TextField
                                        id="fullname"
                                        label="Full Name"
                                        value={fullname}
                                        onChange={(e) => setFullname(e.target.value)}
                                        required
                                        fullWidth
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6">
                                    <TextField
                                        id="email"
                                        label="Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        fullWidth
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6">
                                    <TextField
                                        id="mobile"
                                        label="Phone Number"
                                        type="tel"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        required
                                        fullWidth
                                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6">
                                    <TextField
                                        id="dateofIncident"
                                        // label={<span className="text-amber-200 ">Date of Incident</span>}
                                        type="date"
                                        value={dateofincident}
                                        onChange={(e) => setDateofIncident(e.target.value)}
                                        required
                                        fullWidth
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                </div>
                                <div className="col-span-12">
                                    <p>Frequency Type Options</p>
                                    <div className="flex items-center">
                                        <div className="mr-3">
                                            <input
                                                type="radio"
                                                id={frequencytypeoptions[0].value}
                                                name="row-radio-buttons-group"
                                                value={frequencytypeoptions[0].value}
                                                checked={frequencytypevalue === frequencytypeoptions[0].value}
                                                onChange={(e) => handleChange(e)}
                                                className="mr-1"
                                            />
                                            <label htmlFor={frequencytypeoptions[0].value} className="mr-3">
                                                {frequencytypeoptions[0].text}
                                            </label>
                                        </div>

                                        <div className="mr-3">
                                            <input
                                                type="radio"
                                                id={frequencytypeoptions[1].value}
                                                name="row-radio-buttons-group"
                                                value={frequencytypeoptions[1].value}
                                                checked={frequencytypevalue === frequencytypeoptions[1].value}
                                                onChange={(e) => handleChange(e)}
                                                className="mr-1"
                                            />
                                            <label htmlFor={frequencytypeoptions[1].value} className="mr-3">
                                                {frequencytypeoptions[1].text}
                                            </label>
                                        </div>

                                        <div>
                                            <input
                                                type="radio"
                                                id={frequencytypeoptions[2].value}
                                                name="row-radio-buttons-group"
                                                value={frequencytypeoptions[2].value}
                                                checked={frequencytypevalue === frequencytypeoptions[2].value}
                                                onChange={(e) => handleChange(e)}
                                                className="mr-1"
                                            />
                                            <label htmlFor={frequencytypeoptions[2].value}>
                                                {frequencytypeoptions[2].text}
                                            </label>
                                        </div>
                                    </div>

                                    {frequencytypevalue === '2' && (
                                        <input
                                            id="formoreoccurencenumber"
                                            type="number"
                                            min="0"
                                            placeholder="Number of Occurrence"
                                            value={formoreoccurencenumber}
                                            onChange={(e) => setNoOccurence(e.target.value)}
                                            className="mt-1 p-2 w-1/5 border border-gray-300 rounded-md"
                                        />
                                    )}
                                </div>
                                <div className="col-span-12">
                                    <div className="col-span-12 ">
                                        <textarea
                                            id="suggectedsolution"
                                            placeholder="Suggestion on How To Mitigate The Issue"
                                            value={suggectedsolution}
                                            onChange={(e) => setSuggectedsolution(e.target.value)}
                                            required
                                            className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-inherit"                                            rows={4}
                                        />
                                    </div>
                                    <div className="flex">
                                        <div className="w-1/2 pr-2">
                                            <input
                                                id="personsaffected"
                                                type="number"
                                                placeholder="Number of People Affected"
                                                value={personsaffected}
                                                onChange={(e) => setPersonsAffected(e.target.value)}
                                                required
                                                className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-inherit"
                                            />
                                        </div>
                                        <div className="w-1/2 pl-2">
                                            <input
                                                id="responseobserved"
                                                type="text"
                                                placeholder="Response observed"
                                                value={responseobserved}
                                                onChange={(e) => setResponseObserved(e.target.value)}
                                                required
                                                className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-inherit"
                                            />
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div className="col-span-12">
                                <button
                                    type="submit"
                                    className=" text-white p-2 rounded-md mt-4 w-full" style={{ backgroundColor: "#00adee" }}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>

                    )}
                    {savedrecord && (
                        // <Typography variant="h1" gutterBottom style={headerStyles}>
                        // Grievance Management System           
                        //  </Typography>
                        <Alert severity="success">
                            <AlertTitle>Grievance Management System</AlertTitle>
                            Your Grievance or Issue have been Received by the Ministry of Education — <strong>check it out through your e-mail shared or in the Ministry's Website on Grievance Handling Page!</strong>
                        </Alert>
                    )}
                </div>
            </Grid >
        </div >

    );
};

export default GrievanceForm;
