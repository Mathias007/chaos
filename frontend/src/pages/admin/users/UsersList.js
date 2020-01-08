import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

import navigationTitles from "../../../_config/navigationTitles";
import { users } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";

import { Button, Divider, Icon, Layout, PageHeader, Table } from "antd";

const componentStyles = {
    content: {
        background: "#fff",
        padding: 24,
        margin: 0,
        minHeight: 280
    },
    layout: { padding: "0 24px 24px" }
};

const componentClassnames = {
    content: "admin-users-content",
    layout: "admin-users-layout",
    table: "admin-users-table"
};

const { ADMIN_USERS, LIST } = navigationTitles;

class UsersList extends Component {
    state = {
        columnsStructure: {
            col_number: {
                title: "LP",
                dataIndex: "number",
                align: "center"
            },
            col_username: {
                title: "Nazwa użytkownika",
                dataIndex: "username",
                align: "center"
            },
            col_email: {
                title: "Adres e-mail",
                dataIndex: "email",
                align: "left"
            },
            col_role: {
                title: "Rola",
                dataIndex: "role",
                align: "center"
            },
            col_date: { title: "Data rejestracji", dataIndex: "date" },
            col_options: { title: "Opcje", dataIndex: "options" }
        },
        tableColumns: [],
        tableData: []
    };

    componentDidMount() {
        this.props.showUsersList();
        console.log(this.props.usersList);
    }

    renderUsers() {
        let { usersList } = this.props;

        if (usersList) {
            return usersList.map((singleUser, index) => {
                const { _id, name, email, role, date } = singleUser;

                return {
                    number: index,
                    // key: _id,
                    username: name,
                    email,
                    role,
                    date,
                    options: _id
                };
            });
        }
    }

    render() {
        const { Content } = Layout;

        let { tableColumns, tableData } = this.state;

        tableData = this.renderUsers();

        const {
            col_number,
            col_username,
            col_email,
            col_role,
            col_date,
            col_options
        } = this.state.columnsStructure;

        tableColumns = [
            {
                title: col_number.title,
                dataIndex: col_number.dataIndex,
                align: col_number.align
            },
            {
                title: col_username.title,
                dataIndex: col_username.dataIndex,
                align: col_username.align
            },
            {
                title: col_email.title,
                dataIndex: col_email.dataIndex,
                align: col_email.align
            },
            {
                title: col_role.title,
                dataIndex: col_role.dataIndex,
                align: col_role.align
            },
            {
                title: col_date.title,
                dataIndex: col_date.dataIndex,
                align: col_date.align,
                render: date => moment(date).format("LLLL")
            },
            {
                title: col_options.title,
                dataIndex: col_options.dataIndex,
                align: col_options.align,
                render: _id => (
                    <>
                        <Divider type="vertical" />
                        <Link to={`users/edit/${_id}`}>
                            <Icon type="edit" />
                        </Link>
                        <Divider type="vertical" />
                        <Link to={`users/remove/${_id}`}>
                            <Icon type="delete" />
                        </Link>
                    </>
                )
            }
        ];

        return (
            <Layout
                className={componentClassnames.layout}
                style={componentStyles.layout}
            >
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_USERS}
                    page={LIST}
                />
                <Content
                    className={componentClassnames.content}
                    style={componentStyles.content}
                >
                    <div>
                        <PageHeader
                            title="Lista użytkowników"
                            subTitle="Panel administracyjny"
                            extra={
                                <Button
                                    icon="user-add"
                                    type="primary"
                                    className="add-user-button"
                                >
                                    <Link to="users/add">
                                        {" "}
                                        Dodaj użytkownika
                                    </Link>
                                </Button>
                            }
                        />
                    </div>

                    <Table
                        className={componentClassnames.table}
                        dataSource={tableData}
                        columns={tableColumns}
                    />
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        usersList: state.users.usersList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showUsersList: () => dispatch(users.showUsersList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
