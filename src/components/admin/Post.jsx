import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import withPlants from "components/plants/WithPlants";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
    },
    postTitle: {
        fontSize: '16px',
        textAlign: 'left',
    },
    postText: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'baseline',
        fontSize: '12px',
        textAlign: 'left',
        marginBottom: theme.spacing(2),
    },
}));


class Post extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        this.props.fetchPlants();

    }

    render() {
        // const classes = useStyles();
        const {plants} = this.props;
        console.log(plants);

        return (


            <React.Fragment>
                <Container maxWidth="md" component="main">
                    <Paper>
                        <TableContainer>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell align="left">CategoryID</TableCell>
                                        <TableCell align="left">Plant name</TableCell>
                                        <TableCell align="left">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {plants.map((plant,index) => {
                                        return (
                                            <TableRow key={plant.id}>
                                                <TableCell component="th" scope="row">
                                                    {plant.id}
                                                </TableCell>

                                                <TableCell align="left">{plant.category}</TableCell>

                                                <TableCell align="left">
                                                    <Link
                                                        color="textPrimary"
                                                        href={'/post/' + plant.id}
                                                        // className={classes.link}
                                                    >
                                                        {plant.name}
                                                    </Link>
                                                </TableCell>


                                                <TableCell align="left">
                                                    <Link
                                                        color="textPrimary"
                                                        href={'/admin/edit/' + plant.id}
                                                        // className={classes.link}
                                                    >
                                                        <EditIcon></EditIcon>
                                                    </Link>
                                                    <Link
                                                        color="textPrimary"
                                                        href={'/admin/delete/' + plant.id}
                                                        // className={classes.link}
                                                    >
                                                        <DeleteForeverIcon></DeleteForeverIcon>
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    <TableRow>
                                        <TableCell colSpan={4} align="right">
                                            <Button
                                                href={'/admin/create'}
                                                variant="contained"
                                                color="primary"
                                            >
                                                New Post
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Container>
            </React.Fragment>


        );
    }


};
export default withPlants(Post);
