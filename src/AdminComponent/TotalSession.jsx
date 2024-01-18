import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import { StyledTableCell, StyledTableRow } from "../AdminComponent/Style";
import { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import axios from "axios";
import Sidebar from "./HodDashboard";
import DatePicker from "react-datepicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import swal from "sweetalert";

const theme = createTheme();

function TotalSession() {
  const [approvedStudents, setApprovedStudents] = useState([]);
  const [collegeAssignments, setCollegeAssignments] = useState({});
  const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
  const [assignedCollege, setAssignedCollege] = useState();
  const hodId = userData?.user;
  const branch1 = userData.Branch;

  const collegeOptions = {
    HOMEOPATHY: ["School of Homeopathy"],
    AYURVEDIC: ["School of Ayurveda and Siddha Studies"],
  };
  const handleCollegeChange = (studentId, collegeName) => {
    setCollegeAssignments((prevAssignments) => {
      // console.log(` yhi clg milega dekho ${studentId}: ${collegeName}`);
      setAssignedCollege(collegeName);
      return {
        ...prevAssignments,
        [studentId]: collegeName,
      };
    });
  };
  const handleClick = async (studentId) => {
    try {
      const response = await axios.put(`https://sssutms.ac.in/apitest/approve/`, {
        hodId: hodId,
        studentId,
        assignedCollege,
      });
      // console.log(response.data.message);
      swal({
        title: "Success",
        text: "Approved Successfully!",
        icon: "success",
        buttons: "OK",
      });

      const updatedResponse = await axios.get(
        `https://sssutms.ac.in/apitest/students/list`
      );
      setApprovedStudents(updatedResponse.data.students);

      // Reset college assignments
      const initialAssignments = {};
      updatedResponse.data.students.forEach((student) => {
        initialAssignments[student._id] = null;
      });
      setCollegeAssignments(initialAssignments);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchApprovedStudents = async () => {
    try {
      const response = await axios.get(
        `https://sssutms.ac.in/apitest/hod/students/branchtotallist?Branch=${branch1}`
      );

      setApprovedStudents(response.data.students);
      const initialAssignments = {};
      response.data.students.forEach((student) => {
        initialAssignments[student._id] = null;
      });
      setCollegeAssignments(initialAssignments);
    } catch (error) {
      console.error(error);
    }
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    fetchApprovedStudents();
  }, []);

  ////////////////////datepicker/////////////////
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Sidebar />
        <Container
          className="shadow p-3  bg-body rounded"
          style={{
            marginTop: "80px",
            width: "90%",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h4>Total Student In {branch1}</h4>
          <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: "440px" }} component={Paper}>
              <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 700 }} >
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left" >

                      <h5>
                        <b>S.No.</b>
                      </h5>
                    </StyledTableCell>

                    <StyledTableCell
                      align="left"
                      
                    >
                      <h5>
                        <b>Session</b>
                      </h5>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      
                    >
                      <h5>
                        <b>student Name</b>
                      </h5>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      
                    >
                      <h5>
                        <b>Student Email</b>
                      </h5>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      
                    >
                      <h5>
                        <b>Date of Birth</b>
                      </h5>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      
                    >
                      <h5>
                        <b>father's Name</b>
                      </h5>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      
                    >
                      <h5>
                        <b>Mother's Name</b>
                      </h5>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      
                    >
                      <h5>
                        <b>Mobile</b>
                      </h5>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      
                    >
                      <h5>
                        <b>Nationality</b>
                      </h5>
                    </StyledTableCell>

                    <StyledTableCell
                      align="left"
                      
                    >
                      <h5>
                        <b>Qualification</b>
                      </h5>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      
                    >
                      <h5>
                        <b>Qualification %</b>
                      </h5>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      
                    >
                      <h5>
                        <b>Course Type</b>
                      </h5>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      
                    >
                      <h5>
                        <b>Course Name</b>
                      </h5>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      
                    >
                      <h5>
                        <b>Course Branch</b>
                      </h5>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      
                    >
                      <h5>
                        <b>Assign College</b>
                      </h5>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      
                    >
                      <h5>
                        <b>Check Marksheet</b>
                      </h5>
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      
                    >
                      <h5>
                        <b>Edit</b>
                      </h5>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {approvedStudents.map((student, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell align="left">{index + 1}</StyledTableCell>
                      <StyledTableCell align="left">2023</StyledTableCell>
                      <StyledTableCell align="left">{student.name}</StyledTableCell>
                      <StyledTableCell align="left">{student.email}</StyledTableCell>
                      <StyledTableCell align="left">
                        <DatePicker
                          selected={selectedDate || new Date(student.dob)}
                          onChange={(date) => handleDateChange(date)}
                          dateFormat="dd/MM/yyyy"
                        />
                      </StyledTableCell>
                      <StyledTableCell align="left">{student.fathersname}</StyledTableCell>
                      <StyledTableCell align="left">{student.mothersname}</StyledTableCell>
                      <StyledTableCell align="left">{student.mobile}</StyledTableCell>
                      <StyledTableCell align="left">{student.domicile}</StyledTableCell>
                      <StyledTableCell align="left">
                        {student.qualification}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {`${student.qualificationPercentage}%`}
                      </StyledTableCell>

                      <StyledTableCell align="left">{student.courseType}</StyledTableCell>
                      <StyledTableCell align="left">{student.courseName}</StyledTableCell>
                      <StyledTableCell align="left">{student.courseBranch}</StyledTableCell>
                      <StyledTableCell align="center">
                        <Form.Select
                          style={{ height: "40px", width: "45vh" }}
                          value={collegeAssignments[student._id] || ""}
                          onChange={(e) =>
                            handleCollegeChange(student._id, e.target.value)
                          }
                        >
                          <option value="">Select College</option>
                          {collegeOptions[branch1]?.map((college, index) => (
                            <option key={index} value={college}>
                              {college}
                            </option>
                          ))}
                        </Form.Select>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {student && student.Documents?.marksheet12th && (
                          <a
                            href={student.Documents.marksheet12th}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Marksheet
                          </a>
                        )}
                      </StyledTableCell>

                      <StyledTableCell align="left" style={{ display: "flex" }}>
                        <Button
                          variant="success"
                          onClick={() => handleClick(student._id)}
                        >
                          Approve
                        </Button>
                        <Button variant="danger">Cancel</Button>{" "}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[25, 50, 100]}
              component="div"
              count={approvedStudents.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default TotalSession