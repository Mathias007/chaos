import address from "../../../_config/address";
import eventStatuses from "../../../_config/eventStatuses";

const { API_URL, ARTICLES, SINGLE, LIST, ADD, EDIT, DELETE } = address;
const {
    STATUS_OK,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = eventStatuses;

export const getAllArticles = dispatchArticlesListLoaded => {
    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    };

    fetch(`${API_URL}${ARTICLES}/${LIST}`, options)
        .then(res => {
            return res.json();
        })
        .then(articles => {
            return dispatchArticlesListLoaded(articles);
        });
};

export const getSingleArticle = (
    allocationKey,
    dispatchSingleArticleLoaded,
    dispatchArticleAuthError,
    dispatchArticleNotFound
) => {
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ allocationKey })
    };

    fetch(`${API_URL}${ARTICLES}/${SINGLE}`, options)
        .then(response => {
            if (response.status < INTERNAL_ERROR) {
                return response.json().then(data => {
                    return { status: response.status, data };
                });
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then(response => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchSingleArticleLoaded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchArticleAuthError(response);
            } else {
                return dispatchArticleNotFound(response);
            }
        });
};

export const addArticle = (
    allocationKey,
    title,
    content,
    author,
    date,
    dispatchArticleAdded,
    dispatchArticleAuthError,
    dispatchArticleAddingFailed
  ) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ allocationKey, title, content, author, date })
    };
  
    fetch(`${API_URL}${ARTICLES}/${ADD}`, options)
      .then(response => {
        if (response.status < INTERNAL_ERROR) {
          return response.json().then(data => {
            return { status: response.status, data };
          });
        } else {
          console.log("Server Error!");
          throw response;
        }
      })
      .then(response => {
        console.log(response);
        if (response.status === STATUS_OK) {
          dispatchArticleAdded(response);
        } else if (
          response.status === STATUS_FORBIDDEN ||
          response.status === STATUS_UNAUTHORIZED
        ) {
          return dispatchArticleAuthError(response);
        } else {
          return dispatchArticleAddingFailed(response);
        }
      });
  };

export const editArticle = (
    id,
    allocationKey,
    title,
    content,
    author,
    lastModified,
    dispatchArticleEdited,
    dispatchArticleAuthError,
    dispatchArticleEditingFailed
) => {
    const options = {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            id,
            allocationKey,
            title,
            content,
            author,
            lastModified
        })
    };

    fetch(`${API_URL}${ARTICLES}/${EDIT}`, options)
        .then(response => {
            if (response.status < INTERNAL_ERROR) {
                return response.json().then(data => {
                    return { status: response.status, data };
                });
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then(response => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchArticleEdited(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchArticleAuthError(response);
            } else {
                return dispatchArticleEditingFailed(response);
            }
        });
};

export const deleteArticle = (
    id,
    dispatchArticleDeleted,
    dispatchArticleAuthError,
    dispatchArticleDeletingFailed
) => {
    const options = {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            id
        })
    };

    fetch(`${API_URL}${ARTICLES}/${DELETE}`, options)
        .then(response => {
            if (response.status < INTERNAL_ERROR) {
                return response.json().then(data => {
                    return { status: response.status, data };
                });
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then(response => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchArticleDeleted(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchArticleAuthError(response);
            } else {
                return dispatchArticleDeletingFailed(response);
            }
        });
};
