import React from 'react';
import { useTable, useRowSelect, usePagination } from 'react-table';
import Button from '@material-ui/core/Button';

import './table.css';
import { Checkbox } from '../Checkbox/Checkbox';

export default function DataTable(props) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        page,
        state,
        prepareRow,
    } = useTable(
        {
            columns: props.col,
            data : props.tableData
        },
        usePagination,
        useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                {
                    id: 'selection',
                    Cell: ({ row }) => {
                  return  <Checkbox {...row.getToggleRowSelectedProps() } />}
                },
                ...columns
            ])
        }
    )
    const { pageIndex } = state;
    return (
        <>
            <table  {...getTableProps()} >
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))
                                }
                            </tr>
                        ))
                    }

                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} >
                                    {
                                        row.cells.map((cell) => {
                                            return <td key={cell.value}{...cell.getCellProps}>
                                                {cell.render('Cell')}
                                            </td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="pagination">
                <div className="pageNo">
                    Page{' '} {pageIndex + 1} of {pageOptions.length}{' '}
                </div>
                <div>
                    <Button variant="contained" onClick={() => previousPage()} disabled={!canPreviousPage}>
                        Previous
                    </Button>{' '}
                    <Button variant="contained" onClick={() => nextPage()} disabled={!canNextPage}>
                        Next
                    </Button>{' '}
                </div>
            </div>
        </>
    )
}