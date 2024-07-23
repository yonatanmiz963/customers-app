import * as React from 'react';
import { useEffect, useState } from 'react';
import classes from './CustomersContainer.module.css';
import { DataGrid } from '@mui/x-data-grid';
import { getCustomers } from '../../services/customersService';

const CustomersContainer = () => {
    const [customers, setCustomers] = useState(null)
    const [error, setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const customersData = await getCustomers();
                console.log('customers:', customersData);
                setCustomers(customersData);
            } catch (err) {
                console.error('Failed to fetch customers:', err);
                setError('Failed to load customers. Please try again later.');
            }
        };
        getData();

    }, []);

    if (error) {
        return <div className={classes.error}>{error}</div>;
    }

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
        <div style={{ height: 635, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection={false}

            />
        </div>
    );
}

