import React, { useState, useEffect } from "react";
import { Container, Button, Form, FormControl } from "react-bootstrap";
import { Grid } from "@mui/material";
import { State, City } from "country-state-city";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Table from "react-bootstrap/Table";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DatePicker from "react-datepicker";
import swal from "sweetalert";
import { useLocation } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom'
import AdminDashboard from "./Admin_Dashboard/AdminDashboard";


const theme = createTheme();



function  AdminUpdate_Documents() {
  


    const [selectedDocQualification, setSelectedDocQualification] = useState();
    const [fileUrls, setFileUrls] = useState({
        applicantPhoto: '',
        applicantSignature: '',
        aadharCard: '',
        marksheet10th: '',
        marksheet12th: '',
        undergraduateCertificate: '',
        postgraduateCertificate: '',
        domicileCertificate: '',
        transferCertificate: '',
        incomeCertificate: '',
        migrationCertificate: '',
        otherCertificate: '',
      });
    
    
      const [errors7, setErrors7] = useState({
        applicantPhoto: '',
        applicantSignature: '',
        aadharCard: '',
        marksheet10th: '',
        marksheet12th: '',
        undergraduateCertificate: '',
        postgraduateCertificate: '',
        domicileCertificate: '',
        transferCertificate: '',
        incomeCertificate: '',
        migrationCertificate: '',
        otherCertificate: '',
      });
    
    
      const handleFileChange = async (fieldName, e) => {
        const file = e.target.files[0];
    
        if (!file) return;
    
        try {
    
          const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
          if (!allowedTypes.includes(file.type)) {
            setErrors7((prevErrors) => ({
              ...prevErrors,
              [fieldName]: 'Please choose a JPEG JPG or PNG file.',
            }));
            return;
          }
    
          const formData4 = new FormData();
          formData4.append('file', file);
          formData4.append('upload_preset', 'upload');
    
          const cloudinaryResponse = await fetch(
            `https://api.cloudinary.com/v1_1/dszawxz7y/image/upload`,
            {
              method: 'POST',
              body: formData4,
            }
          );
    
          const cloudinaryData = await cloudinaryResponse.json();
          const fileUrl = cloudinaryData.secure_url;
    
          setFileUrls((prevFileUrls) => ({
            ...prevFileUrls,
            [fieldName]: fileUrl,
          }));
      
          setErrors7((prevErrors) => ({
            ...prevErrors,
            [fieldName]: '',
          }));
        }
        catch (error) {
        }
      };
    

  
    return (
        <div>
            <AdminDashboard />
            <ThemeProvider theme={theme}>
             {/* /////////////////////////////////////////////DOCUMENTS & PHOTOS/////////////////////////////////////////// */}
          <Container
              className="shadow p-3 bg-body rounded"
              style={{
                width: "100%",
                backgroundColor: "#e8e5d1",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#00cdac",
                  width: "100%",
                  borderRadius: "10px",
                }}
              >
                <h5 style={{ padding: "10px", margin: 0, marginTop: "-3px", color: "#fff" }}>
                  Documents & Signature
                </h5>
              </div>
              <br></br>

              <Grid container>
                <Grid item xs={12}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h5>
                        Applicant's Photo <span style={{ color: "red" }}> *</span>
                      </h5>
                    </div>

                    <div style={{ display: "flex" }}>
                      <input
                        type="file"
                        placeholder="choose"
                      
                      ></input>
                      <h6 style={{ backgroundColor: "#ffe6e6" }}>Maximum 1000KB</h6>
                    </div>
                  </div>
                  {errors7.applicantPhoto && (
                    <div style={{ color: 'red' }}>{errors7.applicantPhoto}</div>
                  )}
                  <hr></hr>

                </Grid>
                <Grid item xs={12}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h5>
                        Applicant's Signature{" "}
                        <span style={{ color: "red" }}> *</span>
                      </h5>
                    </div>
                    <div style={{ display: "flex" }}>
                      <input
                        type="file"
                        placeholder="choose"
                   
                      ></input>
                      <h6 style={{ backgroundColor: " #ffe6e6" }}>
                        Maximum 1000KB
                      </h6>
                    </div>
                  </div>
                  {errors7.applicantSignature && (
                    <div style={{ color: 'red' }}>{errors7.applicantSignature}</div>
                  )}
                  <hr></hr>
                </Grid>

                <Grid item xs={12}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h5>
                        Aadhar Card <span style={{ color: "red" }}> *</span>
                      </h5>
                    </div>
                    <div style={{ display: "flex" }}>
                      <input
                        type="file"
                        placeholder="choose"
                      
                      ></input>
                      <h6 style={{ backgroundColor: " #ffe6e6" }}>
                        Maximum 1000KB
                      </h6>
                    </div>
                  </div>
                  {errors7.aadharCard && (
                    <div style={{ color: 'red' }}>{errors7.aadharCard}</div>
                  )}
                  <hr></hr>
                </Grid>
                <Grid item xs={12}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h5>
                        Marksheet of 10th Examination <span style={{ color: "red" }}> *</span>
                      </h5>
                    </div>

                    <div style={{ display: "flex" }}>
                      <input
                        type="file"
                        placeholder="choose"
                      
                      ></input>
                      <h6 style={{ backgroundColor: "#ffe6e6" }}>Maximum 1000KB</h6>
                    </div>
                  </div>
                  {errors7.marksheet10th && (
                    <div style={{ color: 'red' }}>{errors7.marksheet10th}</div>
                  )}
                  <hr></hr>

                </Grid>

                <Grid item xs={12}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h5>Marksheet of 12th Examination<span style={{ color: "red" }}> *</span></h5>
                    </div>
                    <div style={{ display: "flex" }}>
                      <input
                        type="file"
                        placeholder="choose"
                    
                      ></input>
                      <h6 style={{ backgroundColor: " #ffe6e6" }}>
                        Maximum 1000KB
                      </h6>
                    </div>
                  </div>
                  {errors7.marksheet12th && (
                    <div style={{ color: 'red' }}>{errors7.marksheet12th}</div>
                  )}

                  <hr></hr>
                </Grid>

                <Grid item xs={12}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h5>Domicile Certificate<span style={{ color: "red" }}> *</span></h5>
                    </div>
                    <div style={{ display: "flex" }}>
                      <input
                        type="file"
                        placeholder="choose"
                        
                      ></input>
                      <h6 style={{ backgroundColor: " #ffe6e6" }}>
                        Maximum 1000KB
                      </h6>
                    </div>
                  </div>
                  {errors7.domicileCertificate && (
                    <div style={{ color: 'red' }}>{errors7.domicileCertificate}</div>
                  )}

                  <hr></hr>
                </Grid>
                <Grid item xs={12}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h5>Transfer Certificate<span style={{ color: "red" }}> *</span></h5>
                    </div>
                    <div style={{ display: "flex" }}>
                      <input
                        type="file"
                        placeholder="choose"
                  
                      ></input>
                      <h6 style={{ backgroundColor: " #ffe6e6" }}>
                        Maximum 1000KB
                      </h6>
                    </div>
                  </div>
                  {errors7.transferCertificate && (
                    <div style={{ color: 'red' }}>{errors7.transferCertificate}</div>
                  )}

                  <hr></hr>
                </Grid>
                <Grid item xs={12}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h5>Income Certificate<span style={{ color: "red" }}> *</span></h5>
                    </div>
                    <div style={{ display: "flex" }}>
                      <input
                        type="file"
                        placeholder="choose"
                   
                      />
                      <h6 style={{ backgroundColor: " #ffe6e6" }}>
                        Maximum 1000KB
                      </h6>
                    </div>
                  </div>
                  

                  <hr></hr>
                </Grid>

                <Grid item xs={12}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h5>Migration Certificate<span style={{ color: "red" }}> *</span></h5>
                    </div>
                    <div style={{ display: "flex" }}>
                      <input
                        type="file"
                        placeholder="choose"
                        
                      ></input>
                      <h6 style={{ backgroundColor: " #ffe6e6" }}>
                        Maximum 1000KB
                      </h6>
                    </div>
                  </div>
               

                  <hr></hr>
                </Grid>

                <Grid item xs={12}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                      <h5>Other Certificate</h5>
                    </div>
                    <div style={{ display: "flex" }}>
                      <input
                        type="file"
                        placeholder="choose"
                       
                      ></input>
                      <h6 style={{ backgroundColor: " #ffe6e6" }}>
                        Maximum 1000KB
                      </h6>
                    </div>
                  </div>

                  <hr></hr>
                </Grid>
              </Grid>
            </Container>
            </ThemeProvider>
        </div>
    )
}

export default AdminUpdate_Documents