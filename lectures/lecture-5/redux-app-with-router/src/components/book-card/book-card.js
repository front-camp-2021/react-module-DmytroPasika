// import React, { useCallback } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { Card, Header, Icon, Button, Divider } from "semantic-ui-react";
import PropTypes from "prop-types";
import { CHANGE_FAVORITE_STATUS } from "../../features/books/actions/actions";
import { useHistory } from "react-router-dom";

export function BookCard({ card }) {
  const dispatch = useDispatch();
  const history = useHistory();
  // const handleFavoriteBtnClick = useCallback(
  //   () => dispatch({ type: CHANGE_FAVORITE_STATUS, payload: card.id }),
  //   [dispatch, card.id]
  // );
  // const handleRedirect = useCallback(
  //   () => history.push(`/book/${card.id}`),
  //   [history, card.id]
  // );

  return (
    <Card
      style={{
        padding: "10px",
        marginRight: "25px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header>
          {card.title}
          {card.isFavorite ? <Icon name="star" /> : null}
        </Header>
        by {card.author}
      </div>
      <Divider />
      <span style={{ marginBottom: "10px" }}>{card.description}</span>
      <Button
        style={{ marginBottom: "10px" }}
        content={`${card.isFavorite ? "Remove from" : "Add to"} favorites`}
        color={card.isFavorite ? "orange" : "twitter"}
        icon="book"
        onClick={() =>
          dispatch({ type: CHANGE_FAVORITE_STATUS, payload: card.id })
        }
      />
      <Button
        content="Visit book page"
        color="transparent"
        onClick={() => history.push(`/${card.id}`)}
      />
    </Card>
  );
}

BookCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  isFavorite: PropTypes.bool,
  description: PropTypes.string,
};
