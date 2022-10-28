import React, { useState } from 'react'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { useHistory } from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { v4 as uuidv4 } from 'uuid';


//react bootstrap table next
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { BinocularsFill } from 'react-bootstrap-icons';
import { Trash } from 'react-bootstrap-icons';
import { deletePharmaRecord,searchPharmaRecord } from '../../actions/Pharma';



const SearchPharma = ({ deletePharmaRecord,searchPharmaRecord }) => {

    const [tblSearchResults, setSearchResults] = useState([])
    const history = useHistory();

    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        SearchType:""
      });

      const {
        Name,
        Email
      } = formData;

      const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onChangeOfDDSearch = (e) => {
        e.preventDefault();
        var _ItemTypeSelect = document.getElementById('SearchType');
        formData.SearchType = _ItemTypeSelect.value
    }

    const searchRecords = async (e) => {
        e.preventDefault();
        
       
      
        if (formData.SearchType !== "--Select Type--") {

        }
        else {
            window.alert("Please select a search criteria !!!");
            return;
        }
 

        let _SEARCH_DATA = [];

        try {
            _SEARCH_DATA = await searchPharmaRecord(formData);
     
            if (_SEARCH_DATA !== []) {
                setSearchResults(_SEARCH_DATA.pharma)
            }
            else {
                setSearchResults([]);
            }

        }
        catch (err) {
            console.log(err)
            setSearchResults([]);
        }

    }

    function showRowDetailInfo(_id) {
        history.push(
            {
                pathname: '/Pharma',
                search: '?id=' + _id,
            })
    }

    const DeletePharmaRecord = async (e, id) => {
        e.preventDefault();

        const confirmBox = window.confirm(
            "Are you sure you want to delete this item?"
        )
        if (confirmBox === true) { } else { return; }

        await deletePharmaRecord(id);
        setSearchResults([]);

    }


    function CellFormatter(cell, row) {
        return (
            <div>
                <BinocularsFill onClick={() => showRowDetailInfo(row._id)} />
            </div>
        );
    }

    function CellFormatterDelete(cell, row) {
        return (
            <div>
                <Trash onClick={(e) => DeletePharmaRecord(e,row._id)} />
            </div>
        );
    }

    //http://allenfang.github.io/react-bootstrap-table/start.html
    //look at that tomorrow for regular bootstrap table
    //http://allenfang.github.io/react-bootstrap-table/start.html
    //npm install react-bootstrap-table --save
    const columns = [
        {
            dataField: '_id',
            text: '_id',
            sort: true
        },
        {
            dataField: 'Name',
            text: 'Name',
            sort: true
        },
        {
            dataField: 'Phone',
            text: 'Phone',
        },
        {
            dataField: 'Email',
            text: 'Email',
        },
        {
            dataField: '1',
            text: 'Edit',
            formatter: CellFormatter,
            style: { width: '10px' }
        },
        {
            dataField: '2',
            text: 'Delete',
            formatter: CellFormatterDelete,
            style: { width: '10px' }
        },
    ];

    //const unique_id = uuidv4();

    return (
        <div className="container">
            <br />
            <h1>
                Search Pharmaceutical Companies
            </h1>
            <br />
            <Card>
                <Card.Body>
                    <Card.Title>Enter Search Criteria</Card.Title>
                    <Form>


                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Control as="select" aria-label="Search Type"
                                    id="SearchType"
                                    name="SearchType"
                                    style={{ width: '200px' }}
                                    onChange={(e) => onChangeOfDDSearch(e)}
                                   
                                    >
                                    <option>--Select Type--</option>
                                    <option value="Email">Email</option>
                                    <option value="Name">Name</option>
                                    <option value="All">All</option>
                                </Form.Control>


                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" 
                                placeholder="Enter Email" 
                                id="Email" 
                                name="Email"
                                value={Email} onChange={e => onChange(e)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" 
                                 placeholder="Name" 
                                 id="Name"
                                 name="Name" 
                                 value={Name} onChange={e => onChange(e)}
                                 />
                            </Form.Group>
                        </Row>




                        <Button
                            variant="primary"
                            type="button"
                            onClick={(e) => searchRecords(e)}
                        >
                            Search Records
                        </Button>
                        <br></br>
                        <hr></hr>
                        <Row>
                            <Col sm={12}>
                                <h2>Search Results</h2> 

                                
                               <BootstrapTable
                                    striped
                                    hover
                                    keyField="_id"
                                    data={tblSearchResults}
                                    columns={columns}
                                    
                                 
                                    pagination={paginationFactory({
                                        showTotal: true,
                                        firstPageText: "First",
                                        lastPageText: "Last",
                                    })}
                                />

                             {/*
                            <BootstrapTable data={tblSearchResults} striped hover>
                                <TableHeaderColumn isKey dataField='_id'>ID</TableHeaderColumn>
                                <TableHeaderColumn dataField='Name'>Name</TableHeaderColumn>
                                <TableHeaderColumn dataField='Phone'>Phone</TableHeaderColumn>
                                <TableHeaderColumn dataField='Email'>Email</TableHeaderColumn>
                                <TableHeaderColumn dataField='Phone'>Phone</TableHeaderColumn>
                            </BootstrapTable>
    */}
                            </Col>
                        </Row>
                    </Form>

                </Card.Body>
            </Card>

            <br></br>
            <hr></hr>



        </div>
    );
}



const mapStateToProps = state => ({

})


export default connect(mapStateToProps, { deletePharmaRecord,searchPharmaRecord })(SearchPharma)