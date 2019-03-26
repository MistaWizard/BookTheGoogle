import axios from "axios";

export default {
    getThemBooks: (theTitle) => {
        return axios.get("/api/google", { params: { theTitle: "title" + theTitle } });
    },
    getTheSaved: () => {
        return axios.get("/api/books");
    },
    deleteIt: (id) => {
        return axios.delete("/api/books/" + id);
    },
    saveIt: (bookDeets) => {
        return axios.post("/api/books", bookDeets);
    }
};