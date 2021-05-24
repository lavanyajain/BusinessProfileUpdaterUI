import React from "react";
import classes from "./ValidationForm.module.css";
import { useState } from "react";
import InputElement from "../UI/InputElement";

const ValidatorForm = (props) => {
  const formElementsConfig = [
    { name: "companyName", label: "Company Name", type: "text" },
    { name: "legalName", label: "Legal Name", type: "text" },
    {
      name: "businessAddress",
      label: "Business Address",
      type: "object",
      fields: [
        { name: "line1", label: "Line1", type: "text" },
        { name: "line2", label: "Line2", type: "text" },
        { name: "city", label: "City", type: "text" },
        { name: "state", label: "State", type: "text" },
        { name: "country", label: "Country", type: "text" },
      ],
    },
    {
      name: "legalAddress",
      label: "Legal Address",
      type: "object",
      fields: [
        { name: "line1", label: "Line1", type: "text" },
        { name: "line2", label: "Line2", type: "text" },
        { name: "city", label: "City", type: "text" },
        { name: "state", label: "State", type: "text" },
        { name: "country", label: "Country", type: "text" },
      ],
    },
    { name: "taxID", label: "EIN/PAN Number", type: "text" },
    { name: "email", label: "E-mail", type: "text" },
    { name: "website", label: "Website", type: "text" },
  ];

  const [isFormValid, setIsFormValid] = useState(false);
  const [products, setProducts] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [legalName, setLegalName] = useState("");
  const [taxId, setTaxId] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [businessAddress, setBusinessAddress] = useState({
    line1: "",
    line2: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });
  const [legalAddress, setLegalAddress] = useState({
    line1: "",
    line2: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });
  const [accounts, setAccounts] = useState(false);
  const [payments, setPayments] = useState(false);
  const [timesheet, setTimeSheet] = useState(false);
  const [payroll, setPayroll] = useState(false);
  const[subscriptionResponse, setSubscriptionResponse] = useState({});
  const[isLoading, setIsLoading] = useState(false);
  const[isError, setIsError] = useState(false);
  const[errorMessage, setErrorMessage] = useState("");

  const handleCompanyChange = (event) => {
    setCompanyName(event.target.value);
    console.log(event.target.value);
  };

  const handleLegalNameChange = (event) => {
    setLegalName(event.target.value);
    console.log(event.target.value);
  };

  const handleTaxIdChange = (event) => {
    setTaxId(event.target.value);
    console.log(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
    console.log(event.target.value);
  };

  const handleLegalAddressChange = (event) => {
    let key = event.target.name;
    if (event.target.name === "line1") key = event.target.name;
    else if (event.target.name === "lin2") key = event.target.name;
    else if (event.target.name === "state") key = event.target.name;
    else if (event.target.name === "country") key = event.target.name;
    else if (event.target.name === "zip") key = event.target.name;
    setLegalAddress({
      ...legalAddress,
      [key]: event.target.value,
    });
    console.log(event.target.value);
  };

  const handleBusinessAddressChange = (event) => {
    let key = event.target.name;
    if (event.target.name === "line1") key = event.target.name;
    else if (event.target.name === "lin2") key = event.target.name;
    else if (event.target.name === "state") key = event.target.name;
    else if (event.target.name === "country") key = event.target.name;
    else if (event.target.name === "zip") key = event.target.name;
    setBusinessAddress({
      ...businessAddress,
      [key]: event.target.value,
    });
    console.log(event.target.value);
  };

  const renderInputElements = () => {
    const formElements = [];
    formElementsConfig.map((formElement) => {
      switch (formElement.name) {
        case "companyName":
          formElements.push(
            <InputElement
              name="companyName"
              label="Company Name"
              handleInputChange={handleCompanyChange}
              value={companyName}
            />
          );
          break;
        case "legalName":
          formElements.push(
            <InputElement
              name="legalName"
              label="Legal Name"
              handleInputChange={handleLegalNameChange}
              value={legalName}
            />
          );
          break;
        case "taxID":
          formElements.push(
            <InputElement
              name="taxID"
              label="PAN/EAN"
              handleInputChange={handleTaxIdChange}
              value={taxId}
            />
          );
          break;
        case "email":
          formElements.push(
            <InputElement
              name="email"
              label="Email"
              handleInputChange={handleEmailChange}
              value={email}
            />
          );
          break;
        case "website":
          formElements.push(
            <InputElement
              name="website"
              label="Website"
              handleInputChange={handleWebsiteChange}
              value={website}
            />
          );
          break;
        case "legalAddress":
          formElements.push(
            <div className={classes.address}>
              <label>Legal Address</label>
              <InputElement
                name="line1"
                label="Line1"
                handleInputChange={handleLegalAddressChange}
                value={legalAddress.line1}
              />
              <InputElement
                name="line2"
                label="Line2"
                handleInputChange={handleLegalAddressChange}
                value={legalAddress.line2}
              />
              <InputElement
                name="city"
                label="City"
                handleInputChange={handleLegalAddressChange}
                value={legalAddress.city}
              />
              <InputElement
                name="state"
                label="State"
                handleInputChange={handleLegalAddressChange}
                value={legalAddress.state}
              />
              <InputElement
                name="zip"
                label="zip"
                handleInputChange={handleLegalAddressChange}
                value={legalAddress.zip}
              />
              <InputElement
                name="country"
                label="Country"
                handleInputChange={handleLegalAddressChange}
                value={legalAddress.country}
              />
            </div>
          );
          break;
        case "businessAddress":
          formElements.push(
            <div className={classes.address}>
              <label>Business Address</label>
              <InputElement
                name="line1"
                label="Line1"
                handleInputChange={handleBusinessAddressChange}
                value={businessAddress.line1}
              />
              <InputElement
                name="line2"
                label="Line2"
                handleInputChange={handleBusinessAddressChange}
                value={businessAddress.line2}
              />
              <InputElement
                name="city"
                label="City"
                handleInputChange={handleBusinessAddressChange}
                value={businessAddress.city}
              />
              <InputElement
                name="zip"
                label="zip"
                handleInputChange={handleBusinessAddressChange}
                value={businessAddress.zip}
              />
              <InputElement
                name="state"
                label="State"
                handleInputChange={handleBusinessAddressChange}
                value={businessAddress.state}
              />
              <InputElement
                name="country"
                label="Country"
                handleInputChange={handleBusinessAddressChange}
                value={businessAddress.country}
              />
            </div>
          );
          break;
      }
    });
    return formElements;
  };

  const handleProductsChange = (event) => {
    if (event.target.checked) {
      if (event.target.value === "accounting") setAccounts(true);
      if (event.target.value === "timesheet") setTimeSheet(true);
      if (event.target.value === "payroll") setPayroll(true);
      if (event.target.value === "payments") setPayments(true);
    } else {
      if (event.target.value === "accounting") setAccounts(false);
      if (event.target.value === "timesheet") setTimeSheet(false);
      if (event.target.value === "payroll") setPayroll(false);
      if (event.target.value === "payments") setPayments(false);
    }
    console.log(accounts + " " + timesheet + " " + payroll + " " + payments);
  };

  async function handleFormSubmission(event) {
    setIsLoading(true);
    let productsList = [];
    if (accounts) productsList.push("accounting");
    if (timesheet) productsList.push("timesheet");
    if (payroll) productsList.push("payroll");
    if (payments) productsList.push("payments");
    event.preventDefault();
    let request = {
      businessProfile: {
        companyName: companyName,
        legalName: legalName,
        businessAddress: {
          line1: businessAddress.line1,
          line2: businessAddress.line2,
          city: businessAddress.city,
          state: businessAddress.state,
          zip: businessAddress.zip,
          country: businessAddress.country,
        },
        legalAddress: {
          line1: legalAddress.line1,
          line2: legalAddress.line2,
          city: legalAddress.city,
          state: legalAddress.state,
          zip: legalAddress.zip,
          country: legalAddress.country,
        },
        taxID: taxId,
        email: email,
        website: website,
      },
      products: productsList,
    };
    setErrorMessage(null);  
  try {
    const response = await fetch("http://localhost:8080/subscribe", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if(data.status === "FAILURE") {
      throw new Error (JSON.stringify(data));
    }
    setSubscriptionResponse(data);

  } catch(error) {
    setSubscriptionResponse(JSON.stringify(error.message));
    setIsLoading(false);
  }
    
    setIsLoading(false);
  };


  return (
    <div>
      <h3>QuickBooks Business Profile Validator</h3>
      <div className={classes.response}>{subscriptionResponse && <p>{JSON.stringify(subscriptionResponse)}</p>}</div>
      <div>
        
        {isLoading && <p> Loading !!</p>}
        {!isLoading && isError && <p>{errorMessage}</p>}
        {!isLoading && <form onSubmit={handleFormSubmission}>
          {renderInputElements()}
          <label>Select products you want to subscribe to</label>
          <div>
            <input
              type="checkbox"
              id="accounting"
              name="accounting"
              value="accounting"
              onChange={handleProductsChange}
            />
            <label for="accounting"> Accounting</label>
            <input
              type="checkbox"
              id="timesheet"
              name="timesheet"
              value="timesheet"
              onChange={handleProductsChange}
            />
            <label for="timesheet"> Timesheet</label>
            <input
              type="checkbox"
              id="payroll"
              name="payroll"
              value="payroll"
              onChange={handleProductsChange}
            />
            <label for="payroll"> Payroll</label>
            <input
              type="checkbox"
              id="payments"
              name="payments"
              value="payments"
              onChange={handleProductsChange}
            />
            <label for="payments"> Payments</label>
          </div>
          <input type="submit" value="subscribe" disabled={isFormValid} />
        </form>}
      </div>
    </div>
  );
};

export default ValidatorForm;
