import eventStatuses from "../_config/eventStatuses";
import news from "../_store/_reducers/news";

const {
    NEWS_SUCCESSFULLY_LOADED,
    NEWS_NOT_FOUND,
    NEWS_LIST_LOADED,
    NEWS_LIST_NOT_FOUND,
    NEWS_ADDED,
    NEWS_ADDING_FAILED,
    NEWS_SUCCESFULLY_EDITED,
    NEWS_EDITING_FAILED,
    NEWS_SUCCESFULLY_DELETED,
    NEWS_DELETING_FAILED,
    AUTHENTICATION_ERROR
} = eventStatuses.news;

const initialState = {
    news: [],
    properNews: {},
    errorMessage: ""
};

describe("test news reducer", () => {
    const newsList = {
        message: "Pozytywna wiadomość z serwera!",
        data: [
            {
                _id: "1111-2222-3333-4444",
                category: "test-news",
                title: "Wpis testowy",
                content: "Zawartość wpisu testowego",
                author: "tester",
                date: "01-01-2020"
            }
        ]
    };

    const singleNews = {
        message: "Okuratna wiadomość z serwera!",
        data: {
            _id: "1111-2222-3333-4444",
            category: "test-news",
            title: "Wpis testowy",
            content: "Zawartość wpisu testowego",
            author: "tester",
            date: "01-01-2020"
        }
    };

    const message = "Ważna wiadomość z serwera!";

    it("should return the initial state", () => {
        expect(news(undefined, {})).toEqual(initialState);
    });

    it("should load news list", () => {
        const action = { type: NEWS_LIST_LOADED, data: newsList.data };
        const expectedState = {
            ...initialState,
            ...action.data,
            news: action.data.newsList
        };
        expect(news(initialState, action)).toEqual(expectedState);
    });

    it("should get message about news list's not finding", () => {
        const action = { type: NEWS_LIST_NOT_FOUND, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(news(initialState, action)).toEqual(expectedState);
    });

    it("should load a single news", () => {
        const action = {
            type: NEWS_SUCCESSFULLY_LOADED,
            data: singleNews.data
        };
        const expectedState = {
            ...initialState,
            ...action.data,
            properNews: action.data.singleNews
        };
        expect(news(initialState, action)).toEqual(expectedState);
    });

    it("should get message about single news' not finding", () => {
        const action = { type: NEWS_NOT_FOUND, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(news(initialState, action)).toEqual(expectedState);
    });

    it("should get message about adding news to database", () => {
        const action = { type: NEWS_ADDED, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(news(initialState, action)).toEqual(expectedState);
    });

    it("should get message about news' adding fail", () => {
        const action = { type: NEWS_ADDING_FAILED, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(news(initialState, action)).toEqual(expectedState);
    });

    it("should get message about modifying news in database", () => {
        const action = { type: NEWS_SUCCESFULLY_EDITED, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(news(initialState, action)).toEqual(expectedState);
    });

    it("should get message about news's modifying fail", () => {
        const action = { type: NEWS_EDITING_FAILED, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(news(initialState, action)).toEqual(expectedState);
    });

    it("should get message about removing news from database", () => {
        const action = { type: NEWS_SUCCESFULLY_DELETED, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(news(initialState, action)).toEqual(expectedState);
    });

    it("should get message about news' removing fail", () => {
        const action = { type: NEWS_DELETING_FAILED, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(news(initialState, action)).toEqual(expectedState);
    });

    it("should get message about a problem with authentication", () => {
        const action = { type: AUTHENTICATION_ERROR, data: message };
        const expectedState = {
            ...initialState,
            ...action.data,
            errorMessage: action.data.message
        };
        expect(news(initialState, action)).toEqual(expectedState);
    });
});