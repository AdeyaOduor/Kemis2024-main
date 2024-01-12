import React, { useState } from "react";
import "../../../../src/Style.css";

const BSApplicationFormtoo = () => {
  const [currentStep, setCurrentStep] = useState("");
  const [hasFather, setHasFather] = useState(false);
  const [hasMother, setHasMother] = useState(false);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [telephoneNo, setTelephoneNo] = useState("");
  const [alternativeMobileNo, setAlternativeMobileNo] = useState("");
  const [physicalAddress, setPhysicalAddress] = useState("");
  const [county, setCounty] = useState("");
  const [subCounty, setSubCounty] = useState("");
  const [ward, setWard] = useState("");
  const [location, setLocation] = useState("");
  const [subLocation, setSubLocation] = useState("");
  const [primarySchool, setPrimarySchool] = useState("");
  const [primarySchoolAddress, setPrimarySchoolAddress] = useState("");
  const [primarySchoolTelephone, setPrimarySchoolTelephone] = useState("");
  const [KCPEIndex, setKCPEIndex] = useState("");
  const [KCPEMarks, setKCPEMarks] = useState("");
  const [KCPEAttempts, setKCPEAttempts] = useState("");
  const [repeatedClasses, setRepeatedClasses] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [page, setPage] = useState(1);

  const [fatherFirstname, setFatherFirstname] = useState("");
  const [fathermiddlename, setFatherMiddleName] = useState("");
  const [fathersurname, setFatherSurname] = useState("");
  const [fatherid, setFatherId] = useState("");
  const [fathermobilenumber, setFatherMobileNumber] = useState("");
  const [fatheralternativeMobileNo, setFatherAlternativeMobileNo] =
    useState("");
  const [fatherphysicalAddress, setFatherPhysicalAddress] = useState("");
  const [fcounty, setFCounty] = useState("");
  const [fsubCounty, setFSubCounty] = useState("");
  const [fward, setFWard] = useState("");
  const [flocation, setFLocation] = useState("");
  const [fsubLocation, setFSubLocation] = useState("");
  const [fatherDeceasedFileAttachment, setFatherDeceasedFileAttachment] =
    useState(null);
  const [isFatherDeceased, setIsFatherDeceased] = useState(false);

  const [motherFirstName, setMotherFirstName] = useState("");
  const [motherMiddleName, setMotherMiddleName] = useState("");
  const [motherSurname, setMotherSurname] = useState("");
  const [mothersIdNumber, setMothersIdNumber] = useState("");
  const [mothersMobileNumber, setMothersMobileNumber] = useState("");
  const [motherCounty, setMotherCounty] = useState("");
  const [motherSubCounty, setMotherSubCounty] = useState("");
  const [motherWard, setMotherWard] = useState("");
  const [motherLocation, setMotherLocation] = useState("");
  const [motherSubLocation, setMotherSubLocation] = useState("");

  // Mother's Deceased Information
  const [isMotherDeceased, setIsMotherDeceased] = useState(false);
  const [motherDeceasedFileAttachment, setMotherDeceasedFileAttachment] =
    useState(null);

  const [guardianFirstName, setGuardianFirstName] = useState("");
  const [guardianMiddleName, setGuardianMiddleName] = useState("");
  const [guardianSurname, setGuardianSurname] = useState("");
  const [guardianIdNumber, setGuardianIdNumber] = useState("");
  const [guardianMobileNumber, setGuardianMobileNumber] = useState("");
  const [guardianCounty, setGuardianCounty] = useState("");
  const [guardianSubCounty, setGuardianSubCounty] = useState("");
  const [guardianWard, setGuardianWard] = useState("");
  const [guardianLocation, setGuardianLocation] = useState("");
  const [guardianSubLocation, setGuardianSubLocation] = useState("");
  const [guardianSourceOfIncome, setGuardianSourceOfIncome] = useState("");
  const [isGuardianDeceased, setIsGuardianDeceased] = useState(false);
  const [guardianDeceasedFileAttachment, setGuardianDeceasedFileAttachment] =
    useState(null);

  // Sibling Information
  const [siblingName, setSiblingName] = useState("");
  const [siblingAge, setSiblingAge] = useState("");
  const [siblingSchoolOrEmployer, setSiblingSchoolOrEmployer] = useState("");
  const [siblingClassOrPosition, setSiblingClassOrPosition] = useState("");

  // Applicant Need Information
  const [whyApplying, setWhyApplying] = useState("");
  const [receivedFinancialSupport, setReceivedFinancialSupport] =
    useState(false);
  const [financialSupportDetails, setFinancialSupportDetails] = useState("");
  const [hasDisability, setHasDisability] = useState(false);
  const [disabilityDescription, setDisabilityDescription] = useState("");
  const [inheritanceDescription, setInheritanceDescription] = useState("");
  const [livingWith, setLivingWith] = useState("");
  const [parentsEmployed, setParentsEmployed] = useState(false);
  const [parentsJobDetails, setParentsJobDetails] = useState("");
  const [parentsOwnBusiness, setParentsOwnBusiness] = useState(false);
  const [businessDetails, setBusinessDetails] = useState("");
  const [parentsOwnLand, setParentsOwnLand] = useState(false);
  const [landDetails, setLandDetails] = useState("");
  const [otherAssetsIncome, setOtherAssetsIncome] = useState(false);
  const [otherAssetsIncomeDetails, setOtherAssetsIncomeDetails] = useState("");
  const [familyAffectedByConflict, setFamilyAffectedByConflict] =
    useState(false);
  const [familyConflictDetails, setFamilyConflictDetails] = useState("");
  const [typeOfHouse, setTypeOfHouse] = useState("");
  const [
    otherDisadvantagesOrVulnerabilities,
    setOtherDisadvantagesOrVulnerabilities,
  ] = useState("");
  const [siblingsInSecondarySchool, setSiblingsInSecondarySchool] =
    useState("");
  const [siblingsInUniversity, setSiblingsInUniversity] = useState("");
  const [otherDisabilityDetails, setOtherDisabilityDetails] = useState("");

  // Declarations Information
  const [applicantDeclaration, setApplicantDeclaration] = useState("");
  const [applicantSignature, setApplicantSignature] = useState("");
  const [declarationDate, setDeclarationDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(2);
  };
  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const handleForm2Submit = (e) => {
    e.preventDefault();
    // Handle form submission for the second page
    // Redirect or perform other actions as needed
  };

  return (
    <>
      <div className="bgPrimary">
        <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bursary Application
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-white">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla.
          </p> */}
        </div>
      </div>
      <div className="flex flex-col-reverse small:hidden">
                {/* Left Sidebar */}
        <div className="w-1/4 sm:w-1/8 bg-gray-200 p-4 mb-4 ">
          <h2 className="text-lg font-semibold mb-4 ">Form Sections</h2>
          <ul>
            <li
              className={`cursor-pointer border-b border-gray-300 mb-8 ${
                currentStep === 1 && "font-bold"
              }sm:text-sm md:text-base lg:text-lg xl:text-xl`}
              onClick={() => setCurrentStep(1)}
            >
              Applicant's Section
            </li>
            <li
              className={`cursor-pointer border-b border-gray-300 mb-8 ${
                currentStep === 2 && "font-bold"
              }`}
              onClick={() => setCurrentStep(2)}
            >
              Father's Information
            </li>
            <li
              className={`cursor-pointer border-b border-gray-300 mb-8 ${
                currentStep === 3 && "font-bold"
              }`}
              onClick={() => setCurrentStep(3)}
            >
              Mother's Information
            </li>
            <li
              className={`cursor-pointer border-b border-gray-300 mb-8 ${
                currentStep === 4 && "font-bold"
              }`}
              onClick={() => setCurrentStep(4)}
            >
              Guardian's Information
            </li>
            <li
              className={`cursor-pointer border-b border-gray-300 mb-8 ${
                currentStep === 5 && "font-bold"
              }`}
              onClick={() => setCurrentStep(5)}
            >
              Sibling's Information
            </li>
            <li
              className={`cursor-pointer border-b border-gray-300 mb-8 ${
                currentStep === 6 && "font-bold"
              }`}
              onClick={() => setCurrentStep(6)}
            >
              Applicant's Needs
            </li>
            <li
              className={`cursor-pointer border-b border-gray-300 mb-8 ${
                currentStep === 7 && "font-bold"
              }`}
              onClick={() => setCurrentStep(7)}
            >
              Declarations
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full sm:w-full p-4">
          {/* Section 1 */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Applicant's Section
              </h2>
              {/* ... Your Section 1 Form Content ... */}
              <form
                onSubmit={handleSubmit}
                className="bg-blue-500 bg-opacity-50 p-8 rounded-md"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="mb-2">
                    <label
                      htmlFor="firstname"
                      className="block text-sm font-medium text-gray-600"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="middlename"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Middle Name
                    </label>
                    <input
                      type="text"
                      id="middlename"
                      value={middlename}
                      onChange={(e) => setMiddlename(e.target.value)}
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="lastname"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="female">Prefer not say</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="dateOfBirth"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="telephoneNo"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Telephone No
                    </label>
                    <input
                      type="tel"
                      id="telephoneNo"
                      value={telephoneNo}
                      onChange={(e) => setTelephoneNo(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="alternativeMobileNo"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Alternative Mobile No
                    </label>
                    <input
                      type="tel"
                      id="alternativeMobileNo"
                      value={alternativeMobileNo}
                      onChange={(e) => setAlternativeMobileNo(e.target.value)}
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="physicalAddress"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Physical Address
                    </label>
                    <input
                      type="text"
                      id="physicalAddress"
                      value={physicalAddress}
                      onChange={(e) => setPhysicalAddress(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="county"
                      className="block text-sm font-medium text-gray-600"
                    >
                      County
                    </label>
                    <input
                      type="text"
                      id="county"
                      value={county}
                      onChange={(e) => setCounty(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="subCounty"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Sub County
                    </label>
                    <input
                      type="text"
                      id="subCounty"
                      value={subCounty}
                      onChange={(e) => setSubCounty(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="ward"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Ward
                    </label>
                    <input
                      type="text"
                      id="ward"
                      value={ward}
                      onChange={(e) => setWard(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="subLocation"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Sub Location
                    </label>
                    <input
                      type="text"
                      id="subLocation"
                      value={subLocation}
                      onChange={(e) => setSubLocation(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="primarySchool"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Primary School
                    </label>
                    <input
                      type="text"
                      id="primarySchool"
                      value={primarySchool}
                      onChange={(e) => setPrimarySchool(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="primarySchoolAddress"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Primary School Address
                    </label>
                    <input
                      type="text"
                      id="primarySchoolAddress"
                      value={primarySchoolAddress}
                      onChange={(e) => setPrimarySchoolAddress(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="primarySchoolTelephone"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Primary School Telephone
                    </label>
                    <input
                      type="number"
                      id="primarySchoolTelephone"
                      value={primarySchoolTelephone}
                      onChange={(e) =>
                        setPrimarySchoolTelephone(e.target.value)
                      }
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="KCPEIndex"
                      className="block text-sm font-medium text-gray-600"
                    >
                      KCPE Index No
                    </label>
                    <input
                      type="number"
                      id="KCPEIndex"
                      value={KCPEIndex}
                      onChange={(e) => setKCPEIndex(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="KCPEMarks"
                      className="block text-sm font-medium text-gray-600"
                    >
                      KCPE Marks
                    </label>
                    <input
                      type="number"
                      id="KCPEMarks"
                      value={KCPEMarks}
                      onChange={(e) => setKCPEMarks(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-0">
                    <label
                      htmlFor="KCPEAttempts"
                      className="block text-sm font-medium text-gray-600"
                    >
                      KCPE Attempts
                    </label>
                    <input
                      type="number"
                      id="KCPEAttempts"
                      value={KCPEAttempts}
                      onChange={(e) => setKCPEAttempts(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="repeatedClasses"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Repeated Classes
                    </label>
                    <input
                      type="number"
                      id="repeatedClasses"
                      value={repeatedClasses}
                      onChange={(e) => setRepeatedClasses(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="schoolName"
                      className="block text-sm font-medium text-gray-600"
                    >
                      School Name
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Next Page
                </button>
              </form>
            </div>
          )}
          {/* Section 2 */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Father's Information
              </h2>
              {/* ... Your Section 2 Form Content ... */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label
                  htmlFor="hasFather"
                  className="block text-sm font-medium text-gray-600"
                >
                  Fill in Father's Details?
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="hasFather"
                    checked={hasFather}
                    onChange={() => setHasFather(!hasFather)}
                    className="mt-0.5 p-0.5"
                  />{" "}
                  Yes
                  <input
                    type="checkbox"
                    id="hasFatherNo"
                    checked={!hasFather}
                    onChange={() => setHasFather(false)}
                    className="mt-0.5 ml-4 p-0.5"
                  />{" "}
                  No
                </div>
              </div>

              {/* Conditionally render the form based on the checkbox */}
              {hasFather && (
                <form
                  onSubmit={handleSubmit}
                  className="bg-blue-500 bg-opacity-50 p-6 rounded-md"
                >
                  <h2>
                    <strong></strong>
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-2">
                      <label
                        htmlFor="firstname"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Father's First Name
                      </label>
                      <input
                        type="text"
                        id="FatherFirstname"
                        value={fatherFirstname}
                        onChange={(e) => setFatherFirstname(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="middlename"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Father's Middle Name
                      </label>
                      <input
                        type="text"
                        id="fathermiddlename"
                        value={fathermiddlename}
                        onChange={(e) => setFatherMiddleName(e.target.value)}
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="surname"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Father's Surname
                      </label>
                      <input
                        type="text"
                        id="fathersurname"
                        value={fathersurname}
                        onChange={(e) => setFatherSurname(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="fatherid"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Father's ID Number
                      </label>
                      <input
                        type="number"
                        id="fatherid"
                        value={fatherid}
                        onChange={(e) => setFatherId(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="fathermobilenumber "
                        className="block text-sm font-medium text-gray-600"
                      >
                        Father's Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="fathermobilenumber"
                        value={fathermobilenumber}
                        onChange={(e) => setFatherMobileNumber(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="fatheralternativeMobileNo"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Alternative Mobile No
                      </label>
                      <input
                        type="tel"
                        id="fatheralternativeMobileNo"
                        value={fatheralternativeMobileNo}
                        onChange={(e) =>
                          setFatherAlternativeMobileNo(e.target.value)
                        }
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="fatherphysicalAddress"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Father's Physical Address
                      </label>
                      <input
                        type="text"
                        id="fatherphysicalAddress"
                        value={fatherphysicalAddress}
                        onChange={(e) =>
                          setFatherPhysicalAddress(e.target.value)
                        }
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="fcounty"
                        className="block text-sm font-medium text-gray-600"
                      >
                        County
                      </label>
                      <input
                        type="text"
                        id="fcounty"
                        value={fcounty}
                        onChange={(e) => setFCounty(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="fsubCounty"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Sub County
                      </label>
                      <input
                        type="text"
                        id="fsubCounty"
                        value={fsubCounty}
                        onChange={(e) => setFSubCounty(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="fward"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Ward
                      </label>
                      <input
                        type="text"
                        id="fward"
                        value={fward}
                        onChange={(e) => setFWard(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="flocation"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        id="flocation"
                        value={flocation}
                        onChange={(e) => setFLocation(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="fsubLocation"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Sub Location
                      </label>
                      <input
                        type="text"
                        id="fsubLocation"
                        value={fsubLocation}
                        onChange={(e) => setFSubLocation(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="mb-2">
                      <label
                        htmlFor="isFatherDeceased"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Is Father Deceased?
                      </label>
                      <input
                        type="checkbox"
                        id="isFatherDeceased"
                        checked={isFatherDeceased}
                        onChange={() => setIsFatherDeceased(!isFatherDeceased)}
                        className="mt-0.5 p-0.5"
                      />
                    </div>

                    {isFatherDeceased && (
                      <div className="mb-2">
                        <label
                          htmlFor="fatherDeceasedFileAttachment"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Father's Deceased File Attachment
                        </label>
                        <input
                          type="file"
                          id="fatherDeceasedFileAttachment"
                          onChange={(e) =>
                            setFatherDeceasedFileAttachment(e.target.files[0])
                          }
                          className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                        />
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handlePreviousPage}
                    className="mt-4 mr-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Previous Page
                  </button>
                  <button
                    type="submit"
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Next Page
                  </button>
                </form>
              )}
            </div>
          )}
          {/* Section 3 */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Section 3</h2>
              {/* ... Your Section 3 Form Content ... */}
              <h2>
                <strong>Mother's Information</strong>
              </h2>
              <div className="mb-2">
                <label
                  htmlFor="hasFather"
                  className="block text-sm font-medium text-gray-600"
                >
                  Fill in Mother's Details?
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="hasMother"
                    checked={hasMother}
                    onChange={() => setHasMother(!hasMother)}
                    className="mt-0.5 p-0.5"
                  />{" "}
                  Yes
                  <input
                    type="checkbox"
                    id="hasMotherNo"
                    checked={!hasMother}
                    onChange={() => setHasMother(false)}
                    className="mt-0.5 ml-4 p-0.5"
                  />{" "}
                  No
                </div>
              </div>

              {/* Conditionally render the form based on the checkbox */}
              {hasMother && (
                <form
                  onSubmit={handleNext}
                  className="bg-blue-500 bg-opacity-50 p-6 rounded-md"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-2">
                      <label
                        htmlFor="MotherFirstName"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Mother's First Name
                      </label>
                      <input
                        type="text"
                        id="MotherFirstName"
                        value={motherFirstName}
                        onChange={(e) => setMotherFirstName(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="MotherMiddleName"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Mother's Middle Name
                      </label>
                      <input
                        type="text"
                        id="MotherMiddleName"
                        value={motherMiddleName}
                        onChange={(e) => setMotherMiddleName(e.target.value)}
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="MotherSurname"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Mother's Surname
                      </label>
                      <input
                        type="text"
                        id="MotherSurname"
                        value={motherSurname}
                        onChange={(e) => setMotherSurname(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="MothersIdNumber"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Mother's ID Number
                      </label>
                      <input
                        type="number"
                        id="MothersIdNumber"
                        value={mothersIdNumber}
                        onChange={(e) => setMothersIdNumber(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="MothersMobileNumber"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Mother's Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="MothersMobileNumber"
                        value={mothersMobileNumber}
                        onChange={(e) => setMothersMobileNumber(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="MotherCounty"
                        className="block text-sm font-medium text-gray-600"
                      >
                        County
                      </label>
                      <input
                        type="text"
                        id="MotherCounty"
                        value={motherCounty}
                        onChange={(e) => setMotherCounty(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="MotherSubCounty"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Sub County
                      </label>
                      <input
                        type="text"
                        id="MotherSubCounty"
                        value={motherSubCounty}
                        onChange={(e) => setMotherSubCounty(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="MotherWard"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Ward
                      </label>
                      <input
                        type="text"
                        id="MotherWard"
                        value={motherWard}
                        onChange={(e) => setMotherWard(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="MotherLocation"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        id="MotherLocation"
                        value={motherLocation}
                        onChange={(e) => setMotherLocation(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="MotherSubLocation"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Sub Location
                      </label>
                      <input
                        type="text"
                        id="MotherSubLocation"
                        value={motherSubLocation}
                        onChange={(e) => setMotherSubLocation(e.target.value)}
                        required
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      />
                    </div>

                    {/* Is Mother Deceased */}
                    <div className="mb-2">
                      <label
                        htmlFor="isMotherDeceased"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Is Mother Deceased?
                      </label>
                      <input
                        type="checkbox"
                        id="isMotherDeceased"
                        checked={isMotherDeceased}
                        onChange={() => setIsMotherDeceased(!isMotherDeceased)}
                        className="mt-0.5 p-0.5"
                      />
                    </div>

                    {isMotherDeceased && (
                      <div className="mb-2">
                        <label
                          htmlFor="motherDeceasedFileAttachment"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Mother's Deceased File Attachment
                        </label>
                        <input
                          type="file"
                          id="motherDeceasedFileAttachment"
                          onChange={(e) =>
                            setMotherDeceasedFileAttachment(e.target.files[0])
                          }
                          className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                        />
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handlePreviousPage}
                    className="mt-4 mr-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Previous Page
                  </button>
                  <button
                    type="submit"
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Next Page
                  </button>
                </form>
              )}
            </div>
          )}
          {/* Section 4 */}
         { currentStep === 4 && (
          <div>
           
            <h2>
              <strong>Guardian's Information</strong>
            </h2>
            <form
              onSubmit={handleNext}
              className="bg-blue-500 bg-opacity-50 p-6 rounded-md"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-2">
                  <label
                    htmlFor="GuardianFirstName"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Guardian's First Name
                  </label>
                  <input
                    type="text"
                    id="GuardianFirstName"
                    value={guardianFirstName}
                    onChange={(e) => setGuardianFirstName(e.target.value)}
                    required
                    className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="GuardianMiddleName"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Guardian's Middle Name
                  </label>
                  <input
                    type="text"
                    id="GuardianMiddleName"
                    value={guardianMiddleName}
                    onChange={(e) => setGuardianMiddleName(e.target.value)}
                    className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="GuardianSurname"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Guardian's Surname
                  </label>
                  <input
                    type="text"
                    id="GuardianSurname"
                    value={guardianSurname}
                    onChange={(e) => setGuardianSurname(e.target.value)}
                    required
                    className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="GuardianIdNumber"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Guardian's ID Number
                  </label>
                  <input
                    type="number"
                    id="GuardianIdNumber"
                    value={guardianIdNumber}
                    onChange={(e) => setGuardianIdNumber(e.target.value)}
                    required
                    className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="GuardianMobileNumber"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Guardian's Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="GuardianMobileNumber"
                    value={guardianMobileNumber}
                    onChange={(e) => setGuardianMobileNumber(e.target.value)}
                    required
                    className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="GuardianCounty"
                    className="block text-sm font-medium text-gray-600"
                  >
                    County
                  </label>
                  <input
                    type="text"
                    id="GuardianCounty"
                    value={guardianCounty}
                    onChange={(e) => setGuardianCounty(e.target.value)}
                    required
                    className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="GuardianSubCounty"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Sub County
                  </label>
                  <input
                    type="text"
                    id="GuardianSubCounty"
                    value={guardianSubCounty}
                    onChange={(e) => setGuardianSubCounty(e.target.value)}
                    required
                    className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="GuardianWard"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Ward
                  </label>
                  <input
                    type="text"
                    id="GuardianWard"
                    value={guardianWard}
                    onChange={(e) => setGuardianWard(e.target.value)}
                    required
                    className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="GuardianLocation"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="GuardianLocation"
                    value={guardianLocation}
                    onChange={(e) => setGuardianLocation(e.target.value)}
                    required
                    className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="GuardianSubLocation"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Sub Location
                  </label>
                  <input
                    type="text"
                    id="GuardianSubLocation"
                    value={guardianSubLocation}
                    onChange={(e) => setGuardianSubLocation(e.target.value)}
                    required
                    className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                  />
                </div>

                {/* Guardian's Source of Income */}
                <div className="mb-2">
                  <label
                    htmlFor="GuardianSourceOfIncome"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Guardian's Source of Income
                  </label>
                  <input
                    type="text"
                    id="GuardianSourceOfIncome"
                    value={guardianSourceOfIncome}
                    onChange={(e) => setGuardianSourceOfIncome(e.target.value)}
                    required
                    className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                  />
                </div>

                {/* Is Guardian Deceased */}
                <div className="mb-2">
                  <label
                    htmlFor="isGuardianDeceased"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Is Guardian Deceased?
                  </label>
                  <input
                    type="checkbox"
                    id="isGuardianDeceased"
                    checked={isGuardianDeceased}
                    onChange={() => setIsGuardianDeceased(!isGuardianDeceased)}
                    className="mt-0.5 p-0.5"
                  />
                </div>

                {/* Guardian's Deceased File Attachment */}
                {isGuardianDeceased && (
                  <div className="mb-2">
                    <label
                      htmlFor="guardianDeceasedFileAttachment"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Guardian's Deceased File Attachment
                    </label>
                    <input
                      type="file"
                      id="guardianDeceasedFileAttachment"
                      onChange={(e) =>
                        setGuardianDeceasedFileAttachment(e.target.files[0])
                      }
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                )}
              </div>

              {/* <button
                  type="button"
                  onClick={handlePreviousPage}
                  className="mt-4 mr-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Previous Page
                </button>
                <button
                  type="submit"
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Next Page
                </button> */}
            </form>
           
          </div>
          )}
          {currentStep === 5 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Sibling's Information
              </h2>
              <form
                onSubmit={handleNext}
                className="bg-blue-500 bg-opacity-50 p-6 rounded-md"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-2">
                    <label
                      htmlFor="siblingName"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Sibling's Name
                    </label>
                    <input
                      type="text"
                      id="siblingName"
                      value={siblingName}
                      onChange={(e) => setSiblingName(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="siblingAge"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Sibling's Age
                    </label>
                    <input
                      type="number"
                      id="siblingAge"
                      value={siblingAge}
                      onChange={(e) => setSiblingAge(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="siblingSchoolOrEmployer"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Sibling's School or Employer
                    </label>
                    <input
                      type="text"
                      id="siblingSchoolOrEmployer"
                      value={siblingSchoolOrEmployer}
                      onChange={(e) =>
                        setSiblingSchoolOrEmployer(e.target.value)
                      }
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="siblingClassOrPosition"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Sibling's Class or Position
                    </label>
                    <input
                      type="text"
                      id="siblingClassOrPosition"
                      value={siblingClassOrPosition}
                      onChange={(e) =>
                        setSiblingClassOrPosition(e.target.value)
                      }
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handlePreviousPage}
                  className="mt-4 mr-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Previous Page
                </button>
                <button
                  type="submit"
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Next Page
                </button>
              </form>
            </div>
          )}
          {currentStep === 6 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Section 6</h2>

              <h2 className="text-xl font-semibold mb-4">
                Additional Information
              </h2>
              <form
                onSubmit={handleNext}
                className="bg-blue-500 bg-opacity-50 p-6 rounded-md"
              >
                {/* Part 2 - Additional Information Form */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-2">
                    <label
                      htmlFor="whyApplying"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Why are you applying for support?
                    </label>
                    <textarea
                      id="whyApplying"
                      value={whyApplying}
                      onChange={(e) => setWhyApplying(e.target.value)}
                      required
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="receivedFinancialSupportYes"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Have you received financial support before? (Yes)
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        id="receivedFinancialSupportYes"
                        checked={receivedFinancialSupport === "Yes"}
                        onChange={() => setReceivedFinancialSupport("Yes")}
                        className="mt-0.5 p-0.5"
                      />
                      Yes
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        id="receivedFinancialSupportNo"
                        checked={receivedFinancialSupport === "No"}
                        onChange={() => setReceivedFinancialSupport("No")}
                        className="mt-0.5 ml-4 p-0.5"
                      />
                      No
                    </label>
                  </div>

                  {receivedFinancialSupport === "Yes" && (
                    <div className="mb-2">
                      <label
                        htmlFor="financialSupportDetails"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Financial Support Details
                      </label>
                      <textarea
                        id="financialSupportDetails"
                        value={financialSupportDetails}
                        onChange={(e) =>
                          setFinancialSupportDetails(e.target.value)
                        }
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                  )}

                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-600">
                      Do you have a disability?
                    </label>
                    <div className="flex items-center mt-0.5">
                      <label>
                        <input
                          type="checkbox"
                          id="hasDisabilityYes"
                          checked={hasDisability === "Yes"}
                          onChange={() => setHasDisability("Yes")}
                          className="mt-0.5 ml-1 p-0.5"
                        />{" "}
                        Yes
                      </label>
                      <label className="flex items-center mt-0.5">
                        <input
                          type="checkbox"
                          id="hasDisabilityNo"
                          checked={hasDisability === "No"}
                          onChange={() => setHasDisability("No")}
                          className="mt-0.5 ml-1 p-0.5"
                        />
                        No
                      </label>
                    </div>
                  </div>
                  {/*if "Yes" is selected */}
                  {hasDisability === "Yes" && (
                    <div className="mb-2">
                      <label
                        htmlFor="disabilityDescription"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Disability Description
                      </label>
                      <textarea
                        id="disabilityDescription"
                        value={disabilityDescription}
                        onChange={(e) =>
                          setDisabilityDescription(e.target.value)
                        }
                        className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                  )}

                  <div className="mb-2">
                    <label
                      htmlFor="inheritanceDescription"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Inheritance Description
                    </label>
                    <textarea
                      id="inheritanceDescription"
                      value={inheritanceDescription}
                      onChange={(e) =>
                        setInheritanceDescription(e.target.value)
                      }
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="livingWith"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Who Do you Live With?
                    </label>
                    <input
                      type="text"
                      id="livingWith"
                      value={livingWith}
                      onChange={(e) => setLivingWith(e.target.value)}
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="parentsEmployed"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Are your parents employed?
                    </label>
                    <input
                      type="textbox"
                      id="parentsEmployed"
                      checked={parentsEmployed}
                      onChange={() => setParentsEmployed(!parentsEmployed)}
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="parentsJobDetails"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Parents Job Details
                    </label>
                    <textarea
                      id="parentsJobDetails"
                      value={parentsJobDetails}
                      onChange={(e) => setParentsJobDetails(e.target.value)}
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="parentsOwnBusiness"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Do your parents own a business?
                    </label>
                    <input
                      type="text"
                      id="parentsOwnBusiness"
                      checked={parentsOwnBusiness}
                      onChange={() =>
                        setParentsOwnBusiness(!parentsOwnBusiness)
                      }
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="businessDetails"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Business Details
                    </label>
                    <textarea
                      id="businessDetails"
                      value={businessDetails}
                      onChange={(e) => setBusinessDetails(e.target.value)}
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="parentsOwnLand"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Do your parents own land?
                    </label>
                    <input
                      type="text"
                      id="parentsOwnLand"
                      checked={parentsOwnLand}
                      onChange={() => setParentsOwnLand(!parentsOwnLand)}
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="landDetails"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Land Details
                    </label>
                    <textarea
                      id="landDetails"
                      value={landDetails}
                      onChange={(e) => setLandDetails(e.target.value)}
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="otherAssetsIncome"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Other Assets or Income
                    </label>
                    <input
                      type="text"
                      id="otherAssetsIncome"
                      checked={otherAssetsIncome}
                      onChange={() => setOtherAssetsIncome(!otherAssetsIncome)}
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="otherAssetsIncomeDetails"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Other Assets or Income Details
                    </label>
                    <textarea
                      id="otherAssetsIncomeDetails"
                      value={otherAssetsIncomeDetails}
                      onChange={(e) =>
                        setOtherAssetsIncomeDetails(e.target.value)
                      }
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="familyAffectedByConflict"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Is your family affected by conflict?
                    </label>
                    <input
                      type="text"
                      id="familyAffectedByConflict"
                      checked={familyAffectedByConflict}
                      onChange={() =>
                        setFamilyAffectedByConflict(!familyAffectedByConflict)
                      }
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="familyConflictDetails"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Family Conflict Details
                    </label>
                    <textarea
                      id="familyConflictDetails"
                      value={familyConflictDetails}
                      onChange={(e) => setFamilyConflictDetails(e.target.value)}
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="typeOfHouse"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Type of House
                    </label>
                    <input
                      type="text"
                      id="typeOfHouse"
                      value={typeOfHouse}
                      onChange={(e) => setTypeOfHouse(e.target.value)}
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="otherDisadvantagesOrVulnerabilities"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Other Disadvantages or Vulnerabilities
                    </label>
                    <textarea
                      id="otherDisadvantagesOrVulnerabilities"
                      value={otherDisadvantagesOrVulnerabilities}
                      onChange={(e) =>
                        setOtherDisadvantagesOrVulnerabilities(e.target.value)
                      }
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="siblingsInSecondarySchool"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Number of Siblings in Secondary School
                    </label>
                    <input
                      type="number"
                      id="siblingsInSecondarySchool"
                      value={siblingsInSecondarySchool}
                      onChange={(e) =>
                        setSiblingsInSecondarySchool(e.target.value)
                      }
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="siblingsInUniversity"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Number of Siblings in University
                    </label>
                    <input
                      type="number"
                      id="siblingsInUniversity"
                      value={siblingsInUniversity}
                      onChange={(e) => setSiblingsInUniversity(e.target.value)}
                      className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                {/* Your Next and Previous Buttons */}
              </form>
            </div>
          )}
          {currentStep === 7 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Section 7</h2>

              <h2 className="text-xl font-semibold mb-4">Declaration</h2>
              <form
                onSubmit={handleNext}
                className="bg-blue-500 bg-opacity-50 p-6 rounded-md"
              >
                <div className="mb-2">
                  <label
                    htmlFor="applicantDeclaration"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Applicant's Declaration
                  </label>
                  <textarea
                    id="applicantDeclaration"
                    value={applicantDeclaration}
                    onChange={(e) => setApplicantDeclaration(e.target.value)}
                    required
                    className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="applicantSignature"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Applicant's Signature
                  </label>
                  <input
                    type="text"
                    id="applicantSignature"
                    value={applicantSignature}
                    onChange={(e) => setApplicantSignature(e.target.value)}
                    required
                    className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="declarationDate"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Declaration Date
                  </label>
                  <input
                    type="date"
                    id="declarationDate"
                    value={declarationDate}
                    onChange={(e) => setDeclarationDate(e.target.value)}
                    required
                    className="mt-0.5 p-0.5 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <button
                  type="button"
                  onClick={handlePreviousPage}
                  className="mt-4 mr-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Previous Page
                </button>
                <button
                  type="submit"
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Next Page
                </button>
              </form>
            </div>
          )}
          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={handlePrev}
              className={`px-4 py-2 ${currentStep === 1 && "hidden"}`}
            >
              Previous
            </button>
            <button onClick={handleNext} className="px-4 py-2">
              {currentStep === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BSApplicationFormtoo;
