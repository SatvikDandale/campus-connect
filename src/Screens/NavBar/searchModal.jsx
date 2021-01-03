import { ToggleButton } from "@material-ui/lab";
import React from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import SearchBar from "material-ui-search-bar";
import { search } from "../../Services/searchService";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import "./searchModal.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
    backgroundColor: theme.palette.background.paper,
  },
  results: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  inline: {
    display: "inline",
  },
}));

function SearchModal(props) {
  const classes = useStyles();

  const [selected, setSelected] = React.useState({
    UserName: true,
    Name: false,
    CollegeName: false,
  });
  const [results, setResults] = React.useState([]);
  const [value, setValue] = React.useState("");

  const changeResults = (results) => {
    let resultsArray = results.map((result) => {
      console.log(result);
      return {
        firstName: result.firstName && result.firstName.s,
        lastName: result.lastName && result.lastName.s,
        intro: result.intro && result.intro.s,
        userName: result.userName && result.userName.s,
        email: result.email && result.email.s,
        profilePhotoURL: result.profilePhotoURL && result.profilePhotoURL.s,
      };
    });
    return resultsArray;
  };

  const handleSearchSubmit = async (query) => {
    console.log(query);
    let results = [];
    try {
      Object.keys(selected).forEach((filter) => {
        if (selected[filter]) results.push(search(query, filter));
      });
      results = await Promise.all(results);
      let finalResults = [];
      for (let filteredResults of results)
        finalResults = [...finalResults, ...changeResults(filteredResults)];
      setResults(finalResults);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (filterName) => {
    let temp = { ...selected };
    temp[filterName] = !temp[filterName];
    if (temp.UserName || temp.Name || temp.CollegeName) {
      setSelected(temp);
    }
  };

  const listItem = (person, isLast = false, props) => (
    <React.Fragment>
      <ListItem
        button
        onClick={() => props.history.push(`/user/${person.userName}`)}
      >
        <ListItemAvatar>
          <Avatar alt={person.userName} src={person.profilePhotoURL} />
        </ListItemAvatar>
        <ListItemText
          primary={person.firstName + " " + person.lastName}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {"@" + person.userName + " "}
              </Typography>
              {person.intro}
            </React.Fragment>
          }
        />
      </ListItem>
      {!isLast && <Divider variant="inset" component="li" />}
    </React.Fragment>
  );

  const reset = () => {
    setSelected({
      UserName: true,
      Name: false,
      CollegeName: false,
    });
    setResults([]);
    setValue("");
  };

  return (
    <Modal
      show={props.show}
      onHide={() => {
        reset();
        props.handleClose();
      }}
      size="lg"
      dialogClassName="search__modal"
      centered
    >
      <Modal.Header closeButton>Search for Someone</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Filter your search</Form.Label>
            <Row>
              <Col>
                <ToggleButton
                  value="UserName"
                  selected={selected.UserName}
                  onChange={() => handleChange("UserName")}
                >
                  User Name
                </ToggleButton>
              </Col>
              <Col>
                <ToggleButton
                  value="Name"
                  selected={selected.Name}
                  onChange={() => handleChange("Name")}
                >
                  Name
                </ToggleButton>
              </Col>
              <Col>
                <ToggleButton
                  value="CollegeName"
                  selected={selected.CollegeName}
                  onChange={() => handleChange("CollegeName")}
                >
                  College Name
                </ToggleButton>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <SearchBar
              value={value}
              onChange={(newValue) => handleSearchSubmit(newValue)}
              onRequestSearch={(query) => handleSearchSubmit(query)}
            />
          </Form.Group>
          {results.length > 0 && (
            <Form.Group className={classes.results}>
              <List className={classes.root}>
                {results.map((person, index) => {
                  return listItem(person, index === results.length - 1, props);
                })}
              </List>
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default SearchModal;
