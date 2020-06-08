import axios from "axios";

export default { 
    // Gets all the plants
    getPlants: function() {
        return axios.get("api/plants");
    },
    // Gets an individual plant by id
    getPlant: function(id) {
        return axios.get("/api/plants/" + id);
    }
};