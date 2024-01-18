// import React, { useState,useEffect } from "react";
// import { Container} from "react-bootstrap";
// import { useParams } from "react-router-dom";
// import AdminDashboard from './Admin_Dashboard/AdminDashboard';
// import { StyledTableCell, StyledTableRow } from "../../AdminComponent/Style.jsx"
// import { Link } from "react-router-dom"
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import TablePagination from '@mui/material/TablePagination';
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { Button } from "@mui/material";
// import AdminStdtSearch from "./AdminStdtSearch.jsx";
// import swal from "sweetalert";
// import AdminDocumentSearch from "./AdminDocumentSearch.jsx";


// const theme = createTheme();


// const AdminUpdateStdDoc = () => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(2);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const { id } = useParams()
//   const userID = id;
//   const [formData, setFormData] = useState({
//     name: "",
//     fathersname: "",
//     mothersname: "",
//   });
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://sssutms.ac.in/apitest/admin/particularstudent?userID=${userID}`
//         );
//         const data = await response.json();
//         setFormData(data.Studentdata[0]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [userID]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch(`update api url-----------`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           userID,
//           ...formData,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         swal({
//           icon: "error",
//           title: "Error",
//           text: `Error: ${errorData.errors.join(", ")}`,
//         });
//         return;
//       }

//       const data = await response.json();
//       swal({
//         title: "Success",
//         text: "Data updated successfully!",
//         icon: "success",
//         buttons: "OK",
//       });
//     } catch (error) {
//       swal({
//         icon: "error",
//         title: "Error",
//         text: "Something went wrong!",
//       });
//     }
//   };


//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <AdminDashboard />
//         <Container className="shadow p-3 bg-body rounded" style={{ width: "110%", backgroundColor: "#00cdac", marginTop: "25%",marginLeft:"10%"  }}>

//           <TableContainer component={Paper} sx={{ minWidth: 50 }}>
//             <Table sx={{ minWidth: 50 }} aria-label="customized table">
//               <TableHead>
//                 <TableRow>
//                   <StyledTableCell align="left">Name</StyledTableCell>
//                   <StyledTableCell>Registration No</StyledTableCell>
//                   <StyledTableCell align="left">Mobile No.</StyledTableCell>
//                   <StyledTableCell align="center">Email</StyledTableCell>
//                   <StyledTableCell align="center">Edit</StyledTableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {formData.map((user, index) => (
//                   <StyledTableRow key={index}>
//                     {user ? (
//                       <>
//                         <StyledTableCell component="th" scope="row">
//                           {user.name}
//                         </StyledTableCell>
//                         <StyledTableCell align="right">{user.randomId}</StyledTableCell>
//                         <StyledTableCell align="right">{user.mobile}</StyledTableCell>
//                         <StyledTableCell align="right">{user.email}</StyledTableCell>
//                         <StyledTableCell align="right">  
//                          <Link
//                           to={{
//                             pathname: "/erpdashboard/student/updatedocuments",
//                             state: { formData }, // Pass the formData to the target component
//                           }}
//                         >
//                           <Button variant="contained">Update...</Button></Link></StyledTableCell>
//                       </>
//                     ) : (
//                       <p>No user data available</p>
//                     )}
//                   </StyledTableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <TablePagination
//             rowsPerPageOptions={[10, 25, 100]}
//             component="div"
//             count={formData.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />

//         </Container>
//       </ThemeProvider>
//     </>
//   );
// };

// export default AdminUpdateStdDoc;

import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import AdminDashboard from './Admin_Dashboard/AdminDashboard';
import { StyledTableCell, StyledTableRow } from "../../AdminComponent/Style.jsx"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import swal from "sweetalert";
import AdminDocumentSearch from "./AdminDocumentSearch.jsx";

const theme = createTheme();

const AdminUpdateStdDoc = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const { id } = useParams();
  const userID = id;
  const [formData, setFormData] = useState({
    name: "",
    fathersname: "",
    mothersname: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sssutms.ac.in/apitest/admin/particularstudent?userID=${userID}`
        );
        const data = await response.json();
        setFormData(data.Studentdata[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`update api url-----------`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID,
          ...formData,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        swal({
          icon: "error",
          title: "Error",
          text: `Error: ${errorData.errors.join(", ")}`,
        });
        return;
      }

      const data = await response.json();
      swal({
        title: "Success",
        text: "Data updated successfully!",
        icon: "success",
        buttons: "OK",
      });
    } catch (error) {
      swal({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AdminDashboard />
        <Container className="shadow p-3 bg-body rounded" style={{ width: "110%", backgroundColor: "#00cdac", marginTop: "10%",marginLeft:"10%" }}>
          <TableContainer component={Paper} sx={{ minWidth: 50 }}>
            <Table sx={{ minWidth: 50 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left"style={{backgroundColor:"#e6ecf0",color:"black",fontWeight:"bold"}}>Name</StyledTableCell>
                  <StyledTableCell style={{backgroundColor:"#e6ecf0",color:"black",fontWeight:"bold"}}>Registration No</StyledTableCell>
                  <StyledTableCell align="left" style={{backgroundColor:"#e6ecf0",color:"black",fontWeight:"bold"}}>Mobile No.</StyledTableCell>
                  <StyledTableCell align="center" style={{backgroundColor:"#e6ecf0",color:"black",fontWeight:"bold"}}>Email</StyledTableCell>
                  <StyledTableCell align="center" style={{backgroundColor:"#e6ecf0",color:"black",fontWeight:"bold"}}>Edit</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(formData) && formData.length > 0 ? (
                  formData.map((user, index) => (
                    <StyledTableRow key={index}>
                      <>
                        <StyledTableCell component="th" scope="row">
                          {user.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">{user.randomId}</StyledTableCell>
                        <StyledTableCell align="right">{user.mobile}</StyledTableCell>
                        <StyledTableCell align="right">{user.email}</StyledTableCell>
                        <StyledTableCell align="right">
                          <Link
                            to={{
                              pathname: "/erpdashboard/student/updatedocuments",
                              state: { formData }, // Pass the formData to the target component
                            }}
                          >
                            <Button variant="contained">Update...</Button>
                          </Link>
                        </StyledTableCell>
                      </>
                    </StyledTableRow>
                  ))
                ) : (
                  <StyledTableRow>
                    <StyledTableCell colSpan={5} align="center">
                      No user data available
                    </StyledTableCell>
                  </StyledTableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={formData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default AdminUpdateStdDoc;
