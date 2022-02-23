import React, {useState} from "react";
import {Button, Divider, Dropdown, Grid, GridRow, Header, Icon, Label, Menu, Table} from "semantic-ui-react";
import DatePicker from "react-datepicker";

export default function Testing() {
    const clients = [
        {
            key: 'Jenny Hess',
            text: 'Jenny Hess',
            value: 'Jenny Hess'
        },
        {
            key: 'Elliot Fu',
            text: 'Elliot Fu',
            value: 'Elliot Fu'
        },
        {
            key: 'Stevie Feliciano',
            text: 'Stevie Feliciano',
            value: 'Stevie Feliciano'
        },
        {
            key: 'Christian',
            text: 'Christian',
            value: 'Christian'
        }
    ]

    const countryOptions = [
        { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
        { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
        { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
        { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
        { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
        { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
        { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
        { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
        { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
        { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
        { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
        { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
        { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
        { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
        { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
        { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
        { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
        { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
        { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
        { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
        { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
        { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
    ]

    const [startDate, setStartDate] = useState(new Date());
    
    return (
        <>
            <Header content='Testing page' size='large' />
            <Divider />
            <Header size='medium' content='Dropdown' />
            <Dropdown
                clearable
                placeholder='Select Client'
                selection
                options={clients}
            />
            <Divider />
            <Header size='medium' content='Searchable dropdown' />
            <Dropdown
                placeholder='Select Country'
                search
                selection
                clearable
                options={countryOptions}
                style={{border: 'solid 2px purple', width: '50%'}}
            />
            <Divider />
            <Header content='Datepicker' size='medium' />
            <DatePicker
                placeholderText='Select Date'
                dateFormat='d MMMM, yyyy'
                selected={startDate}
                onChange={(date) => setStartDate(date!)}
            />
            <p style={{marginTop: '10px'}}>{startDate.toString()}</p>
            <Divider />
            <Header content='Grid floated right' size='medium' />
            <Grid>
                <Grid.Column>
                    <Button content='Left Button' positive />
                </Grid.Column>
                <Grid.Column floated='right'>
                    <Button content='Right Button' positive />
                </Grid.Column>
            </Grid>
            <Header content='Loading button' size='medium' />
            <Button content='Loading' primary loading={true} />
            <Divider />
            <Header content='Tables' size='medium' />
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Label ribbon>First</Label>
                        </Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Notes</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>No Name Specified</Table.Cell>
                        <Table.Cell>Unknown</Table.Cell>
                        <Table.Cell negative>None</Table.Cell>
                    </Table.Row>
                    <Table.Row positive>
                        <Table.Cell>Jimmy</Table.Cell>
                        <Table.Cell>
                            <Icon name='checkmark' />
                            Approved
                        </Table.Cell>
                        <Table.Cell>None</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jamie</Table.Cell>
                        <Table.Cell>Unknown</Table.Cell>
                        <Table.Cell positive>
                            <Icon name='close' />
                            Requires call
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row negative>
                        <Table.Cell>Jill</Table.Cell>
                        <Table.Cell>Unknown</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Divider />
            <Header content='Icons' size='medium' />
            <GridRow>
                <Icon name='angle left' size='big' />
                <Icon name='angle right' size='big' />
                <Icon name='home' size='big' />
                <Icon name='redo alternate' size='big' />
                <Icon name='calendar alternate outline' size='big' />
            </GridRow>
            <GridRow>
                <Icon name='edit outline' size='big' />
                <Icon name='save outline' size='big' />
                <Icon name='folder outline' size='big' />
                <Icon name='pound sign' size='big' />
                <Icon name='paper plane outline' size='big' />
            </GridRow>
            <Header content='Circular Buttons with Icons' size='medium' />
            <div style={{marginTop: '5px'}}>
                <Button icon='check' circular positive />
                <Button icon='bars' circular primary />
                <Button icon='times' circular negative />
            </div>
        </>
    )
}