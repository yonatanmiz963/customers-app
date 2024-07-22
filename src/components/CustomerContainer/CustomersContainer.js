import * as React from 'react';
import { useEffect, useState } from 'react';
import classes from './CustomersContainer.module.css';
import { DataGrid } from '@mui/x-data-grid';
import { getCustomers } from '../../services/customersService';

const CustomersContainer = () => {
    const [customers, setCustomers] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const customers = await getCustomers();
            console.log('customers:', customers)
            setCustomers(customers)
        }
        getData();

    }, []);

    return (
        <div className={classes.container}>
            <DataTable rows={customers} />
        </div>
    );
};

export default CustomersContainer;

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 70
    },
    {
        field: 'firstName',
        headerName: 'First Name',
        width: 150
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 150
    },
    {
        field: 'date',
        headerName: 'Date Created',
        type: 'string',
        width: 150,
    },
    {
        field: 'phoneNumber',
        headerName: 'Phone',
        type: 'string',
        width: 150,
    },
    {
        field: 'bankAccount',
        headerName: 'Bank Account',
        type: 'string',
        width: 150,
    },
];

function DataTable({ rows }) {
    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection={false}

            />
        </div>
    );
}

