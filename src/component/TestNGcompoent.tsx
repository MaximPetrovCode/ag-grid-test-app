import {AgGridReact} from "ag-grid-react";
import * as React from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


interface IProps {
    name?: string
}

interface IState {
    columnDefs: IColumnDefs[],
    rowData: IRowData[]
}

interface IColumnDefs {
    headerName?: string,
    field?: string
}

interface IRowData {
    make?: string,
    model?: string,
    price?: number
}

export class TestNGcompoent extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            columnDefs: [
                {
                    // tslint:disable-next-line:object-literal-sort-keys
                    headerName: "Make", field: "make"
                },
                {
                    // tslint:disable-next-line:object-literal-sort-keys
                    headerName: "Model", field: "model"
                },
                {
                    // tslint:disable-next-line:object-literal-sort-keys
                    headerName: "Price", field: "price"
                }
            ],
            rowData: [
                {
                    make: "Toyota", model: "Celica", price: 35000
                },
                {
                    make: "Ford", model: "Mondeo", price: 32000
                },
                {
                    make: "Porsche", model: "Boxter", price: 72000
                }
            ]
        }
    }

    public render() {
        return (
            <div style={{ height: '150px', width: '100%' }} className="ag-theme-balham">
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                />
            </div>
        );
    }
}